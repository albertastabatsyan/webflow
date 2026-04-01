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
    <div style={{ background: "var(--bg-deep)" }}>
      {/* Hero */}
      <section
        style={{ padding: "120px 24px 80px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 24,
            }}
          >
            Synthflow Labs
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Research and engineering from the team building voice AI
            infrastructure
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        style={{
          display: "flex",
          padding: "48px 24px",
          justifyContent: "center",
          flexWrap: "wrap" as const,
          gap: 12,
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: "8px 20px",
              border:
                activeFilter === cat
                  ? "1px solid rgba(255,255,255,0.3)"
                  : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              textTransform: "uppercase" as const,
              letterSpacing: "0.05em",
              color:
                activeFilter === cat ? "#fff" : "rgba(255,255,255,0.7)",
              background:
                activeFilter === cat
                  ? "rgba(255,255,255,0.05)"
                  : "transparent",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {filtered.map((article) => {
            const inner = (
              <div style={{ padding: 20 }}>
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: 12,
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: "var(--accent-green-bg)",
                    color: "var(--accent-green)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.08em",
                  }}
                >
                  {article.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 16,
                  }}
                >
                  {article.subtitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "#595959",
                  }}
                >
                  <span>{article.author}</span>
                  {article.authorRole && (
                    <>
                      <span>·</span>
                      <span>{article.authorRole}</span>
                    </>
                  )}
                  <span>·</span>
                  <span>{article.date}</span>
                  {article.readTime && (
                    <>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </>
                  )}
                </div>
              </div>
            );

            if (article.published) {
              return (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  style={{
                    display: "block",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    background: "var(--bg-card)",
                    transition: "border-color 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.25)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)")
                  }
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={article.slug}
                style={{
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  background: "var(--bg-card)",
                  opacity: 0.5,
                }}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
