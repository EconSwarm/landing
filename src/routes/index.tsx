import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Terminal,
  Activity,
  Database,
  Shield,
  Users,
  LineChart,
  Zap,
  MessageSquare,
  TrendingUp,
  Newspaper,
  Landmark,
  Wallet,
  Lock,
  Radio,
  Github,
  Twitter,
  Mail,
  Linkedin,
  Menu,
  BrainCircuit,
  Workflow,
  Scale,
  Sparkles,
  Cpu,
  Earth,
  Star,
  Target,
  FileText,
  Radar,
  ChartLine,
  UserPlus,
  MessagesSquare,
  Gauge,
} from "lucide-react";

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
  { label: "Agent 矩阵", href: "#modules", icon: BrainCircuit },
  { label: "技术优势", href: "#technology", icon: Cpu },
  { label: "技术原理", href: "#principle", icon: Workflow },
  { label: "应用场景", href: "#scenarios", icon: Target },
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
          <img src="/logo.png" alt="EconSwarm 群智能体金融引擎 Logo" className="h-9 w-auto object-contain" loading="eager" decoding="async" />
        </a>
        <nav
          aria-label="主导航"
          className="hidden lg:flex items-center justify-center gap-1 text-sm"
        >
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
            href="https://stock-agent-rust.vercel.app"
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
                多智能体 · 多技能协同的金融研究运行时
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              34 个专业 Agent、184 个金融技能，由 LangGraph 状态机编排：取数、门控、辩论、风控，输出结构化决策。覆盖股票、债券、外汇与大宗商品。
            </p>


            <div className="mt-6 flex flex-wrap gap-2">
              {["股票", "债券", "外汇", "大宗商品", "多市场 · 多资产"].map((t) => (
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
                className="ds-btn ds-btn--brand ds-btn--xl px-8 h-[38px]! w-[100px]"
              >
                启动分析 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://stock-agent-rust.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--secondary ds-btn--xl px-8 h-[38px]! w-[100px]"
              >
                <Terminal className="h-4 w-4 text-primary" /> 查看示例
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "专业 Agent", v: "34" },
                { k: "金融技能库", v: "184" },
                { k: "分析流水线", v: "12 阶段" },
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
            Task · 300750 · 2026-05-12
          </span>
          <span className="text-[10px] font-mono text-primary flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            RUNNING
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <MiniMetric
              icon={<BrainCircuit className="h-3.5 w-3.5 text-primary/70" />}
              label="ACTIVE AGENTS"
              value="34"
            />
            <MiniMetric
              icon={<Scale className="h-3.5 w-3.5 text-primary/70" />}
              label="DEBATE ROUND"
              value="2 / 3"
            />
            <MiniMetric
              icon={<Cpu className="h-3.5 w-3.5 text-primary/70" />}
              label="TOOLS CALLED"
              value="34"
            />
            <MiniMetric
              icon={<Earth className="h-3.5 w-3.5 text-primary/70" />}
              label="TARGET"
              value="A · 300750"
            />
          </div>

          <div className="rounded-md border border-border/70 bg-background/60 p-3.5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-mono text-muted-foreground">
                PRICE PATH · 300750 · 20D
              </span>
              <span className="text-[10px] font-mono text-primary">4 views</span>
            </div>
            <svg viewBox="0 0 240 100" className="w-full h-24">
              <defs>
                <pattern id="g" width="24" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 24 0 L 0 0 0 20"
                    fill="none"
                    stroke="oklch(0.28 0.04 160 / 40%)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="240" height="100" fill="url(#g)" />
              <path
                d="M0,40 C20,38 40,42 60,35 C80,28 100,32 120,25 C140,20 160,24 180,18 C200,14 220,20 240,12"
                fill="none"
                stroke="oklch(0.78 0.22 150)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,40 C20,42 40,44 60,42 C80,40 100,45 120,44 C140,42 160,48 180,50 C200,52 220,55 240,58"
                fill="none"
                stroke="oklch(0.85 0.20 130)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,40 C20,45 40,50 60,52 C80,55 100,58 120,62 C140,66 160,64 180,68 C200,72 220,70 240,74"
                fill="none"
                stroke="oklch(0.70 0.18 175)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,40 C20,48 40,55 60,60 C80,68 100,72 120,80 C140,86 160,82 180,90 C200,95 220,92 240,98"
                fill="none"
                stroke="oklch(0.65 0.22 25)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
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
              <EventRow
                t="12:04:21"
                tag="Policy"
                tagColor="text-primary"
                msg="产业补贴延续 · 利好评级 +1"
              />
              <EventRow
                t="12:04:24"
                tag="HotMoney"
                tagColor="text-primary"
                msg="北向资金净流入 3.2 亿"
              />
              <EventRow
                t="12:04:27"
                tag="Fundamentals"
                tagColor="text-primary"
                msg="ROE 18.4% · 高于同业中位"
              />
              <EventRow
                t="12:04:31"
                tag="Bull↔Bear"
                tagColor="text-primary"
                msg="收敛观点：偏多，仓位 60%"
              />
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
    <div className="rounded-md border border-border/70 bg-background/60 p-3 glow-card">
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

function EventRow({
  t,
  tag,
  tagColor,
  msg,
}: {
  t: string;
  tag: string;
  tagColor: string;
  msg: string;
}) {
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
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance lg:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground text-balance">{desc}</p>}
    </div>
  );
}

function Capabilities() {
  const cards = [
    {
      icon: Users,
      title: "多智能体协同决策",
      sub: "Collaborative Decisioning",
      desc: "7 位核心分析师与 11 个垂直插件并行取证，研究经理收敛观点，交易员与组合经理给出决策。",
      points: ["7 核心 + 11 垂直插件", "研究计划 → 交易方案 → 组合决策", "双 LLM：快思执行 + 深思综合"],
      demo: [
        "market · 均线多头,量能温和放大",
        "fundamentals · ROE 18.4%,现金流覆盖 1.7x",
        "debate · Bull 3 : Bear 2 → 观点收敛",
      ],
    },
    {
      icon: Radar,
      title: "实时市场感知",
      sub: "Real-time Market Sensing",
      desc: "Agent 不直连网络，统一经 Vendor 路由取数，单源失败自动切换，结果以 SSE 流式返回。",
      points: ["9 直连数据源 + 国际 Vendor", "SSE 流式 + 实时进度", "股票 / 债券 / 外汇 / 商品"],
      demo: [
        "vendor · a_stock → 行情 / 财务快照",
        "flow · 北向净流入 +12.4 亿",
        "stream · SSE 推送中 · stage 3/7",
      ],
    },

    {
      icon: Shield,
      title: "风险智能管控",
      sub: "Intelligent Risk Control",
      desc: "两层质量门控给报告打 A–F 分级，再由激进 / 保守 / 中性三方风险辩论审议交易方案。",
      points: ["硬检查 + LLM 复审", "三方风险辩论", "解禁 / 减持 / 合规扫描"],
      demo: [
        "gate · 7 份报告 → A 5 / B 2",
        "risk · 6 个月内解禁 4.2% 流通盘",
        "verdict · 仓位 12% → 7%",
      ],
    },
    {
      icon: LineChart,
      title: "记忆反思与持续进化",
      sub: "Memory & Reflection",
      desc: "每次运行写入决策日志，延迟反思对照基准纠偏；任务按标的独立断点，长流程可续跑。",
      points: ["决策记忆 + 延迟反思", "断点续跑 / 任务恢复", "输出：Markdown / JSON / PDF"],
      demo: [
        "memory · 召回同类标的历史结论",
        "reflect · 修正舆情证据权重",
        "output · 结构化投研报告已生成",
      ],
    },

  ];
  return (
    <section id="capabilities" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="core capabilities"
          title="群智能体金融引擎的四大核心能力"
          desc="一次运行走完一支投研团队的完整闭环,每一步可解释、可审计、可复盘。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {cards.map((c, i) => (
            <div key={c.title} className="ds-card rounded-2xl p-8" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary/20">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {c.sub}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg border border-border/70 bg-background/50 p-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                  场景演示 · live trace
                </div>
                <div className="space-y-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {c.demo.map((d) => (
                    <div key={d} className="truncate">
                      <span className="text-primary/70">›</span> {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 rounded-xl border border-border/70 bg-background/40 p-6 sm:grid-cols-3">
          {[
            { icon: Star, k: "编排内核", v: "LangGraph StateGraph · 断点续跑" },
            { icon: Cpu, k: "LLM 供应商", v: "11+ 家兼容 · 双 LLM 架构" },
            { icon: Sparkles, k: "金融技能库", v: "184 SKILL.md · DCF / LBO / 三表" },
          ].map((x) => (
            <div key={x.k} className="flex items-center gap-3">
              <div className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary">
                <x.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {x.k}
                </div>
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
    {
      n: "01",
      title: "34 个专业 Agent",
      sub: "Swarm Specialist Agents",
      body: "7 个核心分析师 + 11 个垂直插件(投行估值、私募备忘录、基金会计、KYC 合规、财富管理等), 角色以工厂注册,可按任务裁剪阵容。",
      tags: ["7 核心 + 11 垂直", "可扩展角色工厂", "并行取证"],
    },
    {
      n: "02",
      title: "184 个金融技能",
      sub: "Skill Orchestration",
      body: "技能以 SKILL.md 沉淀并进入注册表, 按场景注入 Agent 提示词 —— DCF、LBO、三表建模、尽调清单等方法论即插即用。",
      tags: ["184 个 SKILL.md", "领域级引用", "提示词级注入"],
    },
    {
      n: "03",
      title: "辩论与质量门控",
      sub: "Debate & Risk Layer",
      body: "多空辩论收敛研究观点, 三方风险辩论审议交易方案;两层质量门控确保输入可信,延迟反思持续纠偏。",
      tags: ["两层质量门控", "3 方风险辩论", "延迟反思"],
    },
    {
      n: "04",
      title: "结构化决策与交付",
      sub: "Structured Strategy Output",
      body: "研究经理 → 交易员 → 组合经理全链路类型化输出,给出 5 级评级、仓位建议与 Markdown / JSON / PDF 报告。",
      tags: ["5 级评级", "类型安全输出", "多格式交付"],
    },
  ];
  const analysts = [
    { icon: LineChart, label: "市场分析师", key: "market", desc: "K 线 · 量价 · 技术指标" },
    { icon: MessageSquare, label: "舆情分析师", key: "social", desc: "社媒讨论 · 情绪热度" },
    { icon: Newspaper, label: "新闻分析师", key: "news", desc: "个股 · 行业 · 全球事件" },
    {
      icon: TrendingUp,
      label: "基本面分析师",
      key: "fundamentals",
      desc: "三表 · 估值 · 一致预期",
    },
    { icon: Landmark, label: "政策分析师", key: "policy", desc: "监管 · 产业政策 · 宏观" },
    { icon: Wallet, label: "游资追踪师", key: "hot_money", desc: "北向 · 资金流 · 龙虎榜" },
    { icon: Lock, label: "解禁监控师", key: "lockup", desc: "解禁 · 减持 · 供给冲击" },
  ];
  return (
    <section id="modules" className="bg-modules py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="core modules"
          title="一群 AI 分析师,一份可解释报告"
          desc="专职分工、辩论收敛、数据直连、结果留痕。"
        />


        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {modules.map((m) => (
            <div key={m.n} className="ds-card rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-primary">
                  MODULE {m.n}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">{m.sub}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <span key={t} className="ds-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center font-mono text-[11px] tracking-widest text-primary">
            7 核心 ANALYSTS · + 11 垂直 AGENT PLUGINS · = 34 ROLE SWARM
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {analysts.map((a, i) => (
              <div
                key={a.key}
                className="rounded-xl border border-subtle bg-surface/70 p-4 transition-all duration-200 hover:border-primary/40 hover:-translate-y-1 hover:shadow-sm hover:bg-surface"
                style={{ animationDelay: `${i * 60}ms` }}
              >
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
    { title: "智能体层", sub: "34 Agent Swarm", icon: BrainCircuit, n: "02" },
    { title: "辩论与门控", sub: "Debate & Gate", icon: Scale, n: "03" },
    { title: "决策与产物", sub: "Structured Output", icon: Target, n: "04" },
  ];
  const layers = [
    { items: ["9 个直连数据源", "a_stock / yfinance / alpha_vantage", "5 大工具类别路由"] },
    { items: ["7 核心 Analyst 并行", "11 垂直插件 + 附加角色", "双 LLM · 快思 + 深思"] },
    {
      items: [
        "两层质量门控 (硬检查 + LLM 复审)",
        "Bull ↔ Bear 多空辩论",
        "Aggressive / Neutral / Conservative 风险辩论",
      ],
    },
    { items: ["Pydantic 结构化决策", "5 级信号 + 仓位建议", "中文投研报告 + 交易记忆反思"] },
  ];
  return (
    <section id="principle" className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="technical principle"
          title="多智能体协同的技术原理"
          desc="一次运行走完一支投研团队的完整闭环，每一步可解释、可审计、可复盘。"
        />
        <div className="mt-14 rounded-xl border border-border bg-surface-gradient p-6 lg:p-8 shadow-elevated scanline">
          <div className="grid gap-4 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-0" />
            {nodes.map((n, i) => {
              const Icon = n.icon;
              const layer = layers[i];
              return (
                <div
                  key={n.n}
                  className="relative z-10 rounded-lg border border-border bg-background/70 p-5 transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-md border border-primary/30 bg-primary/10 p-2 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-2xl text-primary/25">{n.n}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{n.title}</h3>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-primary/70">
                    {n.sub}
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
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
              <span className="text-[10px] font-mono text-primary">
                SQLite Checkpoint · 断点续跑
              </span>
            </div>
            <svg viewBox="0 0 1020 170" className="w-full h-auto">
              <line
                x1="80"
                y1="80"
                x2="100"
                y2="40"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="80"
                y1="80"
                x2="100"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="80"
                y1="80"
                x2="100"
                y2="120"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="180"
                y1="40"
                x2="220"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="180"
                y1="80"
                x2="220"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="180"
                y1="120"
                x2="220"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="300"
                y1="80"
                x2="340"
                y2="40"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="300"
                y1="80"
                x2="340"
                y2="120"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="420"
                y1="40"
                x2="450"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="420"
                y1="120"
                x2="450"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="530"
                y1="80"
                x2="570"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="650"
                y1="80"
                x2="680"
                y2="40"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="650"
                y1="80"
                x2="680"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="650"
                y1="80"
                x2="680"
                y2="120"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="760"
                y1="40"
                x2="810"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="760"
                y1="80"
                x2="810"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="760"
                y1="120"
                x2="810"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="890"
                y1="80"
                x2="920"
                y2="80"
                stroke="oklch(0.78 0.22 150 / 45%)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <g>
                <rect
                  x="0"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.75 0.16 200)"
                  strokeWidth="1"
                />
                <text
                  x="40"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Data
                </text>
              </g>
              <g>
                <rect
                  x="100"
                  y="28"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="140"
                  y="44"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Market
                </text>
              </g>
              <g>
                <rect
                  x="100"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="140"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  News
                </text>
              </g>
              <g>
                <rect
                  x="100"
                  y="108"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="140"
                  y="124"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Policy
                </text>
              </g>
              <g>
                <rect
                  x="220"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.80 0.18 90)"
                  strokeWidth="1"
                />
                <text
                  x="260"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Quality Gate
                </text>
              </g>
              <g>
                <rect
                  x="340"
                  y="28"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="380"
                  y="44"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Bull
                </text>
              </g>
              <g>
                <rect
                  x="340"
                  y="108"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="380"
                  y="124"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Bear
                </text>
              </g>
              <g>
                <rect
                  x="450"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="490"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Research Mgr
                </text>
              </g>
              <g>
                <rect
                  x="570"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="610"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Trader
                </text>
              </g>
              <g>
                <rect
                  x="680"
                  y="28"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="720"
                  y="44"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Aggressive
                </text>
              </g>
              <g>
                <rect
                  x="680"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="720"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Neutral
                </text>
              </g>
              <g>
                <rect
                  x="680"
                  y="108"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.78 0.22 150 / 70%)"
                  strokeWidth="1"
                />
                <text
                  x="720"
                  y="124"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Conservative
                </text>
              </g>
              <g>
                <rect
                  x="810"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.85 0.20 130)"
                  strokeWidth="1"
                />
                <text
                  x="850"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  Portfolio Mgr
                </text>
              </g>
              <g>
                <rect
                  x="920"
                  y="68"
                  width="80"
                  height="24"
                  rx="6"
                  fill="oklch(0.22 0.03 160)"
                  stroke="oklch(0.85 0.20 130)"
                  strokeWidth="1"
                />
                <text
                  x="960"
                  y="84"
                  textAnchor="middle"
                  fontSize="10"
                  fill="oklch(0.94 0.02 150)"
                  fontFamily="Inter, sans-serif"
                >
                  5-Level Signal
                </text>
              </g>
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
        <SectionHeading
          kicker="workbench"
          title="工作台"
          desc="左侧任务与 Agent 阵容, 中间协作视图与分析产物,右侧模型、辩论轮次与运行控制 — 一屏跑完一次完整的群智能体投研。"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {feats.map((f, i) => (
              <div
                key={f.title}
                className="rounded-xl border border-subtle bg-surface p-5 transition-all duration-200 hover:border-primary/30 hover:bg-surface-elevated"
              >
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
                <div className="mt-3 text-xs font-mono text-primary">
                  Agent 协作视图 · 7 分析师 → 辩论 → 决策
                </div>
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
          return (
            <line
              key={i}
              x1="250"
              y1="200"
              x2={x}
              y2={y}
              stroke="var(--primary)"
              strokeOpacity="0.25"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          );
        })}
        <circle cx="250" cy="200" r="80" fill="url(#pmg)" />
        <circle
          cx="250"
          cy="200"
          r="34"
          fill="var(--surface-elevated)"
          stroke="var(--primary)"
          strokeWidth="1.5"
        />
        <text
          x="250"
          y="205"
          textAnchor="middle"
          className="fill-primary font-mono text-sm font-bold"
        >
          PM
        </text>
        {nodes.map((n, i) => {
          const angle = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
          const x = 250 + Math.cos(angle) * 150;
          const y = 200 + Math.sin(angle) * 130;
          return (
            <g key={n}>
              <circle cx={x} cy={y} r="30" fill="var(--surface)" stroke="var(--border)" />
              <circle
                cx={x}
                cy={y}
                r="30"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.5"
                strokeWidth="1"
              />
              <text x={x} y={y + 4} textAnchor="middle" className="fill-foreground text-[11px]">
                {n}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Pipeline() {
  const steps = [
    { label: "分析师层取证", icon: FileText },
    { label: "质量门控", icon: Radar },
    { label: "多空辩论", icon: MessagesSquare },
    { label: "研究计划", icon: BrainCircuit },
    { label: "交易方案", icon: Activity },
    { label: "三方风控辩论", icon: Scale },
    { label: "组合决策 + 报告", icon: ChartLine },
  ];
  return (
    <section id="pipeline" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="pipeline"
          title="七层分析流水线"
          desc="从一个标的、一个日期, 到 5 级评级与一份中文投研报告。"
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-7 gap-4">

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="pipeline-step relative rounded-lg border border-border bg-surface-gradient p-4"
              >
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

function Technology() {
  const items = [
    {
      icon: BrainCircuit,
      title: "群智能体架构",
      sub: "Swarm Architecture",
      body: "不是给大模型套一层界面, 而是把投研 SOP 编排成状态机 —— 每一层都可独立替换。",
      tags: ["状态机编排", "七层流水线", "断点续跑"],
    },
    {
      icon: Database,
      title: "多源数据融合",
      sub: "Multi-source Fusion",
      body: "Agent 只调用抽象工具, 由 Vendor 路由分发到具体数据源;类别与工具级可分别配置,支持优先顺序与自动 fallback。",
      tags: ["9 直连源 + 国际 Vendor", "分级路由", "自动 fallback"],
    },
    {
      icon: Gauge,
      title: "双 LLM 分层推理",
      sub: "Dual-LLM Reasoning",
      body: "快思模型负责高频工具调用与分析师撰写,深思模型负责全局综合与最终决策,兼顾质量与成本。11+ 供应商开箱即用。",
      tags: ["快思 + 深思", "11+ 供应商", "兼容自定义端点"],
    },
    {
      icon: Scale,
      title: "质量门控与类型化输出",
      sub: "Quality Gate & Typed Output",
      body: "硬检查校验报告完整性并给出 A–F 分级,失败项交 LLM 复审;决策链全程类型约束,结果可机读、可对接。",
      tags: ["A–F 分级", "LLM 复审", "类型安全"],
    },
    {
      icon: Activity,
      title: "记忆与延迟反思",
      sub: "Memory & Reflection",
      body: "决策日志记录每次运行结论,对照基准做延迟反思并回灌下一轮提示词,持续修正策略偏差。",
      tags: ["交易记忆", "基准反思", "可配置"],
    },
    {
      icon: Star,
      title: "可复用工作流",
      sub: "Workflow Orchestration",
      body: "从 Agent 与技能库自由组合流水线,指定目标类型与输入契约,每次更新生成新版本,可复用与团队共享。",
      tags: ["自由组合", "输入契约", "版本可追溯"],
    },
    {
      icon: Terminal,
      title: "三套接入方式",
      sub: "Python · CLI · Web",
      body: "Python API 嵌入既有系统,交互式 CLI 适合单机跑批,Web 工作台提供任务中心、时间线与报告导出。",
      tags: ["Python API", "CLI", "Web 工作台"],
    },
  ];
  return (
    <section id="technology" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="technology"
          title="支撑引擎的七项核心技术"
          desc="不是给大模型套一层界面,而是把投研 SOP 编排成状态机 —— 每一层都可独立替换。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.title} className="ds-card rounded-2xl p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <t.icon className="h-4.5 w-4.5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.sub}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((x) => (
                  <span key={x} className="ds-tag">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  const list = [
    {
      icon: Landmark,
      title: "券商研究所",
      value: "深度报告提速",
      body: "多路 Agent 并行取证并生成带汇总表格的初稿, 分析师把时间投入观点而非拼数据。",
      metric: "初稿产出 · 小时级",
    },
    {
      icon: TrendingUp,
      title: "公募 / 私募投研",
      value: "多资产池持续跟踪",
      body: "按标的池批量运行, 输出 5 级评级与仓位建议,记忆与反思沉淀历史胜率。",
      metric: "5 级评级 + 仓位建议",
    },
    {
      icon: ChartLine,
      title: "量化交易团队",
      value: "信号自动迭代",
      body: "Python API 嵌入研究流水线, 结构化决策可机读入库,断点续跑支撑长周期回溯。",
      metric: "JSON 可直连回测",
    },
    {
      icon: Shield,
      title: "风险与合规",
      value: "敞口前置暴露",
      body: "三方风险辩论叠加解禁监控与合规 Agent, 把供给冲击与监管风险在决策前显性化。",
      metric: "全链路留痕",
    },
    {
      icon: Wallet,
      title: "财富管理与投顾",
      value: "客户级报告批量生成",
      body: "结合资产配置技能输出客户报告, 风险提示与免责声明模板化嵌入。",
      metric: "Markdown / PDF 交付",
    },
    {
      icon: Zap,
      title: "个人研究者",
      value: "一个人的投研团队",
      body: "免费直连数据源 + 交互式 CLI, 零付费数据库即可跑通全流程。",
      metric: "零付费数据依赖",
    },
  ];
  return (
    <section id="scenarios" className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="use cases"
          title="不同金融业务场景中的落地价值"
          desc="同一套引擎,适配研究、投研、量化、风控与财富管理。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-subtle bg-surface p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-foreground">{s.title}</div>
              </div>
              <div className="mt-4 text-base font-medium text-foreground">{s.value}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-5 border-t border-border/60 pt-4 font-mono text-[11px] text-primary/80">
                {s.metric}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          想看券商研究所与资管团队的完整落地方式?
          <Link to="/solutions/equity-research" className="ml-2 text-primary hover:underline">
            查看股票投研解决方案 →
          </Link>
        </div>
      </div>

    </section>
  );
}

function Roadmap() {
  const items = [
    {
      title: "更多金融类别",
      desc: "在 A 股基础上扩展宏观、港股、美股、债券、商品与 FX，通过 Vendor 路由无缝接入新市场数据。",
      icon: Earth,
    },
    {
      title: "自定义智能体",
      desc: "按角色、工具、记忆与约束自定义专属 Agent，接入现有辩论与风险审议链路。",
      icon: UserPlus,
    },
    {
      title: "智能体对话与生成",
      desc: "用自然语言描述目标即可生成 Agent 团队，并与任一 Agent 追问、复盘、协同推演。",
      icon: MessagesSquare,
    },
  ];
  return (
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="roadmap"
          title="从 A 股，到一个可对话的智能体宇宙"
          desc="当前以 A 股为核心。下一阶段，EconSwarm 将把资产范围、Agent 定义与协作方式，交给用户自己决定。"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((i, idx) => {
            const Icon = i.icon;
            return (
              <div
                key={i.title}
                className="ds-card p-6"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md border border-primary/30 bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Coming Next
                  </span>
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
    {
      name: "免费版",
      en: "Free",
      price: "$0",
      per: "/ 月",
      desc: "零门槛体验群智能体投研流程,适合初次尝试的用户。",
      feats: [
        "每日 2 次完整分析任务",
        "7 位专职 Agent 并行分析",
        "基础多空 & 风险辩论",
        "A 股行情与基本面数据",
        "在线查看中文投研报告",
      ],
      cta: "免费开始",
      href: "https://app.econswarm.com",
    },
    {
      name: "入门版",
      en: "Starter",
      price: "$29",
      per: "/ 月",
      desc: "面向个人研究员与量化爱好者,日常研究场景够用。",
      feats: [
        "每日 20 次完整分析任务",
        "标准多空 & 风险辩论",
        "中文投研报告导出 (PDF / Markdown)",
        "历史任务记忆保留 30 天",
        "标准队列响应速度",
      ],
      cta: "选择入门版",
      href: "https://app.econswarm.com",
    },
    {
      name: "专业版",
      en: "Pro",
      price: "$299",
      per: "/ 月",
      desc: "面向深度研究者与专业投资者,解锁全部数据与更深推理。",
      feats: [
        "不限次分析任务",
        "深思模型 (Pro) 无限调用",
        "多空辩论 3 轮 · 风险辩论 2 轮",
        "资金流 / 龙虎榜 / 解禁数据",
        "任务记忆与断点续跑",
        "优先队列与更快响应",
      ],
      cta: "升级到专业版",
      href: "https://app.econswarm.com",
      featured: true,
    },
    {
      name: "机构版",
      en: "Enterprise",
      price: "定制",
      per: "",
      desc: "面向券商、公募、私募与银行研究团队的私有化部署方案。",
      feats: [
        "私有化 / VPC 部署",
        "自定义 Agent 与工具链",
        "多市场数据接入 (港股 / 美股 / 债券)",
        "SSO 与团队权限管理",
        "专属技术支持与 SLA",
      ],
      cta: "联系我们",
      href: "mailto:contact@econswarm.com?subject=EconSwarm 机构版咨询",
    },
  ];
  return (
    <section id="pricing" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="pricing"
          title="按需选择你的投研团队"
          desc="从个人研究到机构级私有部署, EconSwarm 提供覆盖不同场景的定价方案。"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`pricing-card relative flex flex-col rounded-2xl border p-6 ${
                p.featured
                  ? "featured border-primary/60 bg-surface-elevated"
                  : "border-subtle bg-surface"
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
                {...(p.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
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
    <section className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gradient-border-card relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-gradient p-10 lg:p-16 shadow-elevated scanline">
          <div
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight max-w-2xl">
              让 AI 团队，替你把功课<span className="text-gradient">做扎实</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              输入股票代码与分析日期，EconSwarm 会调度一支专职 AI
              团队完成分析、辩论与风险审议，返回一份可解释的中文投研报告与交易信号。
            </p>
            <Gauge className="hidden" />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--brand ds-btn--xl px-8 h-[38px]! w-[100px]"
                href="https://app.econswarm.com"
              >
                查看博客 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn ds-btn--secondary ds-btn--xl px-8 h-[38px]! w-[100px]"
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
    { label: "解决方案:股票投研", href: "/solutions/equity-research" },
    { label: "博客首页", href: "/blog" },
    { label: "博客:群智能体 vs 单一 LLM", href: "/blog/swarm-vs-single-llm-comparison" },
    {
      label: "博客:LangGraph 金融多智能体",
      href: "/blog/langgraph-financial-agents-implementation",
    },
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
            <a href="#" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="EconSwarm 群智能体金融引擎 Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              通用群智能体金融分析框架。让一支可配置、可扩展、可审计的 AI
              分析师团队，替你完成从数据抓取到交易信号的全流程投研工作。
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

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              产品
            </div>
            <ul className="mt-4 space-y-2.5">
              {product.map((l) => (
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

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              资源
            </div>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => (
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

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              公司
            </div>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
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
      <Modules />
      <Technology />
      <Principle />
      <Workbench />
      <Pipeline />
      <Scenarios />

      <Roadmap />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
