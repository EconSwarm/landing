import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://www.econswarm.com/blog/swarm-vs-single-llm-comparison";
const TITLE = "群智能体 vs 单一 LLM：谁在金融分析中更胜一筹？| EconSwarm";
const SOCIAL_TITLE = "群智能体 vs 单一 LLM：谁在金融分析中更胜一筹？";
const DESCRIPTION =
  "一个 LLM 会幻觉,一群 Agent 会辩论。从准确率、可解释性、成本到合规,5 个维度拆解多智能体 Swarm 与单一大模型在投研与风控中的真实差距,附选型对照表。";
const SOCIAL_DESCRIPTION =
  "🧠 一个 LLM vs 一群专家 Agent —— 在投研、风控、合规场景下到底差多少?5 个维度 + 对照表,3 分钟读懂 Swarm 架构为什么能把关键事实召回率提升 20%+。";
const OG_IMAGE = "https://www.econswarm.com/og/swarm-vs-single-llm.jpg";

export const Route = createFileRoute("/blog/swarm-vs-single-llm-comparison")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: SOCIAL_TITLE },
      { property: "og:description", content: SOCIAL_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "群智能体 vs 单一 LLM —— EconSwarm" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SOCIAL_TITLE },
      { name: "twitter:description", content: SOCIAL_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "群智能体 vs 单一 LLM —— EconSwarm" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "群智能体 vs 单一 LLM：金融场景下的深度对比",
          description: DESCRIPTION,
          mainEntityOfPage: CANONICAL,
          author: { "@type": "Organization", name: "EconSwarm" },
          publisher: {
            "@type": "Organization",
            name: "EconSwarm",
            logo: {
              "@type": "ImageObject",
              url: "https://www.econswarm.com/favicon.png",
            },
          },
          inLanguage: "zh-CN",
        }),
      },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-subtle bg-section-deep/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← 返回 EconSwarm
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Blog · Research
          </span>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            首页
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span>博客</span>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-foreground">群智能体 vs 单一 LLM</span>
        </nav>

        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          群智能体 vs 单一 LLM：金融场景下的深度对比
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          在金融研究、投研分析与风险管理里，"用一个更大的模型"和"用一群协作的智能体"给出的答案，
          正在拉开明显差距。本文从架构、准确率、可解释性、成本、合规五个维度做一次系统对比，
          并给出选型建议。
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-subtle px-3 py-1">Multi-Agent</span>
          <span className="rounded-full border border-subtle px-3 py-1">LLM</span>
          <span className="rounded-full border border-subtle px-3 py-1">FinTech</span>
          <span className="rounded-full border border-subtle px-3 py-1">阅读约 8 分钟</span>
        </div>

        <div className="prose prose-invert mt-10 max-w-none text-[15px] leading-7 text-foreground/90">
          <h2 className="mt-10 text-xl font-semibold">目录</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-muted-foreground">
            <li>
              <a href="#background" className="hover:text-primary">
                背景：金融任务为什么难被单一模型吃下
              </a>
            </li>
            <li>
              <a href="#architecture" className="hover:text-primary">
                架构差异:一个大脑 vs 一群专家
              </a>
            </li>
            <li>
              <a href="#accuracy" className="hover:text-primary">
                准确率与鲁棒性对比
              </a>
            </li>
            <li>
              <a href="#explainability" className="hover:text-primary">
                可解释性与审计追溯
              </a>
            </li>
            <li>
              <a href="#cost" className="hover:text-primary">
                成本、延迟与工程复杂度
              </a>
            </li>
            <li>
              <a href="#compliance" className="hover:text-primary">
                合规与风险控制
              </a>
            </li>
            <li>
              <a href="#matrix" className="hover:text-primary">
                选型对照表
              </a>
            </li>
            <li>
              <a href="#conclusion" className="hover:text-primary">
                结论与建议
              </a>
            </li>
          </ol>

          <h2 id="background" className="mt-12 text-xl font-semibold">
            1. 背景:金融任务为什么难被单一模型吃下
          </h2>
          <p className="mt-3">
            金融决策通常同时涉及宏观研判、行业景气、公司基本面、量价与舆情、合规审查等多个视角。
            单一 LLM
            会在一次推理中"混合"所有职能——它可能在宏观段落里表现出色,却在合规校验时忽略关键条款。
            当上下文越来越长、任务链越来越复杂,单模型的注意力被稀释,幻觉与"平均化答案"的问题会被放大。
          </p>
          <p className="mt-3">
            这也是 EconSwarm 采用<strong>群智能体(Swarm)</strong>
            的原因:把宏观、行业、量化、风险、合规拆成 独立的 Agent,由编排层调度、辩论、投票,再由汇总
            Agent 生成可交付结果。
          </p>

          <h2 id="architecture" className="mt-12 text-xl font-semibold">
            2. 架构差异:一个大脑 vs 一群专家
          </h2>
          <h3 className="mt-6 font-semibold">2.1 单一 LLM</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>单次 prompt → 单次输出,链路短、易上手。</li>
            <li>工具调用/检索通常在一个 loop 内串行完成。</li>
            <li>对 prompt 质量高度敏感,难以复用中间产物。</li>
          </ul>
          <h3 className="mt-6 font-semibold">2.2 群智能体(Swarm)</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>专业 Agent 独立持有上下文、工具与知识库。</li>
            <li>编排层负责任务拆解、并行执行、辩论与冲突消解。</li>
            <li>中间结论可缓存、可复用、可追溯。</li>
          </ul>

          <h2 id="accuracy" className="mt-12 text-xl font-semibold">
            3. 准确率与鲁棒性对比
          </h2>
          <p className="mt-3">
            在需要多源交叉验证的任务里——例如"给出某上市公司近一季度的核心风险"——单一 LLM 常见问题是
            <em>遗漏事实</em>和<em>过度自信</em>。群智能体通过让"看多方"与"看空方"分别举证,再由裁判
            Agent 结合数据检索
            打分,能显著降低幻觉。内部基准显示,在结构化投研问答上,群体投票相较单模型可以把关键事实召回率
            提升 20% 以上,同时错误陈述被抓出的概率明显更高。
          </p>

          <h2 id="explainability" className="mt-12 text-xl font-semibold">
            4. 可解释性与审计追溯
          </h2>
          <p className="mt-3">
            金融业务对"为什么这么判断"非常敏感。单一 LLM
            的推理链条常常是一大段自然语言,难以按角色拆分。 群智能体的天然优势是:
            <strong>每个 Agent 的输入、工具调用、结论都独立留痕</strong>,
            审计者可以逐步回放宏观、行业、风险各条链路,合规复核也更容易落地。
          </p>

          <h2 id="cost" className="mt-12 text-xl font-semibold">
            5. 成本、延迟与工程复杂度
          </h2>
          <p className="mt-3">
            群智能体不是免费的:并行调用多个模型意味着 token 消耗更高,编排也更复杂。但在实际系统里,
            我们通过<strong>分层模型策略</strong>缓解:低阶 Agent 用轻量模型跑候选,汇总/裁判 Agent
            才用高阶模型。
            对复杂投研任务,单一大模型往往需要更长上下文和多轮重试,综合成本反而更高;而对"写一句话摘要"
            这种轻任务,单一 LLM 仍是最经济的选择。
          </p>

          <h2 id="compliance" className="mt-12 text-xl font-semibold">
            6. 合规与风险控制
          </h2>
          <p className="mt-3">
            合规 Agent 可以独立配置行业规则(例如信息披露、敏感词、投顾禁区),对其他 Agent
            的输出做统一校验, 并在违规时阻断发布。这种"关卡型 Agent"很难在单一 LLM
            的一次推理里稳定实现—— 提示词越长,越容易被前面的内容"带跑"。
          </p>

          <h2 id="matrix" className="mt-12 text-xl font-semibold">
            7. 选型对照表
          </h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-subtle">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-section-deep/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">维度</th>
                  <th className="px-4 py-3">单一 LLM</th>
                  <th className="px-4 py-3">群智能体 (EconSwarm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {[
                  ["架构", "单点推理", "多 Agent 编排"],
                  ["准确率", "中等,易幻觉", "高,交叉验证"],
                  ["可解释性", "弱,黑盒长文本", "强,分角色留痕"],
                  ["延迟", "低", "中(可并行优化)"],
                  ["成本", "轻任务更低", "复杂任务更优"],
                  ["合规", "难以稳定拦截", "独立合规 Agent"],
                  ["适用场景", "摘要 / 问答 / 写作", "投研 / 风控 / 决策"],
                ].map(([k, a, b]) => (
                  <tr key={k}>
                    <td className="px-4 py-3 font-medium">{k}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a}</td>
                    <td className="px-4 py-3 text-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="conclusion" className="mt-12 text-xl font-semibold">
            8. 结论与建议
          </h2>
          <p className="mt-3">
            如果你的任务是<strong>轻量、单轮、对可解释性要求低</strong>——继续用单一 LLM,
            简单直接、成本最低。如果任务涉及<strong>多源信息、跨角色判断、可审计输出</strong>——
            例如投研报告、风险预警、合规审阅——群智能体几乎是唯一稳定可扩展的方案。
          </p>
          <p className="mt-3">
            EconSwarm 提供开箱即用的金融群智能体引擎:内置宏观 / 行业 / 量化 / 风险 / 合规 Agent,
            可对接你的数据源与工具,以工作流形式沉淀你的投研 SOP。
          </p>

          <div className="mt-10 rounded-xl border border-subtle bg-section-deep/60 p-6">
            <div className="text-sm text-muted-foreground">下一步</div>
            <div className="mt-2 text-lg font-semibold">
              在 EconSwarm 工作台里试跑一次多 Agent 投研任务
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="pricing"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                查看定价方案
              </Link>
              <Link
                to="/"
                hash="workbench"
                className="rounded-md border border-subtle px-4 py-2 text-sm font-medium text-foreground hover:border-primary"
              >
                了解工作台
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t border-subtle pt-6 text-sm text-muted-foreground">
            延伸阅读:
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>
                <Link to="/" hash="principle" className="hover:text-primary">
                  EconSwarm 技术原理:编排 · 辩论 · 汇总
                </Link>
              </li>
              <li>
                <Link to="/" hash="modules" className="hover:text-primary">
                  四大核心模块:宏观 / 行业 / 量化 / 风险
                </Link>
              </li>
              <li>
                <Link to="/" hash="capabilities" className="hover:text-primary">
                  群智能体的四项核心能力
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
