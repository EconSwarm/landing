import { defineTool } from "@lovable.dev/mcp-js";
import { BLOG_POSTS } from "@/lib/blog/posts";

export default defineTool({
  name: "list_blog_posts",
  title: "列出博客文章",
  description: "返回 EconSwarm 站点公开博客文章的标题、摘要与规范链接。",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(BLOG_POSTS, null, 2) }],
    structuredContent: { posts: BLOG_POSTS },
  }),
});
