/*
 * @Author: StartZyp
 * @Date: 2024-10-14 11:29:29
 * @LastEditors: StartZyp
 * @LastEditTime: 2024-10-14 11:29:29
 * @FilePath: /dragon_plugin_wiki/app/page.tsx
 * 
 * Copyright (c) 2024 by StartZyp/Reddrip, All Rights Reserved. 
 */
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        龙之插件文档
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Minecraft龙之插件文档. 简洁&apos;快速去部署大型插件到您的服务器.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-8", size: "lg" })}
        >
          进入文档
        </Link>
      </div>
    </div>
  );
}