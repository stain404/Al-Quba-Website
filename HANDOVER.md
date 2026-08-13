# Al Quba Investment — Website Handover

Deployment brief for the team hosting **https://alqubainvestment.com**.

---

## 1. What this is

A **Next.js 14 application** — not a static HTML site.

It renders pages on the server and runs live server-side routes:

| Route | Purpose |
|---|---|
| `POST /api/contact` | Contact form → emails the enquiry to the firm |
| `POST /api/newsletter` | Newsletter signup → adds the address to the Brevo contact list |
| `/opengraph-image` | Generates the social-share preview image |
| middleware | English / Arabic locale routing on every request |

**This cannot be deployed as static files to shared hosting.** It requires a Node.js runtime. A static export is not possible — the API routes, the middleware, and the generated OG image all need a running server.

---

## 2. Hosting requirements

- **Node.js 18.17 or newer** (built and tested on Node 24)
- Ability to run a persistent Node process
- A reverse proxy (nginx / Apache) in front of it
- HTTPS certificate on the domain

Suitable: a VPS, or any Node-capable platform. Not suitable: static-only or PHP-only shared hosting.

---

## 3. Build and run

```bash
npm ci
npm run build
npm start          # serves on port 3000
```

Put the app behind a process manager (PM2, systemd) so it restarts on crash and on server reboot, and reverse-proxy port 3000 to 443.

**Install dependencies on the server itself.** Do not copy a `node_modules` folder across from another machine — the `sharp` image library compiles native binaries per platform and will fail if moved between operating systems.

---

## 4. Environment variables

Create these on the server. **They are not in the repository** — credentials are supplied separately and must never be committed.

| Variable | Value |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `inbox@alqubainvestment.com` |
| `SMTP_PASS` | Google App Password — 16 characters, supplied separately |
| `CONTACT_TO_EMAIL` | `inbox@alqubainvestment.com` |
| `BREVO_API_KEY` | Brevo API key — supplied separately |
| `BREVO_LIST_ID` | Numeric ID of the Brevo newsletter list |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID — optional, production only |

The first five drive the **contact form** (SMTP). The two `BREVO_*` values drive the **newsletter signup**, which writes subscribers into a Brevo contact list rather than sending mail. The two systems are independent — one can be misconfigured while the other works, so test both.

The app must be **restarted after setting these**. Without them the contact and newsletter forms return a server error and **enquiries are silently lost** — see the verification step in section 6.

`SMTP_PASS` must be a Google **App Password**, generated at https://myaccount.google.com/apppasswords with 2-Step Verification enabled on the account. The normal account login password will not work.

---

## 5. DNS

Point the web records at the new server:

- `A` record on the apex `alqubainvestment.com` → server IP
- `CNAME` on `www` → the apex

Then **301-redirect `www` → apex**. Both hostnames currently serve the site independently with no redirect between them, which splits search ranking across two addresses. The site publishes `https://alqubainvestment.com` (no `www`) as its canonical URL, so the apex must be the one that wins.

> ### ⚠️ Do not modify the MX records
>
> The MX records point to Google Workspace and carry the firm's live email — including the address the website's own contact form delivers to. Changing or clearing them will take company email down. **Web records only.**

---

## 6. Post-deployment checklist

Work through these on the live domain, in order:

- [ ] `https://alqubainvestment.com` loads over HTTPS
- [ ] `https://www.alqubainvestment.com` **redirects** to the apex
- [ ] `/ar` loads and renders right-to-left
- [ ] **Submit the contact form and confirm the email arrives at `inbox@alqubainvestment.com`**
- [ ] Submit the newsletter form in the footer, then confirm the address appears in the Brevo list
- [ ] `/sitemap.xml` and `/robots.txt` both load
- [ ] `/opengraph-image` returns a PNG
- [ ] Paste the homepage URL into WhatsApp or LinkedIn — a branded preview card should appear
- [ ] Company email still working (send and receive a test message)

The contact form test is the one that matters most. It is the only proof the mail configuration is genuinely correct, and a silent failure there means lost investor enquiries with no visible symptom.

---

## 7. Notes for the site owner

- The domain, DNS, and hosting accounts should sit under **Al Quba's own company accounts**, with the agency granted access — not registered under the agency. Recovering a domain you don't hold the registrar login for is difficult.
- If sending credentials to a third party, prefer a **separate, dedicated App Password** that can be revoked independently. A Google App Password grants both send *and* read access to the mailbox.
- A send-only transactional provider (e.g. Brevo, free tier) is a better fit if an external party needs to send mail without inbox access. Same five variables, no code change.
- Never transmit credentials by email or chat. Use a password manager's secure share.
