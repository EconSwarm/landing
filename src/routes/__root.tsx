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
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
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
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">重试</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EconSwarm · 群智能体金融引擎" },
      { name: "description", content: "EconSwarm 是一套通用群智能体金融分析框架，面向多市场、多资产类别的金融研究与决策辅助场景。它依托可配置的数据源路由、可扩展的智能体角色体系以及模块化技能编排，能够适配各类金融分析工作流。" },
      { property: "og:title", content: "EconSwarm · 群智能体金融引擎" },
      { property: "og:description", content: "EconSwarm 是一套通用群智能体金融分析框架，面向多市场、多资产类别的金融研究与决策辅助场景。它依托可配置的数据源路由、可扩展的智能体角色体系以及模块化技能编排，能够适配各类金融分析工作流。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EconSwarm · 群智能体金融引擎" },
      { name: "twitter:description", content: "EconSwarm 是一套通用群智能体金融分析框架，面向多市场、多资产类别的金融研究与决策辅助场景。它依托可配置的数据源路由、可扩展的智能体角色体系以及模块化技能编排，能够适配各类金融分析工作流。" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8db2393b-33ff-477a-bbda-446b4dac7e5e/id-preview-ee0acb48--7de287f9-4eff-4c01-ab6b-db63cd80bb91.lovable.app-1785059882950.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8db2393b-33ff-477a-bbda-446b4dac7e5e/id-preview-ee0acb48--7de287f9-4eff-4c01-ab6b-db63cd80bb91.lovable.app-1785059882950.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoAsset.url },
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
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
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
