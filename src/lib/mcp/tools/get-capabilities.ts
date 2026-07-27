import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const CAPABILITIES = [
  { name: "多源交叉验证", detail: "宏观 / 行业 / 量价 / 舆情多路 Agent 并行取证,降低单模型幻觉。" },
  { name: "可解释推理", detail: "每个 Agent 的输入、工具调用与结论独立留痕,可回放、可审计。" },
  { name: "策略化编排", detail: "把投研 SOP 沉淀为工作流,支持辩论、投票、裁判等编排原语。" },
  { name: "合规关卡", detail: "独立合规 Agent 对输出做统一校验,违规内容在发布前阻断。" },
];

const MODULES = [
  { name: "宏观 Agent", detail: "跟踪利率、通胀、货币政策与主要经济体宏观数据。" },
  { name: "行业 Agent", detail: "覆盖景气度、产业链、龙头公司与行业事件。" },
  { name: "量化 Agent", detail: "结合量价、因子与另类数据的信号生成与回测。" },
  { name: "风险 Agent", detail: "组合风险、极端情形与合规风险的持续扫描。" },
];

export default defineTool({
  name: "get_capabilities",
  title: "获取核心能力与模块",
  description: "返回 EconSwarm 的四项核心能力和四大 Agent 模块,用于介绍产品。",
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
