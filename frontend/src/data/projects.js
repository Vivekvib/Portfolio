export const PROJECTS = [
  {
    id: "filinglens",
    num: "001",
    title: "FilingLens",
    category: "Agentic RAG over SEC 10-K Filings",
    span: "md:col-span-8",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FilingLens — financial filings analytics dashboard",
    description:
      "Agentic RAG system that reads real SEC 10-K filings from EDGAR and generates structured risk memos grounded only in retrieved evidence. A deterministic fact-check layer validates every management-narrative claim against XBRL-reported financials before it's allowed to say \u201cverified\u201d.",
    bullets: [
      "Live /analyze for any US ticker, ~15s end-to-end",
      "Narrative-vs-numbers consistency checker",
      "22 pytest tests covering ratio & grounding logic",
    ],
    tech: ["Python", "FastAPI", "ChromaDB", "Groq LLM", "scikit-learn"],
    github: "https://github.com/Vivekvib/FilingLens",
    live: "https://filing-lens-ruby.vercel.app/",
    meta: { timeline: "Jul 2026", role: "Design & Build — Solo", status: "Live in production" },
    problem:
      "Analysts skim 200-page 10-K filings and take management's narrative at face value. LLM summaries make this worse — they hallucinate confidently. FilingLens was built to answer one question: can an AI risk memo be forced to prove every claim it makes against the company's own reported numbers?",
    built: [
      "Section-aware chunker over live SEC EDGAR 10-K full text (Risk Factors / MD&A), with regex + semantic fallback.",
      "Two retrieval paths sharing one synthesis core: sentence-transformers + ChromaDB for 8 pre-baked companies, lightweight TF-IDF built in-memory per request for any other ticker.",
      "A deterministic consistency checker — pure-Python XBRL ratio math, no LLM — that downgrades every ungrounded flag before it can be labeled \u201cverified\u201d (_enforce_grounding).",
      "Cross-company Portfolio View comparing revenue growth, net-income growth and narrative reliability on one screen.",
    ],
    architecture: [
      { label: "SEC EDGAR + XBRL", sub: "10-K text & companyfacts API" },
      { label: "Chunker", sub: "section-aware splitting" },
      { label: "Retriever", sub: "Chroma embeddings / TF-IDF" },
      { label: "Groq LLM", sub: "risk memo synthesis" },
      { label: "Consistency Checker", sub: "deterministic ratio grounding" },
      { label: "FastAPI + Docket UI", sub: "/analyze · /risk-memo · /consistency" },
    ],
    decisions: [
      "Zero-budget by design: Groq free tier instead of a paid API — which is exactly why the LLM's own confidence label is treated as unreliable and enforced in code.",
      "PyTorch's default wheel bundles the entire CUDA toolkit and OOM-killed the first Render deploy — the live path was rebuilt on scikit-learn (~100MB) so it stays up in production for free.",
      "No duplicated LLM code between pipelines: risk_memo_generator and consistency_checker both accept an injected retrieve_fn.",
    ],
    metrics: [
      { k: "~15s", v: "live memo for any US ticker" },
      { k: "22", v: "pytest tests on ratio & grounding logic" },
      { k: "$0", v: "infrastructure budget" },
    ],
    gallery: [
      {
        src: "https://github.com/user-attachments/assets/02b486bb-e7a4-4f18-8969-29b8246baf21",
        alt: "FilingLens — company risk memo view",
      },
      {
        src: "https://github.com/user-attachments/assets/baabfa27-5b90-4548-9a8f-0c623ef5c786",
        alt: "FilingLens — consistency check flags",
      },
      {
        src: "https://github.com/user-attachments/assets/edeedeb5-9d96-490f-b33f-fc31b9cc10e0",
        alt: "FilingLens — portfolio comparison view",
      },
      { src: "/shots/filinglens-live.png", alt: "FilingLens — live deployment shell" },
    ],
  },
  {
    id: "foodbridge",
    num: "002",
    title: "FoodBridge",
    category: "Real-Time Food Surplus Marketplace",
    span: "md:col-span-4",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FoodBridge — food donation logistics",
    description:
      "Zero Hunger. Zero Waste. A marketplace connecting surplus food from restaurants with NGOs and shelters — dual-role auth, in-app chat, GPS-pinned listings and live countdown timers.",
    bullets: [
      "Split-claiming spins off new listings automatically",
      "Deployed with Gunicorn on Render",
    ],
    tech: ["Flask", "PostgreSQL", "Gunicorn", "Render"],
    github: "https://github.com/Vivekvib/FoodBridge",
    live: "https://foodbridge-dev.onrender.com/",
    meta: { timeline: "May 2026", role: "Design & Build — Solo", status: "Live in production" },
    problem:
      "Restaurants throw away surplus food daily while shelters a few kilometres away run short. The gap isn't supply — it's coordination: who has what, where, and for how long. FoodBridge compresses that entire negotiation into a real-time listing, a claim, and a chat thread.",
    built: [
      "Dual-role onboarding — donors (restaurants/caterers) and NGOs (shelters) each get their own dashboard and workflow from registration.",
      "Structured listings with quantity + unit, packaging, pickup address and an optional GPS pin that NGOs open directly in Google Maps.",
      "Smart split-claiming: a partial claim automatically spins off a new Active listing for the remaining quantity, so nothing sits unclaimed.",
      "Flatpickr pickup deadlines with one-click presets, client-side live countdown timers, instant feed search, per-donation chat threads, and a notification bell polling every 5 seconds.",
    ],
    architecture: [
      { label: "Donor", sub: "posts structured listing + GPS pin" },
      { label: "NGO Feed", sub: "live search + countdown timers" },
      { label: "Claim Engine", sub: "full or partial claim" },
      { label: "Split Logic", sub: "remainder becomes new listing" },
      { label: "Chat + Alerts", sub: "per-donation thread, 5s polling" },
      { label: "Flask + PostgreSQL", sub: "Gunicorn on Render" },
    ],
    decisions: [
      "Dual-mode database: PostgreSQL when DATABASE_URL is present, local SQLite otherwise — zero-config local development.",
      "Schema evolves through safe ALTER TABLE IF NOT EXISTS migrations so existing deployments never break on upgrade.",
      "Four-table schema (users, donations, notifications, messages) — deliberately small, every table earns its place.",
    ],
    metrics: [
      { k: "2", v: "roles, one marketplace" },
      { k: "5s", v: "notification polling interval" },
      { k: "4", v: "tables, zero orphans" },
    ],
    gallery: [
      { src: "/shots/foodbridge-1.png", alt: "FoodBridge — live landing page on Render" },
    ],
  },
  {
    id: "fairloan",
    num: "003",
    title: "FairLoan",
    category: "Transparent Digital Lending Prototype",
    span: "md:col-span-5",
    image:
      "https://images.unsplash.com/photo-1634097537825-b446635b2f7f?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FairLoan — transparent lending interface",
    description:
      "A responsible-lending prototype built on RBI Digital Lending Guidelines — plain-language cost disclosure, explainable risk decisions, privacy-first analytics, and zero dark patterns. All money math in Decimal, never floats.",
    bullets: [
      "Comprehension-before-conversion UX",
      "Explainable, auditable credit decisions",
    ],
    tech: ["Next.js 14", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Vivekvib/Fairloan",
    live: "https://frontend-ruby-ten-67.vercel.app/",
    meta: { timeline: "Sep 2026", role: "Product + Full-Stack — Solo", status: "Live prototype · synthetic data" },
    problem:
      "Digital lending in India is riddled with dark patterns — hidden fees, pre-checked consent, countdown-timer pressure. FairLoan asks what a lending product looks like when it is designed around the borrower's comprehension instead of the lender's conversion rate, using RBI's Digital Lending Guidelines as the spec.",
    built: [
      "Comprehension gates: users cannot proceed past any screen without the information needed for an informed decision — no 'instant approval' language anywhere.",
      "Explainable risk model thinking — every credit decision ships with its reasons, and every regulatory claim is labelled: requirement vs recommended practice vs prototype assumption.",
      "Privacy-first analytics: events are session-scoped, not user-linked by default; every record carries an is_demo flag.",
      "Full product artefacts alongside the code: PRD, persona, journey map and user research in docs/.",
    ],
    architecture: [
      { label: "Next.js 14", sub: "App Router + Tailwind + shadcn/ui" },
      { label: "Typed REST API", sub: "/api/v1 contract" },
      { label: "FastAPI", sub: "SQLAlchemy + Alembic migrations" },
      { label: "PostgreSQL", sub: "Decimal money math, no floats" },
      { label: "docs/", sub: "PRD · persona · journey map" },
    ],
    decisions: [
      "All monetary calculations use Python's Decimal type — floating-point errors are unacceptable in lending, even in a prototype.",
      "Prototype honesty as a feature: a persistent disclaimer on every screen; synthetic data only; no real personal data collected.",
      "Product discovery is part of the deliverable — the repo demonstrates research methodology, not just implementation.",
    ],
    metrics: [
      { k: "0", v: "dark patterns, by audit" },
      { k: "3", v: "regulatory label types" },
      { k: "100%", v: "synthetic data" },
    ],
    gallery: [
      { src: "/shots/fairloan-1.png", alt: "FairLoan — landing page with full cost disclosure and typical-app comparison" },
      { src: "/shots/fairloan-2.png", alt: "FairLoan — eligibility pre-check, step 1 of 5" },
    ],
    repoTree: [
      ["fairloan/", ""],
      ["├── frontend/", "Next.js 14 (App Router) + Tailwind CSS + shadcn/ui"],
      ["├── backend/", "FastAPI + SQLAlchemy + Alembic + PostgreSQL/SQLite"],
      ["│   ├── app/seed/", "synthetic seed data (is_demo = true)"],
      ["│   └── tests/", "pytest suite"],
      ["└── docs/", "PRD · persona · journey map · user research"],
    ],
    disclaimer:
      "Educational portfolio prototype — synthetic data only, no real loans or credit decisions, not RBI-compliant, not for production.",
  },
  {
    id: "fund_predictor",
    num: "004",
    title: "Fund Predictor",
    category: "Systemic Liquidity Contagion & Fund Herding Engine",
    span: "md:col-span-7",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "Fund Predictor — quantitative risk engine",
    description:
      "A quant pipeline that empirically measures hidden liquidity risk in Indian small & mid-cap mutual funds. Amihud Illiquidity, Days-to-Liquidate and Price Impact models on 90 days of live NSE data, with an interactive stress-test command center.",
    bullets: [
      "Simulate redemption shocks & fire-sale spirals",
      "Fuzzy entity matching over messy AMFI disclosures",
      "Grades fund managers: herd followers vs contrarians",
    ],
    tech: ["Python", "Pandas", "yfinance", "Chart.js", "Vercel"],
    github: "https://github.com/Vivekvib/Fund_Predictor",
    live: "https://fund-predictor.vercel.app/",
    meta: { timeline: "Jun 2026", role: "Design & Build — Solo", status: "Live dashboard" },
    problem:
      "When dozens of mutual funds pile into the same thinly-traded small-cap stocks, a redemption shock forces simultaneous fire sales — crushing prices and NAVs across the board. Standard performance metrics hide this completely. This engine makes the invisible contagion risk measurable, trackable and visual.",
    built: [
      "Data engineering over messy AMFI disclosures: SHA-256 dedup of portfolio files, fuzzy string matching to map irregular fund names, custom parsers for corrupted CSV footers that break standard Pandas.",
      "Quantitative risk engine: 90-day live NSE data via yfinance with a heuristic ticker mapper (override dictionary for edge cases), computing ADV, Amihud scores and consolidated risk reports.",
      "Fund Overlap Map visualising the most crowded trades in the industry, with behavioural profiling that grades managers as Herd Followers vs Contrarians.",
      "Interactive Stress Test command center: adjust fund AUM, allocation and shock severity to simulate a crash and see DTL + Price Impact instantly.",
    ],
    architecture: [
      { label: "Raw AMFI CSVs", sub: "monthly portfolio disclosures" },
      { label: "Dedup + Consolidate", sub: "SHA-256 · fuzzy entity match" },
      { label: "Overlap Analysis", sub: "non-equity stripped, stocks aggregated" },
      { label: "Risk Engine", sub: "yfinance · Amihud · ADV · DTL" },
      { label: "Dashboards", sub: "overlap map + stress-test simulator" },
    ],
    decisions: [
      "Institutional models, not vanity metrics: Amihud Illiquidity, Days-to-Liquidate and Estimated Price Impact — the same math used by real risk desks.",
      "A heuristic ticker mapper with manual overrides was a deliberate POC trade; production would plug into an ISIN master feed like Bloomberg/Refinitiv.",
      "Strict 20% participation cap in stress tests — a fund may never account for more than a fifth of daily volume without moving the market.",
    ],
    formulas: [
      {
        name: "Amihud Illiquidity",
        formula: "ILLIQ = (1/N) · Σ |Ri| / (Vi × Pi)",
        note: "Price impact of every ₹1 of volume — higher means violent drops on forced selling.",
      },
      {
        name: "Days to Liquidate",
        formula: "DTL = (S_held × %shock) / (ADV × %participation)",
        note: "Days to exit a position without crashing the market, under a participation cap.",
      },
      {
        name: "Estimated Price Impact",
        formula: "Impact = (S_sell × P_current) × Amihud × 100",
        note: "Total % price drop caused directly by the fund's own forced selling.",
      },
    ],
    metrics: [
      { k: "327", v: "unique stocks analysed" },
      { k: "35", v: "high-overlap contagion candidates" },
      { k: "90d", v: "live NSE data window" },
    ],
    gallery: [
      { src: "/shots/fundpredictor-2.png", alt: "Fund Predictor — contagion dashboard header" },
      { src: "/shots/fundpredictor-1.png", alt: "Fund Predictor — fund overlap map" },
    ],
  },
];
