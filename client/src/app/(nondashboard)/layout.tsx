"use client";

import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Wait until RTK Query is done
    if (authLoading) return;

    // 2️⃣ If there's a user, do your redirects
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/search")) ||
        (userRole === "manager" && pathname === "/")
      ) {
        router.push("/managers/properties", { scroll: false });
        return; // don’t fall through to setIsLoading
      }
    }

    // 3️⃣ Whether logged-in (but no redirect) or logged-out,
    //    clear the loading state so children render.
    setIsLoading(false);
  }, [authUser, authLoading, router, pathname]);

  if (authLoading || isLoading) return <>Loading...</>;
  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full flex w-full flex-col `}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px ` }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
