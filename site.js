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
      btn.textContent = (lang === 'te') ? (DICT['Copied'] + ' \u2713') : 'Copied \u2713';
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
  var DICT = {"DEEVENA FOUNDATION VADDEPALLY": "దీవెన ఫౌండేషన్ వడ్డేపల్లి", "DEEVENA FOUNDATION": "దీవెన ఫౌండేషన్", "VADDEPALLY": "వడ్డేపల్లి", "Compassion • Service • Community": "కరుణ • సేవ • సమాజం", "Home": "హోమ్", "About Us": "మా గురించి", "Programs": "కార్యక్రమాలు", "Gallery": "గ్యాలరీ", "Impact Stories": "ప్రభావ కథనాలు", "Contact": "సంప్రదించండి", "Donate": "విరాళం ఇవ్వండి", "Explore": "అన్వేషించండి", "Working with compassion and commitment to support people, families and communities.": "ప్రజలకు, కుటుంబాలకు మరియు సమాజాలకు తోడ్పాటు అందించేందుకు కరుణతో, నిబద్ధతతో పనిచేస్తున్నాం.", "H No: 2-10,": "ఇంటి నంబర్: 2-10,", "Village: Vaddepally,": "గ్రామం: వడ్డేపల్లి,", "Mandal: Nampally,": "మండలం: నాంపల్లి,", "District: Nalgonda, Telangana": "జిల్లా: నల్గొండ, తెలంగాణ", "Pincode: 508373": "పిన్‌కోడ్: 508373", "© 2026 Deevena Foundation Vaddepally. All rights reserved.": "© 2026 దీవెన ఫౌండేషన్ వడ్డేపల్లి. సర్వహక్కులు రిక్షితం.", "SERVICE • SUPPORT • COMMUNITY": "సేవ • తోడ్పాటు • సమాజం", "Serving communities with compassion and practical action.": "కరుణతో, ఆచరణాత్మక చర్యలతో సమాజాలకు సేవ చేస్తున్నాం.", "DEEVENA FOUNDATION VADDEPALLY works with communities to respond to local needs through essential support, outreach and collective service.": "దీవెన ఫౌండేషన్ వడ్డేపల్లి స్థానిక అవసరాలను తీర్చేందుకు అవసరమైన సహాయం, సంప్రదింపులు మరియు సామూహిక సేవ ద్వారా సమాజాలతో కలిసి పనిచేస్తుంది.", "Support Our Mission": "మా లక్ష్యానికి తోడ్పడండి", "Explore Our Programs": "మా కార్యక్రమాలను చూడండి", "What our photographs show": "మా ఫోటోలు చూపించేది", "People helping people": "ప్రజలకు ప్రజలు సహాయం", "Our recent activities include distribution of essential supplies, support for families and community outreach involving women, children and local residents.": "మా ఇటీవలి కార్యకలాపాల్లో అవసరమైన వస్తువుల పంపిణీ, కుటుంబాలకు తోడ్పాటు మరియు మహిళలు, పిల్లలు, స్థానిక నివాసితులతో కూడిన సామాజిక సంప్రదింపులు ఉన్నాయి.", "YouTube": "యూట్యూబ్", "Instagram": "ఇన్‌స్టాగ్రామ్", "WHO WE ARE": "మేమెవరం", "Local service with people at the centre": "ప్రజలను కేంద్రంగా చేసుకున్న స్థానిక సేవ", "DEEVENA FOUNDATION VADDEPALLY brings volunteers and community members together to respond to practical needs with care, dignity and responsibility.": "దీవెన ఫౌండేషన్ వడ్డేపల్లి వాలంటీర్లను, సమాజ సభ్యులను ఏకం చేసి, శ్రద్ధ, గౌరవం మరియు బాధ్యతతో ఆచరణాత్మక అవసరాలకు స్పందిస్తుంది.", "Essential support": "అవసరమైన తోడ్పాటు", "Helping families with useful food and household essentials when support is needed.": "అవసరమైనప్పుడు కుటుంబాలకు ఆహారం మరియు గృహావసర వస్తువులతో సహాయం చేయడం.", "Community outreach": "సామాజిక సంప్రదింపు", "Reaching people in local neighbourhoods and village communities.": "స్థానిక పరిసరాలు మరియు గ్రామ సమాజాల్లోని ప్రజలను చేరుకోవడం.", "Collective service": "సామూహిక సేవ", "Working together with volunteers and supporters to turn concern into action.": "శ్రద్ధను చర్యగా మార్చేందుకు వాలంటీర్లు, మద్దతుదారులతో కలిసి పనిచేయడం.", "Learn More About Us": "మా గురించి మరింత తెలుసుకోండి", "OUR FOCUS": "మా దృష్టి", "Where our current work is visible": "మా ప్రస్తుత పని ఎక్కడ కనిపిస్తుంది", "The photographs from our recent activities highlight three practical areas of community service.": "మా ఇటీవలి కార్యకలాపాల ఫోటోలు సామాజిక సేవలోని మూడు ఆచరణాత్మక అంశాలను తెలియజేస్తాయి.", "Essential Support": "అవసరమైన తోడ్పాటు", "Distribution of food and other essential supplies to families and individuals who need practical assistance.": "ఆచరణాత్మక సహాయం అవసరమైన కుటుంబాలకు, వ్యక్తులకు ఆహారం మరియు ఇతర అవసరమైన వస్తువుల పంపిణీ.", "Family & Community Outreach": "కుటుంబం & సామాజిక సంప్రదింపు", "Visiting local communities, meeting families and supporting people through direct community engagement.": "స్థానిక సమాజాలను సందర్శించడం, కుటుంబాలను కలవడం మరియు ప్రత్యక్ష సామాజిక భాగస్వామ్యం ద్వారా ప్రజలకు తోడ్పాటు అందించడం.", "Inclusive Community Service": "అందరినీ కలుపుకున్న సామాజిక సేవ", "Creating opportunities for women, children, elders and local residents to receive support and participate in community activities.": "మహిళలు, పిల్లలు, వృద్ధులు మరియు స్థానిక నివాసితులు తోడ్పాటు పొందేందుకు, సామాజిక కార్యక్రమాల్లో పాల్గొనేందుకు అవకాశాలు కల్పించడం.", "FROM THE FIELD": "క్షేత్ర స్థాయి నుండి", "Real moments of service": "సేవ యొక్క నిజమైన క్షణాలు", "Our gallery documents people coming together to distribute essentials and support families across local communities.": "స్థానిక సమాజాల్లో అవసరమైన వస్తువులు పంపిణీ చేయడానికి, కుటుంబాలకు తోడ్పాటు అందించడానికి ప్రజలు కలిసి వచ్చిన క్షణాలను మా గ్యాలరీ నమోదు చేస్తుంది.", "View Impact Stories": "ప్రభావ కథనాలు చూడండి", "View Full Gallery": "పూర్తి గ్యాలరీ చూడండి", "OUR VALUES": "మా విలువలు", "Service with purpose": "ఉద్దేశ్యంతో కూడిన సేవ", "We believe community service is strongest when it is practical, respectful and built around people.": "సామాజిక సేవ ఆచరణాత్మకంగా, గౌరవప్రదంగా మరియు ప్రజల చుట్టూ నిర్మించబడినప్పుడే బలంగా ఉంటుందని మేము నమ్ముతాం.", "Compassion": "కరుణ", "Dignity": "గౌరవం", "Collective action": "సామూహిక చర్య", "Be part of the journey.": "ఈ ప్రయాణంలో భాగం కండి.", "Your support can help us continue practical community service and outreach.": "మీ తోడ్పాటు ఆచరణాత్మక సామాజిక సేవను, సంప్రదింపులను కొనసాగించేందుకు సహాయపడుతుంది.", "Support the Foundation": "ఫౌండేషన్‌కు తోడ్పడండి", "ABOUT THE FOUNDATION": "ఫౌండేషన్ గురించి", "People, purpose and community.": "ప్రజలు, ఉద్దేశ్యం మరియు సమాజం.", "Learn more about DEEVENA FOUNDATION VADDEPALLY and the values behind our work.": "దీవెన ఫౌండేషన్ వడ్డేపల్లి గురించి మరియు మా పని వెనుక ఉన్న విలువల గురించి మరింత తెలుసుకోండి.", "Our story": "మా కథ", "DEEVENA FOUNDATION VADDEPALLY is built around a simple belief: communities become stronger when people come together with compassion, responsibility and a willingness to serve.": "దీవెన ఫౌండేషన్ వడ్డేపల్లి ఒక సాధారణ నమ్మకంపై ఆధారపడి ఉంది: ప్రజలు కరుణతో, బాధ్యతతో మరియు సేవా సంసిద్ధతతో కలిసినప్పుడు సమాజాలు బలపడతాయి.", "Our work is focused on practical support, opportunity and empowerment. This page can be expanded with the foundation's official history, registration details, leadership information and mission statement.": "మా పని ఆచరణాత్మక తోడ్పాటు, అవకాశం మరియు సాధికారతపై కేంద్రీకృతమై ఉంది. ఫౌండేషన్ యొక్క అధికారిక చరిత్ర, నమోదు వివరాలు, నాయకత్వ సమాచారం మరియు లక్ష్య ప్రకటనతో ఈ పేజీని విస్తరించవచ్చు.", "“Small acts of service can become lasting opportunities when a community works together.”": "“ఒక సమాజం కలిసి పనిచేసినప్పుడు చిన్న సేవా చర్యలు కూడా శాశ్వత అవకాశాలుగా మారగలవు.”", "What guides us": "మాకు మార్గదర్శకత్వం వహించేవి", "We put people and dignity at the centre of our service.": "మా సేవలో ప్రజలను మరియు గౌరవాన్ని కేంద్రంగా ఉంచుతాం.", "Responsibility": "బాధ్యత", "We aim to work transparently and responsibly with the community.": "సమాజంతో పారదర్శకంగా, బాధ్యతాయుతంగా పనిచేయాలని మేము లక్ష్యంగా పెట్టుకున్నాం.", "Empowerment": "సాధికారత", "We seek to create opportunities that help people move forward with confidence.": "ప్రజలు నమ్మకంతో ముందుకు సాగేందుకు సహాయపడే అవకాశాలను సృష్టించాలని మేము కోరుకుంటాం.", "OUR PROGRAMS": "మా కార్యక్రమాలు", "Practical support for real community needs.": "నిజమైన సామాజిక అవసరాలకు ఆచరణాత్మక తోడ్పాటు.", "Our recent activities show a strong focus on direct community support, essential supplies and local outreach.": "మా ఇటీవలి కార్యకలాపాలు ప్రత్యక్ష సామాజిక తోడ్పాటు, అవసరమైన వస్తువులు మరియు స్థానిక సంప్రదింపులపై బలమైన దృష్టిని చూపిస్తాయి.", "Food & Essential Supplies": "ఆహారం & అవసరమైన వస్తువులు", "Organising and distributing useful food and household essentials to families and individuals who require support.": "తోడ్పాటు అవసరమైన కుటుంబాలకు, వ్యక్తులకు ఉపయోగకరమైన ఆహారం మరియు గృహావసర వస్తువులను ఏర్పాటు చేసి పంపిణీ చేయడం.", "Essential grocery and household support": "అవసరమైన కిరాణా మరియు గృహ సామగ్రి తోడ్పాటు", "Direct distribution to families": "కుటుంబాలకు ప్రత్యక్ష పంపిణీ", "Community-based assistance": "సమాజ ఆధారిత సహాయం", "Connecting with families and local residents through direct visits, community meetings and support activities.": "ప్రత్యక్ష సందర్శనలు, సామాజిక సమావేశాలు మరియు తోడ్పాటు కార్యక్రమాల ద్వారా కుటుంబాలతో, స్థానిక నివాసితులతో సంబంధం ఏర్పరచుకోవడం.", "Local neighbourhood outreach": "స్థానిక పరిసర సంప్రదింపు", "Family-focused assistance": "కుటుంబ కేంద్రీకృత సహాయం", "Community participation": "సామాజిక భాగస్వామ్యం", "Volunteer-Led Service": "వాలంటీర్ల నేతృత్వంలోని సేవ", "Bringing volunteers, supporters and community members together to deliver practical help with dignity and care.": "గౌరవం మరియు శ్రద్ధతో ఆచరణాత్మక సహాయం అందించేందుకు వాలంటీర్లను, మద్దతుదారులను, సమాజ సభ్యులను ఏకం చేయడం.", "Volunteer participation": "వాలంటీర్ భాగస్వామ్యం", "Collective community action": "సామూహిక సామాజిక చర్య", "Respectful, people-first service": "గౌరవప్రదమైన, ప్రజలకు ప్రాధాన్యతనిచ్చే సేవ", "HOW WE SERVE": "మేము ఎలా సేవ చేస్తాం", "From identifying a need to delivering support": "అవసరాన్ని గుర్తించడం నుండి తోడ్పాటు అందించడం వరకు", "Our field photographs show a simple, community-centred approach: understand the need, organise useful support and reach people directly.": "మా క్షేత్ర ఫోటోలు ఒక సరళమైన, సమాజ కేంద్రీకృత విధానాన్ని చూపిస్తాయి: అవసరాన్ని అర్థం చేసుకోవడం, ఉపయోగకరమైన తోడ్పాటును ఏర్పాటు చేయడం మరియు ప్రజలను నేరుగా చేరుకోవడం.", "Listen": "వినండి", "Understand the local situation and the people who need support.": "స్థానిక పరిస్థితిని మరియు తోడ్పాటు అవసరమైన ప్రజలను అర్థం చేసుకోవడం.", "Organise": "ఏర్పాటు చేయండి", "Bring volunteers and resources together around a practical response.": "ఆచరణాత్మక స్పందన కోసం వాలంటీర్లను, వనరులను ఏకం చేయడం.", "Deliver": "అందించండి", "Provide support directly and respectfully within the community.": "సమాజంలో ప్రత్యక్షంగా, గౌరవప్రదంగా తోడ్పాటు అందించడం.", "INCLUSIVE OUTREACH": "అందరినీ కలుపుకున్న సంప్రదింపు", "Support that reaches the community": "సమాజాన్ని చేరే తోడ్పాటు", "The photographs include women, children, elders, families and groups of local residents participating in support activities. We aim to keep our service inclusive and community-focused.": "ఈ ఫోటోల్లో మహిళలు, పిల్లలు, వృద్ధులు, కుటుంబాలు మరియు స్థానిక నివాసితుల బృందాలు తోడ్పాటు కార్యక్రమాల్లో పాల్గొనడం కనిపిస్తుంది. మా సేవను అందరినీ కలుపుకున్నదిగా, సమాజ కేంద్రీకృతంగా ఉంచాలని మేము లక్ష్యంగా పెట్టుకున్నాం.", "See Our Activities": "మా కార్యకలాపాలను చూడండి", "IMPACT STORIES": "ప్రభావ కథనాలు", "Real moments of community service.": "సామాజిక సేవ యొక్క నిజమైన క్షణాలు.", "These stories are based on the activities visible in our recent photographs. Exact dates, locations and beneficiary details can be added when officially verified.": "ఈ కథనాలు మా ఇటీవలి ఫోటోల్లో కనిపించే కార్యకలాపాల ఆధారంగా ఉన్నాయి. ఖచ్చితమైన తేదీలు, ప్రదేశాలు మరియు లబ్ధిదారుల వివరాలు అధికారికంగా ధృవీకరించిన తర్వాత చేర్చవచ్చు.", "ESSENTIAL SUPPORT": "అవసరమైన తోడ్పాటు", "Essential supplies reaching families": "కుటుంబాలకు చేరుతున్న అవసరమైన వస్తువులు", "Our photographs document volunteers and community members handing over food and essential supplies directly to families. The activity reflects a practical approach to helping people with immediate everyday needs.": "మా ఫోటోలు వాలంటీర్లు, సమాజ సభ్యులు కుటుంబాలకు ప్రత్యక్షంగా ఆహారం మరియు అవసరమైన వస్తువులు అందజేయడాన్ని నమోదు చేస్తాయి. ఈ కార్యకలాపం ప్రజల తక్షణ రోజువారీ అవసరాలకు సహాయం చేసే ఆచరణాత్మక విధానాన్ని ప్రతిబింబిస్తుంది.", "What the photo shows:": "ఫోటో చూపించేది:", "direct distribution, community participation and household support.": "ప్రత్యక్ష పంపిణీ, సామాజిక భాగస్వామ్యం మరియు గృహ తోడ్పాటు.", "Community support for women and families": "మహిళలు మరియు కుటుంబాలకు సామాజిక తోడ్పాటు", "Several photographs show women, children and local residents taking part in support activities. These moments highlight the importance of reaching families directly and making community service inclusive.": "అనేక ఫోటోల్లో మహిళలు, పిల్లలు మరియు స్థానిక నివాసితులు తోడ్పాటు కార్యక్రమాల్లో పాల్గొనడం కనిపిస్తుంది. ఈ క్షణాలు కుటుంబాలను ప్రత్యక్షంగా చేరుకోవడం, సామాజిక సేవను అందరినీ కలుపుకున్నదిగా చేయడం యొక్క ప్రాముఖ్యతను తెలియజేస్తాయి.", "women and residents together with volunteers during a support activity.": "తోడ్పాటు కార్యక్రమంలో మహిళలు, నివాసితులు వాలంటీర్లతో కలిసి.", "COLLECTIVE ACTION": "సామూహిక చర్య", "People coming together to serve": "సేవ చేయడానికి కలిసి వచ్చిన ప్రజలు", "Groups of volunteers and supporters are shown preparing, presenting and distributing essential items. The photographs demonstrate how collective participation can turn available resources into practical community assistance.": "వాలంటీర్లు, మద్దతుదారుల బృందాలు అవసరమైన వస్తువులను సిద్ధం చేయడం, అందించడం మరియు పంపిణీ చేయడం ఈ ఫోటోల్లో కనిపిస్తుంది. అందుబాటులో ఉన్న వనరులను ఆచరణాత్మక సామాజిక సహాయంగా సామూహిక భాగస్వామ్యం ఎలా మార్చగలదో ఈ ఫోటోలు తెలియజేస్తాయి.", "organised supplies, volunteers and community members working together.": "వ్యవస్థీకృత వస్తువులు, వాలంటీర్లు మరియు సమాజ సభ్యులు కలిసి పనిచేయడం.", "OUR GALLERY": "మా గ్యాలరీ", "More moments from the field": "క్షేత్రం నుండి మరిన్ని క్షణాలు", "Explore the complete collection of recent DEEVENA FOUNDATION VADDEPALLY activities.": "దీవెన ఫౌండేషన్ వడ్డేపల్లి యొక్క ఇటీవలి కార్యకలాపాల పూర్తి సేకరణను చూడండి.", "View Gallery": "గ్యాలరీ చూడండి", "GET IN TOUCH": "మమ్మల్ని సంప్రదించండి", "We would be happy to hear from you.": "మీ నుండి వినడానికి మేము సంతోషిస్తాం.", "You can reach the foundation using the official contact details below.": "క్రింద ఇచ్చిన అధికారిక సంప్రదింపు వివరాల ద్వారా మీరు ఫౌండేషన్‌ను సంప్రదించవచ్చు.", "CONTACT DETAILS": "సంప్రదింపు వివరాలు", "Connect with the foundation": "ఫౌండేషన్‌తో సంప్రదించండి", "For enquiries, community support and foundation activities, please contact us using the details below.": "విచారణలు, సామాజిక తోడ్పాటు మరియు ఫౌండేషన్ కార్యకలాపాల కోసం దయచేసి క్రింది వివరాల ద్వారా మమ్మల్ని సంప్రదించండి.", "Address": "చిరునామా", "Phone": "ఫోన్", "Email": "ఇమెయిల్", "Send a message": "సందేశం పంపండి", "This Phase-1 form is a frontend demo. Messages are not stored yet. A database/admin system can be connected in Phase 2.": "ఈ ఫారమ్ ప్రస్తుతం డెమో దశలో ఉంది. సందేశాలు ఇంకా నిల్వ చేయబడవు. తదుపరి దశలో డేటాబేస్/అడ్మిన్ వ్యవస్థను అనుసంధానించవచ్చు.", "Name": "పేరు", "Your name": "మీ పేరు", "Phone / Email": "ఫోన్ / ఇమెయిల్", "Your contact details": "మీ సంప్రదింపు వివరాలు", "Message": "సందేశం", "How can we help?": "మేము ఎలా సహాయం చేయగలం?", "Send Message": "సందేశం పంపండి", "SUPPORT OUR MISSION": "మా లక్ష్యానికి తోడ్పడండి", "Your support can create opportunity.": "మీ తోడ్పాటు అవకాశాన్ని సృష్టించగలదు.", "Every contribution should be handled with transparency and a clear purpose.": "ప్రతి విరాళాన్ని పారదర్శకతతో, స్పష్టమైన ఉద్దేశ్యంతో నిర్వహించాలి.", "DONATE": "విరాళం", "Help us serve the community": "సమాజానికి సేవ చేయడంలో మాకు సహాయం చేయండి", "You can support DEEVENA FOUNDATION VADDEPALLY directly through a bank transfer using the account details on this page.": "ఈ పేజీలో ఉన్న బ్యాంక్ ఖాతా వివరాల ద్వారా మీరు దీవెన ఫౌండేషన్ వడ్డేపల్లికి నేరుగా తోడ్పాటు అందించవచ్చు.", "Donate directly by bank transfer.": "బ్యాంక్ బదిలీ ద్వారా నేరుగా విరాళం ఇవ్వండి.", "Use the account details opposite with NEFT, IMPS, RTGS, or the \"transfer to bank account\" option in UPI apps such as Google Pay, PhonePe or Paytm. Please double-check the details with the foundation before sending a large amount.": "పక్కన ఉన్న ఖాతా వివరాలను NEFT, IMPS, RTGS లేదా Google Pay, PhonePe, Paytm వంటి UPI యాప్‌లలోని \"transfer to bank account\" ఆప్షన్‌తో ఉపయోగించండి. పెద్ద మొత్తం పంపే ముందు వివరాలను ఫౌండేషన్‌తో ఒకసారి నిర్ధారించుకోండి.", "Goes directly to the foundation": "నేరుగా ఫౌండేషన్‌కు చేరుతుంది", "Funds are received in the foundation's official bank account.": "నిధులు ఫౌండేషన్ యొక్క అధికారిక బ్యాంక్ ఖాతాలో జమ అవుతాయి.", "Any amount welcome": "ఏ మొత్తమైనా స్వాగతం", "Choose a suggested amount opposite or transfer any amount that works for you.": "పక్కన సూచించిన మొత్తాన్ని ఎంచుకోండి లేదా మీకు అనువైన ఏ మొత్తాన్నైనా బదిలీ చేయండి.", "Acknowledgement on request": "అభ్యర్థనపై ధృవీకరణ", "Share your transaction details with us and we will confirm your donation.": "మీ లావాదేవీ వివరాలను మాతో పంచుకోండి, మేము మీ విరాళాన్ని ధృవీకరిస్తాం.", "Bank transfer details": "బ్యాంక్ బదిలీ వివరాలు", "Suggested amount (optional — tap one, or transfer any amount):": "సూచించిన మొత్తం (ఐచ్ఛికం — ఒకదాన్ని ఎంచుకోండి, లేదా ఏ మొత్తాన్నైనా బదిలీ చేయండి):", "Account Name": "ఖాతా పేరు", "Account Number": "ఖాతా నంబర్", "IFSC Code": "IFSC కోడ్", "Bank": "బ్యాంక్", "Copy": "కాపీ", "Copied": "కాపీ అయ్యింది", "After transferring, please share your name and the transaction reference at bushipakavenkataiah7@gmail.com or 8374528947 so we can confirm and thank you.": "బదిలీ చేసిన తర్వాత, దయచేసి మీ పేరు మరియు లావాదేవీ రిఫరెన్స్‌ను bushipakavenkataiah7@gmail.com లేదా 8374528947కి పంపండి — మేము దాన్ని ధృవీకరించి, మీకు కృతజ్ఞతలు తెలుపుతాం.", "Community in pictures.": "చిత్రాలలో సమాజం.", "A visual record of community support, essential-supplies distribution and local outreach activities.": "సామాజిక తోడ్పాటు, అవసరమైన వస్తువుల పంపిణీ మరియు స్థానిక సంప్రదింపు కార్యక్రమాల దృశ్య రికార్డు.", "Editing is locked": "ఎడిటింగ్ లాక్ చేయబడింది", "Enable Edit Access": "ఎడిట్ యాక్సెస్ ప్రారంభించండి", "Gallery information": "గ్యాలరీ సమాచారం", "Click Edit Info under any photo to add or change its title and activity details. Changes are saved in this browser.": "ఏదైనా ఫోటో కింద ఉన్న Edit Info పై క్లిక్ చేసి దాని శీర్షిక మరియు వివరాలను జోడించండి లేదా మార్చండి. మార్పులు ఈ బ్రౌజర్‌లో సేవ్ చేయబడతాయి.", "Edit Gallery Info": "గ్యాలరీ సమాచారాన్ని సవరించండి", "Community support activity": "సామాజిక తోడ్పాటు కార్యక్రమం", "Edit Info": "సమాచారాన్ని సవరించండి", "Photo title": "ఫోటో శీర్షిక", "Description / activity details": "వివరణ / కార్యక్రమ వివరాలు", "Add details about this activity...": "ఈ కార్యక్రమం గురించి వివరాలు జోడించండి...", "Save": "సేవ్ చేయండి", "Cancel": "రద్దు చేయండి"};
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

  function applyLanguage(lang){
    var toTelugu = (lang === 'te');
    walkAndTranslate(document.body, toTelugu);
    document.documentElement.setAttribute('lang', toTelugu ? 'te' : 'en');
    document.querySelectorAll('.lang-toggle').forEach(function(b){
      b.textContent = toTelugu ? '\u0c24\u0c46 | EN' : 'EN | \u0c24\u0c46';
      b.setAttribute('aria-label', toTelugu ? 'Switch to English' : 'Switch to Telugu');
    });
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
