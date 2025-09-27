// src/app/components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, LayoutDashboard, NotebookPen } from "lucide-react";
import Image from "next/image";

const userNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Bounties", href: "/bounties", icon: NotebookPen },
];

const companyNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/company/dashboard", icon: LayoutDashboard },
  { name: "Bounties", href: "/bounties", icon: NotebookPen },
];

export function Sidebar() {
  const pathname = usePathname();
  const isCompany = pathname.includes("/company");
  const navItems = isCompany ? companyNavItems : userNavItems;

  return (
    <nav className="flex h-screen w-64 flex-col justify-start border-r border-border bg-background p-6 shadow-sm">
      {/* Logo */}
      <div className="flex items-center mb-8 w-full">
        <Image
          src="/navlogo.png"
          alt="Vulnera Logo"
          width={120}
          height={40}
          priority
          className="object-contain"
        />
      </div>

      {/* Nav Links */}
      <ul className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <Link href={item.href} passHref>
                <div
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
