import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

// Safe: content is from hardcoded articles.ts, not user input or external APIs
function ArticleBody({ html }: { html: string }) {
  const parts = html.split(/<!-- chart:(\S+) -->/);

  return (
    <div
      className="labs-body"
      style={{
        fontFamily: "var(--font-body)",
        fontFeatureSettings: "'dlig' 1",
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
        // Safe: content originates from articles.ts (developer-controlled)
        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: part }} />
        );
      })}
    </div>
  );
}

export default async function ArticlePage({
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
      <Header />

      {/* Back link */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "16px 32px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "#797e86",
            textDecoration: "none",
          }}
        >
          ← Back to all research
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
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-secondary)",
              marginBottom: 24,
            }}
          >
            // {article.category.toUpperCase()}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 48,
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-2.4px",
              color: "var(--navy-dark)",
              marginBottom: 16,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
              fontSize: 20,
              lineHeight: "28px",
              letterSpacing: "-0.7px",
              color: "var(--text-secondary)",
              marginBottom: 32,
            }}
          >
            {article.subtitle}
          </p>

          <div
            style={{
              fontFamily: "var(--font-body)",
              fontFeatureSettings: "'dlig' 1",
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
                borderRadius: 4,
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--navy-dark)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                  marginBottom: 20,
                }}
              >
                // KEY TAKEAWAYS
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
                      fontFeatureSettings: "'dlig' 1",
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
                        background: "var(--navy-dark)",
                      }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body */}
          <ArticleBody html={article.body} />
        </div>
      </section>

      {/* More from Labs — dark section */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--navy-deep) 0%, var(--navy-dark) 100%)",
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
              fontSize: 13,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-secondary)",
              marginBottom: 20,
            }}
          >
            // MORE FROM LABS
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
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-2px",
                lineHeight: "48px",
                color: "#e6e6e6",
              }}
            >
              More research
            </h2>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-body)",
                fontFeatureSettings: "'dlig' 1",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.3px",
                color: "var(--text-secondary)",
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
                      fontSize: 13,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-secondary)",
                      marginBottom: 16,
                    }}
                  >
                    // {a.category.toUpperCase()}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontFeatureSettings: "'dlig' 1",
                      fontSize: 18,
                      fontWeight: 500,
                      lineHeight: 1.4,
                      letterSpacing: "-0.63px",
                      color: "#e6e6e6",
                      marginBottom: 10,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontFeatureSettings: "'dlig' 1",
                      fontSize: 15,
                      lineHeight: "21px",
                      letterSpacing: "-0.525px",
                      color: "var(--text-secondary)",
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
                    href={`/${a.slug}`}
                    className="lab-card"
                    style={{
                      display: "block",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: 4,
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
                    borderRadius: 4,
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

      <Footer />
    </div>
  );
}
