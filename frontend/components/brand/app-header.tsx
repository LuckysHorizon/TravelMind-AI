"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { StatusPill } from "@/components/brand/status-pill";
import { ThemeToggle } from "@/components/brand/theme-toggle";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { OfflineBanner } from "@/components/states/offline-banner";
import { useHealth } from "@/hooks/use-health";
import { clearLegacyThreadStorage } from "@/lib/threads";
import { cn } from "@/lib/utils";

export interface AppHeaderProps {
  tripSummaryPill?: string;
  onNewTrip?: () => void;
  showStatusPill?: boolean;
  className?: string;
}

export function AppHeader({
  tripSummaryPill,
  onNewTrip,
  showStatusPill = true,
  className,
}: AppHeaderProps) {
  const router = useRouter();
  const { status, refresh } = useHealth();

  const handleNewTrip = () => {
    clearLegacyThreadStorage();
    if (onNewTrip) {
      onNewTrip();
    } else {
      router.push("/app");
    }
  };

  return (
    <>
      {status === "offline" && <OfflineBanner onRetry={refresh} />}
      <header
        className={cn(
          "no-print mx-auto flex w-full max-w-[var(--container-app)] items-center justify-between gap-4 px-4 py-5 sm:px-6",
          className
        )}
      >
        <Logo href="/" showIcon />
        <div className="flex items-center gap-3 sm:gap-4">
          {tripSummaryPill ? (
            <Chip asSpan className="min-h-[38px] px-4 py-1.5 text-sm">
              {tripSummaryPill}
            </Chip>
          ) : (
            showStatusPill && (
              <StatusPill status={status} className="hidden sm:inline-flex" />
            )
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNewTrip}
            className="min-h-[38px] px-4"
          >
            New trip
          </Button>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
