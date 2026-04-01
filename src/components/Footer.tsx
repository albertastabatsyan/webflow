import Link from "next/link";

const columns = [
  {
    heading: "COMPANY",
    links: [
      { label: "Blog", href: "https://synthflow.ai/blog" },
      { label: "Newsroom", href: "https://synthflow.ai/newsroom" },
      { label: "Careers", href: "https://jobs.ashbyhq.com/synthflow" },
      { label: "Brand", href: "https://synthflow.ai/identity" },
    ],
  },
  {
    heading: "PLATFORM",
    links: [
      { label: "Pricing", href: "https://synthflow.ai/pricing" },
      { label: "Integrations", href: "https://synthflow.ai/integrations" },
      { label: "Security", href: "https://security.synthflow.ai/" },
      { label: "Status", href: "https://status.synthflow.ai/" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Labs", href: "/" },
      { label: "Documentation", href: "https://docs.synthflow.ai/" },
      { label: "Help Center", href: "https://helpcenter.synthflow.ai/" },
      { label: "API Docs", href: "https://docs.synthflow.ai/" },
    ],
  },
  {
    heading: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "https://docs.synthflow.ai/docs/privacy-policy" },
      { label: "Terms", href: "https://docs.synthflow.ai/docs/terms-conditions" },
      { label: "GDPR", href: "https://security.synthflow.ai/" },
      { label: "Imprint", href: "https://docs.synthflow.ai/docs/imprint" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/synthflowai/" },
  { label: "X", href: "https://x.com/SynthflowAI" },
  { label: "YouTube", href: "https://www.youtube.com/@SynthflowAI" },
];

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "rgba(255,255,255,0.25)",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontFeatureSettings: "'dlig' 1",
  fontSize: 14,
  color: "rgba(255,255,255,0.4)",
  textDecoration: "none",
  lineHeight: "32px",
  letterSpacing: "-0.49px",
  transition: "color 0.15s",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d17 100%)",
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "80px 32px 48px",
          display: "flex",
          gap: 80,
        }}
      >
        {/* Brand */}
        <div style={{ flex: "0 0 280px" }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1, 'cv05' 1, 'cv07' 1, 'cv06' 1",
              fontSize: 20,
              fontWeight: 500,
              color: "#e6e6e6",
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            Synthflow
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 14,
              lineHeight: "22px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "-0.49px",
              marginBottom: 24,
            }}
          >
            The leading AI Voice Platform for enterprises. Automating phone
            conversations at scale.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e6e6")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
        >
          {columns.map((col) => (
            <div key={col.heading}>
              <div style={{ ...mono, marginBottom: 16 }}>
                // {col.heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {col.links.map((link) => {
                  const isInternal = link.href.startsWith("/");
                  const Tag = isInternal ? Link : "a";
                  const extra = isInternal
                    ? {}
                    : { target: "_blank" as const, rel: "noopener noreferrer" };
                  return (
                    <Tag
                      key={link.label}
                      href={link.href}
                      style={linkStyle}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                        (e.currentTarget.style.color = "#e6e6e6")
                      }
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                      }
                      {...extra}
                    >
                      {link.label}
                    </Tag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.05)",
          }}
        />
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 32px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          © 2026 Synthflow AI
        </span>
        <span style={{ ...mono, fontSize: 11, color: "rgba(255,255,255,0.1)" }}>
          SOC 2 // HIPAA // PCI DSS // GDPR // ISO 27001
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          Backed by Accel, Singular, Atlantic Labs
        </span>
      </div>
    </footer>
  );
}
