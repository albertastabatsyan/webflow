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
      {/* Hero */}
      <section className="mesh-hero noise relative overflow-hidden">
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "80px 32px 72px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 64,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Synthflow
              </span>
              <span
                style={{
                  width: 1,
                  height: 16,
                  background: "rgba(255,255,255,0.2)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "#fff",
                }}
              >
                Labs
              </span>
            </div>
            <a
              href="https://synthflow.ai"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              synthflow.ai ↗
            </a>
          </nav>

          {/* Hero content */}
          <div style={{ maxWidth: 680 }}>
            <h1
              className="fade-up"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Research &<br />Engineering
            </h1>
            <p
              className="fade-up"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                maxWidth: 520,
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
              gap: 48,
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.1)",
              animationDelay: "0.2s",
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
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="dot-grid" style={{ background: "var(--purple-wash)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 32px 80px",
          }}
        >
          {/* Filters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 40,
              flexWrap: "wrap" as const,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                color: "var(--gray-400)",
                marginRight: 8,
              }}
            >
              Filter
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "6px 16px",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  border:
                    activeFilter === cat
                      ? "1px solid var(--purple-primary)"
                      : "1px solid var(--gray-200)",
                  background:
                    activeFilter === cat ? "var(--purple-deep)" : "var(--white)",
                  color: activeFilter === cat ? "#fff" : "var(--gray-600)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {filtered.map((article, i) => {
              const inner = (
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.06em",
                        color: "var(--purple-primary)",
                      }}
                    >
                      {article.category}
                    </span>
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "var(--gray-200)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: "var(--gray-400)",
                      }}
                    >
                      {article.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "var(--purple-deep)",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--gray-600)",
                      marginBottom: 20,
                    }}
                  >
                    {article.subtitle}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--purple-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--purple-primary)",
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
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--gray-900)",
                      }}
                    >
                      {article.author}
                    </span>
                    {article.readTime && (
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          color: "var(--gray-400)",
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
                      borderRadius: 16,
                      border: "1px solid var(--gray-200)",
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
                    borderRadius: 16,
                    border: "1px dashed var(--gray-200)",
                    opacity: 0.55,
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
          borderTop: "1px solid var(--gray-100)",
          padding: "32px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "var(--gray-400)",
            }}
          >
            Synthflow Labs
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--gray-400)",
            }}
          >
            Part of{" "}
            <a
              href="https://synthflow.ai"
              style={{ color: "var(--purple-primary)", textDecoration: "none" }}
            >
              Synthflow AI
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
