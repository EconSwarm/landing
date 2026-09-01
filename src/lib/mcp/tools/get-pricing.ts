import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const TIERS = [
  {
    name: "免费版",
    price: "0 / 月",
    target: "个人尝鲜体验",
    highlights: [
      "工作流分析任务：累计 100 次，每日限 20 次",
      "研究工作台对话：累计 100 次，每日限 20 次",
      "基础分析报告",
      "社区支持",
    ],
  },
  {
    name: "专业版",
    price: "499 / 月",
    target: "高频投研用户",
    highlights: [
      "每月 500 次工作流分析任务",
      "每月 2000 次研究工作台对话",
      "34 个专业智能体全量使用",
      "90+ 金融技能库",
      "深度研究报告",
      "优先技术支持",
    ],
  },
  {
    name: "旗舰版",
    price: "999 / 月",
    target: "专业投研团队",
    highlights: [
      "每月 2000 次工作流分析任务",
      "每月 10000 次研究工作台对话",
      "34 个专业智能体全量使用",
      "90+ 金融技能库",
      "深度研究报告",
      "API 访问与自定义集成",
      "专属技术支持",
    ],
  },
  {
    name: "企业版",
    price: "联系销售",
    target: "团队与企业",
    highlights: [
      "不限用量",
      "专属客户成功经理",
      "私有化部署支持",
      "定制技能开发",
      "SLA 服务保障",
    ],
  },
];

export default defineTool({
  name: "get_pricing",
  title: "获取 EconSwarm 定价方案",
  description:
    "返回 EconSwarm 的四档订阅方案（免费版 / 专业版 / 旗舰版 / 企业版）、价格与适用人群。",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(TIERS, null, 2) }],
    structuredContent: { tiers: TIERS },
  }),
});
