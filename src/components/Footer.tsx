import Link from "next/link";

/* ── data ─────────────────────────────────────────────── */

const footerColumnsTop = [
  {
    heading: "COMPANY",
    links: [
      { label: "Blog", href: "https://synthflow.ai/blog" },
      { label: "Brand", href: "https://synthflow.ai/identity" },
      {
        label: "Careers",
        href: "https://jobs.ashbyhq.com/synthflow",
        badge: "WE'RE HIRING",
      },
      { label: "Newsroom", href: "https://synthflow.ai/newsroom" },
      { label: "Merch Store", href: "https://merch.synthflow.ai/" },
    ],
  },
  {
    heading: "PLATFORM",
    links: [
      { label: "Changelog", href: "https://feedback.synthflow.ai/changelog" },
      { label: "Feedback", href: "https://feedback.synthflow.ai/" },
      { label: "Security", href: "https://security.synthflow.ai/" },
      { label: "Status", href: "https://status.synthflow.ai/" },
    ],
  },
  {
    heading: "ECOSYSTEM",
    links: [
      {
        label: "Developers",
        href: "https://docs.synthflow.ai/reference/getting-started-with-your-api",
      },
      { label: "Marketplace", href: "https://synthflow.ai/marketplace" },
      { label: "Partners", href: "https://synthflow.ai/partners" },
      { label: "Solution Partners", href: "https://synthflow.ai/solution-partners" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Academy", href: "https://academy.synthflow.ai/" },
      { label: "API Docs", href: "https://docs.synthflow.ai/" },
      { label: "Documentation", href: "https://docs.synthflow.ai/" },
      { label: "Help Center", href: "https://helpcenter.synthflow.ai/" },
      { label: "Resource Library", href: "https://synthflow.ai/resource-library" },
    ],
  },
];

const footerColumnsBottom = [
  {
    heading: "INTEGRATIONS",
    links: [
      { label: "Cal.com", href: "https://synthflow.ai/integrations/calcom" },
      {
        label: "GoHighLevel",
        href: "https://marketplace.gohighlevel.com/integration/653bee8ab4783e721f7b1348",
      },
      { label: "HubSpot", href: "https://synthflow.ai/integrations/hubspot" },
      { label: "Salesforce", href: "https://synthflow.ai/integrations/salesforce" },
      { label: "Zapier", href: "https://synthflow.ai/integrations/zapier" },
    ],
  },
  {
    heading: "USE CASES",
    links: [
      { label: "AI Customer Service", href: "https://synthflow.ai/ai-customer-service" },
      { label: "AI Receptionist", href: "https://synthflow.ai/ai-receptionist" },
      { label: "AI Answering Service", href: "https://synthflow.ai/ai-answering-service" },
      { label: "AI Concierge", href: "https://synthflow.ai/ai-concierge" },
      { label: "Appointment Booking", href: "https://synthflow.ai/ai-appointment-booking" },
      { label: "AI IVR", href: "https://synthflow.ai/ai-ivr" },
      { label: "WhatsApp Integration", href: "https://synthflow.ai/whatsapp-business-calls" },
    ],
  },
  {
    heading: "ARTICLES",
    links: [
      { label: "AI Call Center", href: "https://synthflow.ai/blog/ai-call-center" },
      {
        label: "Conversational AI Platform",
        href: "https://synthflow.ai/blog/conversational-ai-platforms",
      },
      {
        label: "Contact Center Automation",
        href: "https://synthflow.ai/blog/contact-center-automation",
      },
      { label: "Enterprise Comparison", href: "https://synthflow.ai/enterprise-comparison" },
      {
        label: "ElevenLabs Alternatives",
        href: "https://synthflow.ai/alternatives/synthflow-vs-elevenlabs",
      },
      { label: "Vapi Alternatives", href: "https://synthflow.ai/blog/vapi-ai-alternatives" },
      {
        label: "Bland AI Alternatives",
        href: "https://synthflow.ai/blog/bland-ai-alternatives",
      },
      {
        label: "Voiceflow Alternatives",
        href: "https://synthflow.ai/blog/voiceflow-alternatives",
      },
      {
        label: "Retell AI Alternatives",
        href: "https://synthflow.ai/alternatives/synthflow-vs-retell",
      },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "https://docs.synthflow.ai/docs/privacy-policy" },
      { label: "Terms & Conditions", href: "https://docs.synthflow.ai/docs/terms-conditions" },
      { label: "Imprint", href: "https://docs.synthflow.ai/docs/imprint" },
      { label: "GDPR", href: "https://security.synthflow.ai/" },
      {
        label: "AI Transparency Statement",
        href: "https://docs.synthflow.ai/ai-transparency",
      },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/synthflowai/" },
  { label: "X", href: "https://x.com/SynthflowAI" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61555448283479" },
  { label: "Instagram", href: "https://www.instagram.com/synthflowai/" },
  { label: "YouTube", href: "https://www.youtube.com/@SynthflowAI" },
];

const investorLogos = [
  {
    alt: "Accel",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788d3cafb0dc2a95b066_accel.svg",
  },
  {
    alt: "Singular",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb78e064f8df6e38aa1f5d_singular%201.png",
  },
  {
    alt: "Atlantic Labs",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb788db3e55464ccb941e3_atlantis%20labs.svg",
  },
];

const complianceBadges = [
  {
    alt: "SOC 2",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5148008905f244c0b_badge--soc2.svg",
  },
  {
    alt: "GDPR",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f51b1c75c8e18c40e2_badge--gdpr.svg",
  },
  {
    alt: "HIPAA",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5717e06e4df1da152_badge--hipaa.svg",
  },
  {
    alt: "ISO 27001",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f53411db96527e99d0_badge--iso_27001.svg",
  },
  {
    alt: "EU Hosting",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f57980f209bcaf6f45_badge--eu_hosting.svg",
  },
  {
    alt: "US Hosting",
    src: "https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/69a004f5eb8afeb8548da1bf_badge--us_hosting.svg",
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "https://docs.synthflow.ai/docs/privacy-policy" },
  { label: "Terms & Conditions", href: "https://docs.synthflow.ai/docs/terms-conditions" },
  { label: "Imprint", href: "https://docs.synthflow.ai/docs/imprint" },
  { label: "System Status", href: "https://status.synthflow.ai/" },
];

/* ── styles ───────────────────────────────────────────── */

const colHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#110229",
  marginBottom: 16,
};

const colLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  lineHeight: "32px",
  color: "#595959",
  textDecoration: "none",
  display: "block",
};

/* ── component ────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#fdf2ff",
      }}
    >
      {/* Background image */}
      <img
        src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/68fb754af02d2b2d5f7e3fe2_Background%20Footer.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── Top section: brand + 4 columns ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 32px 60px",
            display: "flex",
            gap: 64,
          }}
        >
          {/* Left: brand */}
          <div style={{ width: "35%", flexShrink: 0 }}>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 20,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-3.07c-1.58-.22-3-1.02-3.97-2.28l1.49-1.49A5.016 5.016 0 0012 12.5c1.52 0 2.9-.62 3.89-1.63l1.49 1.49c-.97 1.26-2.39 2.06-3.97 2.28v3.36h-2.41z"
                  fill="#110229"
                />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#110229",
                  letterSpacing: "-0.5px",
                }}
              >
                Synthflow
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: "22px",
                color: "#595959",
                maxWidth: 360,
                marginBottom: 28,
              }}
            >
              Synthflow is the leading AI Voice Platform for enterprises. Our AI
              voice agents automate phone conversations at scale &mdash; replacing
              manual call handling with fast, reliable, and human-like interactions.
              Using AI, we&rsquo;re transforming how businesses manage calls, making
              customer support scalable, cost-efficient, and easy to deploy in weeks.
            </p>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#110229",
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: 4 columns */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {footerColumnsTop.map((col) => (
              <div key={col.heading}>
                <div style={colHeadingStyle}>{col.heading}</div>
                <div>
                  {col.links.map((link) => (
                    <div
                      key={link.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={colLinkStyle}
                      >
                        {link.label}
                      </a>
                      {"badge" in link && link.badge && (
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 9,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "#fff",
                            background: "#5b0dd5",
                            padding: "2px 8px",
                            borderRadius: 999,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter section ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 32px",
            display: "flex",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {/* Left: newsletter form */}
          <div style={{ width: "35%", flexShrink: 0 }}>
            <div
              style={{
                ...colHeadingStyle,
                marginBottom: 20,
                lineHeight: "18px",
              }}
            >
              SIGNAL: YOUR MONTHLY ENTERPRISE AI NEWSLETTER
            </div>
            <div
              style={{
                display: "flex",
                gap: 0,
              }}
            >
              <input
                type="email"
                placeholder="Work Email*"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "#110229",
                  background: "#fff",
                  border: "1px solid #d4d4d4",
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                  padding: "10px 16px",
                  flex: 1,
                  outline: "none",
                }}
              />
              <button
                type="button"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#fff",
                  background: "#5b0dd5",
                  border: "none",
                  borderRadius: "0 6px 6px 0",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right: 4 more link columns */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {footerColumnsBottom.map((col) => (
              <div key={col.heading}>
                <div style={colHeadingStyle}>{col.heading}</div>
                <div>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={colLinkStyle}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Backed by ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "40px 32px 24px",
          }}
        >
          <div style={{ ...colHeadingStyle, marginBottom: 20 }}>BACKED BY</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
            }}
          >
            {investorLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ height: 28, objectFit: "contain" }}
              />
            ))}
          </div>
        </div>

        {/* ── Trusted & Verified ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 32px 40px",
          }}
        >
          <div style={{ ...colHeadingStyle, marginBottom: 20 }}>
            TRUSTED &amp; VERIFIED BY
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            {complianceBadges.map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                style={{ height: 80, objectFit: "contain" }}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(17, 2, 41, 0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {/* Left: copyright */}
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#595959",
              }}
            >
              &copy;2025 Synthflow AI
            </span>

            {/* Center: legal links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              {bottomLinks.map((link, i) => (
                <span key={link.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  {i > 0 && (
                    <span
                      style={{
                        color: "#ccc",
                        fontSize: 13,
                        userSelect: "none",
                      }}
                    >
                      |
                    </span>
                  )}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#595959",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                </span>
              ))}

              {/* GDPR with EU flag */}
              <span style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    color: "#ccc",
                    fontSize: 13,
                    userSelect: "none",
                  }}
                >
                  |
                </span>
                <a
                  href="https://security.synthflow.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "#595959",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  GDPR
                  <img
                    src="https://cdn.prod.website-files.com/67558e246490829b0a44ad8e/685a7468bd6d02064fce96bd_gdpr.svg"
                    alt="EU Flag"
                    style={{ width: 16, height: 16 }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
