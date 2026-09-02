import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://www.econswarm.com/blog/langgraph-financial-agents-implementation";
const TITLE = "用 LangGraph 编排金融多智能体：StateGraph 实战解析 | EconSwarm";
const SOCIAL_TITLE = "用 LangGraph 编排金融多智能体：StateGraph 实战解析";
const DESCRIPTION =
  "以 EconSwarm 为例，拆解如何用 LangGraph StateGraph 把 34 个金融 Agent 编排成 12 阶段分析流水线：状态设计、条件边、质量门控、断点续跑与可审计留痕。";
const SOCIAL_DESCRIPTION =
  "LangGraph 不只是 Agent 框架，更是把投研 SOP 写成状态机的方式。本文用真实金融流水线讲清状态设计、条件路由、门控回退与断点续跑。";

export const Route = createFileRoute("/blog/langgraph-financial-agents-implementation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: SOCIAL_TITLE },
      { property: "og:description", content: SOCIAL_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SOCIAL_TITLE },
      { name: "twitter:description", content: SOCIAL_DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "用 LangGraph 编排金融多智能体：StateGraph 实战解析",
              description: DESCRIPTION,
              mainEntityOfPage: CANONICAL,
              inLanguage: "zh-CN",
              author: { "@type": "Organization", name: "EconSwarm" },
              publisher: { "@type": "Organization", name: "EconSwarm", url: "https://www.econswarm.com" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "首页", item: "https://www.econswarm.com/" },
                { "@type": "ListItem", position: 2, name: "博客", item: "https://www.econswarm.com/blog/swarm-vs-single-llm-comparison" },
                { "@type": "ListItem", position: 3, name: "LangGraph 金融多智能体实现", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogPost,
});

const TOC = [
  ["state", "一、为什么金融流水线适合状态机"],
  ["schema", "二、状态设计：把证据与结论分层"],
  ["nodes", "三、节点划分：34 个 Agent 如何落到图上"],
  ["edges", "四、条件边与质量门控回退"],
  ["stream", "五、流式输出与实时进度"],
  ["resume", "六、断点续跑与长任务恢复"],
  ["audit", "七、可审计留痕与错误处理"],
  ["takeaway", "八、结论与选型建议"],
];

const STAGES = [
  ["01–03", "任务定义 · 多源取数 · 证据归集", "入参校验后由行情、基本面、舆情、政策、资金流等取证节点并行执行。"],
  ["04–05", "质量门控 · 证据分级", "缺失、过期、互相矛盾的数据被打回重取，低质证据不进入推理。"],
  ["06–07", "多空辩论 · 观点收敛", "看多与看空节点交替发言，由 Research Manager 汇总分歧并标注依据强弱。"],
  ["08–09", "研究计划 · 风险整理", "结论转成结构化研究计划，并整理需要人工复核的风险要点。"],
  ["10–11", "三方风控辩论 · 合规审议", "激进、保守、中性风控视角各自评估，合规口径前置检查。"],
  ["12", "最终决策 · 报告生成", "输出结构化决策对象与 Markdown / PDF 报告初稿，全过程留痕。"],
];

function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-subtle bg-section-deep/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← 返回 EconSwarm
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Blog · Engineering
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
          <span className="text-foreground">LangGraph 金融多智能体</span>
        </nav>

        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
          LangGraph · StateGraph
        </div>
        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          用 LangGraph 编排金融多智能体：StateGraph 实战解析
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          多智能体系统的难点不在"多"，而在"编排"。本文以 EconSwarm 的 12 阶段金融分析流水线为例，
          说明如何用 LangGraph 的 StateGraph 把 34 个专业 Agent 组织成一张可控、可审计、可恢复的图，
          以及状态设计、条件路由、质量门控与断点续跑在金融场景里的具体做法。
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          风险提示：本文仅供学习研究与信息分析参考，不构成任何投资建议。
        </p>

        <nav aria-label="目录" className="mt-10 rounded-2xl border border-subtle bg-surface p-6">
          <div className="text-sm font-semibold">目录</div>
          <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="state" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">一、为什么金融流水线适合状态机</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            投研工作本身就是一套 SOP：先取数、再校验、再形成观点、最后过风控与合规。
            用一次性的长 prompt 让单个模型"一口气写完"，中间过程不可见、错误无法定位、失败只能整体重跑。
            LangGraph 的 StateGraph 把每一步显式建模为节点，把流转条件建模为边，
            于是每一层都可以单独替换、单独重试、单独复核 —— 这正是金融场景对可解释性与可审计性的硬要求。
          </p>
        </section>

        <section id="schema" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">二、状态设计：把证据与结论分层</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            状态对象是整张图的唯一真相来源。实践中把它分成三层最稳：
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              <span className="text-foreground">输入契约</span> —— 标的、分析日期、研究深度、目标市场，全流程只读。
            </li>
            <li>
              <span className="text-foreground">证据层</span> —— 各取证节点以追加方式写入，带来源、时间戳与质量评级；
              用累加型 reducer 避免并行节点互相覆盖。
            </li>
            <li>
              <span className="text-foreground">结论层</span> —— 辩论记录、研究计划、风控意见与最终决策，
              每项都引用证据 ID，而不是复制文本。
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            并行取证节点写同一个 key 是最常见的踩坑点：只要该字段没有定义合并规则，最后写入者会覆盖其他分支的结果。
          </p>
        </section>

        <section id="nodes" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">三、节点划分：34 个 Agent 如何落到图上</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            并非每个 Agent 都要成为一个顶层节点。EconSwarm 的做法是按职责聚类：
            取证类 Agent 归入并行分支、辩论类 Agent 归入循环子图、风控与合规 Agent 归入决策前置关卡，
            垂直领域技能则作为工具挂载在对应 Agent 上，而不是新增图节点。
            这样图的拓扑保持可读，扩展 Agent 或技能时不需要重画流水线。
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-subtle bg-surface">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-subtle text-xs text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">阶段</th>
                  <th className="px-4 py-3">图上的角色</th>
                  <th className="px-4 py-3">说明</th>
                </tr>
              </thead>
              <tbody>
                {STAGES.map(([n, role, body]) => (
                  <tr key={n} className="border-b border-subtle/60 last:border-0">
                    <td className="px-4 py-3 font-mono text-xs text-primary/90">{n}</td>
                    <td className="px-4 py-3 text-foreground">{role}</td>
                    <td className="px-4 py-3 text-muted-foreground">{body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="edges" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">四、条件边与质量门控回退</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            质量门控是条件边最有价值的用法：门控节点读取证据层的评级，
            不合格就把控制流指回对应取证节点重取，合格才继续向下。
            同理，辩论子图用条件边判断是否收敛 —— 分歧收敛或达到最大轮次才退出循环，
            避免两个 Agent 无限对话。给每个循环设置显式的轮次上限，是把状态机投产的前提。
          </p>
        </section>

        <section id="stream" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">五、流式输出与实时进度</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            金融分析任务动辄数分钟，用户需要看到"正在发生什么"。
            按 token 流式返回文本用于报告撰写节点，按节点事件推送进度用于整张图 ——
            前者让阅读体验连续，后者让长任务的每一步都可观测。
            两条通道共用同一份状态，前端只是它的投影。
          </p>
        </section>

        <section id="resume" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">六、断点续跑与长任务恢复</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            持久化检查点让每个节点结束后的状态都可落盘，于是网络抖动、数据源限流或模型超时
            都只影响单个节点，恢复时从最近检查点继续，而不是整轮重跑。
            这对批量标的池尤其重要：几十只标的的长周期重算，失败成本从"整体"降到"单点"。
          </p>
        </section>

        <section id="audit" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">七、可审计留痕与错误处理</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            每个节点的输入、工具调用与输出独立留痕，配合引用证据 ID 的结论层，
            就能按角色回放宏观、基本面、资金流与风险各条链路，满足内部质控与合规复核。
            错误处理同样落在图上：取数失败切换备用数据源，模型异常降级到更保守的路径，
            所有降级动作本身也是状态的一部分，出现在最终报告的方法论说明里。
          </p>
        </section>

        <section id="takeaway" className="mt-14">
          <h2 className="text-xl font-semibold md:text-2xl">八、结论与选型建议</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            如果任务是单轮问答，普通的 Agent 循环足够；
            一旦流程有明确阶段、需要并行取证、需要门控与回退、需要审计与恢复，
            状态机编排的收益就会迅速超过它的建模成本。
            金融研究几乎踩满了后一类特征 —— 这也是 EconSwarm 选择把整条投研 SOP 写成 StateGraph 的原因。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://app.econswarm.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              免费开始使用
            </a>
            <Link
              to="/solutions/equity-research"
              className="rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:border-primary"
            >
              股票投研解决方案
            </Link>
            <Link
              to="/blog/swarm-vs-single-llm-comparison"
              className="rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:border-primary"
            >
              群智能体 vs 单一 LLM
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
