import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles
    .filter((a) => a.published)
    .map((a) => ({ slug: a.slug }));
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

// Content is hardcoded in our data layer, not user-supplied — safe to render as HTML
function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="labs-article-body"
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "0 24px 80px",
        fontFamily: "var(--font-sans)",
        fontSize: 18,
        lineHeight: 1.7,
        color: "#141414",
        background: "#fff",
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

  const moreArticles = articles.filter(
    (a) => a.slug !== slug && a.published
  );

  return (
    <div>
      {/* Header */}
      <section
        style={{
          padding: "100px 24px 60px",
          background: "var(--bg-deep)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              marginBottom: 20,
              padding: "4px 12px",
              borderRadius: 999,
              background: "var(--accent-green-bg)",
              color: "var(--accent-green)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {article.category}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 52,
              fontWeight: 500,
              lineHeight: 1.15,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            {article.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 20,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
            }}
          >
            {article.subtitle}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 16,
              fontFamily: "var(--font-sans)",
              fontSize: 14,
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
      </section>

      {/* Key Takeaways */}
      {article.keyTakeaways.length > 0 && (
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto 48px",
            padding: "24px 28px",
            borderLeft: "4px solid var(--accent-purple)",
            borderRadius: 8,
            background: "var(--takeaway-bg)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 16,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#110229",
              marginBottom: 12,
            }}
          >
            Key Takeaways
          </h3>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {article.keyTakeaways.map((t, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#110229",
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Body */}
      <ArticleBody html={article.body} />

      {/* More from Labs */}
      <section
        style={{
          padding: "60px 24px 80px",
          background: "var(--bg-deep)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 24,
              fontWeight: 500,
              color: "#fff",
              marginBottom: 32,
            }}
          >
            More from Labs
          </h2>
          {moreArticles.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 24,
                marginBottom: 40,
              }}
            >
              {moreArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  style={{
                    display: "block",
                    padding: 20,
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    background: "var(--bg-card)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.2s",
                  }}
                >
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
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {a.category}
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
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {a.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
              More research coming soon.
            </p>
          )}
          <Link
            href="/"
            style={{
              color: "var(--accent-purple-light)",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            View all research →
          </Link>
        </div>
      </section>
    </div>
  );
}
