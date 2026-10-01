"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CapstoneResearchPaper() {
  const [activeTierFilter, setActiveTierFilter] = useState<string>("ALL");

  // Sample data from the actual Colab execution run
  const sampleRecommendations = [
    {
      rank: 1,
      contentId: "content_ffec5fb05d54ccb6",
      riskScore: 0.985,
      tier: "P1: CRITICAL_REFRESH",
      reasonCode: "VELOCITY_DROP",
      past7dClicks: 0.0,
      avgPos: 15.0,
      velocityRatio: 0.0,
      action: "Comprehensive content rewrite, search intent realignment, update outdated data.",
    },
    {
      rank: 2,
      contentId: "content_fffdbb43798f9794",
      riskScore: 0.978,
      tier: "P1: CRITICAL_REFRESH",
      reasonCode: "VELOCITY_DROP + POSITION_SLIP",
      past7dClicks: 0.0,
      avgPos: 17.5,
      velocityRatio: 0.0,
      action: "Audit competitor ranking jumps, refresh title tag, expand thin topical sections.",
    },
    {
      rank: 3,
      contentId: "content_27fd3581fc3217d1",
      riskScore: 0.964,
      tier: "P1: CRITICAL_REFRESH",
      reasonCode: "VELOCITY_DROP",
      past7dClicks: 1.0,
      avgPos: 14.2,
      velocityRatio: 0.12,
      action: "Re-index check, verify broken outbound links, reinforce internal contextual backlinks.",
    },
    {
      rank: 4,
      contentId: "content_281b9da5da87a829",
      riskScore: 0.952,
      tier: "P1: CRITICAL_REFRESH",
      reasonCode: "VELOCITY_DROP",
      past7dClicks: 0.0,
      avgPos: 16.8,
      velocityRatio: 0.0,
      action: "Update core statistics, add recent industry case studies, optimize heading hierarchy.",
    },
    {
      rank: 5,
      contentId: "content_2902b49378acde20",
      riskScore: 0.941,
      tier: "P1: CRITICAL_REFRESH",
      reasonCode: "POSITION_SLIP",
      past7dClicks: 2.0,
      avgPos: 18.4,
      velocityRatio: 0.25,
      action: "Revamp meta description for higher CTR, re-target secondary search queries.",
    },
    {
      rank: 6,
      contentId: "content_292f93fb54fc30d3",
      riskScore: 0.645,
      tier: "P2: MONITOR_POSITION",
      reasonCode: "POSITION_SLIP",
      past7dClicks: 5.0,
      avgPos: 11.2,
      velocityRatio: 0.68,
      action: "Monitor weekly SERP movement, test title tag A/B variant, check keyword cannibalization.",
    },
    {
      rank: 7,
      contentId: "content_29424f64d6768697",
      riskScore: 0.582,
      tier: "P2: MONITOR_POSITION",
      reasonCode: "CTR_ATTRITION",
      past7dClicks: 6.0,
      avgPos: 8.5,
      velocityRatio: 0.72,
      action: "Improve snippet visual appeal, verify rich snippet / FAQ schema markup.",
    },
    {
      rank: 8,
      contentId: "content_295ca7641c8bb8e5",
      riskScore: 0.531,
      tier: "P2: MONITOR_POSITION",
      reasonCode: "POSITION_SLIP",
      past7dClicks: 7.0,
      avgPos: 9.8,
      velocityRatio: 0.74,
      action: "Strengthen topical authority with supporting cluster articles.",
    },
    {
      rank: 9,
      contentId: "content_295f2069ef4959f7",
      riskScore: 0.320,
      tier: "P3: STABLE_PERFORMER",
      reasonCode: "STABLE_MOMENTUM",
      past7dClicks: 14.0,
      avgPos: 4.2,
      velocityRatio: 1.02,
      action: "Protect status quo. No editorial edits required. Maintain backlink hygiene.",
    },
    {
      rank: 10,
      contentId: "content_27b064ec160a30cb",
      riskScore: 0.215,
      tier: "P3: STABLE_PERFORMER",
      reasonCode: "STABLE_MOMENTUM",
      past7dClicks: 22.0,
      avgPos: 3.1,
      velocityRatio: 1.15,
      action: "Evergreen top performer. Extract content framework as internal best-practice benchmark.",
    },
  ];

  const filteredRecommendations =
    activeTierFilter === "ALL"
      ? sampleRecommendations
      : sampleRecommendations.filter((item) => item.tier.startsWith(activeTierFilter));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-30"></div>
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Paper Header & Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Research Paper
            </span>
            <a
              href="https://github.com/Rislantrs/flyrank-ml-internship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Research Paper Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-14">
        
        {/* ========================================================= */}
        {/* SECTION 1: TITLE & ABSTRACT */}
        {/* ========================================================= */}
        <section id="title-abstract" className="space-y-6">
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono font-semibold">
                FlyRank ML Internship Capstone
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono font-semibold">
                Lane 2: Refresh / Content Opportunity Scoring
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Predictive Content Decay Modeling &amp; Ranking Position Drift: An Automated Search Intelligence Engine for Editorial Refresh Prioritization
            </h1>

            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
              <p>
                <strong className="text-slate-200">Author:</strong> M Rislan Tristansyah
              </p>
              <p>
                <strong className="text-slate-200">Affiliation:</strong> Universitas Pendidikan Indonesia (UPI)
              </p>
              <p>
                <strong className="text-slate-200">Validated Dataset:</strong> March 2026 Panel (50k Analyzed Records)
              </p>
            </div>
          </div>

          {/* Abstract Card (Strict 5-sentence formulation) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-cyan-500/30 shadow-xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Abstract
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                Organic search content inevitably experiences traffic decay over time, yet enterprise editorial teams lack automated early-warning systems to prioritize maintenance before search authority collapses. 
                To address this operational vulnerability, we formulated an empirical search intelligence framework using the FlyRank warehouse daily performance panel across March 2026. 
                We engineered strict anti-leakage trailing features—including 7-day click velocity ratio, ranking position drift, and trailing CTR—to forecast forward 14-day traffic decay risk without lookahead bias. 
                On a strict chronological out-of-time test split of 20,000 instances, our Random Forest classifier achieved a ROC-AUC of 0.842 and top-tier precision, significantly outperforming heuristic and linear baselines while maintaining only 25 false positives. 
                The resulting decision-support engine automatically partitions monitored content into prioritized action tiers (P1 Critical Refresh, P2 Monitor Position, P3 Stable) with diagnostic reason codes, converting passive audits into proactive editorial refresh sprints.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: INTRODUCTION & PROBLEM STATEMENT */}
        {/* ========================================================= */}
        <section id="introduction" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">01 / Introduction</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Problem Statement &amp; Business Decision</h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              In digital publishing and content operations, publishing new articles often takes precedence over updating existing assets. However, as Google&apos;s search engine result pages (SERPs) evolve, competitor publications emerge, and user intent shifts, once-profitable articles experience **organic decay**.
            </p>
            <p>
              Currently, content audits in most marketing teams are <strong>entirely reactive</strong>. Teams only notice decay when monthly Google Analytics or Search Console reports reveal an organic traffic drop of 50% or more. At that stage, ranking authority has already slipped off Page 1, and rehabilitation requires disproportionate effort and cost.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-200 border-l-4 border-l-cyan-400">
              <strong className="text-cyan-300 block mb-1 font-mono text-xs uppercase tracking-wider">
                The Decision This Work Supports:
              </strong>
              Enables content directors and SEO leads to transition from reactive rescue missions to <strong>proactive, scheduled refresh sprints</strong>. Instead of guessing which articles to update, editorial queues receive an automated, ranked list indicating exactly which URLs are entering decay velocity, their urgency tier (P1/P2/P3), and the primary diagnostic driver (e.g. click velocity deceleration vs. rank position slippage).
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: DATA CONTRACT & REPRODUCIBILITY */}
        {/* ========================================================= */}
        <section id="data" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">02 / Data Contract</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Dataset Contract &amp; Public Safety</h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            This study leverages real enterprise search telemetry data from the public <strong>FlyRank ML Internship Warehouse</strong> hosted on Hugging Face (<code>FlyRank/internship-warehouse</code>).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold block uppercase">fact_content_daily_performance</span>
              <p className="text-slate-300">
                Time-series table capturing daily Google Search Console clicks (<code>gsc_clicks</code>), impressions (<code>gsc_impressions</code>), and average SERP position (<code>gsc_position</code>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <span className="text-indigo-400 font-bold block uppercase">dim_content</span>
              <p className="text-slate-300">
                Metadata table capturing static publication and query attributes, including primary search query length (<code>keyword_char_count</code>).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300">
            <p>
              <strong>The Grain (Unit of Analysis):</strong> <code>[report_date, client_hash_id, content_hash_id]</code> — exactly one unique piece of content observed on a single calendar day.
            </p>
            <p>
              <strong>Temporal Horizon:</strong> March 2026 panel (2026-03-01 through 2026-03-31). Trailing observation lookback: 7-day and 14-day rolling windows. Forward evaluation: 7 to 14 days future horizon.
            </p>
            <p>
              <strong>Public-Safe Sanitization:</strong> All client names, domain names, raw URLs, and proprietary search queries are cryptographically hashed (e.g. <code>content_ffec5fb0...</code>). Zero client PII is exposed.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: METHODOLOGY & ANTI-LEAKAGE DESIGN */}
        {/* ========================================================= */}
        <section id="methodology" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">03 / Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Feature Engineering &amp; Validation Design</h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              A major vulnerability in machine learning applied to time-series search data is <strong>lookahead data leakage</strong> (using metrics that could only be known after the decision date).
            </p>
            <p>
              To guarantee zero leakage, all rolling features at observation date <em>t</em> strictly apply a <code>shift(1)</code> lag, utilizing data up to <em>t &minus; 1</em> only.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400">Click Velocity Ratio</span>
                <p className="text-xs text-slate-300 font-mono">
                  (past_7d * 2) / (past_14d)
                </p>
                <p className="text-[11px] text-slate-400">
                  Values &lt; 0.80 indicate immediate click deceleration compared to fortnight baseline.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-xs font-mono font-bold text-amber-400">Position Drift</span>
                <p className="text-xs text-slate-300 font-mono">
                  avg_pos_7d - avg_pos_14d
                </p>
                <p className="text-[11px] text-slate-400">
                  Positive values denote rank slippage down Google&apos;s result pages.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400">Target Label</span>
                <p className="text-xs text-slate-300 font-mono">
                  needs_refresh ∈ &#123;0, 1&#125;
                </p>
                <p className="text-[11px] text-slate-400">
                  Flagged when forward clicks drop &gt; 30% or rank slips &gt; 1.0 position.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 pt-1">
              <strong>Validation Design:</strong> We utilize a strict <strong>Chronological Out-Of-Time Split</strong> (First 70% of days for training: 30,000 instances; remaining 30% for test: 20,000 instances). Random train/test shuffling was explicitly rejected as it artificially inflates metrics through autocorrelation.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: RESULTS & BENCHMARKS */}
        {/* ========================================================= */}
        <section id="results" className="space-y-6">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">04 / Empirical Results</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Model vs. Baseline Performance</h2>
          </div>

          {/* Benchmark Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Model Architecture</th>
                  <th className="py-3 px-3">Accuracy</th>
                  <th className="py-3 px-3">Precision</th>
                  <th className="py-3 px-3">Recall</th>
                  <th className="py-3 px-3">F1-Score</th>
                  <th className="py-3 px-3 text-cyan-400">ROC-AUC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-sans font-medium text-slate-300">
                    Heuristic Rule (Velocity &lt; 0.75)
                  </td>
                  <td className="py-3 px-3">65.1%</td>
                  <td className="py-3 px-3">61.5%</td>
                  <td className="py-3 px-3">71.0%</td>
                  <td className="py-3 px-3">65.9%</td>
                  <td className="py-3 px-3 text-slate-400">0.500</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-sans font-medium text-slate-300">
                    Logistic Regression Baseline
                  </td>
                  <td className="py-3 px-3">78.4%</td>
                  <td className="py-3 px-3">74.2%</td>
                  <td className="py-3 px-3">82.1%</td>
                  <td className="py-3 px-3">77.9%</td>
                  <td className="py-3 px-3 text-slate-400">0.731</td>
                </tr>
                <tr className="bg-cyan-500/5 text-cyan-200 font-bold">
                  <td className="py-3 px-4 font-sans flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Random Forest Classifier (Ensemble)
                  </td>
                  <td className="py-3 px-3 text-emerald-400">93.8%</td>
                  <td className="py-3 px-3 text-emerald-400">98.2%</td>
                  <td className="py-3 px-3">89.4%</td>
                  <td className="py-3 px-3 text-emerald-400">93.6%</td>
                  <td className="py-3 px-3 text-cyan-300 text-sm">0.842</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Visual Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Chart 1: Feature Importance Visual */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>📊</span> Top Predictive Signals (Gini Weight)
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">Relative Weight</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>click_velocity_ratio</span>
                    <span className="text-cyan-400 font-bold">42%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>position_drift</span>
                    <span className="text-cyan-400 font-bold">28%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>avg_position_past_7d</span>
                    <span className="text-cyan-400 font-bold">14%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-indigo-400 h-2.5 rounded-full" style={{ width: "14%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>past_7d_clicks</span>
                    <span className="text-cyan-400 font-bold">10%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>text_feature_len</span>
                    <span className="text-cyan-400 font-bold">6%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: "6%" }}></div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal">
                Click velocity deceleration and ranking position slippage account for 70% of total predictive power.
              </p>
            </div>

            {/* Chart 2: Action Tier Portfolio Breakdown */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>🎯</span> Portfolio Action Distribution (20k Monitored)
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">20,000 URLs</span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-rose-300 block">P1: CRITICAL_REFRESH</span>
                    <span className="text-[11px] text-slate-400">Immediate editorial intervention required</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="font-bold text-rose-400 block">3,129 URLs</span>
                    <span className="text-[10px] text-slate-400">15.6%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-amber-300 block">P2: MONITOR_POSITION</span>
                    <span className="text-[11px] text-slate-400">Rank position slipping; review meta tags</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="font-bold text-amber-400 block">4,966 URLs</span>
                    <span className="text-[10px] text-slate-400">24.8%</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-emerald-300 block">P3: STABLE_PERFORMER</span>
                    <span className="text-[11px] text-slate-400">Traffic consistent; maintain status quo</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="font-bold text-emerald-400 block">11,905 URLs</span>
                    <span className="text-[10px] text-slate-400">59.5%</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal">
                By isolating 59.5% of pages as stable, the engine saves nearly 60% of editorial auditing resources.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: RANKED RECOMMENDATIONS PLAYBOOK */}
        {/* ========================================================= */}
        <section id="recommendations" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">05 / The Action Engine</span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ranked Refresh Recommendations Playbook</h2>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                Live Model Output
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300">
            Raw probabilities are translated into human-actionable tiers and diagnostic reason codes. Below are top monitored assets scored on the test split:
          </p>

          {/* Interactive Tier Filters */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { id: "ALL", label: "All Priority Queues" },
              { id: "P1", label: "P1: Critical Refresh (3,129)" },
              { id: "P2", label: "P2: Monitor Position (4,966)" },
              { id: "P3", label: "P3: Stable Performer (11,905)" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveTierFilter(btn.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-all ${
                  activeTierFilter === btn.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Table of Recommendations */}
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <tr>
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Content Hash ID</th>
                  <th className="py-2.5 px-2">Decay Score</th>
                  <th className="py-2.5 px-3">Action Tier</th>
                  <th className="py-2.5 px-3">Reason Code</th>
                  <th className="py-2.5 px-4 font-sans">Recommended Editorial Playbook</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredRecommendations.map((item) => (
                  <tr key={item.rank} className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 text-cyan-400 font-bold">#{item.rank}</td>
                    <td className="py-2.5 px-3 text-slate-200">{item.contentId}</td>
                    <td className="py-2.5 px-2 font-bold text-white">
                      {(item.riskScore * 100).toFixed(1)}%
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.tier.includes("P1")
                            ? "bg-rose-500/10 text-rose-300 border border-rose-500/30"
                            : item.tier.includes("P2")
                            ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                            : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        {item.tier.split(":")[0]}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 text-[11px]">{item.reasonCode}</td>
                    <td className="py-2.5 px-4 font-sans text-slate-300 text-xs">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: LIMITATIONS & HONEST FRAMING */}
        {/* ========================================================= */}
        <section id="limitations" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">06 / Honest Framing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Limitations &amp; Boundary Conditions</h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              In accordance with honest machine learning research standards, we emphasize what this model <strong>cannot</strong> claim:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>
                <strong>Observational vs. Causal:</strong> The model captures empirical correlations between search signal deceleration and forward traffic drops. It <em>does not prove causal mechanisms</em> in Google&apos;s proprietary ranking algorithm.
              </li>
              <li>
                <strong>Unobserved On-Page &amp; Competitive Ecology:</strong> Search logs do not capture whether competitors updated their landing pages, or if internal CMS migrations introduced broken elements.
              </li>
              <li>
                <strong>Seasonality Confounders:</strong> Cyclical macro seasonality (e.g., weekend dips or holiday lulls) can mimic velocity drops unless multi-month baselines are accessible.
              </li>
              <li>
                <strong>Decision-Support Role:</strong> This engine prioritizes editorial review queues; it should never trigger autonomous, unreviewed content rewriting without human SME verification.
              </li>
            </ul>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 8: REPRODUCIBILITY & CODE ARTIFACTS */}
        {/* ========================================================= */}
        <section id="reproducibility" className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">07 / Reproducibility</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Code, Artifacts &amp; Reproducibility</h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All data preprocessing, feature engineering scripts, model evaluation notebooks, and exported artifacts are version-controlled and public:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <a
              href="https://github.com/Rislantrs/flyrank-ml-internship"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Full Internship Git Repository
                </span>
                <p className="text-[11px] font-mono text-slate-400">github.com/Rislantrs/flyrank-ml-internship</p>
              </div>
              <svg className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a
              href="https://colab.research.google.com/github/Rislantrs/flyrank-ml-internship/blob/main/work/notebooks/capstone.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Open Capstone in Google Colab
                </span>
                <p className="text-[11px] font-mono text-slate-400">work/notebooks/capstone.ipynb</p>
              </div>
              <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                Run All
              </span>
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 9: ACKNOWLEDGMENTS & DATA CREDIT (MANDATORY) */}
        {/* ========================================================= */}
        <section id="acknowledgments" className="pt-6 border-t border-slate-800">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
              Official Data Attribution &amp; Acknowledgments
            </span>

            <p className="text-sm sm:text-base text-slate-200 font-medium">
              Built on the{" "}
              <a
                href="https://flyrank.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 font-bold transition-colors"
              >
                FlyRank ML Internship dataset
              </a>
              .
            </p>

            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
              We credit and thank the FlyRank engineering team for compiling and releasing the search performance warehouse for machine learning research and educational benchmarking.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>M Rislan Tristansyah</strong> • FlyRank ML Internship Capstone
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Portfolio Home
            </Link>
            <span>•</span>
            <a href="https://flyrank.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              flyrank.ai
            </a>
            <span>•</span>
            <a href="https://github.com/Rislantrs/flyrank-ml-internship" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
