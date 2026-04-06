"use client";

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
      { label: "Labs", href: "/test_albert_2" },
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
  letterSpacing: "-0.24px",
  color: "#94A3B8",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "#94A3B8",
  textDecoration: "none",
  lineHeight: "32px",
  letterSpacing: "-0.49px",
  transition: "color 0.15s",
};

export default function FooterLegacy() {
  return (
    <footer style={{ background: "#10081D" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "80px 32px 48px",
          display: "flex",
          gap: 80,
        }}
      >
        <div style={{ flex: "0 0 280px" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 600,
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
              fontSize: 14,
              lineHeight: "22px",
              color: "#94A3B8",
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
                  color: "#94A3B8",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e6e6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

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
                {col.heading}
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
                        (e.currentTarget.style.color = "#94A3B8")
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

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: 1, background: "#282828" }} />
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 32px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0A0512",
        }}
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#94A3B8" }}>
          © 2026 Synthflow AI
        </span>
        <span style={{ ...mono, fontSize: 11, color: "#94A3B8", opacity: 0.5 }}>
          SOC 2 · HIPAA · GDPR · ISO 27001
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#94A3B8" }}>
          Backed by Accel, Singular, Atlantic Labs
        </span>
      </div>
    </footer>
  );
}
