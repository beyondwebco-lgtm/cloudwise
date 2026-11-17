# CloudWize website (static HTML/CSS/JS)
No build step. Upload the folder contents to the web root (e.g. Namecheap cPanel > public_html).
## Before launch
1. Replace `https://www.example.com` in each page's canonical tag, `robots.txt` and `sitemap.xml` with your domain.
2. Replace [your email], [your phone], [your address], LinkedIn placeholders in the footer and contact page.
3. Have Privacy and Terms reviewed by a lawyer.
## Contact form
It shows "not connected" until configured. Create a form at a service such as Formspree or Formspark, then set `data-endpoint="YOUR_URL"` on `<form id="cf">` in contact.html. Add the service's spam protection and server-side validation.
## Domain and HTTPS
Point the domain's DNS A/CNAME records to your host, then enable the free AutoSSL/Let's Encrypt certificate in the hosting panel and force HTTPS. `_headers` works on Netlify/Cloudflare Pages; on cPanel set equivalent headers in .htaccess.
## Updating content
Edit the .html files directly; shared styles are in assets/style.css.
