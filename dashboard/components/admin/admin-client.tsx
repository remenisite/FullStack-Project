"use client";

import { Navbar } from "@/components/admin/navbar";
import { Sidebar } from "@/components/admin/sidebar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-4 z-50 h-10 w-10 rounded-xl bg-card shadow-lg lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-sidebar p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export function AdminClient({ children }: { children: React.ReactNode }) {
  const [sidebarWidth, setSidebarWidth] = useState(256);

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.querySelector("aside");
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    };

    handleResize();
    const observer = new MutationObserver(handleResize);
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <div
        className={cn("min-h-screen transition-all duration-300", "lg:ml-64")}
        style={{
          marginLeft:
            typeof window !== "undefined" && window.innerWidth >= 1024
              ? sidebarWidth
              : 0,
        }}
      >
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </>
  );
}
