export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  keyTakeaways: string[];
  body: string;
  published: boolean;
};

export const articles: Article[] = [
  {
    slug: "aurora-voice-ai-copilot",
    title: "The Builder UI Was a Necessary Stage. Aurora Is What Comes Next.",
    subtitle: "Aurora is Synthflow's AI co-pilot that builds, configures, and manages voice AI agents through natural language — built for operators managing enterprise-scale deployments.",
    category: "Vision",
    author: "Albert Astabatsyan",
    authorRole: "Co-Founder & CEO",
    date: "April 2026",
    readTime: "5 min read",
    published: true,
    keyTakeaways: [
      "Building a production voice agent takes 40 to 120 hours. Aurora turns it into a conversation.",
      "45% of support tickets are configuration tasks. Aurora eliminates that entire category.",
      "42% of enterprises abandoned AI projects in 2025 because they couldn't sustain what they built. Aurora keeps agents improving automatically.",
    ],
    body: `
<div style="margin: 0 0 48px 0; padding: 80px 40px; background: repeating-linear-gradient(45deg, #F8FAFC, #F8FAFC 10px, #F0F2F5 10px, #F0F2F5 20px); border-radius: 8px; border: 2px dashed #D0D5DD; text-align: center;">
<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A0A8B8" stroke-width="1.5" style="margin-bottom: 12px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
<div style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: #8892A4;">Hero image — Aurora product screenshot or demo GIF</div>
<div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #A0A8B8; margin-top: 4px;">Recommended: 1200 × 630px</div>
</div>

<p>Over the past two years, we have watched a pattern repeat itself: the AI gets smarter, the platform gets more capable, and the people who actually operate voice AI at scale still spend most of their time clicking through configuration menus.</p>
<p>We built the menus. We made them better. We added more settings, more toggles, more tabs. That era is ending. The product we built to address what comes next is called <strong>Aurora</strong>.</p>
<p>The people who run voice AI in production are not power users of builder software. They are ops managers at agencies, VPs of customer experience, franchise leads who know their business fluently but have no idea which dropdown controls the transfer behavior for unanswered calls. Aurora speaks their language.</p>

<h2>Building an Agent Should Not Be a Project</h2>
<p>Based on time-study data from production deployments, building a production-grade voice agent from scratch takes <strong>40 to 120 hours</strong> before a single call goes live. Prompts, persona, knowledge base, call transfers, test cases, edge-case handling — each one a configuration step that requires platform expertise the operator does not have.</p>
<!-- chart:build-time -->
<p>Aurora replaces that entire process. Upload a client's operations manual, an FAQ document, a call transcript from their existing system. Aurora reads it and generates a production-ready agent — prompts written, knowledge base populated, call transfer logic configured. Not a template. An agent that knows the business.</p>
<p>Among agents that do get deployed on Synthflow, 74% go live within 24 hours — the platform is not slow, operators are just blocked at the configuration step before that. Remove the block, and they ship the same day.</p>

<h2>Updating 700 Agents Should Not Require a Team</h2>
<p>From six months of internal support data: nearly half — <strong>45%</strong> — of all tickets filed on Synthflow are configuration tasks. Not bugs. Not outages. Configuration. Things the platform already does, that operators cannot figure out how to change at scale.</p>
<!-- chart:support-split -->
<p>One agency partner manages 700 voice AI agents across hundreds of locations. When a prompt needs updating — a holiday schedule change, a new product line, a compliance adjustment — there was no path to push that update at scale. It was agent by agent, dropdown by dropdown.</p>
<div style="margin: 28px 0; padding: 24px 28px; border-left: 3px solid #8639ff; background: #FAFAFE; border-radius: 0 4px 4px 0;">
<p style="margin: 0 0 12px 0; font-style: italic; font-size: 16px; line-height: 1.6; color: #1A1A2E;">"[Customer quote about bulk updates — awaiting Slava/Telebuddy approval]"</p>
<p style="margin: 0; font-size: 13px; color: #66748A;">— Name, Title, Company</p>
</div>
<p>With Aurora: describe the change once, review a diff of what will be modified, confirm. The update propagates across every agent that needs it. What used to be a staffing problem becomes a one-minute conversation.</p>
<p><strong>Review before every change.</strong> Aurora shows you exactly what will change before touching a single setting. Nothing is applied without your confirmation. Every session produces a full change log — SOC 2 Type II and HIPAA compliant.</p>
<p><strong>If that is your deployment — Aurora was built for you.</strong> <a href="https://synthflow.ai/aurora" style="color: #1A1A2E; font-weight: 600;">Apply for early access →</a></p>

<h2>Agents That Improve Instead of Drift</h2>
<p>Gartner found that <strong>42% of enterprises</strong> with active AI initiatives abandoned them entirely by early 2025 (Gartner, 2025). Not because the AI failed — because they could not sustain, evaluate, and improve what they built. Implementation is where AI projects die.</p>
<p>Most voice AI agents go live and never get better. Aurora changes that. It reviews past calls, surfaces what is drifting, generates adversarial test cases based on the agent's actual configuration, and flags gaps before a single real caller hits the edge case your team missed. The gap between a demo and a production deployment has always been systematic evaluation. Aurora makes that evaluation automatic and continuous.</p>
<div style="margin: 28px 0; padding: 24px 28px; border-left: 3px solid #8639ff; background: #FAFAFE; border-radius: 0 4px 4px 0;">
<p style="margin: 0 0 12px 0; font-style: italic; font-size: 16px; line-height: 1.6; color: #1A1A2E;">"[Customer quote about QA / continuous improvement — awaiting approval]"</p>
<p style="margin: 0; font-size: 13px; color: #66748A;">— Name, Title, Company</p>
</div>

<h2>Insights No Dashboard Can Surface</h2>
<p>When you are processing thousands of calls, the patterns that matter are buried in conversations — not in dashboards. Which objections are agents failing to handle? Which call flows are generating transfers that should be contained? Where are scripts drifting from the intended behavior?</p>
<p>Aurora finds these patterns and turns them into actionable changes you can review and apply.</p>

<h2>The Thesis</h2>
<p>The builder UI was a transitional form — the way the "horseless carriage" was a necessary way to introduce the car. The operator should describe what they need. The platform should figure out the configuration.</p>
<p>Three competitors confirmed this thesis in March 2026 — Bland's Norm, Sierra's Ghostwriter, Vapi's Composer. Each generates a new agent from a prompt. None operates a portfolio of 700 existing agents, pushes updates at fleet scale, or runs adversarial QA before a caller hits your system. They built horseless carriages. Aurora is the car — fleet management, push updates, adversarial QA — built on a production platform running 10M calls a month, not a blank canvas.</p>

<h2>Apply for the Aurora Design Partner Program</h2>
<p>Closed beta. <strong>20 design partners in Q2.</strong> Direct product team support and priority access.</p>
<p><a href="https://synthflow.ai/aurora" style="display: inline-block; padding: 14px 32px; background: #1A1A2E; color: #fff; font-weight: 600; text-decoration: none; border-radius: 4px; font-size: 16px;">Apply for the Aurora Design Partner Program →</a></p>
<div style="margin: 32px 0; padding: 20px 24px; background: #f5f7fa; border-radius: 4px; border: 1px solid #E3E8F0;">
<p style="margin: 0; font-size: 14px; color: #555;">Synthflow powers 65M+ calls and 10M+/month worldwide. SOC 2 Type II, HIPAA, GDPR, ISO 27001 certified. Berlin.</p>
<p style="margin: 12px 0 0 0; font-size: 14px; color: #555;">Coming next: a technical deep-dive on bulk operations across 700 agents, and our first named design partner story.</p>
</div>
`,
  },
  {
    slug: "voice-ai-builder-ui-not-end-state",
    title: "[OLD] The Builder UI Was a Necessary Stage. It's Not the End State.",
    subtitle: "The original vision piece — before the data came in",
    category: "Vision",
    author: "Albert Astabatsyan",
    authorRole: "Co-Founder & CEO",
    date: "April 2026",
    readTime: "7 min read",
    published: false,
    keyTakeaways: [
      "A field deployment engineer spends roughly 80 hours building a production-grade voice agent from scratch. Call transfer configuration alone takes 45 minutes per sub-account.",
      "The builder UI was a transitional form — the operator should describe what they need, and the platform should figure out the configuration.",
      "Aurora is an AI co-pilot that operates the full Synthflow platform through natural language, turning days of configuration into a single conversation.",
    ],
    body: `
<h2>The Configuration Bottleneck</h2>
<p>Over the past two years, we have watched a pattern repeat itself with striking consistency across every deployment we have seen: the AI gets smarter, the platform gets more capable, and the people who actually operate voice AI at scale still spend most of their time clicking through configuration menus.</p>
<p>We built the menus. We made them better. We added more settings, more toggles, more tabs. Every feature request became another panel in the UI. And for a while, that was the right answer — because the technology was new and operators needed to see and control every moving part.</p>
<p>That era is ending.</p>

<h2>Who Actually Runs Voice AI</h2>
<p>The people who run voice AI in production are not power users of builder software. They are operations managers at agencies handling fifty client accounts. They are VPs of customer experience at healthcare companies overseeing thirty agent deployments. They are franchise operators who know their business fluently — the call flows, the escalation paths, the edge cases customers hit at 2 AM — but who have no idea which dropdown controls the transfer behavior for unanswered calls.</p>
<p>We spent the last year talking to these operators. The numbers are consistent across every deployment we studied. A field deployment engineer building a production-grade voice agent from scratch — prompts, persona, knowledge base, call transfers, test cases, edge-case handling — spends roughly 80 hours before a single call goes live. Call transfer configuration alone takes about 45 minutes per sub-account. A prompt update across a portfolio of 700 agents? There is no button for that. You either build a team to do it manually or you accept that your oldest deployments drift out of date.</p>
<p>This is the real bottleneck in voice AI, and it has nothing to do with the AI model.</p>

<h2>The Thesis</h2>
<p>The builder UI was a transitional form. Necessary, but transitional — the way the "horseless carriage" was a necessary way to introduce the car, even though it was the wrong frame for understanding what cars would become.</p>
<p>Every voice AI platform, including ours, has been building increasingly sophisticated GUIs. More settings, more control surfaces, more automation rules you wire up through visual interfaces. And all of it assumes the same thing: that the operator's job is to become fluent in the platform, so the platform can do what the operator already knows.</p>
<p>That assumption is backwards.</p>
<p>The operator should describe what they need. The platform should figure out the configuration. The interface should be a conversation, not a control panel.</p>

<h2>What Became Aurora</h2>
<p>Last year, we shipped four coding paradigms on the same platform — pro-code, low-code, no-code, and generative-AI-assisted. That last one was the signal. The moment we let operators describe agent behavior in plain language and have the system translate it into configuration, two things happened: build times dropped dramatically, and a new class of operator — people who knew the business but not the platform — started building agents that were as good as what our power users produced.</p>
<p>That experiment became Aurora.</p>
<p>Aurora is not a feature we added to Synthflow. It is an AI co-pilot that operates the platform. It sits on top of our full API surface — every agent configuration, every knowledge base, every sub-account, every call routing rule — and it takes natural language instructions and executes them directly, with confirmation before any change is saved.</p>
<p>Upload a client's operations manual, their FAQ document, a call transcript from their existing system. Aurora reads it and generates a production-ready agent — prompts, persona, knowledge base populated, call transfer logic configured. Not a template. An agent that knows the business. A deployment that used to take days of scoping and configuration now happens in a single session.</p>

<h2>Operating at Scale</h2>
<p>Building agents was never the hard part at scale. The hard part is operating them.</p>
<p>One of our agency partners manages over 700 voice AI agents across hundreds of client locations. When a prompt needs updating — a holiday schedule change, a new product line, a compliance adjustment — there was no path to push that update at scale. It was agent by agent, dropdown by dropdown. With Aurora, the operator describes the change once, reviews a diff of what will be modified, confirms, and the update propagates across every agent that needs it. What used to be a staffing problem becomes a one-minute conversation.</p>
<p>Another partner runs fifty sub-accounts. Before Aurora, onboarding a new client meant a known overhead: roughly ten configuration emails per client, each triggering manual changes. Now, the operator describes the client's requirements to Aurora in a chat window, reviews the proposed setup, and launches. The operational leverage is not incremental. It changes the unit economics of running a voice AI business.</p>

<h2>Adversarial QA</h2>
<p>One capability we did not plan but that turned out to matter most: adversarial QA.</p>
<p>Before Aurora, testing a voice agent meant deploying it and hoping the edge cases were not too painful when real callers found them. Aurora generates adversarial test cases based on the agent's actual configuration — the kinds of questions, objections, and unexpected inputs that will surface in production. It runs simulated calls and flags gaps before a single real call is placed. The gap between a demo and a production deployment has always been systematic evaluation. Aurora makes that evaluation automatic and continuous.</p>

<h2>What Happens Next</h2>
<p>Within six to eight months, we expect the majority of interactions with Synthflow to happen through Aurora rather than through the traditional UI. Not because we are removing the UI — it will always be there for users who want direct control. But because conversation is simply faster for the tasks operators perform every day. Updating a knowledge base. Adjusting call routing. Reviewing agent performance. Onboarding a new client.</p>
<p>The future of managing a voice AI platform is not a better dashboard. It is a conversation with your platform — one that understands your agents, knows your business, and handles the configuration work so your team can focus on outcomes.</p>
<p>We built Aurora because the configuration layer was the last bottleneck standing between voice AI and the scale it is capable of. The models are ready. The telephony infrastructure is ready. The compliance certifications are in place. What was missing was a way for operators to work at the speed of their expertise, not the speed of a UI.</p>
<p>That is what Aurora changes.</p>
`,
  },
  {
    slug: "latency-benchmarks",
    title: "Voice AI Latency: How We Measure and Where We Stand",
    subtitle: "End-to-end latency analysis across STT, LLM, and TTS",
    category: "Latency",
    author: "Naaman Newbold",
    authorRole: "Head of Engineering",
    date: "April 2026",
    readTime: "8 min read",
    published: true,
    keyTakeaways: [
      "Synthflow achieves sub-500ms p50 TTFT across production workloads — verified on live enterprise traffic, not synthetic benchmarks.",
      "The latency stack is not monolithic. STT, LLM routing, and TTS each contribute distinct latency profiles that must be measured independently.",
      "p95 matters more than p50 for enterprise reliability. A system that averages 400ms but spikes to 2s on 5% of calls will lose customer trust.",
    ],
    body: `
<h2>Why Latency Benchmarks Matter</h2>
<p>Every voice AI vendor claims "low latency." Few publish the numbers. Fewer still measure what actually matters: the time from when a human stops speaking to when the AI begins its response — the conversational turn-taking gap that determines whether an interaction feels natural or robotic.</p>
<p>We decided to measure it ourselves. Not a synthetic benchmark on a demo endpoint, but production traffic across thousands of enterprise calls. This is what we found.</p>

<h2>The Three-Layer Latency Stack</h2>
<p>Voice AI latency is not a single number. It's the sum of three distinct processing stages, each with its own performance characteristics:</p>
<p><strong>Speech-to-Text (STT)</strong> — Converting audio to text. Latency depends on the provider, audio quality, language, and whether you're using streaming or batch processing. We measure this as the time from end-of-speech detection to the first token of transcribed text.</p>
<p><strong>LLM Processing</strong> — Generating the response. This is where model selection, prompt complexity, and routing strategy have the biggest impact. Time-to-first-token (TTFT) is the critical metric here.</p>
<p><strong>Text-to-Speech (TTS)</strong> — Converting the response back to audio. Modern TTS can begin streaming audio from the first text token, so this stage often overlaps with LLM processing.</p>

<h2>Our Measurement Methodology</h2>
<p>We instrumented our production pipeline to capture precise timestamps at each stage boundary. All measurements are taken on live enterprise traffic — not synthetic test calls — to reflect real-world conditions including network variability, diverse accents, and complex multi-turn conversations.</p>
<p>We report three percentiles:</p>
<ul>
<li><strong>p50 (median)</strong> — What most calls experience</li>
<li><strong>p90</strong> — The experience for 9 out of 10 calls</li>
<li><strong>p95</strong> — The tail latency that enterprise SLAs must account for</li>
</ul>

<h2>The Results</h2>
<p>Across our production fleet over a 30-day measurement window:</p>
<table>
<thead><tr><th>Stage</th><th>p50</th><th>p90</th><th>p95</th></tr></thead>
<tbody>
<tr><td>STT</td><td>120ms</td><td>180ms</td><td>220ms</td></tr>
<tr><td>LLM (TTFT)</td><td>180ms</td><td>320ms</td><td>450ms</td></tr>
<tr><td>TTS (first audio)</td><td>90ms</td><td>140ms</td><td>180ms</td></tr>
<tr><td><strong>Total (end-to-end)</strong></td><td><strong>390ms</strong></td><td><strong>640ms</strong></td><td><strong>850ms</strong></td></tr>
</tbody>
</table>
<p>These numbers represent the full conversational gap — from the moment a caller stops speaking to the moment they hear the AI begin its response. The p50 of 390ms sits comfortably within the 400-600ms range that conversational research identifies as natural turn-taking latency in human dialogue.</p>

<h2>What We Learned</h2>
<p>The LLM stage dominates the variance. STT and TTS are relatively stable — their p95 is only 1.5-2x their p50. But LLM processing shows 2.5x variance, driven by prompt complexity, context window size, and model routing decisions.</p>
<p>This is why we invest heavily in intelligent model routing. Simple queries get fast models. Complex reasoning gets capable models. The routing decision itself adds single-digit milliseconds but can save hundreds.</p>

<h2>How We Compare</h2>
<p>We won't name competitors, but we will say this: many published benchmarks measure demo endpoints with simple prompts and no real conversational context. Our numbers come from production traffic with enterprise-grade prompts, tool calls, and multi-turn context.</p>
<p>When you evaluate voice AI latency, ask for production numbers. Ask for p95, not just p50. Ask whether the benchmark includes the full conversational pipeline or just the LLM hop.</p>
<p>The numbers don't lie. But the methodology matters as much as the result.</p>
`,
  },
];

export const categories = [
  "All",
  "Latency",
  "Vision",
  "Architecture",
  "Methodology",
  "Infrastructure",
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getPublishedArticles(): Article[] {
  return articles.filter((a) => a.published);
}
