import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CAPABILITIES = [
  { name: "多智能体协同", detail: "34 个专业 Agent 覆盖技术面、基本面、新闻、政策、资金流、供给监控、辩论、交易与组合决策。" },
  { name: "多技能编排", detail: "184 个金融技能可按研究目标组合，并支持用户创建自定义分析工作流。" },
  { name: "结构化决策", detail: "ResearchPlan → TraderProposal → PortfolioDecision 全链路结构化输出，结果可追踪、可复用。" },
  { name: "多数据源路由", detail: "按工具类别选择数据 Vendor，并支持数据源失败时自动切换。" },
];

const MODULES = [
  { name: "市场与行情分析", detail: "分析价格走势、成交量、市场情绪和新闻事件。" },
  { name: "基本面与政策研究", detail: "研究财报、估值、行业变化和宏观产业政策。" },
  { name: "资金与供给监控", detail: "跟踪资金流向、龙虎榜、限售解禁和大股东减持。" },
  { name: "辩论、风险与组合决策", detail: "通过多空辩论、风险审议和组合决策输出评级、仓位建议与研究报告。" },
];

export default defineTool({
  name: "get_capabilities",
  title: "获取核心能力与模块",
  description: "返回 EconSwarm 的四项核心能力和四类分析模块，用于介绍产品。",
  inputSchema: {
    section: z
      .enum(["capabilities", "modules", "all"])
      .optional()
      .describe("只返回能力、模块,或全部;缺省为 all。"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ section = "all" }) => {
    const payload =
      section === "capabilities"
        ? { capabilities: CAPABILITIES }
        : section === "modules"
          ? { modules: MODULES }
          : { capabilities: CAPABILITIES, modules: MODULES };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
