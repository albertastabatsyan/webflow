"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, categories } from "@/lib/articles";

export default function LabsIndex() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <div>
      {/* Nav */}
      <nav
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "var(--text-secondary)",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Synthflow
          </span>
          <span
            style={{
              width: 1,
              height: 16,
              background: "var(--border)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "var(--navy-dark)",
              fontFeatureSettings: "'dlig' 1",
            }}
          >
            Labs
          </span>
        </div>
        <a
          href="https://synthflow.ai"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 500,
            textDecoration: "none",
            fontFeatureSettings: "'dlig' 1",
            letterSpacing: "-0.3px",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "var(--navy-dark)",
            color: "var(--white)",
            padding: "8px 12px",
            borderRadius: 4,
            minWidth: 64,
          }}
        >
          synthflow.ai <span style={{ marginLeft: 2 }}>→</span>
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--white) 0%, var(--light-bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "80px 32px 80px",
          }}
        >
          {/* Hero content */}
          <div style={{ maxWidth: 720 }}>
            <div
              className="fade-up"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                color: "var(--text-secondary)",
                marginBottom: 24,
              }}
            >
              // RESEARCH
            </div>
            <h1
              className="fade-up"
              style={{
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 56,
                fontWeight: 500,
                lineHeight: "65px",
                letterSpacing: "-2.8px",
                color: "var(--navy-dark)",
                marginBottom: 24,
                animationDelay: "0.05s",
              }}
            >
              Research &amp; Engineering
            </h1>
            <p
              className="fade-up"
              style={{
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 20,
                lineHeight: "28px",
                letterSpacing: "-0.7px",
                color: "var(--text-secondary)",
                maxWidth: 560,
                animationDelay: "0.1s",
              }}
            >
              Independent benchmarks, engineering deep dives, and data-driven
              analysis from the team building enterprise voice AI.
            </p>
          </div>

          {/* Stats bar */}
          <div
            className="fade-up"
            style={{
              display: "flex",
              gap: 64,
              marginTop: 64,
              paddingTop: 32,
              borderTop: "1px solid var(--border)",
              animationDelay: "0.15s",
            }}
          >
            {[
              { label: "p50 TTFT", value: "390ms" },
              { label: "Languages", value: "30+" },
              { label: "Uptime", value: "99.99%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--navy-dark)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 500,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Compliance bar */}
          <div
            className="fade-up"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              color: "var(--text-secondary)",
              marginTop: 32,
              animationDelay: "0.2s",
            }}
          >
            SOC 2 // HIPAA // PCI DSS // GDPR
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "32px 32px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap" as const,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              color: "var(--text-secondary)",
              marginRight: 8,
            }}
          >
            // PUBLICATIONS
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "8px 12px",
                borderRadius: 4,
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.3px",
                border: "none",
                background:
                  activeFilter === cat ? "var(--navy-dark)" : "transparent",
                color: activeFilter === cat ? "var(--white)" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.15s ease",
                minWidth: 64,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: "var(--white)" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "64px 32px 120px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {filtered.map((article, i) => {
              const inner = (
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 500,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.08em",
                      color: "var(--text-secondary)",
                      marginBottom: 16,
                    }}
                  >
                    // {article.category.toUpperCase()}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontFeatureSettings: "'dlig' 1",
                      fontSize: 18,
                      fontWeight: 500,
                      lineHeight: 1.4,
                      letterSpacing: "-0.63px",
                      color: "var(--text-label)",
                      marginBottom: 10,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontFeatureSettings: "'dlig' 1",
                      fontSize: 15,
                      lineHeight: "21px",
                      letterSpacing: "-0.525px",
                      color: "var(--text-secondary)",
                      marginBottom: 24,
                    }}
                  >
                    {article.subtitle}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--light-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 500,
                        color: "var(--navy-dark)",
                      }}
                    >
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontFeatureSettings: "'dlig' 1",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--navy-dark)",
                      }}
                    >
                      {article.author}
                    </span>
                    {article.readTime && (
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontFeatureSettings: "'dlig' 1",
                          fontSize: 14,
                          color: "var(--text-secondary)",
                          marginLeft: "auto",
                        }}
                      >
                        {article.readTime}
                      </span>
                    )}
                  </div>
                </div>
              );

              if (article.published) {
                return (
                  <Link
                    key={article.slug}
                    href={`/${article.slug}`}
                    className="lab-card fade-up"
                    style={{
                      display: "block",
                      background: "var(--white)",
                      borderRadius: 4,
                      border: "1px solid var(--border)",
                      textDecoration: "none",
                      color: "inherit",
                      overflow: "hidden",
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={article.slug}
                  className="fade-up"
                  style={{
                    background: "var(--white)",
                    borderRadius: 4,
                    border: "1px dashed var(--border)",
                    opacity: 0.5,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "var(--text-secondary)",
            }}
          >
            SYNTHFLOW LABS
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 14,
              color: "var(--text-secondary)",
            }}
          >
            Part of{" "}
            <a
              href="https://synthflow.ai"
              style={{ color: "var(--navy-dark)", textDecoration: "none" }}
            >
              Synthflow AI
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
