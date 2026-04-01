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
  {
    slug: "outcome-index",
    title: "The Outcome Index",
    subtitle:
      "A framework for measuring what matters in enterprise voice AI — outcomes, not tokens",
    category: "Methodology",
    author: "Synthflow Labs",
    authorRole: "",
    date: "Coming Soon",
    readTime: "",
    published: false,
    keyTakeaways: [],
    body: "",
  },
  {
    slug: "stt-provider-comparison",
    title: "STT Provider Deep Dive: Accuracy vs. Latency Trade-offs",
    subtitle:
      "Comparing Deepgram, Google, and Whisper across accents, noise, and languages",
    category: "Voice Quality",
    author: "Synthflow Labs",
    authorRole: "",
    date: "Coming Soon",
    readTime: "",
    published: false,
    keyTakeaways: [],
    body: "",
  },
];

export const categories = [
  "All",
  "Latency",
  "Voice Quality",
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
