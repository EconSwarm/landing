import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Terminal,
  Database,
  Shield,
  Users,
  LineChart,
  Github,
  Twitter,
  Mail,
  Linkedin,
  Menu,
  BrainCircuit,
  Scale,
  Sparkles,
  Cpu,
  Gauge,
  Radar,
  FileText,
  Activity,
  ChartLine,
  Layers,
  MonitorPlay,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EconSwarm · 群智能体金融引擎 | 34 Agent × 184 金融技能" },
      {
        name: "description",
        content:
          "EconSwarm 以 LangGraph 状态机编排 34 个专业 Agent 与 184 个金融技能，通过多空辩论、质量门控与三方风控，输出可解释、可审计的结构化投研决策。",
      },
      { property: "og:title", content: "EconSwarm · 群智能体金融引擎" },
      {
        property: "og:description",
        content:
          "34 个专业 Agent、184 个金融技能、七层分析流水线 —— 覆盖股票、债券、外汇与大宗商品的多智能体投研引擎。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EconSwarm · 群智能体金融引擎" },
      {
        name: "twitter:description",
        content: "多智能体、多技能协同的金融研究引擎，输出可解释、可审计的结构化决策。",
      },
    ],
  }),
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
  { label: "核心价值", href: "#capabilities", icon: Sparkles },
  { label: "系统架构", href: "#architecture", icon: Layers },
  { label: "接入方式", href: "#modes", icon: Terminal },
  { label: "定价方案", href: "#pricing", icon: Scale },
];

