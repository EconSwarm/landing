import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/logo-icon.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">出错了</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          重试
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "Wy81lY1kZBfDAhN73NTc3CnHDTPY5SMzIhsio4LgZ5s" },
      { name: "msvalidate.01", content: "086B3CDA1153BD47610E43B8BA5B6FC7" },
      { title: "EconSwarm · 群智能体金融引擎" },
      {
        name: "description",
        content:
          "EconSwarm 是面向 A 股研究的群智能体金融分析工具，整合 34 个专业 Agent 与 184 项研究方法，帮助用户整理资料、比较观点并生成可追溯的研究报告。",
      },
      { property: "og:title", content: "EconSwarm · 群智能体金融引擎" },
      {
        property: "og:description",
        content:
          "EconSwarm 是面向 A 股研究的群智能体金融分析工具，整合 34 个专业 Agent 与 184 项研究方法，帮助用户整理资料、比较观点并生成可追溯的研究报告。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EconSwarm · 群智能体金融引擎" },
      {
        name: "twitter:description",
        content:
          "EconSwarm 是面向 A 股研究的群智能体金融分析工具，整合 34 个专业 Agent 与 184 项研究方法，帮助用户整理资料、比较观点并生成可追溯的研究报告。",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/zt7sreEwCQbof2ukIpzOgFns5u73/social-images/social-1785381191683-微信图片_20260729140410_1_23.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/zt7sreEwCQbof2ukIpzOgFns5u73/social-images/social-1785381191683-微信图片_20260729140410_1_23.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "EconSwarm",
              url: "https://www.econswarm.com",
              logo: logoAsset.url,
            },
            {
              "@type": "WebSite",
              name: "EconSwarm",
              url: "https://www.econswarm.com",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
