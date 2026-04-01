# Synthflow Header & Footer Reference

Extracted from https://www.synthflow.ai/blog on 2026-04-01.
For replication in a Next.js app.

---

## HEADER / NAVIGATION

### Structure

```html
<nav class="w-nav">
  <div class="nav-wrapper">

    <!-- Logo -->
    <a href="/" class="logo-link">
      <span>Synthflow</span>
    </a>

    <!-- Nav Menu -->
    <div class="nav-menu w-nav-menu">

      <!-- Solutions Dropdown -->
      <div class="nav-item dropdown w-dropdown">
        <a href="#" class="nav-link dropdown-toggle">Solutions</a>
        <div class="dropdown-body--navbar w-dropdown-list">
          <div class="dropdown-content--navbar solutions">

            <div class="dropdown-section">
              <p class="nav-label_new p-s_new">Use cases</p>
              <a href="/ai-customer-service" class="link-block--dropdown--navbar">Customer Service</a>
              <a href="/ai-receptionist" class="link-block--dropdown--navbar">Receptionist</a>
              <a href="/ai-answering-service" class="link-block--dropdown--navbar">Answering Service</a>
              <a href="/ai-concierge" class="link-block--dropdown--navbar">Concierge</a>
              <a href="/ai-appointment-setter" class="link-block--dropdown--navbar">Appointment Setter</a>
              <a href="/ai-ivr" class="link-block--dropdown--navbar">AI IVR</a>
              <a href="/whatsapp-business-calls" class="link-block--dropdown--navbar">WhatsApp Integration</a>
            </div>

            <div class="dropdown-section">
              <p class="nav-label_new p-s_new">Industries</p>
              <a href="/bpo-call-centers" class="link-block--dropdown--navbar">BPO</a>
              <a href="/healthcare" class="link-block--dropdown--navbar">Healthcare</a>
              <a href="/technology" class="link-block--dropdown--navbar">Technology</a>
              <a href="/financial-services" class="link-block--dropdown--navbar">Financial Services</a>
              <a href="/retail" class="link-block--dropdown--navbar">Retail</a>
            </div>

          </div>
        </div>
      </div>

      <!-- Direct Links -->
      <a href="/customer-stories" class="nav-link">Customers</a>
      <a href="/integrations" class="nav-link">Integrations</a>
      <a href="/pricing" class="nav-link">Pricing</a>

      <!-- Resources Dropdown -->
      <div class="nav-item dropdown w-dropdown">
        <a href="#" class="nav-link dropdown-toggle">Resources</a>
        <div class="dropdown-body--navbar w-dropdown-list">
          <div class="dropdown-content--navbar resources">
            <a href="https://synthflow.ai/blog" class="link-block--dropdown--navbar">Blog</a>
            <a href="https://docs.synthflow.ai/getting-started" class="link-block--dropdown--navbar">Documentation</a>
            <a href="https://helpcenter.synthflow.ai/" class="link-block--dropdown--navbar">Help Center</a>
            <a href="https://synthflow.ai/marketplace" class="link-block--dropdown--navbar">Marketplace</a>
            <a href="/newsroom" class="link-block--dropdown--navbar">Newsroom</a>
            <a href="/partners" class="link-block--dropdown--navbar">Partners</a>
            <a href="/resource-library" class="link-block--dropdown--navbar">Resource Library</a>
          </div>
        </div>
      </div>

      <!-- CTA Group -->
      <div class="nav-cta-group">
        <a href="https://fine-tuner.ai/auth" class="button button--nav">Login</a>
        <a href="https://fine-tuner.ai/auth" class="button button--nav button--primary">Start Now</a>
        <a href="/talk-to-sales" class="button button--nav button--secondary">Contact Sales</a>
      </div>

      <!-- Language Selector -->
      <div class="language-selector">
        <span>EN</span>
        <a href="/blog">English</a>
        <a href="/de/blog">Deutsch</a>
      </div>

    </div>

    <!-- Mobile Menu Button -->
    <button class="button--navbar--menu w-nav-button">
      <svg class="icon is--navbar dark-color"><!-- hamburger icon --></svg>
    </button>

  </div>
</nav>
```

### Header Behavior Classes
- `.header` - base header
- `.header.is-scrolled` - scrolled state
- `.header.is-dark-scrolled` - dark scrolled state
- `.header.is-black-scrolled` - black scrolled state
- `data-nav-menu-open` - JS attribute for mobile menu toggle