function Ticker() {
  const loop = [...tickers, ...tickers, ...tickers];
  return (
    <div className="border-b border-subtle overflow-hidden bg-background/80 backdrop-blur-sm">
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
    <header className="sticky top-0 z-50 nav-glass">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 py-3.5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="EconSwarm 首页">
          <img
            src="/logo.png"
            alt="EconSwarm 群智能体金融引擎 Logo"
            className="h-9 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
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
            className="ds-btn ds-btn--ghost hidden sm:inline-flex"
            href="https://app.econswarm.com"
          >
            登录
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn ds-btn--brand ds-btn--lg"
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

function SectionHeading({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="font-mono text-xs uppercase tracking-widest text-primary">// {kicker}</div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance lg:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground text-balance">{desc}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              群智能体 · SWARM AGENTS
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]">
              群智能体<span className="text-gradient">金融引擎</span>
              <span className="block mt-2 text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-medium">
                多智能体 · 多技能协同工作流, 赋能金融研究与决策
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              34 个专业 Agent、184 个模块化金融技能,由 LangGraph 状态机与双 LLM 架构编排成七层分析流水线:多源取证 → 质量门控 → 多空辩论 → 交易方案 → 三方风控 → 组合决策,输出可解释、可审计的结构化研究结论。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["股票", "债券", "外汇", "大宗商品"].map((t) => (
                <span key={t} className="ds-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://app.econswarm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--brand ds-btn--xl px-8"
              >
                启动分析 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://app.econswarm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--secondary ds-btn--xl px-8"
              >
                <Terminal className="h-4 w-4 text-primary" /> 查看示例
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "专业 Agent", v: "34" },
                { k: "金融技能库", v: "184" },
                { k: "分析流水线", v: "7 层" },
                { k: "直连数据源", v: "9+" },
              ].map((s) => (
                <div key={s.k} className="hero-metric">
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
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
  const trace = [
    { t: "analysts", d: "7 核心 Analyst 并行取证完成" },
    { t: "quality gate", d: "报告分级 A 5 / B 2 · 无失败标记" },
    { t: "debate", d: "Bull 3 : Bear 2 → ResearchPlan 收敛" },
    { t: "risk", d: "Aggressive / Conservative / Neutral 三方评审" },
    { t: "decision", d: "PortfolioDecision · Overweight · 仓位 7%" },
  ];
  return (
    <div className="relative animate-float-up" style={{ animationDelay: "0.2s" }}>
      <div className="rounded-xl border border-border bg-surface-gradient shadow-elevated scanline">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Task · 300750
          </span>
          <span className="text-[10px] font-mono text-primary flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            RUNNING
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <MiniMetric icon={<BrainCircuit className="h-3.5 w-3.5 text-primary/70" />} label="AGENTS" value="34" />
            <MiniMetric icon={<Sparkles className="h-3.5 w-3.5 text-primary/70" />} label="SKILLS" value="184" />
            <MiniMetric icon={<Scale className="h-3.5 w-3.5 text-primary/70" />} label="DEBATE" value="2 / 3" />
            <MiniMetric icon={<Cpu className="h-3.5 w-3.5 text-primary/70" />} label="LLM" value="Quick + Deep" />
          </div>

          <div className="rounded-md border border-border/70 bg-background/60 p-3.5">
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-primary/80">
              live trace · SSE
            </div>
            <div className="space-y-2 font-mono text-[11px] leading-relaxed">
              {trace.map((r) => (
                <div key={r.t} className="flex gap-2">
                  <span className="shrink-0 text-primary/70">{r.t}</span>
                  <span className="truncate text-muted-foreground">{r.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniMetric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-3">
      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1.5 font-mono text-sm text-foreground">{value}</div>
    </div>
  );
}

function Capabilities() {
  const cards = [
    {
      icon: Users,
      title: "群体智能",
      sub: "Swarm Intelligence",
      desc: "34 个专业 Agent 分工协作:7 核心分析师(行情、舆情、新闻、基本面、政策、资金流、解禁供给)+ 11 个垂直插件(投行估值、私募备忘录、基金会计、KYC 合规等)。",
    },
    {
      icon: Shield,
      title: "结构化决策",
      sub: "Structured Decisioning",
      desc: "全链路 Pydantic 类型约束:ResearchPlan → TraderProposal → PortfolioDecision,输出 5 级评级与投资论据,结果可机读、可审计、可入库。",
    },
    {
      icon: Database,
      title: "市场适配性",
      sub: "Market Adaptability",
      desc: "Vendor 路由架构支持 mootdx、东方财富、新浪、yfinance 等多家数据源,内置限流与安全边界,可切换覆盖股票、债券、外汇与大宗商品。",
    },
    {
      icon: LineChart,
      title: "部署灵活性",
      sub: "Deployment Flexibility",
      desc: "核心引擎零外部数据库依赖,可本地跑通全流程;同时提供 Vite + React + FastAPI 全栈 Web 工作台与多用户生产部署方案。",
    },
  ];
  return (
    <section id="capabilities" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="core value"
          title="从原始金融数据,到可执行的投资结论"
          desc="EconSwarm 用群体智能填补数据与决策之间的空白 —— 一次运行就是一支投研团队的完整闭环。"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="ds-card rounded-2xl p-7">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {c.sub}
              </div>
              <h3 className="mt-1.5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    { n: "01", title: "分析师层", desc: "7 核心分析师 + 11 垂直插件多维取数与推理", icon: Radar },
    { n: "02", title: "质量门控", desc: "硬性长度/格式校验 + LLM 软复审,保证报告完整", icon: Shield },
    { n: "03", title: "研究辩论", desc: "Bull ↔ Bear 多轮辩论,对立观点收敛为共识", icon: Scale },
    { n: "04", title: "研究管理", desc: "Deep LLM 生成完整 ResearchPlan", icon: FileText },
    { n: "05", title: "交易策略", desc: "Quick LLM 在市场约束下产出 TraderProposal", icon: Activity },
    { n: "06", title: "风险辩论", desc: "激进 / 保守 / 中性三方视角交叉审议", icon: Users },
    { n: "07", title: "组合管理", desc: "输出 5 级评级(Buy → Sell)与详细论据", icon: ChartLine },
  ];
  return (
    <section id="architecture" className="bg-modules py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="architecture"
          title="七层流水线,每层都可独立配置或替换"
          desc="LangGraph StateGraph 作为唯一编排内核,AgentState 单一图状态贯穿全程,SQLite 断点支持长任务续跑。"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((l) => (
            <div
              key={l.n}
              className="rounded-xl border border-subtle bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="flex items-center justify-between">
                <l.icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-2xl text-primary/25">{l.n}</span>
              </div>
              <div className="mt-4 text-sm font-semibold text-foreground">{l.title}</div>
              <div className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{l.desc}</div>
            </div>
          ))}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <Gauge className="h-4 w-4 text-primary" />
            <div className="mt-4 text-sm font-semibold text-foreground">双 LLM 架构</div>
            <div className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              quick_think_llm 负责高频工具调用与分析师撰写,deep_think_llm 负责全局综合与最终决策 —— 在成本与推理深度间取得平衡。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modes() {
  const modes = [
    {
      icon: Cpu,
      name: "Python API",
      who: "开发者 / 量化团队",
      desc: "直接实例化 TradingGraph,自定义配置并以程序方式执行,结构化结果可直连回测与入库。",
    },
    {
      icon: Terminal,
      name: "CLI",
      who: "进阶研究员",
      desc: "交互式命令行提示、Rich 进度面板与断点管理,单机即可跑批与复盘。",
    },
    {
      icon: MonitorPlay,
      name: "Web 工作台",
      who: "团队 / 终端用户",
      desc: "React + FastAPI 全栈界面,SSE 实时流式进度,报告支持 PDF / Markdown 导出。",
    },
  ];
  return (
    <section id="modes" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="interaction modes"
          title="三种接入方式,匹配不同技术需求"
          desc="同一套引擎,既能嵌入既有研究系统,也能直接作为团队的投研工作台使用。"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {modes.map((m) => (
            <div key={m.name} className="ds-card rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <m.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-base font-semibold text-foreground">{m.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{m.who}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          想了解券商与资管团队的落地方式?
          <Link to="/solutions/equity-research" className="ml-2 text-primary hover:underline">
            查看股票投研解决方案 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "免费版",
      en: "Free",
      price: "$0",
      per: "/ 月",
      desc: "零门槛体验群智能体投研流程。",
      feats: ["每日 2 次完整分析", "7 位核心 Agent 并行", "基础多空 & 风险辩论", "在线查看中文报告"],
      cta: "免费开始",
      href: "https://app.econswarm.com",
    },
    {
      name: "入门版",
      en: "Starter",
      price: "$29",
      per: "/ 月",
      desc: "面向个人研究员与量化爱好者。",
      feats: ["每日 20 次分析", "标准多空 & 风险辩论", "PDF / Markdown 导出", "历史记忆保留 30 天"],
      cta: "选择入门版",
      href: "https://app.econswarm.com",
    },
    {
      name: "专业版",
      en: "Pro",
      price: "$299",
      per: "/ 月",
      desc: "解锁全部数据源与更深推理。",
      feats: ["不限次分析任务", "深思模型无限调用", "资金流 / 龙虎榜 / 解禁数据", "断点续跑与优先队列"],
      cta: "升级到专业版",
      href: "https://app.econswarm.com",
      featured: true,
    },
    {
      name: "机构版",
      en: "Enterprise",
      price: "定制",
      per: "",
      desc: "券商、公募、私募的私有化方案。",
      feats: ["私有化 / VPC 部署", "自定义 Agent 与工具链", "SSO 与团队权限", "专属支持与 SLA"],
      cta: "联系我们",
      href: "mailto:contact@econswarm.com?subject=EconSwarm 机构版咨询",
    },
  ];
  return (
    <section id="pricing" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="pricing"
          title="按需选择你的投研团队"
          desc="从个人研究到机构级私有部署,覆盖不同规模的使用场景。"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`pricing-card relative flex flex-col rounded-2xl border p-6 ${
                p.featured ? "featured border-primary/60 bg-surface-elevated" : "border-subtle bg-surface"
              }`}
            >
              {p.featured && <span className="pricing-badge">推荐</span>}
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
              <a
                href={p.href}
                {...(p.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className={`ds-btn ds-btn--lg mt-6 w-full ${
                  p.featured ? "ds-btn--brand" : "ds-btn--secondary"
                }`}
              >
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
    <section className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gradient-border-card relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-gradient p-10 lg:p-16 shadow-elevated scanline">
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
              让 AI 团队,替你把功课<span className="text-gradient">做扎实</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              输入标的与分析日期,EconSwarm 会调度一支专职 AI 团队完成取证、辩论与风险审议,返回可解释的结构化研究结论。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--brand ds-btn--xl px-8"
                href="https://app.econswarm.com"
              >
                启动分析 <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/blog/swarm-vs-single-llm-comparison"
                className="ds-btn ds-btn--secondary ds-btn--xl px-8"
              >
                群智能体 vs 单一 LLM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const product = [
    { label: "核心价值", href: "#capabilities" },
    { label: "系统架构", href: "#architecture" },
    { label: "接入方式", href: "#modes" },
    { label: "定价方案", href: "#pricing" },
  ];
  const resources = [
    { label: "解决方案:股票投研", href: "/solutions/equity-research" },
    { label: "博客:群智能体 vs 单一 LLM", href: "/blog/swarm-vs-single-llm-comparison" },
    { label: "GitHub 仓库", href: "https://github.com/EconSwarm/econswarm" },
  ];
  const company = [
    { label: "关于我们", href: "#" },
    { label: "联系我们", href: "mailto:contact@econswarm.com" },
  ];
  const legal = [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "风险提示", href: "#" },
  ];
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/EconSwarm/econswarm" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@econswarm.com" },
  ];

  return (
    <footer className="border-t border-subtle bg-section-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="EconSwarm 群智能体金融引擎 Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              高性能群智能体金融引擎:34 个专业 Agent 与 184 个模块化金融技能,协同完成从多源取证到结构化决策的全流程投研工作。
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-subtle bg-surface text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary hover:bg-surface-elevated"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "产品", links: product },
            { title: "资源", links: resources },
            { title: "公司", links: company },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-subtle pt-8 text-xs text-muted-foreground sm:flex-row">
          <div className="font-mono">© 2026 EconSwarm. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="transition hover:text-foreground">
                {l.label}
              </a>
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
      <Architecture />
      <Modes />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
