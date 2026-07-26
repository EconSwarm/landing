import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Terminal, Activity, Database, Shield, Sparkles, Users, LineChart, GitBranch, Zap, MessageSquare, TrendingUp, Newspaper, Landmark, Wallet, Lock, Radio } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const tickers = [
  { s: "SHCOMP", v: "3,412.88", c: "+0.62%", up: true },
  { s: "CN10Y", v: "2.147", c: "-3.1bp", up: false },
  { s: "USDCNH", v: "7.1832", c: "+0.08%", up: true },
  { s: "HSI", v: "18,204", c: "+1.24%", up: true },
  { s: "BRENT", v: "82.44", c: "-0.71%", up: false },
  { s: "GOLD", v: "2,378.6", c: "+0.35%", up: true },
  { s: "CSI300", v: "3,921.05", c: "+0.44%", up: true },
  { s: "SPX", v: "5,412.6", c: "+0.18%", up: true },
];

const navItems = [
  { label: "核心能力", href: "#capabilities" },
  { label: "核心模块", href: "#modules" },
  { label: "技术原理", href: "#principle" },
  { label: "工作台", href: "#workbench" },
  { label: "主流程", href: "#pipeline" },
  { label: "定价方案", href: "#pricing" },
];

function Ticker() {
  const loop = [...tickers, ...tickers, ...tickers];
  return (
    <div className="border-b border-subtle overflow-hidden bg-background/80 backdrop-blur">
      <div className="flex whitespace-nowrap animate-ticker py-2 text-xs font-mono">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-2 px-6 shrink-0">
            <span className="text-muted-foreground tracking-wide">{t.s}</span>
            <span className="text-foreground">{t.v}</span>
            <span className={t.up ? "text-primary" : "text-destructive"}>{t.c}</span>
            <span className="text-border">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle glass-panel">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight text-foreground">EconSwarm</span>
        </a>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="flex items-center gap-1 rounded-md px-3 py-2 text-muted-foreground transition hover:text-foreground hover:bg-secondary">
              <ChevronRight className="h-3 w-3 text-primary/70" />
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">登录</a>
          <a href="#" className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary-glow">
            查看示例 <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-hero relative">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            群智能体金融引擎 · SWARM FINANCIAL ENGINE
          </div>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground text-balance lg:text-6xl">
            群智能体<span className="text-gradient">金融引擎</span>
            <span className="mt-3 block text-3xl font-medium text-muted-foreground lg:text-4xl">
              让一支 AI 团队替你完成投研全流程
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            EconSwarm 基于 TradingAgents(GitHub 65K+ Stars)打造 —— 18 位专职 Agent 协同分析行情、基本面、新闻、政策、资金流与解禁供给；两层质量门控、多空辩论与三方风险辩论后,输出 5 级信号(Buy / Overweight / Hold / Underweight / Sell)、仓位建议与可解释中文投研报告。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:bg-primary-glow">
              启动分析 <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-surface px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40">
              <Terminal className="h-4 w-4 text-primary" /> 查看示例
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 border-t border-subtle pt-8">
            {[
              { k: "专职 Agent", v: "18" },
              { k: "直连数据源", v: "9" },
              { k: "辩论层级", v: "2" },
              { k: "信号等级", v: "5 级" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs text-muted-foreground">{s.k}</dt>
                <dd className="mt-1 text-2xl font-semibold text-primary font-mono">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <TaskPanel />
      </div>
    </section>
  );
}

function TaskPanel() {
  return (
    <div className="relative animate-float-up">
      <div className="rounded-2xl border border-subtle bg-surface-gradient p-1 shadow-elevated scanline">
        <div className="rounded-xl bg-background/60 p-6 backdrop-blur">
          <div className="flex items-center justify-between border-b border-subtle pb-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-status-alert/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>
            <div className="font-mono text-[11px] text-muted-foreground tracking-widest">
              TASK · 300750 · 2026-05-12
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" /> RUNNING
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <MetricCell label="ACTIVE AGENTS" value="7" icon={<Users className="h-3.5 w-3.5" />} />
            <MetricCell label="DEBATE ROUND" value="2 / 3" icon={<MessageSquare className="h-3.5 w-3.5" />} />
            <MetricCell label="TOOLS CALLED" value="34" icon={<Zap className="h-3.5 w-3.5" />} />
            <MetricCell label="TARGET" value="A · 300750" icon={<Radio className="h-3.5 w-3.5" />} />
          </div>

          <div className="mt-4 rounded-lg border border-subtle bg-background/60 p-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>PRICE PATH · 300750 · 20D</span>
              <span>4 views</span>
            </div>
            <MiniChart />
            <div className="mt-2 flex flex-wrap gap-3 text-[10px] font-mono text-muted-foreground">
              <LegendDot color="var(--primary)" label="Bull" />
              <LegendDot color="var(--destructive)" label="Bear" />
              <LegendDot color="var(--accent)" label="Neutral" />
              <LegendDot color="var(--status-alert)" label="Signal" />
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-subtle bg-background/60 p-4">
            <div className="text-[11px] font-mono text-muted-foreground">AGENT EVENT STREAM</div>
            <ul className="mt-3 space-y-2 text-xs font-mono">
              <EventRow t="12:04:21" tag="Policy" tagColor="text-accent" msg="产业补贴延续 · 利好评级 +1" />
              <EventRow t="12:04:24" tag="HotMoney" tagColor="text-primary" msg="北向资金净流入 3.2 亿" />
              <EventRow t="12:04:27" tag="Fundamentals" tagColor="text-status-alert" msg="ROE 18.4% · 高于同业中位" />
              <EventRow t="12:04:31" tag="Bull↔Bear" tagColor="text-primary" msg="收敛观点：偏多,仓位 60%" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCell({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-subtle bg-background/40 p-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>{label}</span>
        <span className="text-primary/70">{icon}</span>
      </div>
      <div className="mt-2 font-mono text-lg text-foreground">{value}</div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function EventRow({ t, tag, tagColor, msg }: { t: string; tag: string; tagColor: string; msg: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-muted-foreground shrink-0">{t}</span>
      <span className={`${tagColor} shrink-0`}>{tag}</span>
      <span className="text-foreground/80">{msg}</span>
    </li>
  );
}

function MiniChart() {
  const lines = [
    { d: "M0,60 C40,55 80,40 120,30 C160,22 200,18 240,10", color: "var(--primary)" },
    { d: "M0,60 C40,65 80,75 120,82 C160,88 200,92 240,96", color: "var(--destructive)" },
    { d: "M0,60 C40,58 80,55 120,52 C160,50 200,48 240,46", color: "var(--accent)" },
    { d: "M0,60 C40,62 80,58 120,54 C160,45 200,38 240,28", color: "var(--status-alert)" },
  ];
  return (
    <svg viewBox="0 0 240 110" className="mt-2 h-32 w-full">
      <defs>
        <pattern id="grid" width="24" height="22" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 22" fill="none" stroke="var(--grid-line)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="240" height="110" fill="url(#grid)" />
      {lines.map((l, i) => (
        <path key={i} d={l.d} fill="none" stroke={l.color} strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}

function SectionHeading({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="font-mono text-xs uppercase tracking-widest text-primary">// {kicker}</div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance lg:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground text-balance">{desc}</p>}
    </div>
  );
}

function Capabilities() {
  const cards = [
    { icon: Users, title: "多智能体协同决策", desc: "18 位专职 Agent 分工并行 → 辩论收敛 → 风险审议,替代单一大模型的\"独裁式\"输出。" },
    { icon: Database, title: "全维度市场数据抓取", desc: "行情 / 基本面 / 新闻 / 政策 / 资金流 / 龙虎榜 / 解禁 —— 9 个直连数据源实时采集。" },
    { icon: Shield, title: "风险实时预警", desc: "两层质量门控 + 三方风险辩论 + 交易记忆反思,异常信号第一时间暴露并复盘。" },
    { icon: LineChart, title: "投资策略智能生成", desc: "结构化输出 5 级信号、仓位建议与中文投研报告,人人可读、系统可对接。" },
  ];
  return (
    <section id="capabilities" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="core capabilities" title="群智能体在金融分析场景的四大核心优势" desc='相比单一大模型,"一群 AI 分析师"能覆盖更多数据维度、暴露更多风险视角,并把结果收敛为可解释的结构化结论。' />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-xl border border-subtle bg-surface p-6 transition hover:border-primary/40 hover:bg-surface-elevated">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary/20">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 rounded-2xl border border-subtle bg-surface/60 p-6 md:grid-cols-3">
          {[
            { k: "Powered by", v: "TradingAgents · 65K+ Stars" },
            { k: "LLM 供应商", v: "11 家兼容 · 双 LLM 架构" },
            { k: "金融技能库", v: "90+ SKILL.md · DCF / LBO / 三表" },
          ].map((x) => (
            <div key={x.k} className="border-l-2 border-primary/40 pl-4">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{x.k}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const modules = [
    { n: "01", title: "18 位专职 Agent · 群体协同决策", sub: "Swarm Specialist Agents", body: "7 核心 Analyst 覆盖行情、舆情、新闻、基本面、政策、游资、解禁；11 位垂直插件 Agent 覆盖行业研究、宏观、量化等场景。全部并行分析,多角度收敛,避免单模型盲点。", tags: ["7 核心 + 11 垂直", "90+ 金融技能库", "并行协同"] },
    { n: "02", title: "全维度市场数据直连抓取", sub: "Full-Coverage Data Ingestion", body: "9 个直连数据源覆盖行情、财务三表、龙虎榜、资金流、解禁、政策快讯与情绪热度 —— 全部免费直连 HTTP / TCP,零 API Key 月费,Vendor 路由支持无缝扩展美股、港股等国际市场。", tags: ["9 直连数据源", "零 API Key 月费", "多市场可扩展"] },
    { n: "03", title: "多空 & 风险辩论 · 实时预警", sub: "Debate & Risk Layer", body: "Bull ↔ Bear 多空辩论收敛研究观点,Aggressive ↔ Conservative ↔ Neutral 三方风险辩论审议交易方案；两层质量门控 + 交易记忆与延迟反思,异常风险即时暴露。", tags: ["两层质量门控", "3 方风险辩论", "延迟反思复盘"] },
    { n: "04", title: "结构化投资策略智能生成", sub: "Structured Strategy Output", body: "Research Manager → Trader → Portfolio Manager 全链路 Pydantic 结构化决策,输出 5 级信号(Buy / Overweight / Hold / Underweight / Sell)、仓位建议、中文投研报告,全程可解释可审计。", tags: ["5 级信号", "Pydantic 结构化", "可解释报告"] },
  ];
  const analysts = [
    { icon: LineChart, label: "市场分析师", key: "market", desc: "K 线 · 量价 · 技术指标" },
    { icon: MessageSquare, label: "舆情分析师", key: "social", desc: "社媒讨论 · 情绪热度" },
    { icon: Newspaper, label: "新闻分析师", key: "news", desc: "个股/行业 · 全球事件 · 交易异动" },
    { icon: TrendingUp, label: "基本面分析师", key: "fundamentals", desc: "三表 · 估值 · 一致预期" },
    { icon: Landmark, label: "政策分析师", key: "policy", desc: "监管 · 产业政策 · 宏观窗口" },
    { icon: Wallet, label: "游资追踪师", key: "hot_money", desc: "北向 · 资金流 · 龙虎榜" },
    { icon: Lock, label: "解禁监控师", key: "lockup", desc: "解禁 · 减持 · 供给冲击" },
  ];
  return (
    <section id="modules" className="bg-modules py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="core modules" title="一群 AI 分析师,一份可解释报告" desc="专职分工、辩论收敛、数据直连、结果可审计 — EconSwarm 把一支投研团队的工作方式,编排成可重复运行的多智能体流水线。" />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {modules.map((m) => (
            <div key={m.n} className="rounded-2xl border border-subtle bg-surface p-8 transition hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-primary">MODULE {m.n}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{m.sub}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span key={t} className="rounded-full border border-subtle bg-background/60 px-3 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center font-mono text-[11px] tracking-widest text-primary">
            7 核心 ANALYSTS · + 11 垂直 AGENT PLUGINS = 18 SWARM
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {analysts.map((a) => (
              <div key={a.key} className="rounded-xl border border-subtle bg-surface/70 p-4 transition hover:border-primary/40 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <a.icon className="h-4 w-4 text-primary" />
                  <span className="font-mono text-[10px] text-muted-foreground">{a.key}</span>
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{a.label}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Principle() {
  const steps = [
    { n: "01", title: "数据层", sub: "Vendor Routing", items: ["9 个直连数据源", "a_stock / yfinance / alpha_vantage", "5 大工具类别路由"] },
    { n: "02", title: "智能体层", sub: "18 Agent Swarm", items: ["7 核心 Analyst 并行", "11 垂直插件 Agent", "双 LLM · 快思 + 深思"] },
    { n: "03", title: "辩论与门控", sub: "Debate & Gate", items: ["两层质量门控 (硬检查 + LLM 复审)", "Bull ↔ Bear 多空辩论", "Aggressive / Neutral / Conservative 风险辩论"] },
    { n: "04", title: "决策与产物", sub: "Structured Output", items: ["Pydantic 结构化决策", "5 级信号 + 仓位建议", "中文投研报告 + 交易记忆反思"] },
  ];
  return (
    <section id="principle" className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="technical principle" title="多智能体协同的技术原理" desc="从数据直连到 5 级信号,一次运行由四层结构化流水线协同完成 — 每一步都可审计、可复现、可复盘。" />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-subtle bg-surface p-6">
              <div className="font-mono text-3xl font-bold text-primary/80">{s.n}</div>
              <div className="mt-3 text-base font-semibold text-foreground">{s.title}</div>
              <div className="font-mono text-[11px] text-muted-foreground">{s.sub}</div>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-subtle bg-surface p-6">
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
            <span className="flex items-center gap-2"><GitBranch className="h-3.5 w-3.5 text-primary" /> Swarm Orchestration Graph · LangGraph StateMachine</span>
            <span>SQLite Checkpoint · 断点续跑</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-mono">
            {["Data", "Market", "News", "Policy", "Quality Gate", "Bull", "Bear", "Research Mgr", "Trader", "Aggressive", "Neutral", "Conservative", "Portfolio Mgr", "5-Level Signal"].map((n, i, a) => (
              <span key={n} className="flex items-center gap-2">
                <span className="rounded-md border border-subtle bg-background/70 px-3 py-1.5 text-foreground/80">{n}</span>
                {i < a.length - 1 && <ChevronRight className="h-3 w-3 text-primary/60" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Workbench() {
  const feats = [
    { title: "任务中心", desc: "选股票、选日期、选 Agent 阵容" },
    { title: "数据直连", desc: "行情 · 财务 · 资金 · 新闻 · 政策" },
    { title: "协作视图", desc: "分析师网络 · 辩论轨迹 · 工具调用" },
    { title: "决策产物", desc: "中文报告 · 交易信号 · 仓位建议" },
  ];
  return (
    <section id="workbench" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="workbench" title="工作台" desc="左侧任务与 Agent 阵容,中间协作视图与分析产物,右侧模型、辩论轮次与运行控制 — 一屏跑完一次完整的群智能体投研。" />
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {feats.map((f, i) => (
              <div key={f.title} className="rounded-xl border border-subtle bg-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <div className="text-sm font-semibold text-foreground">{f.title}</div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-subtle bg-surface-gradient p-1 shadow-elevated">
              <div className="rounded-xl bg-background/60 p-6">
                <div className="font-mono text-[11px] text-muted-foreground">
                  econswarm://workbench/tasks/a-300750-2026-05-12
                </div>
                <div className="mt-3 text-xs font-mono text-primary">Agent 协作视图 · 7 分析师 → 辩论 → 决策</div>
                <AgentGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentGraph() {
  const nodes = ["市场", "舆情", "新闻", "基本面", "政策", "游资", "解禁"];
  return (
    <div className="relative mt-6 aspect-[5/4] w-full">
      <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="pmg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {nodes.map((_, i) => {
          const angle = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
          const x = 250 + Math.cos(angle) * 150;
          const y = 200 + Math.sin(angle) * 130;
          return <line key={i} x1="250" y1="200" x2={x} y2={y} stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3 3" />;
        })}
        <circle cx="250" cy="200" r="80" fill="url(#pmg)" />
        <circle cx="250" cy="200" r="34" fill="var(--surface-elevated)" stroke="var(--primary)" strokeWidth="1.5" />
        <text x="250" y="205" textAnchor="middle" className="fill-primary font-mono text-sm font-bold">PM</text>
        {nodes.map((n, i) => {
          const angle = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
          const x = 250 + Math.cos(angle) * 150;
          const y = 200 + Math.sin(angle) * 130;
          return (
            <g key={n}>
              <circle cx={x} cy={y} r="30" fill="var(--surface)" stroke="var(--border)" />
              <circle cx={x} cy={y} r="30" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1" />
              <text x={x} y={y + 4} textAnchor="middle" className="fill-foreground text-[11px]">{n}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Pipeline() {
  const steps = ["输入标的与日期", "18 Agent 并行分析", "两层质量门控", "多空 & 风险辩论", "交易与组合决策", "5 级信号 + 报告"];
  return (
    <section id="pipeline" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="pipeline" title="分析主流程" desc="从一只股票、一个日期开始,到 Buy / Hold / Sell 信号和一份中文投研报告,六步走完全流程。" />
        <div className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <div key={s} className="relative rounded-xl border border-subtle bg-surface p-5">
              <div className="font-mono text-xs text-primary">0{i + 1}</div>
              <div className="mt-3 text-sm font-medium text-foreground">{s}</div>
              {i < steps.length - 1 && (
                <ChevronRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-primary/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const list = ["个人投资者与量化爱好者", "券商研究与策略团队", "公募与私募基金投研", "银行研究院 / 金融市场部"];
  return (
    <section className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="who is it for" title="个人研究员,也能拥有自己的投研团队" desc="EconSwarm 不只面向机构。任何希望把碎片化信息、模型能力与结构化流程组合起来的研究者,都能通过群智能体获得一份可追溯、可复盘的投研意见。" />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((x) => (
            <div key={x} className="flex items-center gap-3 rounded-xl border border-subtle bg-surface p-5">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">{x}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const items = [
    { title: "更多金融类别", desc: "在 A 股基础上扩展宏观、港股、美股、债券、商品与 FX,通过 Vendor 路由无缝接入新市场数据。" },
    { title: "自定义智能体", desc: "按角色、工具、记忆与约束自定义专属 Agent,接入现有辩论与风险审议链路。" },
    { title: "智能体对话与生成", desc: "用自然语言描述目标即可生成 Agent 团队,并与任一 Agent 追问、复盘、协同推演。" },
  ];
  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="roadmap" title="从 A 股,到一个可对话的智能体宇宙" desc="当前以 A 股为核心。下一阶段,EconSwarm 将把资产范围、Agent 定义与协作方式,交给用户自己决定。" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-subtle bg-surface p-6">
              <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">Coming Next</div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "免费版", en: "Free", price: "$0", per: "/ 月", desc: "零门槛体验群智能体投研流程,适合初次尝试的用户。", feats: ["每日 2 次完整分析任务", "7 位专职 Agent 并行分析", "基础多空 & 风险辩论", "A 股行情与基本面数据", "在线查看中文投研报告"], cta: "免费开始" },
    { name: "入门版", en: "Starter", price: "$29", per: "/ 月", desc: "面向个人研究员与量化爱好者,日常研究场景够用。", feats: ["每日 20 次完整分析任务", "标准多空 & 风险辩论", "中文投研报告导出 (PDF / Markdown)", "历史任务记忆保留 30 天", "标准队列响应速度"], cta: "选择入门版" },
    { name: "专业版", en: "Pro", price: "$299", per: "/ 月", desc: "面向深度研究者与专业投资者,解锁全部数据与更深推理。", feats: ["不限次分析任务", "深思模型 (Pro) 无限调用", "多空辩论 3 轮 · 风险辩论 2 轮", "资金流 / 龙虎榜 / 解禁数据", "任务记忆与断点续跑", "优先队列与更快响应"], cta: "升级到专业版", featured: true },
    { name: "机构版", en: "Enterprise", price: "定制", per: "", desc: "面向券商、公募、私募与银行研究团队的私有化部署方案。", feats: ["私有化 / VPC 部署", "自定义 Agent 与工具链", "多市场数据接入 (港股 / 美股 / 债券)", "SSO 与团队权限管理", "专属技术支持与 SLA"], cta: "联系我们" },
  ];
  return (
    <section id="pricing" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="pricing" title="按需选择你的投研团队" desc="从个人研究到机构级私有部署,EconSwarm 提供覆盖不同场景的定价方案。" />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-2xl border p-6 ${p.featured ? "border-primary/60 bg-surface-elevated glow-primary" : "border-subtle bg-surface"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground">推荐</div>
              )}
              <div className="text-sm font-medium text-muted-foreground">{p.name}</div>
              <div className="font-mono text-xs text-primary">{p.en}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.per}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 flex-1 space-y-2 text-xs text-muted-foreground">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-2">
                    <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex items-center justify-center gap-1 rounded-md px-4 py-2.5 text-sm font-medium transition ${p.featured ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-subtle bg-background/60 text-foreground hover:border-primary/40"}`}>
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-hero py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance lg:text-5xl">
          让 AI 团队,替你把功课做扎实
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
          输入股票代码与分析日期,EconSwarm 会调度一支专职 AI 团队完成分析、辩论与风险审议,返回一份可解释的中文投研报告与交易信号。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:bg-primary-glow">
            启动分析 <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-surface px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40">
            查看示例
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-subtle bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded bg-primary/15 text-primary">
            <Sparkles className="h-3 w-3" />
          </div>
          <span>EconSwarm · Swarm Financial Engine</span>
        </div>
        <div className="font-mono">© 2026 EconSwarm. All rights reserved.</div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main>
      <Ticker />
      <Nav />
      <Hero />
      <Capabilities />
      <Modules />
      <Principle />
      <Workbench />
      <Pipeline />
      <Audience />
      <Roadmap />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
