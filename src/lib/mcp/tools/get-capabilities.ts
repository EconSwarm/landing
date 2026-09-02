import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CAPABILITIES = [
  { name: "多智能体协作", detail: "34 个专业 Agent 分别整理技术面、基本面、新闻、政策、资金流和供给等研究信息，并比较不同观点。" },
  { name: "多方法组合", detail: "184 项研究方法可按目标组合，并支持用户创建自定义分析工作流。" },
  { name: "可追溯报告", detail: "资料、观点和风险要点会汇总为结构化研究报告，方便复核与复用。" },
  { name: "多数据来源", detail: "按任务从不同数据来源整理信息，并支持在来源不可用时切换备用来源。" },
];

const MODULES = [
  { name: "市场与行情分析", detail: "分析价格走势、成交量、市场情绪和新闻事件。" },
  { name: "基本面与政策研究", detail: "研究财报、估值、行业变化和宏观产业政策。" },
  { name: "资金与供给监控", detail: "跟踪资金流向、龙虎榜、限售解禁和大股东减持。" },
  { name: "观点比较与风险提示", detail: "通过不同观点对照和风险审议，输出研究结论、风险要点与研究报告，供用户自行判断。" },
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