### Note on Logo
The logo appears as inline text "Synthflow" in the nav, not an image. The actual Synthflow wordmark/logo may be rendered via CSS or a custom font. Check the live site's computed styles for the logo rendering approach.

---

## FOOTER

### Complete Structure

```html
<footer class="footer-section">
  <div class="footer-container">

    <!-- Brand Section -->
    <div class="footer-brand">
      <a href="/" class="footer-logo">Synthflow</a>
      <p class="footer-description">
        Synthflow is the leading AI Voice Platform for enterprises.
        Our AI voice agents automate phone conversations at scale.
      </p>

      <!-- Social Media Links -->
      <div class="footer-social">
        <a href="https://www.linkedin.com/company/synthflowai/" class="social-link" target="_blank">LinkedIn</a>
        <a href="https://x.com/SynthflowAI" class="social-link" target="_blank">X (Twitter)</a>
        <a href="https://www.facebook.com/profile.php?id=61555448283479" class="social-link" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/synthflowai/" class="social-link" target="_blank">Instagram</a>
        <a href="https://www.youtube.com/@SynthflowAI" class="social-link" target="_blank">Youtube</a>
      </div>
    </div>

    <!-- Newsletter (HubSpot Form) -->
    <div class="footer-newsletter">
      <h3>SIGNAL: Your Monthly Enterprise AI Newsletter</h3>
      <!-- HubSpot Embedded Form -->
      <!-- portalId: "145576850" -->
      <!-- formId: "91f41a3c-6fe7-42e5-a4a4-3116860b1f00" -->
    </div>

    <!-- Investor Logos -->
    <div class="footer-investors">
      <h4>Backed by</h4>
      <div class="investor-logos">
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788d3cafb0dc2a95b066_accel.svg" alt="Accel" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb78e064f8df6e38aa1f5d_singular%201.png" alt="Singular" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788db3e55464ccb941e3_atlantis%20labs.svg" alt="Atlantis Labs" />
      </div>
    </div>

    <!-- Compliance Badges -->
    <div class="footer-compliance">
      <h4>Trusted & Verified By</h4>
      <div class="compliance-badges">
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5148008905f244c0b_badge--soc2.svg" alt="SOC 2" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f51b1c75c8e18c40e2_badge--gdpr.svg" alt="GDPR" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5717e06e4df1da152_badge--hipaa.svg" alt="HIPAA" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f53411db96527e99d0_badge--iso_27001.svg" alt="ISO 27001" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f57980f209bcaf6f45_badge--eu_hosting.svg" alt="EU Hosting" />
        <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5eb8afeb8548da1bf_badge--us_hosting.svg" alt="US Hosting" />
      </div>
    </div>

    <!-- Footer Link Columns -->
    <div class="footer-links">

      <!-- Column: Company -->
      <div class="footer-column">
        <h5 class="footer-column-title">Company</h5>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/identity">Brand</a></li>
          <li><a href="https://jobs.ashbyhq.com/synthflow">Careers</a></li>
          <li><a href="/newsroom">Newsroom</a></li>
          <li><a href="https://merch.synthflow.ai/">Merch Store</a></li>
        </ul>
      </div>

      <!-- Column: Platform -->
      <div class="footer-column">
        <h5 class="footer-column-title">Platform</h5>
        <ul>
          <li><a href="https://feedback.synthflow.ai/changelog">Changelog</a></li>
          <li><a href="https://feedback.synthflow.ai/">Feedback</a></li>
          <li><a href="https://security.synthflow.ai/">Security</a></li>
          <li><a href="https://status.synthflow.ai/">Status</a></li>
        </ul>
      </div>

      <!-- Column: Ecosystem -->
      <div class="footer-column">
        <h5 class="footer-column-title">Ecosystem</h5>
        <ul>
          <li><a href="https://docs.synthflow.ai/reference/getting-started-with-your-api">Developers</a></li>
          <li><a href="https://synthflow.ai/marketplace">Marketplace</a></li>
          <li><a href="/partners">Partners</a></li>
          <li><a href="/solution-partners">Solution Partners</a></li>
        </ul>
      </div>

      <!-- Column: Resources -->
      <div class="footer-column">
        <h5 class="footer-column-title">Resources</h5>
        <ul>
          <li><a href="https://academy.synthflow.ai/">Academy</a></li>
          <li><a href="https://docs.synthflow.ai/">API Docs</a></li>
          <li><a href="https://docs.synthflow.ai/">Documentation</a></li>
          <li><a href="https://helpcenter.synthflow.ai/">Help Center</a></li>
          <li><a href="/resource-library">Resource Library</a></li>
        </ul>
      </div>

      <!-- Column: Integrations -->
      <div class="footer-column">
        <h5 class="footer-column-title">Integrations</h5>
        <ul>
          <li><a href="https://synthflow.ai/integrations/calcom">Cal.com</a></li>
          <li><a href="https://marketplace.gohighlevel.com/integration/653bee8ab4783e721f7b1348">GoHighLevel</a></li>
          <li><a href="https://synthflow.ai/integrations/hubspot">HubSpot</a></li>
          <li><a href="https://synthflow.ai/integrations/salesforce">Salesforce</a></li>
          <li><a href="https://synthflow.ai/integrations/zapier">Zapier</a></li>
        </ul>
      </div>

      <!-- Column: Use Cases -->
      <div class="footer-column">
        <h5 class="footer-column-title">Use Cases</h5>
        <ul>
          <li><a href="/ai-customer-service">AI Customer Service</a></li>
          <li><a href="/ai-receptionist">AI Receptionist</a></li>
          <li><a href="/ai-answering-service">AI Answering Service</a></li>
          <li><a href="/ai-concierge">AI Concierge</a></li>
          <li><a href="/ai-appointment-booking">Appointment Booking</a></li>
          <li><a href="/ai-ivr">AI IVR</a></li>
          <li><a href="/whatsapp-business-calls">Whatsapp Integration</a></li>
        </ul>
      </div>

      <!-- Column: Articles -->
      <div class="footer-column">
        <h5 class="footer-column-title">Articles</h5>
        <ul>
          <li><a href="https://synthflow.ai/blog/ai-call-center">AI Call Center</a></li>
          <li><a href="https://synthflow.ai/blog/conversational-ai-platforms">Conversational AI Platform</a></li>
          <li><a href="https://synthflow.ai/blog/contact-center-automation">Contact Center Automation</a></li>
          <li><a href="/enterprise-comparison">Enterprise Comparison</a></li>
          <li><a href="/alternatives/synthflow-vs-elevenlabs">ElevenLabs Alternatives</a></li>
          <li><a href="https://synthflow.ai/blog/vapi-ai-alternatives">Vapi Alternatives</a></li>
          <li><a href="https://synthflow.ai/blog/bland-ai-alternatives">Bland AI Alternatives</a></li>
          <li><a href="https://synthflow.ai/blog/voiceflow-alternatives">Voiceflow Alternatives</a></li>
          <li><a href="/alternatives/synthflow-vs-retell">Retell AI Alternatives</a></li>
        </ul>
      </div>

      <!-- Column: Legal -->
      <div class="footer-column">
        <h5 class="footer-column-title">Legal</h5>
        <ul>
          <li><a href="https://docs.synthflow.ai/docs/privacy-policy">Privacy Policy</a></li>
          <li><a href="https://docs.synthflow.ai/docs/terms-conditions">Terms & Conditions</a></li>
          <li><a href="https://docs.synthflow.ai/docs/imprint">Imprint</a></li>
          <li><a href="https://security.synthflow.ai/">GDPR</a></li>
          <li><a href="https://docs.synthflow.ai/ai-transparency">AI Transparency Statement</a></li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Bottom Footer Bar -->
  <div class="footer-bottom">
    <div class="footer-bottom-left">
      <p>&copy;2025 Synthflow AI</p>
    </div>

    <div class="footer-bottom-center">
      <ul class="footer-bottom-links">
        <li><a href="https://docs.synthflow.ai/docs/terms-conditions">Privacy Policy</a></li>
        <li><a href="https://docs.synthflow.ai/docs/privacy-policy">Terms & Conditions</a></li>
        <li><a href="https://docs.synthflow.ai/docs/imprint">Imprint</a></li>
        <li>
          <a href="https://security.synthflow.ai/" class="gdpr-link">
            GDPR
            <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/685a7468bd6d02064fce96bd_gdpr.svg" alt="EU Flag" class="gdpr-flag" />
          </a>
        </li>
        <li><a href="https://status.synthflow.ai/">System Status</a></li>
      </ul>
    </div>
  </div>

  <!-- Footer Background Image -->
  <div class="footer-background">
    <img src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb754af02d2b2d5f7e3fe2_Background%20Footer.png" alt="Footer Background" />
  </div>
</footer>
```

