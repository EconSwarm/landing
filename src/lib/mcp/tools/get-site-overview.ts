import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = {
  name: "EconSwarm",
  tagline: "群智能体金融引擎 · 多智能体多技能工作流",
  description:
    "EconSwarm 是面向金融研究与决策的群智能体金融引擎，整合 34 个专业 Agent、184 个金融技能、数据源路由和双 LLM 推理链，覆盖股票、债券、外汇与大宗商品等多市场、多资产研究任务。",
  site: "https://www.econswarm.com",
  sections: {
    capabilities: "https://www.econswarm.com/#capabilities",
    modules: "https://www.econswarm.com/#modules",
    principle: "https://www.econswarm.com/#principle",
    workbench: "https://www.econswarm.com/#workbench",
    pricing: "https://www.econswarm.com/#pricing",
  },
  audiences: ["独立分析师", "投研团队", "券商 / 资管", "财富管理团队"],
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
