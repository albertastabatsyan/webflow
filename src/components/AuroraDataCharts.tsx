const C = {
  navy: "var(--navy-dark)",
  navyDeep: "var(--navy-deep)",
  violet: "var(--brand-violet)",
  violetLight: "var(--brand-violet-light)",
  label: "var(--text-secondary)",
  textLabel: "var(--text-label)",
  border: "var(--border)",
  bg: "var(--light-bg)",
  white: "var(--white)",
};

const fontBody = "var(--font-body)";
const fontMono = "var(--font-mono)";
const dlig = "'dlig' 1";

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div style={{ margin: "40px 0" }}>{children}</div>;
}

function ChartTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px 28px",
        borderBottom: `1px solid ${C.border}`,
        fontFamily: fontMono,
        fontSize: 13,
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: C.label,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Build Time Visual — "40–120 hours → one conversation"
 * Hero stat for Section 1: Building an Agent Should Not Be a Project
 */
export function BuildTimeChart() {
  return (
    <Wrapper>
      <div
        style={{
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
        }}
      >
        <ChartTitle>Deployment Used to Take a Sprint</ChartTitle>
        <div style={{ display: "flex" }}>
          {/* Before — dark */}
          <div
            style={{
              flex: 1,
              padding: "36px 28px",
              background: C.navyDeep,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Without Aurora
            </div>
            <div
              style={{
                fontFamily: fontBody,
                fontFeatureSettings: dlig,
                fontSize: 48,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              40–120
            </div>
            <div
              style={{
                fontFamily: fontBody,
                fontFeatureSettings: dlig,
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "-0.3px",
              }}
            >
              hours to deploy one agent
            </div>
          </div>

          {/* After — violet accent */}
          <div
            style={{
              flex: 1,
              padding: "36px 28px",
              background: C.violetLight,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 11,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: C.violet,
                opacity: 0.6,
              }}
            >
              With Aurora
            </div>
            <div
              style={{
                fontFamily: fontBody,
                fontFeatureSettings: dlig,
                fontSize: 48,
                fontWeight: 700,
                color: C.violet,
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              1
            </div>
            <div
              style={{
                fontFamily: fontBody,
                fontFeatureSettings: dlig,
                fontSize: 15,
                color: C.violet,
                opacity: 0.7,
                letterSpacing: "-0.3px",
              }}
            >
              conversation
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

/**
 * Support Ticket Visual — "45% are configuration" as a pie chart
 * Hero stat for Section 2: Updating 700 Agents Should Not Require a Team
 */
export function SupportSplitChart() {
  const configPct = 45;
  const radius = 80;
  const stroke = 28;
  const circumference = 2 * Math.PI * radius;
  const configArc = (configPct / 100) * circumference;
  const otherArc = circumference - configArc;

  return (
    <Wrapper>
      <div
        style={{
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
        }}
      >
        <ChartTitle>Nearly Half Your Tickets Are Self-Inflicted</ChartTitle>
        <div
          style={{
            padding: "40px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
          }}
        >
          {/* Pie / donut */}
          <div style={{ position: "relative", width: 192, height: 192, flexShrink: 0 }}>
            <svg
              width="192"
              height="192"
              viewBox="0 0 192 192"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="96"
                cy="96"
                r={radius}
                fill="none"
                stroke={C.border}
                strokeWidth={stroke}
                strokeDasharray={`${otherArc} ${circumference}`}
                strokeDashoffset={0}
              />
              <circle
                cx="96"
                cy="96"
                r={radius}
                fill="none"
                stroke={C.navy}
                strokeWidth={stroke}
                strokeDasharray={`${configArc} ${circumference}`}
                strokeDashoffset={-otherArc}
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: fontBody,
                  fontFeatureSettings: dlig,
                  fontSize: 40,
                  fontWeight: 700,
                  color: C.navy,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                45%
              </span>
              <span
                style={{
                  fontFamily: fontBody,
                  fontFeatureSettings: dlig,
                  fontSize: 13,
                  color: C.label,
                  marginTop: 4,
                }}
              >
                configuration
              </span>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: C.navy, flexShrink: 0 }} />
              <span style={{ fontFamily: fontBody, fontFeatureSettings: dlig, fontSize: 15, fontWeight: 600, color: C.navy }}>
                Configuration tasks
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: C.border, flexShrink: 0 }} />
              <span style={{ fontFamily: fontBody, fontFeatureSettings: dlig, fontSize: 15, fontWeight: 600, color: C.label }}>
                Everything else
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
