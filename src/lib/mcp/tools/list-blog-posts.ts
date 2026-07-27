import { defineTool } from "@lovable.dev/mcp-js";

const SITE = "https://www.econswarm.com";

const POSTS = [
  {
    slug: "swarm-vs-single-llm-comparison",
    title: "群智能体 vs 单一 LLM:金融场景下的深度对比",
    description:
      "从架构、准确率、可解释性、成本、合规五个维度对比多智能体群体与单一 LLM 在金融任务中的差异。",
    url: `${SITE}/blog/swarm-vs-single-llm-comparison`,
  },
];

export default defineTool({
  name: "list_blog_posts",
  title: "列出博客文章",
  description: "返回 EconSwarm 站点公开博客文章的标题、摘要与规范链接。",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(POSTS, null, 2) }],
    structuredContent: { posts: POSTS },
  }),
});
