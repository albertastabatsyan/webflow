import Link from "next/link";

const navLinks = [
  { label: "Labs", href: "/", bold: true, internal: true },
  { label: "Benchmarks", href: "/latency-benchmarks", internal: true },
  { label: "Manifesto", href: "#", internal: false },
  { label: "Subscribe", href: "#", internal: false },
];

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #f8f8fa",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Wordmark */}
        <a
          href="https://synthflow.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-body)",
            fontFeatureSettings: "'cv05' 1, 'cv07' 1, 'cv06' 1, 'dlig' 1",
            fontSize: 23,
            fontWeight: 500,
            letterSpacing: "-1.4px",
            color: "#1a1a2e",
            textDecoration: "none",
          }}
        >
          Synthflow
        </a>

        {/* Center: Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          {navLinks.map((link) => {
            const style: React.CSSProperties = {
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 15,
              fontWeight: link.bold ? 600 : 500,
              letterSpacing: "-0.3px",
              color: link.bold ? "#1a1a2e" : "#797e86",
              textDecoration: "none",
            };

            if (link.internal) {
              return (
                <Link key={link.label} href={link.href} style={style}>
                  {link.label}
                </Link>
              );
            }

            return (
              <a key={link.label} href={link.href} style={style}>
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Login + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Separator */}
          <span
            style={{
              width: 1,
              height: 24,
              background: "#f8f8fa",
            }}
          />

          <a
            href="https://app.synthflow.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              textDecoration: "none",
            }}
          >
            Login
          </a>

          <a
            href="https://synthflow.ai/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 15,
              fontWeight: 500,
              background: "#1a1a2e",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 4,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Contact Sales <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
