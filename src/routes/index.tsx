import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Terminal, Activity, Database, Shield, Users, LineChart, Zap, MessageSquare, TrendingUp, Newspaper, Landmark, Wallet, Lock, Radio, Github, Twitter, Mail, Linkedin, Menu, BrainCircuit, Workflow, Scale, Sparkles, Cpu, Earth, Star, Target, FileText, Radar, ChartLine, UserPlus, MessagesSquare, Gauge } from "lucide-react";

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
  { label: "核心能力", href: "#capabilities", icon: Sparkles },
  { label: "核心模块", href: "#modules", icon: BrainCircuit },
  { label: "技术原理", href: "#principle", icon: Workflow },
  { label: "工作台", href: "#workbench", icon: Terminal },
  { label: "主流程", href: "#pipeline", icon: Activity },
  { label: "定价方案", href: "#pricing", icon: Scale },
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
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 py-3.5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="EconSwarm 首页">
          <img src="/logo.png" alt="EconSwarm 群智能体金融引擎" className="h-9 w-auto object-contain" loading="eager" decoding="async" />
        </a>
        <nav aria-label="主导航" className="hidden lg:flex items-center justify-center gap-1 text-sm">
          {navItems.map((n) => {
            const Icon = n.icon;
            return (
              <a
                key={n.href}
                href={n.href}
                className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-surface-overlay hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 opacity-70 transition group-hover:text-primary group-hover:opacity-100" />
                <span>{n.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 justify-self-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground hover:bg-surface/60"
            href="https://app.econswarm.com"
          >
            登录
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110 active:brightness-95"
            href="https://app.econswarm.com"
          >
            查看示例 <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label="打开菜单"
            className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-md border border-border/60 text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              群智能体金融引擎 · SWARM FINANCIAL ENGINE
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]">
              群智能体<span className="text-gradient">金融引擎</span>
              <span className="block mt-2 text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-medium">
                让一支 AI 团队替你完成投研全流程
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              EconSwarm 基于 TradingAgents（GitHub 65K+ Stars）打造 —— 18 位专职 Agent 协同分析行情、基本面、新闻、政策、资金流与解禁供给；两层质量门控、多空辩论与三方风险辩论后，输出 5 级信号（Buy / Overweight / Hold / Underweight / Sell）、仓位建议与可解释中文投研报告。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:bg-primary-glow"
              >
                启动分析 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.econswarm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-subtle bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-surface"
              >
                <Terminal className="h-4 w-4 text-primary" /> 查看示例
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "专职 Agent", v: "18" },
                { k: "直连数据源", v: "9" },
                { k: "辩论层级", v: "2" },
                { k: "信号等级", v: "5 级" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-primary/40 pl-3">
                  <dt className="text-xs text-muted-foreground">{s.k}</dt>
                  <dd className="mt-1 font-mono text-2xl text-primary">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <TaskPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function TaskPanel() {
  return (
    <div className="relative animate-float-up">
      <div className="rounded-xl border border-border bg-surface-gradient shadow-elevated scanline">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Task · 300750 · 2026-05-12
          </span>
          <span className="text-[10px] font-mono text-primary flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            RUNNING
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <MiniMetric icon={<BrainCircuit className="h-3.5 w-3.5 text-primary/70" />} label="ACTIVE AGENTS" value="7" />
            <MiniMetric icon={<Scale className="h-3.5 w-3.5 text-primary/70" />} label="DEBATE ROUND" value="2 / 3" />
            <MiniMetric icon={<Cpu className="h-3.5 w-3.5 text-primary/70" />} label="TOOLS CALLED" value="34" />
            <MiniMetric icon={<Earth className="h-3.5 w-3.5 text-primary/70" />} label="TARGET" value="A · 300750" />
          </div>

          <div className="rounded-md border border-border/70 bg-background/60 p-3.5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono text-muted-foreground">PRICE PATH · 300750 · 20D</span>
              <span className="text-[10px] font-mono text-primary">4 views</span>
            </div>
            <svg viewBox="0 0 240 100" className="w-full h-24">
              <defs>
                <pattern id="g" width="24" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 20" fill="none" stroke="oklch(0.28 0.04 160 / 40%)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="240" height="100" fill="url(#g)" />
              <path d="M0,40 C20,38 40,42 60,35 C80,28 100,32 120,25 C140,20 160,24 180,18 C200,14 220,20 240,12" fill="none" stroke="oklch(0.78 0.22 150)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,40 C20,42 40,44 60,42 C80,40 100,45 120,44 C140,42 160,48 180,50 C200,52 220,55 240,58" fill="none" stroke="oklch(0.85 0.20 130)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,40 C20,45 40,50 60,52 C80,55 100,58 120,62 C140,66 160,64 180,68 C200,72 220,70 240,74" fill="none" stroke="oklch(0.70 0.18 175)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,40 C20,48 40,55 60,60 C80,68 100,72 120,80 C140,86 160,82 180,90 C200,95 220,92 240,98" fill="none" stroke="oklch(0.65 0.22 25)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="mt-2 grid grid-cols-4 gap-2 text-[10px] font-mono">
              <LegendDot color="oklch(0.78 0.22 150)" label="Bull" />
              <LegendDot color="oklch(0.65 0.22 25)" label="Bear" />
              <LegendDot color="oklch(0.70 0.18 175)" label="Neutral" />
              <LegendDot color="oklch(0.85 0.20 130)" label="Signal" />
            </div>
          </div>

          <div className="rounded-md border border-border/70 bg-background/60 p-3.5">
            <div className="text-xs font-mono text-muted-foreground mb-2">AGENT EVENT STREAM</div>
            <div className="space-y-1.5 font-mono text-[11px]">
              <EventRow t="12:04:21" tag="Policy" tagColor="text-primary" msg="产业补贴延续 · 利好评级 +1" />
              <EventRow t="12:04:24" tag="HotMoney" tagColor="text-primary" msg="北向资金净流入 3.2 亿" />
              <EventRow t="12:04:27" tag="Fundamentals" tagColor="text-primary" msg="ROE 18.4% · 高于同业中位" />
              <EventRow t="12:04:31" tag="Bull↔Bear" tagColor="text-primary" msg="收敛观点：偏多，仓位 60%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/60 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{label}</span>
        {icon}
      </div>
      <div className="mt-1.5 font-mono text-lg text-foreground">{value}</div>
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
    <div className="flex gap-2">
      <span className="text-muted-foreground shrink-0">{t}</span>
      <span className={`${tagColor} shrink-0`}>{tag}</span>
      <span className="text-foreground/80 truncate">{msg}</span>
    </div>
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
        <div className="mt-10 grid gap-4 rounded-xl border border-border/70 bg-background/40 p-6 sm:grid-cols-3">
          {[
            { icon: Star, k: "Powered by", v: "TradingAgents · 65K+ Stars" },
            { icon: Cpu, k: "LLM 供应商", v: "11 家兼容 · 双 LLM 架构" },
            { icon: Sparkles, k: "金融技能库", v: "90+ SKILL.md · DCF / LBO / 三表" },
          ].map((x) => (
            <div key={x.k} className="flex items-center gap-3">
              <div className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary">
                <x.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{x.k}</div>
                <div className="text-sm text-foreground">{x.v}</div>
              </div>
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
  const nodes = [
    { title: "数据层", sub: "Vendor Routing", icon: Database, n: "01" },
    { title: "智能体层", sub: "18 Agent Swarm", icon: BrainCircuit, n: "02" },
    { title: "辩论与门控", sub: "Debate & Gate", icon: Scale, n: "03" },
    { title: "决策与产物", sub: "Structured Output", icon: Target, n: "04" },
  ];
  const layers = [
    { items: ["9 个直连数据源", "a_stock / yfinance / alpha_vantage", "5 大工具类别路由"] },
    { items: ["7 核心 Analyst 并行", "11 垂直插件 Agent", "双 LLM · 快思 + 深思"] },
    { items: ["两层质量门控 (硬检查 + LLM 复审)", "Bull ↔ Bear 多空辩论", "Aggressive / Neutral / Conservative 风险辩论"] },
    { items: ["Pydantic 结构化决策", "5 级信号 + 仓位建议", "中文投研报告 + 交易记忆反思"] },
  ];
  return (
    <section id="principle" className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="technical principle" title="多智能体协同的技术原理" desc="从数据直连到 5 级信号,一次运行由四层结构化流水线协同完成 — 每一步都可审计、可复现、可复盘。" />
        <div className="mt-14 rounded-xl border border-border bg-surface-gradient p-6 lg:p-8 shadow-elevated scanline">
          <div className="grid gap-4 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-0" />
            {nodes.map((n, i) => {
              const Icon = n.icon;
              const layer = layers[i];
              return (
                <div key={n.n} className="relative z-10 rounded-lg border border-border bg-background/70 p-5 transition hover:border-primary/50">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-2xl text-primary/25">{n.n}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{n.title}</h3>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-primary/70">{n.sub}</div>
                  <ul className="mt-4 space-y-1.5">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-lg border border-border/70 bg-background/60 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Swarm Orchestration Graph · LangGraph StateMachine
              </span>
              <span className="text-[10px] font-mono text-primary">SQLite Checkpoint · 断点续跑</span>
            </div>
            <svg viewBox="0 0 1020 170" className="w-full h-auto">
              <line x1="80" y1="80" x2="100" y2="40" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80" y1="80" x2="100" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80" y1="80" x2="100" y2="120" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="180" y1="40" x2="220" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="180" y1="80" x2="220" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="180" y1="120" x2="220" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="300" y1="80" x2="340" y2="40" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="300" y1="80" x2="340" y2="120" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="420" y1="40" x2="450" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="420" y1="120" x2="450" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="530" y1="80" x2="570" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="650" y1="80" x2="680" y2="40" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="650" y1="80" x2="680" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="650" y1="80" x2="680" y2="120" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="760" y1="40" x2="810" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="760" y1="80" x2="810" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="760" y1="120" x2="810" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="890" y1="80" x2="920" y2="80" stroke="oklch(0.78 0.22 150 / 45%)" strokeWidth="1" strokeDasharray="3 3" />
              <g><rect x="0" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.75 0.16 200)" strokeWidth="1" /><text x="40" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Data</text></g>
              <g><rect x="100" y="28" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="140" y="44" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Market</text></g>
              <g><rect x="100" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="140" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">News</text></g>
              <g><rect x="100" y="108" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="140" y="124" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Policy</text></g>
              <g><rect x="220" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.80 0.18 90)" strokeWidth="1" /><text x="260" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Quality Gate</text></g>
              <g><rect x="340" y="28" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="380" y="44" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Bull</text></g>
              <g><rect x="340" y="108" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="380" y="124" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Bear</text></g>
              <g><rect x="450" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="490" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Research Mgr</text></g>
              <g><rect x="570" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="610" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Trader</text></g>
              <g><rect x="680" y="28" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="720" y="44" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Aggressive</text></g>
              <g><rect x="680" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="720" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Neutral</text></g>
              <g><rect x="680" y="108" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.78 0.22 150 / 70%)" strokeWidth="1" /><text x="720" y="124" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Conservative</text></g>
              <g><rect x="810" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.85 0.20 130)" strokeWidth="1" /><text x="850" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">Portfolio Mgr</text></g>
              <g><rect x="920" y="68" width="80" height="24" rx="6" fill="oklch(0.22 0.03 160)" stroke="oklch(0.85 0.20 130)" strokeWidth="1" /><text x="960" y="84" textAnchor="middle" fontSize="10" fill="oklch(0.94 0.02 150)" fontFamily="Inter, sans-serif">5-Level Signal</text></g>
            </svg>
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
  const steps = [
    { label: "输入标的与日期", icon: FileText },
    { label: "18 Agent 并行分析", icon: BrainCircuit },
    { label: "两层质量门控", icon: Radar },
    { label: "多空 & 风险辩论", icon: Scale },
    { label: "交易与组合决策", icon: Activity },
    { label: "5 级信号 + 报告", icon: ChartLine },
  ];
  return (
    <section id="pipeline" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="pipeline" title="分析主流程" desc="从一只股票、一个日期开始,到 Buy / Hold / Sell 信号和一份中文投研报告,六步走完全流程。" />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="relative rounded-lg border border-border bg-surface-gradient p-4">
                <div className="flex items-center justify-between">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary z-10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-2xl text-primary/30">0{i + 1}</span>
                </div>
                <div className="mt-4 text-sm font-medium">{s.label}</div>
              </div>
            );
          })}
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
    { title: "更多金融类别", desc: "在 A 股基础上扩展宏观、港股、美股、债券、商品与 FX，通过 Vendor 路由无缝接入新市场数据。", icon: Earth },
    { title: "自定义智能体", desc: "按角色、工具、记忆与约束自定义专属 Agent，接入现有辩论与风险审议链路。", icon: UserPlus },
    { title: "智能体对话与生成", desc: "用自然语言描述目标即可生成 Agent 团队，并与任一 Agent 追问、复盘、协同推演。", icon: MessagesSquare },
  ];
  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading kicker="roadmap" title="从 A 股，到一个可对话的智能体宇宙" desc="当前以 A 股为核心。下一阶段，EconSwarm 将把资产范围、Agent 定义与协作方式，交给用户自己决定。" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((i, idx) => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="relative rounded-xl border border-border bg-surface-gradient p-6 hover:border-primary/50 transition" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="rounded-md border border-primary/30 bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Coming Next</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            );
          })}
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
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-gradient p-10 lg:p-16 shadow-elevated scanline">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
              让 AI 团队，替你把功课<span className="text-gradient">做扎实</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              输入股票代码与分析日期，EconSwarm 会调度一支专职 AI 团队完成分析、辩论与风险审议，返回一份可解释的中文投研报告与交易信号。
            </p>
            <Gauge className="hidden" />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:brightness-110 active:brightness-95"
                href="https://app.econswarm.com"
              >
                查看博客 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-surface active:brightness-95"
                href="https://app.econswarm.com"
              >
                阅读文档
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const product = [
    { label: "核心能力", href: "#capabilities" },
    { label: "核心模块", href: "#modules" },
    { label: "技术原理", href: "#principle" },
    { label: "工作台", href: "#workbench" },
    { label: "定价方案", href: "#pricing" },
  ];
  const resources = [
    { label: "文档中心", href: "#" },
    { label: "API 参考", href: "#" },
    { label: "示例报告", href: "#" },
    { label: "更新日志", href: "#" },
    { label: "社区讨论", href: "#" },
  ];
  const company = [
    { label: "关于我们", href: "#" },
    { label: "加入团队", href: "#" },
    { label: "联系我们", href: "#" },
    { label: "媒体报道", href: "#" },
  ];
  const legal = [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "风险提示", href: "#" },
    { label: "Cookie 设置", href: "#" },
  ];
  const socials = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <footer className="border-t border-subtle bg-section-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="EconSwarm" className="h-9 w-auto" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              通用群智能体金融分析框架。让一支可配置、可扩展、可审计的 AI 分析师团队，替你完成从数据抓取到交易信号的全流程投研工作。
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-subtle bg-surface text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">产品</div>
            <ul className="mt-4 space-y-2.5">
              {product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">资源</div>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">公司</div>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground transition hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-subtle pt-8 text-xs text-muted-foreground sm:flex-row">
          <div className="font-mono">© 2026 EconSwarm. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="transition hover:text-foreground">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main>
      <Nav />
      <Ticker />
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
