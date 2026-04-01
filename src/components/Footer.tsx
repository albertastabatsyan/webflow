import Link from "next/link";

const footerColumns = [
  {
    heading: "COMPANY",
    links: [
      { label: "Blog", href: "/", internal: true },
      { label: "Newsroom", href: "https://synthflow.ai/newsroom" },
      { label: "Careers", href: "https://synthflow.ai/careers" },
      { label: "Brand", href: "https://synthflow.ai/brand" },
    ],
  },
  {
    heading: "PLATFORM",
    links: [
      { label: "Pricing", href: "https://synthflow.ai/pricing" },
      { label: "Integrations", href: "https://synthflow.ai/integrations" },
      { label: "Security", href: "https://synthflow.ai/security" },
      { label: "Status", href: "https://synthflow.ai/status" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Labs", href: "/", internal: true },
      { label: "Documentation", href: "https://synthflow.ai/documentation" },
      { label: "Help Center", href: "https://synthflow.ai/help-center" },
      { label: "API Docs", href: "https://synthflow.ai/api-docs" },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "https://synthflow.ai/privacy-policy" },
      { label: "Terms", href: "https://synthflow.ai/terms" },
      { label: "GDPR", href: "https://synthflow.ai/gdpr" },
      { label: "Imprint", href: "https://synthflow.ai/imprint" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/synthflow" },
  { label: "X", href: "https://x.com/synthflow" },
  { label: "GitHub", href: "https://github.com/synthflow" },
];

export default function Footer() {
  return (
    <footer>
      {/* Dark footer section */}
      <div
        style={{
          background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d17 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "80px 32px",
            display: "flex",
            gap: 64,
          }}
        >
          {/* Left column */}
          <div style={{ width: "40%", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'cv05' 1, 'cv07' 1, 'cv06' 1, 'dlig' 1",
                fontSize: 23,
                fontWeight: 500,
                letterSpacing: "-1.4px",
                color: "#e6e6e6",
                marginBottom: 16,
              }}
            >
              Synthflow
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 15,
                lineHeight: "22px",
                color: "#797e86",
                maxWidth: 320,
                marginBottom: 24,
              }}
            >
              Synthflow is the leading AI Voice Platform for enterprises.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
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
                    fontFeatureSettings: "'dlig' 1",
                    fontSize: 14,
                    color: "#797e86",
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right columns */}
          <div
            style={{
              width: "60%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    color: "#797e86",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const }}>
                  {col.links.map((link) => {
                    const linkStyle: React.CSSProperties = {
                      fontFamily: "var(--font-body)",
                      fontFeatureSettings: "'dlig' 1",
                      fontSize: 14,
                      lineHeight: "32px",
                      color: "#595959",
                      textDecoration: "none",
                    };

                    if ("internal" in link && link.internal) {
                      return (
                        <Link key={link.label} href={link.href} style={linkStyle}>
                          {link.label}
                        </Link>
                      );
                    }

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          background: "#0d0d17",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 13,
              color: "#595959",
            }}
          >
            &copy; 2026 Synthflow AI
          </span>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              color: "rgba(255, 255, 255, 0.15)",
            }}
          >
            SOC 2 // HIPAA // PCI DSS // GDPR // ISO 27001
          </span>

          <span
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 13,
              color: "#595959",
            }}
          >
            Backed by Accel, Singular, Atlantic Labs
          </span>
        </div>
      </div>
    </footer>
  );
}
