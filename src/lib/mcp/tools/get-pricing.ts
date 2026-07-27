import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const TIERS = [
  {
    name: "Explorer",
    price: "$0 / 月",
    target: "个人研究者、学生",
    highlights: ["每月 50 次群体推理调用", "宏观 / 行业 Agent", "社区支持"],
  },
  {
    name: "Analyst",
    price: "$49 / 月",
    target: "独立分析师、小型基金",
    highlights: ["每月 2,000 次调用", "全部 4 大模块", "投研工作台 + 报告导出"],
  },
  {
    name: "Team",
    price: "$299 / 月",
    target: "投研团队、券商小组",
    highlights: ["每月 20,000 次调用", "多人协作 + 私有工作流", "SLA 支持"],
  },
  {
    name: "Enterprise",
    price: "联系销售",
    target: "机构、券商、资管",
    highlights: ["私有化部署 / VPC", "自定义 Agent 与数据接入", "专属客户成功"],
  },
];

export default defineTool({
  name: "get_pricing",
  title: "获取 EconSwarm 定价方案",
  description:
    "返回 EconSwarm 的四档订阅方案(Explorer / Analyst / Team / Enterprise)、价格与适用人群。",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TIERS, null, 2) }],
    structuredContent: { tiers: TIERS },
  }),
});
