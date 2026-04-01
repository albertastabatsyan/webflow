import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";

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

// Content is hardcoded in our data layer — not user-supplied, safe to render
function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="labs-body"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 17,
        lineHeight: 1.75,
        color: "var(--gray-900)",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
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

  const moreArticles = articles.filter((a) => a.slug !== slug);

  return (
    <div>
      {/* Header */}
      <section className="mesh-hero noise relative overflow-hidden">
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "48px 32px 64px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Nav */}
          <nav style={{ marginBottom: 48 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              ← Synthflow Labs
            </Link>
          </nav>

          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 6,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {article.category}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#fff",
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
              color: "rgba(255,255,255,0.55)",
              marginBottom: 32,
            }}
          >
            {article.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {article.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {[article.authorRole, article.date, article.readTime]
                  .filter(Boolean)
                  .join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "var(--white)" }}>
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "56px 32px 80px",
          }}
        >
          {/* Key Takeaways */}
          {article.keyTakeaways.length > 0 && (
            <div
              style={{
                marginBottom: 56,
                padding: 28,
                borderRadius: 12,
                background: "var(--purple-wash)",
                border: "1px solid rgba(91, 13, 213, 0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 3,
                    height: 18,
                    borderRadius: 2,
                    background: "var(--purple-primary)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--purple-deep)",
                  }}
                >
                  Key Takeaways
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {article.keyTakeaways.map((t, i) => (
                  <li
                    key={i}
                    style={{
                      position: "relative",
                      paddingLeft: 16,
                      marginBottom: i < article.keyTakeaways.length - 1 ? 14 : 0,
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--gray-900)",
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
                        background: "var(--purple-accent)",
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

      {/* More from Labs */}
      <section className="dot-grid" style={{ background: "var(--purple-wash)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "56px 32px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--purple-deep)",
                letterSpacing: "-0.02em",
              }}
            >
              More from Labs
            </h2>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--purple-primary)",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              View all →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {moreArticles.map((a) => (
              <div
                key={a.slug}
                className="lab-card"
                style={{
                  padding: 24,
                  background: "var(--white)",
                  borderRadius: 12,
                  border: a.published
                    ? "1px solid var(--gray-200)"
                    : "1px dashed var(--gray-200)",
                  opacity: a.published ? 1 : 0.5,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--purple-primary)",
                  }}
                >
                  {a.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "var(--purple-deep)",
                    margin: "10px 0 6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "var(--gray-600)",
                  }}
                >
                  {a.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
