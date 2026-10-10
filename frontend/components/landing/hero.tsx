import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { PromptPill } from "@/components/landing/prompt-pill";
import { TechLogoStrip } from "@/components/landing/tech-logo-strip";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[var(--container)] flex-col items-center px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-14">
      <Badge variant="live" dot className="mb-7 py-1.5 px-4">
        Human-in-the-loop review
      </Badge>

      <h1 className="display max-w-[14ch] pb-1 text-[var(--text)]">
        Trips planned by a team of agents.
      </h1>

      <p className="mt-6 max-w-[48ch] text-base leading-relaxed text-[var(--muted)] sm:text-[17px]">
        Watch flights, hotels, weather and budget get researched live. Review
        the plan, change any day, then approve.
      </p>

      <div className="mt-8 w-full">
        <PromptPill />
      </div>

      <TechLogoStrip />
    </section>
  );
}
