const SITE = "https://www.econswarm.com";

export type BlogRoute =
  | "/blog/swarm-vs-single-llm-comparison"
  | "/blog/langgraph-financial-agents-implementation";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  url: string;
  route: BlogRoute;
  category: "Research" | "Engineering";
  readTime: string;
  publishedAt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "swarm-vs-single-llm-comparison",
    title: "群智能体 vs 单一 LLM：金融场景下的深度对比",
    description:
      "从架构、准确率、可解释性、成本、合规五个维度对比多智能体群体与单一 LLM 在金融任务中的差异。",
    url: `${SITE}/blog/swarm-vs-single-llm-comparison`,
    route: "/blog/swarm-vs-single-llm-comparison",
    category: "Research",
    readTime: "8 分钟",
    publishedAt: "2026-07-28",
  },
  {
    slug: "langgraph-financial-agents-implementation",
    title: "用 LangGraph 编排金融多智能体：StateGraph 实战解析",
    description:
      "以 12 阶段金融分析流水线为例，拆解 LangGraph StateGraph 的状态设计、条件边质量门控、流式输出与断点续跑。",
    url: `${SITE}/blog/langgraph-financial-agents-implementation`,
    route: "/blog/langgraph-financial-agents-implementation",
    category: "Engineering",
    readTime: "10 分钟",
    publishedAt: "2026-08-20",
  },
];
