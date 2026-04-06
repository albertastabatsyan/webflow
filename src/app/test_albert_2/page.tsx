"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, categories } from "@/lib/articles";
import HeaderLegacy from "@/components/HeaderLegacy";
import FooterLegacy from "@/components/FooterLegacy";

export default function LabsIndexLegacy() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <div>
      <HeaderLegacy />

      {/* Hero — dark purple gradient */}
      <section
        style={{
          background: "linear-gradient(180deg, #20103C 0%, #1A0939 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: "#5B0DD5",
            opacity: 0.15,
            filter: "blur(200px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "100px 32px 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div
              className="fade-up"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 16,
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "-0.32px",
                color: "#9747FF",
                marginBottom: 24,
              }}
            >
              RESEARCH
            </div>
            <h1
              className="fade-up"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 60,
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: 24,
                animationDelay: "0.05s",
                background: "linear-gradient(270deg, #B881FF 0%, #5B0DD5 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Research &amp; Engineering
            </h1>
            <p
              className="fade-up"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.5,
                letterSpacing: "-0.36px",
                color: "rgba(255,255,255,0.6)",
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
              borderTop: "1px solid rgba(255,255,255,0.1)",
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
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "-0.24px",
                    color: "rgba(255,255,255,0.4)",
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
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "-0.24px",
              color: "rgba(255,255,255,0.3)",
              marginTop: 32,
              animationDelay: "0.2s",
            }}
          >
            SOC 2 · HIPAA · PCI DSS · GDPR
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
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "-0.28px",
              color: "#9747FF",
              marginRight: 8,
            }}
          >
            PUBLICATIONS
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: 6,
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.3px",
                border: "none",
                background:
                  activeFilter === cat ? "#5B0DD5" : "transparent",
                color: activeFilter === cat ? "#fff" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)",
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
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase" as const,
                      letterSpacing: "-0.24px",
                      color: "#9747FF",
                      marginBottom: 16,
                    }}
                  >
                    {article.category.toUpperCase()}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      letterSpacing: "-0.4px",
                      color: "#141414",
                      marginBottom: 10,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
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
                        background: "#FAF9FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#5B0DD5",
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
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#141414",
                      }}
                    >
                      {article.author}
                    </span>
                    {article.readTime && (
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
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
                    href={`/test_albert_2/${article.slug}`}
                    className="lab-card fade-up"
                    style={{
                      display: "block",
                      background: "var(--white)",
                      borderRadius: 16,
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
                    borderRadius: 16,
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

      <FooterLegacy />
    </div>
  );
}
