import { defineMcp } from "@lovable.dev/mcp-js";
import getSiteOverviewTool from "./tools/get-site-overview";
import getCapabilitiesTool from "./tools/get-capabilities";
import getPricingTool from "./tools/get-pricing";
import listBlogPostsTool from "./tools/list-blog-posts";

export default defineMcp({
  name: "econswarm-mcp",
  title: "EconSwarm MCP",
  version: "0.1.0",
  instructions:
    "EconSwarm 群智能体金融引擎的公开 MCP。可用于查询产品概览、核心能力与模块、定价方案以及博客文章清单。所有数据均为站点公开信息。",
  tools: [getSiteOverviewTool, getCapabilitiesTool, getPricingTool, listBlogPostsTool],
});
