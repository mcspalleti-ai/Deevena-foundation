(function(){
  'use strict';

  /* ---------- Mobile nav toggle ---------- */
  function initMenu(){
    var toggles = document.querySelectorAll('.menu, .menu-toggle');
    var nav = document.querySelector('.nav-links');
    toggles.forEach(function(t){
      t.addEventListener('click', function(){
        if(nav) nav.classList.toggle('open');
      });
    });
  }

  /* ---------- Donation "suggested amount" buttons ---------- */
  function initAmounts(){
    var buttons = document.querySelectorAll('.amount');
    buttons.forEach(function(btn){
      btn.addEventListener('click', function(){
        buttons.forEach(function(b){ b.classList.remove('selected'); });
        btn.classList.add('selected');
      });
    });
  }

  /* ---------- Copy to clipboard (bank details) ---------- */
  function fallbackCopy(text){
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }

  window.copyToClipboard = function(text, btn){
    function done(){
      if(!btn) return;
      var original = btn.getAttribute('data-orig-label') || btn.textContent;
      btn.setAttribute('data-orig-label', original);
      var lang = (localStorage.getItem(LANG_KEY) === 'te') ? 'te' : 'en';
      btn.textContent = (lang === 'te') ? (DICT['Copied'] + ' ✓') : 'Copied ✓';
      btn.classList.add('copied');
      setTimeout(function(){
        btn.textContent = (lang === 'te') ? DICT['Copy'] : original;
        btn.classList.remove('copied');
      }, 1600);
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(function(){ fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  };

  /* ---------- Telugu translation ---------- */
  var DICT = {
    'DEEVENA FOUNDATION VADDEPALLY': 'దీవెన ఫౌండేషన్ వడ్డేపల్లి',
    'DEEVENA FOUNDATION': 'దీవెన ఫౌండేషన్',
    'VADDEPALLY': 'వడ్డేపల్లి',
    'Compassion • Service • Community': 'దయ • సేవ • సంఘం',
    'SERVICE • SUPPORT • COMMUNITY': 'సేవ • మద్దతు • సంఘం',
    'People helping people': 'ప్రజలు ప్రజలకు సహాయం చేస్తున్నారు',
    'What our photographs show': 'మా ఫోటాలు చూప些什么',
    'Support Our Mission': 'మా మిషన్ని మద్దతు ఇవ్వండి',
    'Explore Our Programs': 'మా కార్యక్రమాలను పరిశీలించండి',
    'Home': 'హోమ్',
    'About': 'విషయాలు',
    'Programs': 'కార్యక్రమాలు',
    'Gallery': 'గ్యాలరీ',
    'Stories': 'కథలు',
    'Contact': 'సంప్రదింపులు',
    'Donate': 'దానం చేయండి',
    'Copied': 'కాపీ అయింది',
    'Copy': 'కాపీ',
    'Donate Now': 'ఇప్పుడే దానం చేయండి',
    'Join Us': 'మాతో చేరండి',
    'Volunteer': 'స్వచ్ఛంద సేవకుడు',
    'Get in touch': 'స్ప్రందించండి',
    'Read more': 'మరింత చదవండి',
    'View all': 'అన్నింటినీ చూడండి'
  };
  var LANG_KEY = 'deevena_lang';
  var originalText = new WeakMap();
  var originalPlaceholder = new WeakMap();

  function walkAndTranslate(root, toTelugu){
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        var p = node.parentNode;
        if(!p || !p.tagName) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if(tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    var nodes = [];
    while((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function(n){
      if(!originalText.has(n)) originalText.set(n, n.nodeValue);
      if(toTelugu){
        var raw = originalText.get(n);
        var trimmed = raw.trim();
        var translated = DICT[trimmed];
        if(translated){
          var lead = raw.match(/^\s*/)[0];
          var trail = raw.match(/\s*$/)[0];
          n.nodeValue = lead + translated + trail;
        }
      } else {
        n.nodeValue = originalText.get(n);
      }
    });

    root.querySelectorAll('[placeholder]').forEach(function(el){
      if(!originalPlaceholder.has(el)) originalPlaceholder.set(el, el.getAttribute('placeholder'));
      var orig = originalPlaceholder.get(el);
      if(toTelugu && DICT[orig]) el.setAttribute('placeholder', DICT[orig]);
      else el.setAttribute('placeholder', orig);
    });
  }

  function bindLanguageToggles(){
    document.querySelectorAll('.lang-toggle').forEach(function(button){
      if(button.getAttribute('data-lang-bound') === 'true') return;
      button.setAttribute('data-lang-bound', 'true');
      button.removeAttribute('onclick');
      button.addEventListener('click', function(event){
        event.preventDefault();
        if(window.toggleSiteLanguage) window.toggleSiteLanguage();
      });
    });
  }

  function applyLanguage(lang){
    var toTelugu = (lang === 'te');
    if(document.body) walkAndTranslate(document.body, toTelugu);
    document.documentElement.setAttribute('lang', toTelugu ? 'te' : 'en');
    document.querySelectorAll('.lang-toggle').forEach(function(b){
      b.textContent = toTelugu ? 'తె | EN' : 'EN | తె';
      b.setAttribute('aria-label', toTelugu ? 'Switch to English' : 'Switch to Telugu');
    });
    bindLanguageToggles();
    try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
  }

  window.toggleSiteLanguage = function(){
    var current = 'en';
    try{ current = (localStorage.getItem(LANG_KEY) === 'te') ? 'te' : 'en'; }catch(e){}
    applyLanguage(current === 'te' ? 'en' : 'te');
  };

  function init(){
    initMenu();
    initAmounts();
    bindLanguageToggles();
    var saved = null;
    try{ saved = localStorage.getItem(LANG_KEY); }catch(e){}
    if(saved === 'te') applyLanguage('te');
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