---

## ALL CDN ASSET URLs

### Investor Logos
| Asset | URL |
|-------|-----|
| Accel | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788d3cafb0dc2a95b066_accel.svg` |
| Singular | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb78e064f8df6e38aa1f5d_singular%201.png` |
| Atlantis Labs | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788db3e55464ccb941e3_atlantis%20labs.svg` |

### Compliance Badges
| Badge | URL |
|-------|-----|
| SOC 2 | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5148008905f244c0b_badge--soc2.svg` |
| GDPR | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f51b1c75c8e18c40e2_badge--gdpr.svg` |
| HIPAA | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5717e06e4df1da152_badge--hipaa.svg` |
| ISO 27001 | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f53411db96527e99d0_badge--iso_27001.svg` |
| EU Hosting | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f57980f209bcaf6f45_badge--eu_hosting.svg` |
| US Hosting | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5eb8afeb8548da1bf_badge--us_hosting.svg` |

### Other Assets
| Asset | URL |
|-------|-----|
| Footer BG | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb754af02d2b2d5f7e3fe2_Background%20Footer.png` |
| GDPR Flag (16x16) | `https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/685a7468bd6d02064fce96bd_gdpr.svg` |

---

## SOCIAL MEDIA URLS

| Platform | URL |
|----------|-----|
| LinkedIn | `https://www.linkedin.com/company/synthflowai/` |
| X / Twitter | `https://x.com/SynthflowAI` |
| Facebook | `https://www.facebook.com/profile.php?id=61555448283479` |
| Instagram | `https://www.instagram.com/synthflowai/` |
| YouTube | `https://www.youtube.com/@SynthflowAI` |

