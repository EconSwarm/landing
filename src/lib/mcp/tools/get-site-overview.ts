import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = {
  name: "EconSwarm",
  tagline: "群智能体金融引擎 · Swarm Intelligence for Finance",
  description:
    "EconSwarm 是面向金融研究、投研分析与风险管理的多智能体(Swarm)引擎。通过宏观、行业、量化、风险、合规等专业 Agent 并行协作、辩论与裁判,输出可解释、可审计的研究结果。",
  site: "https://www.econswarm.com",
  sections: {
    capabilities: "https://www.econswarm.com/#capabilities",
    modules: "https://www.econswarm.com/#modules",
    principle: "https://www.econswarm.com/#principle",
    workbench: "https://www.econswarm.com/#workbench",
    pricing: "https://www.econswarm.com/#pricing",
  },
  audiences: ["独立分析师", "投研团队", "券商 / 资管", "量化基金"],
};

export default defineTool({
  name: "get_site_overview",
  title: "获取 EconSwarm 站点概览",
  description: "返回 EconSwarm 的产品简介、目标用户和各主要板块的链接。",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(OVERVIEW, null, 2) }],
    structuredContent: OVERVIEW,
  }),
});
