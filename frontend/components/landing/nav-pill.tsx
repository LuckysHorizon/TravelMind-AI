import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/brand/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavPillProps {
  className?: string;
}

export function NavPill({ className }: NavPillProps) {
  return (
    <header className={cn("mx-auto w-full max-w-[var(--container)] px-4 pt-6 sm:px-6", className)}>
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)]/90 px-5 py-2.5 backdrop-blur-md sm:flex-nowrap"
      >
        <Logo href="/" showIcon={false} className="text-base font-semibold" />

        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <Link
            href="#agents"
            className="transition-colors duration-[var(--dur-1)] hover:text-[var(--text)]"
          >
            Agents
          </Link>
          <Link
            href="#how-it-works"
            className="transition-colors duration-[var(--dur-1)] hover:text-[var(--text)]"
          >
            How it works
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button asChild variant="primary" size="sm" className="min-h-[38px] px-4">
            <Link href="/app">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
