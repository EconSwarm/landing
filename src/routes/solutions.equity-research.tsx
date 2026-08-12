import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://www.econswarm.com/solutions/equity-research";
const TITLE = "AI 股票投研解决方案 · 群智能体自动化投研 | EconSwarm";
const DESCRIPTION =
  "面向券商研究所与资管投研团队的 AI 股票投研方案：34 个专业 Agent、184 项金融技能与 12 阶段自动化流水线，把行情、基本面、政策与资金流取证并行化，输出可解释、可审计的研究初稿。";

export const Route = createFileRoute("/solutions/equity-research")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "AI 股票投研解决方案 · EconSwarm 群智能体金融引擎" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI 股票投研解决方案 · EconSwarm" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "EconSwarm 股票投研解决方案",
              serviceType: "AI 股票投研 / 自动化投资分析",
              description: DESCRIPTION,
              provider: { "@type": "Organization", name: "EconSwarm", url: "https://www.econswarm.com" },
              areaServed: "CN",
              url: CANONICAL,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "首页", item: "https://www.econswarm.com/" },
                { "@type": "ListItem", position: 2, name: "股票投研解决方案", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: EquityResearchPage,
});

const WORKFLOW = [
  {
    stage: "01 — 任务定义",
    title: "标的与时点入参",
    body: "以标的代码与分析日期作为输入契约，选择研究深度与目标市场；同一套工作流可批量套用到标的池。",
  },
  {
    stage: "02 — 并行取证",
    title: "7 核心 Analyst 同时开工",
    body: "行情、舆情、新闻、基本面、政策、资金流与解禁供给分路取证，数据来自 9+ 直连数据源，无需第三方付费数据库。",
  },
  {
    stage: "03 — 质量门控",
    title: "证据评级后才进入推理",
    body: "对缺失、过期或互相矛盾的数据先做校验与分级，低质证据被打回重取，避免把噪声带进后续判断。",
  },
  {
    stage: "04 — 观点收敛",
    title: "Research Manager 汇总分歧",
    body: "分歧点被显式列出并标注依据强弱，形成结构化研究结论而非一段黑盒长文本。",
  },
  {
    stage: "05 — 风险审议",
    title: "风险与合规 Agent 前置",
    body: "供给冲击、监管口径、流动性与解禁减持风险在决策前显性化；垂直插件覆盖估值、基金会计与 KYC 合规域。",
  },
  {
    stage: "06 — 决策与交付",
    title: "结构化决策 + 可读报告",
    body: "Trader 与 Portfolio Manager 输出 5 级信号与仓位建议，同时生成 Markdown / PDF 初稿，全过程留痕可审计。",
  },
];

const TEAMS = [
  {
    who: "券商研究所",
    intent: "首次覆盖、深度报告与快评提速",
    body: "把拼数据的时间交给 Agent：多路取证并行产出带汇总表格的初稿，分析师专注观点与逻辑校验；合规审查前置，减少返工。",
  },
  {
    who: "公募 / 私募资管",
    intent: "多资产池持续跟踪与季度复盘",
    body: "按标的池批量运行同一工作流，输出信号与仓位建议；交易记忆与基准反思沉淀历史胜率，支撑组合再平衡讨论。",
  },
  {
    who: "量化与数据团队",
    intent: "把研究结论变成机读输入",
    body: "Python API 直接嵌入现有研究流水线，结构化决策对象可入库；断点续跑支撑长周期回溯与批量重算。",
  },
];

const FAQ = [
  {
    q: "EconSwarm 会替代分析师吗？",
    a: "不会。它替代的是取数、比对与初稿排版这类重复劳动；观点判断、假设设定与最终署名仍由分析师负责，产出以可审计的证据链呈现，便于复核。",
  },
  {
    q: "需要采购第三方付费数据库吗？",
    a: "不必须。引擎默认使用 9+ 直连数据源即可跑通全流程；如已有内部数据仓或行情终端，可通过数据源路由接入替换默认 Vendor。",
  },
  {
    q: "输出结果如何审计？",
    a: "每个 Agent 的输入、工具调用与结论都独立留痕，可按角色回放宏观、基本面、资金流与风险各条链路，满足内部质控与合规复核。",
  },
];

function EquityResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-subtle bg-section-deep/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← 返回 EconSwarm
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Solutions · Equity Research
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            首页
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span>解决方案</span>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-foreground">股票投研</span>
        </nav>

        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
          AI equity research
        </div>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          群智能体驱动的 AI 股票投研解决方案
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          EconSwarm 把一支投研团队的分工映射成 34 个专业 Agent 与 184 项金融技能，
          依托 12 阶段自动化流水线完成取证、校验、收敛与风险审议 ——
          让券商研究所与资管投研团队用小时级的时间拿到可解释、可审计的研究初稿。
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["34", "专业 Agent"],
            ["184", "金融技能"],
            ["12", "阶段流水线"],
            ["9+", "直连数据源"],
          ].map(([n, label]) => (
            <div key={label} className="rounded-xl border border-subtle bg-surface p-5">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-primary">{n}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-20">
          <h2 className="text-xl font-semibold md:text-2xl">一次股票投研任务的多智能体工作流</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            从入参到交付，每一阶段都有明确的负责角色与产物，中间结论可缓存、可复用、可追溯。
          </p>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW.map((s) => (
              <li key={s.stage} className="rounded-2xl border border-subtle bg-surface p-6">
                <div className="font-mono text-[11px] text-primary/80">{s.stage}</div>
                <div className="mt-3 text-base font-medium">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <h2 className="text-xl font-semibold md:text-2xl">不同投研团队的落地方式</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TEAMS.map((t) => (
              <div key={t.who} className="rounded-2xl border border-subtle bg-surface p-6">
                <div className="text-sm font-semibold">{t.who}</div>
                <div className="mt-2 text-sm text-primary/90">{t.intent}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xl font-semibold md:text-2xl">常见问题</h2>
          <div className="mt-8 space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-subtle bg-surface p-6">
                <h3 className="text-sm font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-subtle bg-section-deep/60 p-8">
          <div className="text-sm text-muted-foreground">下一步</div>
          <div className="mt-2 text-lg font-semibold">用一只标的跑通一次完整投研流程</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://app.econswarm.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              免费开始使用
            </a>
            <Link
              to="/"
              hash="pricing"
              className="rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:border-primary"
            >
              查看定价方案
            </Link>
            <Link
              to="/blog/swarm-vs-single-llm-comparison"
              className="rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:border-primary"
            >
              群智能体 vs 单一 LLM
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
