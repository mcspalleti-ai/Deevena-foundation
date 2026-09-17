DEEVENA FOUNDATION VADDEPALLY — UPDATED PORTABLE STATIC WEBSITE

This package is designed as a plain static website.

UPDATES IN THIS VERSION
1. Donate page now shows real bank transfer details (Account Name, Account
   Number, IFSC Code, Bank) with one-tap Copy buttons, instead of the old
   "Phase-1 demo, do not enter details" placeholder. Please double-check the
   Account Name shown ("DEEVENA FOUNDATION VADDEPALLY") matches your bank
   passbook/statement exactly before publishing — it was assumed to match
   the foundation name.
2. A language toggle ("EN | తె") has been added to the navigation on every
   page. It translates the site's headings, buttons and body text into
   Telugu using a dictionary in js/site.js, and remembers the visitor's
   choice (browser-local, via localStorage) as they move between pages.
3. Added js/site.js, a small shared script that also fixes the mobile
   hamburger menu (the previous package referenced a js/script.js file that
   was not included in the zip, so the menu did not open on phones) and
   powers the "Copy" buttons and suggested-amount buttons on the Donate
   page. Make sure the js/ folder is uploaded alongside the HTML files.

Works on common static hosting/build platforms:
- Cloudflare Workers / Pages static assets
- Netlify
- Vercel static hosting
- GitHub Pages
- Apache / Nginx / cPanel hosting
- Local browser/static web servers

Important implementation details:
1. Keep all HTML files together at the site root. index.html is the home page.
2. Foundation photos used by the pages are embedded directly in HTML, so no /images/gallery path is required.
3. The Home hero uses the supplied community-support photo as an embedded full background image.
4. YouTube and Instagram links are included on the Home hero.
5. The Gallery Edit Info controls stay hidden until Enable Edit Access is used and the exact authorized email is entered: bushipakavenkataiah7@gmail.com
6. Gallery edits are saved in that browser's localStorage. This is browser-side editing, not server-side database storage or secure account authentication.
7. Internal page links are relative, making the package portable between hosts.
8. No framework/build command is required. Upload the extracted files as static files.

Donation amounts retained:
₹500, ₹1,000, ₹2,500, ₹5,000, ₹10,000, ₹25,000, ₹50,000, ₹1,00,000


FINAL PORTABLE BUILD NOTES
- Home hero uses the supplied community-support photograph as an embedded background image (no /images/gallery dependency).
- YouTube: https://youtu.be/3m4n_S5VefI?si=Odx8eE-TXof_R8KH
- Instagram: https://www.instagram.com/reel/C1dpkuMpfSa/?stkn=bG5sYXVxbXhhcDQ4
- Internal page links are relative for portability across static hosts.
- Gallery photos are embedded to avoid Cloudflare/static asset 404 issues.
- Home “FROM THE FIELD” photos use full-image contain layout to prevent cropping.
- Header Donate is a high-contrast gold button on desktop and mobile.
- Responsive layout is included for desktop, tablet and mobile.
- This is a static HTML build; it can be opened locally and deployed to common static hosting.
