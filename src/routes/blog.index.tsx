import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog/posts";

const CANONICAL = "https://www.econswarm.com/blog";
const TITLE = "EconSwarm 博客 | 群智能体金融研究与工程实践";
const DESCRIPTION =
  "阅读 EconSwarm 关于群智能体、金融分析、LangGraph 编排与多 Agent 投研系统的最新文章。";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              name: "EconSwarm 博客",
              url: CANONICAL,
              description: DESCRIPTION,
              inLanguage: "zh-CN",
              publisher: {
                "@type": "Organization",
                name: "EconSwarm",
                url: "https://www.econswarm.com",
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "首页",
                  item: "https://www.econswarm.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "博客",
                  item: CANONICAL,
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-subtle bg-section-deep/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← 返回 EconSwarm
          </Link>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Blog
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            首页
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-foreground">博客</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            EconSwarm 博客
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            群智能体、金融分析、LangGraph 编排与多 Agent 投研系统的研究与工程实践。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-subtle bg-surface p-6 transition hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-subtle px-2.5 py-0.5 font-medium text-primary/90">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.publishedAt}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-semibold leading-snug group-hover:text-primary">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                阅读全文 <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
