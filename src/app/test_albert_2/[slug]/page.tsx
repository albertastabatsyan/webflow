import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";
import HeaderLegacy from "@/components/HeaderLegacy";
import FooterLegacy from "@/components/FooterLegacy";
import {
  BuildTimeChart,
  SupportSplitChart,
} from "@/components/AuroraDataCharts";

export function generateStaticParams() {
  return articles.filter((a) => a.published).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Synthflow Labs`,
    description: article.subtitle,
  };
}

const chartComponents: Record<string, React.ComponentType> = {
  "build-time": BuildTimeChart,
  "support-split": SupportSplitChart,
};

// Content is hardcoded in our data layer (articles.ts) — developer-controlled,
// not user input or external API data. Safe to render without sanitisation.
function ArticleBody({ html }: { html: string }) {
  const parts = html.split(/<!-- chart:(\S+) -->/);

  return (
    <div
      className="labs-body"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 17,
        lineHeight: 1.75,
        color: "var(--text-label)",
      }}
    >
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          const Chart = chartComponents[part];
          return Chart ? <Chart key={i} /> : null;
        }
        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: part }} />
        );
      })}
    </div>
  );
}

export default async function ArticlePageLegacy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !article.published) notFound();

  const moreArticles = articles.filter(
    (a) => a.slug !== slug && a.published
  ).slice(0, 3);

  return (
    <div>
      <HeaderLegacy />

      {/* Back link */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "16px 32px",
        }}
      >
        <Link
          href="/test_albert_2"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "-0.28px",
            color: "#9747FF",
            textDecoration: "none",
            textTransform: "uppercase" as const,
          }}
        >
          ← BACK TO RESEARCH
        </Link>
      </div>

      {/* Article header */}
      <section style={{ background: "var(--white)" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "48px 32px 48px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "-0.28px",
              color: "#9747FF",
              marginBottom: 24,
            }}
          >
            {article.category.toUpperCase()}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display, Geist, sans-serif)",
              fontSize: 48,
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              color: "#141414",
              marginBottom: 16,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              lineHeight: 1.5,
              letterSpacing: "-0.36px",
              color: "var(--text-secondary)",
              marginBottom: 32,
            }}
          >
            {article.subtitle}
          </p>

          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--text-secondary)",
              paddingBottom: 32,
              borderBottom: "1px solid var(--border)",
            }}
          >
            {[article.author, article.authorRole, article.date, article.readTime]
              .filter(Boolean)
              .join(" · ")}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--white)" }}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "48px 32px 80px",
          }}
        >
          {/* Key Takeaways */}
          {article.keyTakeaways.length > 0 && (
            <div
              style={{
                marginBottom: 56,
                padding: 28,
                borderRadius: 16,
                background: "#FAF9FE",
                border: "1px solid #E3DFF2",
                borderLeft: "3px solid #5B0DD5",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "-0.28px",
                  color: "#9747FF",
                  marginBottom: 20,
                }}
              >
                KEY TAKEAWAYS
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {article.keyTakeaways.map((t, i) => (
                  <li
                    key={i}
                    style={{
                      position: "relative",
                      paddingLeft: 18,
                      marginBottom: i < article.keyTakeaways.length - 1 ? 14 : 0,
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      lineHeight: "21px",
                      letterSpacing: "-0.525px",
                      color: "var(--text-label)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 8,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#5B0DD5",
                      }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ArticleBody html={article.body} />
        </div>
      </section>

      {/* More from Labs — dark section */}
      <section
        style={{
          background: "linear-gradient(180deg, #10081D 0%, #0A0512 100%)",
          padding: "120px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "-0.28px",
              color: "#9747FF",
              marginBottom: 20,
            }}
          >
            MORE FROM LABS
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 48,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display, Geist, sans-serif)",
                fontSize: 40,
                fontWeight: 600,
                letterSpacing: "-1px",
                lineHeight: 1.25,
                color: "#e6e6e6",
              }}
            >
              More research
            </h2>
            <Link
              href="/test_albert_2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.3px",
                color: "#94A3B8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              View all research →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {moreArticles.map((a) => {
              const cardContent = (
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "-0.24px",
                      color: "#9747FF",
                      marginBottom: 16,
                    }}
                  >
                    {a.category.toUpperCase()}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display, Geist, sans-serif)",
                      fontSize: 18,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      letterSpacing: "-0.4px",
                      color: "#e6e6e6",
                      marginBottom: 10,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      lineHeight: "21px",
                      letterSpacing: "-0.525px",
                      color: "#94A3B8",
                    }}
                  >
                    {a.subtitle}
                  </p>
                </div>
              );

              if (a.published) {
                return (
                  <Link
                    key={a.slug}
                    href={`/test_albert_2/${a.slug}`}
                    className="lab-card"
                    style={{
                      display: "block",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: 16,
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      textDecoration: "none",
                      color: "inherit",
                      overflow: "hidden",
                    }}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={a.slug}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: 16,
                    border: "1px dashed rgba(255, 255, 255, 0.06)",
                    opacity: 0.5,
                  }}
                >
                  {cardContent}
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
