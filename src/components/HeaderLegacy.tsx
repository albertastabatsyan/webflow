"use client";

import Link from "next/link";

const navLink: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: 15,
  fontWeight: 500,
  color: "#6B7B94",
  textDecoration: "none",
  letterSpacing: "-0.3px",
};

export default function HeaderLegacy() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #E4E4E7",
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
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 600,
              color: "#141414",
              letterSpacing: "-0.5px",
            }}
          >
            Synthflow
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="https://synthflow.ai/customer-stories" target="_blank" rel="noopener noreferrer" style={navLink}>Customers</a>
          <a href="https://synthflow.ai/integrations" target="_blank" rel="noopener noreferrer" style={navLink}>Integrations</a>
          <a href="https://synthflow.ai/pricing" target="_blank" rel="noopener noreferrer" style={navLink}>Pricing</a>
          <Link href="/test_albert_2" style={{ ...navLink, color: "#141414" }}>Labs</Link>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginLeft: "auto",
          }}
        >
          <div style={{ width: 1, height: 20, background: "#E4E4E7", marginRight: 8 }} />
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
              fontSize: 15,
              fontWeight: 500,
              background: "#5B0DD5",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: "-0.3px",
              transition: "background 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9747FF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5B0DD5")}
          >
            Start Now
          </a>
        </div>
      </div>
    </header>
  );
}
