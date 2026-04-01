"use client";

import Link from "next/link";

const navLink: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 15,
  fontWeight: 500,
  color: "#797e86",
  textDecoration: "none",
  letterSpacing: "-0.3px",
  fontFeatureSettings: "'dlig' 1",
};

export default function Header() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #f8f8fa",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="https://synthflow.ai"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
            marginRight: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1, 'cv05' 1, 'cv07' 1, 'cv06' 1",
              fontSize: 20,
              fontWeight: 500,
              color: "#1a1a2e",
              letterSpacing: "-1px",
            }}
          >
            Synthflow
          </span>
        </a>

        {/* Center nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="https://synthflow.ai/customer-stories" target="_blank" rel="noopener noreferrer" style={navLink}>Customers</a>
          <a href="https://synthflow.ai/integrations" target="_blank" rel="noopener noreferrer" style={navLink}>Integrations</a>
          <a href="https://synthflow.ai/pricing" target="_blank" rel="noopener noreferrer" style={navLink}>Pricing</a>
          <Link href="/" style={{ ...navLink, color: "#1a1a2e" }}>Labs</Link>
        </nav>

        {/* Right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginLeft: "auto",
          }}
        >
          <div style={{ width: 1, height: 20, background: "#f8f8fa", marginRight: 8 }} />
          <a
            href="https://app.synthflow.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...navLink, padding: "8px 12px" }}
          >
            Log in
          </a>
          <a
            href="https://synthflow.ai/talk-to-sales"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 15,
              fontWeight: 500,
              background: "#1a1a2e",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: "-0.3px",
            }}
          >
            Contact Sales →
          </a>
        </div>
      </div>
    </header>
  );
}
