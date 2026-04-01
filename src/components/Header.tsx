"use client";

import Link from "next/link";

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
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="https://synthflow.ai"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
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
              fill="#1a1a2e"
            />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 20,
              fontWeight: 500,
              color: "#1a1a2e",
              letterSpacing: "-0.5px",
            }}
          >
            Synthflow
          </span>
        </a>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* Solutions dropdown placeholder */}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Solutions
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#797e86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>

          <a
            href="https://synthflow.ai/customer-stories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              textDecoration: "none",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Customers
          </a>

          <a
            href="https://synthflow.ai/integrations"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              textDecoration: "none",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Integrations
          </a>

          <a
            href="https://synthflow.ai/pricing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              textDecoration: "none",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Pricing
          </a>

          {/* Resources dropdown placeholder */}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Resources
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#797e86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </nav>

        {/* Right: separator + Login + CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Vertical separator */}
          <div
            style={{
              width: 1,
              height: 24,
              background: "#f8f8fa",
              marginRight: 4,
            }}
          />

          <a
            href="https://app.synthflow.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              color: "#797e86",
              textDecoration: "none",
              padding: "8px 12px",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Login
          </a>

          <a
            href="https://app.synthflow.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              background: "#1a1a2e",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 4,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              minWidth: 64,
              justifyContent: "center",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Start Now
          </a>

          <a
            href="https://synthflow.ai/talk-to-sales"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 500,
              background: "#1a1a2e",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: 4,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              minWidth: 64,
              justifyContent: "center",
              letterSpacing: "-0.3px",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Contact Sales &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}
