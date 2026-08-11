import { createFileRoute } from "@tanstack/react-router";
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
              EconSwarm 以 LangGraph 状态机调度 34 个专业 Agent 与 184 个金融技能,把投研 SOP 编排成 12 阶段自动化分析流水线:多源数据校验、多空辩论、三方风控评审与结构化最终决策 —— 面向股票、债券、外汇与大宗商品的多市场、多资产投研场景,输出专业、可解释、可审计的研究报告。
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
                href="https://app.econswarm.com"
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
      desc: "34 个专业 Agent 分工取证:7 核心 Analyst 覆盖行情、舆情、新闻、基本面、政策、资金流与解禁供给,11 个垂直插件覆盖投行估值、私募备忘录、基金会计、KYC 合规等专业域。经Research Manager 收敛后由 Trader 与 Portfolio Manager 输出结构化决策。",
      points: ["7 核心 + 11 垂直插件", "Pydantic:ResearchPlan → TraderProposal → PortfolioDecision", "双 LLM:快思执行 + 深思综合"],
      demo: [
        "market · 技术面 → 均线多头,量能温和放大",
        "fundamentals · 三表 → ROE 18.4%,现金流覆盖 1.7x",
        "debate · Bull 3 : Bear 2 → 研究计划已收敛",
      ],
    },
    {
      icon: Radar,
      title: "实时市场感知",
      sub: "Real-time Market Sensing",
      desc: "Agent 不直连网络,统一通过 route_to_vendor() 路由到 9 个免费直连数据源(通达信 TCP、腾讯财经、东方财富 datacenter/push2、新浪、同花顺、财联社、百度股市通等),并可切换 yfinance / Alpha Vantage 接入国际市场。行情、财报、快讯、资金流、龙虎榜、限售解禁多路并行取数,单源失败自动 fallback;对话结果经 SSE 逐 token 流式返回,持久化任务通过 WebSocket 实时推送 12 阶段进度。",
      points: ["9 直连数据源 + 2 国际 Vendor", "SSE 流式回复 + WebSocket 进度推送", "多市场:A 股 / 美股 / 港股 / FX / 商品"],
      demo: [
        "vendor · a_stock → OHLCV / F10 / 财务快照",
        "flow · 北向净流入 +12.4 亿,龙虎榜席位 3 家机构",
        "stream · SSE token 推送中 · stage 3/12 news",
      ],
    },

    {
      icon: Shield,
      title: "风险智能管控",
      sub: "Intelligent Risk Control",
      desc: "两层质量门控先做把关:硬检查校验报告长度、失败标记、必采清单与汇总表格并给出 A–F 分级,失败项再交 LLM 逐条复审。随后 Aggressive ↔ Conservative ↔ Neutral 三方风险辩论审议交易方案,合规与解禁供给风险在决策前被显性暴露。",
      points: ["Layer 1 硬检查 + Layer 2 LLM 复审", "三方风险辩论审议交易方案", "解禁 / 减持 / 合规风险持续扫描"],
      demo: [
        "gate · 7 份报告 → A 5 / B 2,无失败标记",
        "risk · Conservative:6 个月内解禁 4.2% 流通盘",
        "verdict · 仓位由 12% 下调至 7%",
      ],
    },
    {
      icon: LineChart,
      title: "量化策略自动迭代",
      sub: "Strategy Auto-Iteration",
      desc: "每次运行的决策以追加式 Markdown 写入交易记忆,配合沪深 300 基准做延迟反思:结果回灌下一轮提示词,持续修正策略偏差。每个标的独立 SQLite 断点,长任务可断可续,支持批量回溯与复盘。",
      points: ["交易记忆 + 延迟反思(沪深 300 基准)", "每 ticker SQLite 断点恢复", "5 级信号 + 仓位建议 + Markdown/JSON/PDF"],
      demo: [
        "memory · 近 20 次决策命中率 62%,超额 +4.1%",
        "reflect · 高估情绪权重 → 下调舆情置信度",
        "signal · Overweight · 建议仓位 7% · 报告已导出",
      ],
    },
  ];
  return (
    <section id="capabilities" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="core capabilities"
          title="群智能体金融引擎的四大核心能力"
          desc="从多源感知到协同决策、风险管控与策略迭代 —— 一次运行就是一支投研团队完整的工作闭环,每一步都可解释、可审计、可复盘。"
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
      title: "34 个专业 Agent · 群体协同决策",
      sub: "Swarm Specialist Agents",
      body: "7 核心 Analyst 覆盖行情、舆情、新闻、基本面、政策、资金流、解禁供给；11 个垂直插件 Agent 覆盖投行估值/LBO、私募 IC 备忘录、基金会计与 NAV 对账、KYC 合规、财富管理与跨资产数据伙伴。角色以工厂注册,可按任务自由裁剪阵容。",
      tags: ["7 核心 + 11 垂直", "角色工厂可扩展", "并行取证"],
    },
    {
      n: "02",
      title: "184 个金融技能 · 模块化编排",
      sub: "Skill Orchestration",
      body: "技能以 SKILL.md 形式沉淀(当前 184 个),启动时进入注册表,支持根级与 `domain:name` 领域级引用,由 build_skills_section() 注入 Agent 系统提示词 —— DCF、LBO、三表建模、尽调清单等方法论可按场景装配。",
      tags: ["184 个 SKILL.md", "domain:name 领域引用", "提示词级注入"],

    },
    {
      n: "03",
      title: "多空 & 三方风险辩论 · 质量门控",
      sub: "Debate & Risk Layer",
      body: "Bull ↔ Bear 多空辩论收敛研究观点,Aggressive ↔ Conservative ↔ Neutral 三方风险辩论审议交易方案；两层质量门控(硬检查 A–F 分级 + LLM 复审)确保输入可信,交易记忆与延迟反思持续纠偏。",
      tags: ["两层质量门控", "3 方风险辩论", "延迟反思复盘"],
    },
    {
      n: "04",
      title: "结构化决策与多格式交付",
      sub: "Structured Strategy Output",
      body: "Research Manager → Trader → Portfolio Manager 全链路 Pydantic 结构化决策(ResearchPlan / TraderProposal / PortfolioDecision),输出 5 级信号、仓位建议与 Markdown / JSON / PDF 研究报告,全程可解释可审计。",
      tags: ["5 级信号", "Pydantic 结构化", "Markdown / JSON / PDF"],
    },
  ];
  const analysts = [
    { icon: LineChart, label: "市场分析师", key: "market", desc: "K 线 · 量价 · 技术指标" },
    { icon: MessageSquare, label: "舆情分析师", key: "social", desc: "社媒讨论 · 情绪热度" },
    { icon: Newspaper, label: "新闻分析师", key: "news", desc: "个股/行业 · 全球事件 · 交易异动" },
    {
      icon: TrendingUp,
      label: "基本面分析师",
      key: "fundamentals",
      desc: "三表 · 估值 · 一致预期",
    },
    { icon: Landmark, label: "政策分析师", key: "policy", desc: "监管 · 产业政策 · 宏观窗口" },
    { icon: Wallet, label: "游资追踪师", key: "hot_money", desc: "北向 · 资金流 · 龙虎榜" },
    { icon: Lock, label: "解禁监控师", key: "lockup", desc: "解禁 · 减持 · 供给冲击" },
  ];
  return (
    <section id="modules" className="bg-modules py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="core modules"
          title="一群 AI 分析师,一份可解释报告"
          desc="专职分工、辩论收敛、数据直连、结果可审计 — EconSwarm 把一支投研团队的工作方式,编排成可重复运行的多智能体流水线。"
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
          desc="从数据直连到 5 级信号,一次运行由四层结构化流水线协同完成 — 每一步都可审计、可复现、可复盘。"
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
          desc="左侧任务与 Agent 阵容,中间协作视图与分析产物,右侧模型、辩论轮次与运行控制 — 一屏跑完一次完整的群智能体投研。"
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
    { label: "输入标的与日期", icon: FileText },
    { label: "34 Agent 协同分析", icon: BrainCircuit },
    { label: "两层质量门控", icon: Radar },
    { label: "多空 & 风险辩论", icon: Scale },
    { label: "交易与组合决策", icon: Activity },
    { label: "5 级信号 + 报告", icon: ChartLine },
  ];
  return (
    <section id="pipeline" className="bg-section-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="pipeline"
          title="分析主流程"
          desc="从一只股票、一个日期开始,到 Buy / Hold / Sell 信号和一份中文投研报告,六步走完全流程。"
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-4">
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
      body: "LangGraph StateGraph 作为唯一编排内核:AgentState 单一图状态承载 7 个核心报告字段、插件报告字段、质量摘要、两套辩论状态与最终决策,统一沉淀为 12 阶段流水线(7 分析师 → 质量门控 → 多空辩论 → 交易决策 → 风控评估 → 最终决策)。chain_mode 可动态裁剪阶段,SQLite Checkpointer 提供每标的断点续跑。",
      tags: ["StateGraph 编排", "12 阶段流水线", "断点续跑"],

    },
    {
      icon: Database,
      title: "多源数据融合引擎",
      sub: "Multi-source Fusion",
      body: "Agent 只调用抽象 @tool,由 route_to_vendor() 依据 VENDOR_METHODS 注册表分发到具体实现:5 大工具类别可独立配置 Vendor,工具级配置覆盖类别级,逗号串定义优先顺序与 fallback(如 a_stock,yfinance)。核心引擎零第三方付费数据库依赖。",
      tags: ["9 直连源 + 2 国际 Vendor", "类别 / 工具级路由", "自动 fallback"],
    },
    {
      icon: Gauge,
      title: "双 LLM 分层推理",
      sub: "Dual-LLM Reasoning",
      body: "quick_think_llm 承担高频工具调用与分析师撰写,deep_think_llm 负责 Research Manager 与 Portfolio Manager 的全局综合判断。11+ 供应商开箱即用(DeepSeek / OpenAI / Anthropic / Google / Qwen / GLM / MiniMax / xAI / OpenRouter / Ollama / Moonshot,另支持 Azure)。",
      tags: ["快思 + 深思分层", "11+ 供应商", "自定义兼容端点"],
    },
    {
      icon: Scale,
      title: "质量门控与结构化决策",
      sub: "Quality Gate & Typed Output",
      body: "Layer 1 硬检查校验报告长度、失败标记、必采清单与汇总表格并给出 A–F 分级;Layer 2 在失败项 ≤3 时由 LLM 逐条复审以节省 token。决策链全程 with_structured_output + Pydantic 类型约束,产出可机读、可对接。",
      tags: ["A–F 报告分级", "LLM 复审", "Pydantic 类型安全"],
    },
    {
      icon: Activity,
      title: "记忆与延迟反思",
      sub: "Memory & Reflection",
      body: "追加式 Markdown 决策日志记录每次运行结论,配合沪深 300 基准做延迟反思并回灌下一轮提示词;memory_log_max_entries 控制已解决条目上限,结果目录、缓存与记忆路径均可用环境变量覆盖。",
      tags: ["交易记忆日志", "基准反思", "环境变量可配置"],
    },
    {
      icon: Star,
      title: "可复用工作流编排",
      sub: "Workflow Orchestration",
      body: "工作流是可复用的流水线定义:从 19 个可选 Agent(7 核心 + 12 插件)与技能库中自由组合,指定 instrument / market / industry / topic 目标类型与输入契约,每次更新生成新版本可追溯。内置 4 个系统工作流,用户工作流支持保存、复用与团队共享。",
      tags: ["19 个可选 Agent", "目标类型 + 输入契约", "版本化可追溯"],
    },
    {
      icon: Terminal,
      title: "三套接入方式",
      sub: "Python · CLI · Web",
      body: "Python API 直接实例化 TradingGraph 嵌入既有系统;Typer + Rich 交互式 CLI 适合研究员单机跑批;React + FastAPI Web 工作台提供任务中心、时间线、报告导出与暂停 / 恢复 / 取消,后台以 daemon thread 或 Postgres Worker(FOR UPDATE SKIP LOCKED)持久化执行。",
      tags: ["Python API", "交互式 CLI", "Web 工作台 + Worker"],
    },

  ];
  return (
    <section id="technology" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="technology"
          title="支撑群智能体金融引擎的六项核心技术"
          desc="不是把一个大模型包一层界面 —— 而是把投研 SOP 编排成状态机:数据路由、角色分工、质量门控、类型化决策与记忆反思各自独立可替换。"
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
      value: "首次覆盖与深度报告提速",
      body: "行情、基本面、政策、资金流多路 Agent 并行取证,自动生成带汇总表格的初稿;质量门控与合规审查前置,分析师把时间投入观点而非拼数据。",
      metric: "初稿产出 · 小时级",
    },
    {
      icon: TrendingUp,
      title: "公募 / 私募投研",
      value: "多资产池持续跟踪",
      body: "按标的池批量运行,输出 5 级信号与仓位建议;交易记忆与沪深 300 基准反思沉淀历史胜率,支撑季度复盘与组合再平衡。",
      metric: "5 级信号 + 仓位建议",
    },
    {
      icon: ChartLine,
      title: "量化交易团队",
      value: "因子与事件信号自动迭代",
      body: "Python API 直接嵌入研究流水线,结构化 PortfolioDecision 可机读入库;延迟反思驱动策略参数持续修正,断点续跑支撑长周期回溯。",
      metric: "JSON 可直连回测",
    },
    {
      icon: Shield,
      title: "风险与合规部门",
      value: "风险敞口前置暴露",
      body: "三方风险辩论 + 解禁减持监控 + KYC / 运营合规 Agent,把供给冲击、监管与流动性风险在决策前显性化,全过程留痕可审计。",
      metric: "全链路留痕可审计",
    },
    {
      icon: Wallet,
      title: "财富管理与投顾",
      value: "客户级报告批量生成",
      body: "财富管理 Agent 结合资产配置技能输出客户报告,支持中文与多格式交付(Markdown / PDF),风险提示与免责声明模板化嵌入。",
      metric: "Markdown / PDF 交付",
    },
    {
      icon: Zap,
      title: "个人研究者",
      value: "一个人的投研团队",
      body: "免费直连数据源 + 交互式 CLI,零第三方付费数据库即可跑通全流程;从一只标的、一个日期开始,得到可追溯、可复盘的研究结论。",
      metric: "零付费数据依赖",
    },
  ];
  return (
    <section id="scenarios" className="bg-section-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="use cases"
          title="在不同金融业务场景中的落地价值"
          desc="灵活的数据源路由、可拓展的 Agent 角色体系与模块化技能编排,让同一套引擎适配券商研究、基金投研、量化交易、风控合规与财富管理。"
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
    },
  ];
  return (
    <section id="pricing" className="bg-section-rise py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="pricing"
          title="按需选择你的投研团队"
          desc="从个人研究到机构级私有部署,EconSwarm 提供覆盖不同场景的定价方案。"
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
                href="#"
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
    { label: "博客:群智能体 vs 单一 LLM", href: "/blog/swarm-vs-single-llm-comparison" },
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