---

## HUBSPOT NEWSLETTER FORM

```js
// Embed config for the SIGNAL newsletter form
hbspt.forms.create({
  portalId: "145576850",
  formId: "91f41a3c-6fe7-42e5-a4a4-3116860b1f00"
});
```

---

## KEY WEBFLOW CLASSES

### Header
- `header` / `header.is-scrolled` / `header.is-dark-scrolled` / `header.is-black-scrolled`
- `w-nav`, `w-nav-menu`, `w-nav-button`, `w-nav-overlay`
- `w-dropdown`, `w-dropdown-list`
- `nav-wrapper`, `nav-menu`, `nav-link`, `nav-item`
- `nav-label_new`, `p-s_new`
- `dropdown-body--navbar`, `dropdown-content--navbar`, `dropdown-content--navbar.solutions`, `dropdown-content--navbar.resources`
- `link-block--dropdown--navbar`
- `button--navbar--menu`
- `icon.is--navbar.dark-color`
- `button`, `button--nav`, `button--primary`, `button--secondary`
- `logo-link`
- `language-selector`

### Footer
- `footer-section`, `footer-container`
- `footer-brand`, `footer-logo`, `footer-description`
- `footer-social`, `social-link`
- `footer-newsletter`
- `footer-investors`, `investor-logos`, `investor-logo`
- `footer-compliance`, `compliance-badges`, `badge`
- `footer-links`, `footer-column`, `footer-column-title`
- `footer-bottom`, `footer-bottom-left`, `footer-bottom-center`, `footer-bottom-links`
- `gdpr-link`, `gdpr-flag`
- `footer-background`

---

## NOTES FOR NEXT.JS REPLICATION

1. **Auth URLs**: Login and "Start Now" both point to `https://fine-tuner.ai/auth`
2. **Contact Sales**: Points to `/talk-to-sales` (not listed in page reference -- may be external or redirect)
3. **Careers link**: Points to Ashby: `https://jobs.ashbyhq.com/synthflow`
4. **Badge SVGs**: All 6 compliance badges are 70x92px SVGs with purple (#5b0dd5) on white, featuring distinct icons (lock, shield, medical symbol, globe/map pin, etc.) with text labels at the bottom
5. **GDPR flag**: Small 16x16 EU flag icon (blue with yellow stars) used inline next to "GDPR" text in footer bottom bar
6. **Footer background**: Large PNG image decorating the footer section
7. **HubSpot form**: Use `@hubspot/react-forms` or embed script for the newsletter form
8. **Localization**: Language selector switches between `/blog` (EN) and `/de/blog` (DE)
