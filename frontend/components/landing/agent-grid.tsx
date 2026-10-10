import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SpecialistInfo {
  monogram: string;
  name: string;
  description: string;
  primary?: boolean;
}

const SPECIALISTS: SpecialistInfo[] = [
  {
    monogram: "S",
    name: "Supervisor",
    description: "Checks the request and picks the agents.",
    primary: true,
  },
  {
    monogram: "F",
    name: "Flights",
    description: "Airports and airlines for your route.",
  },
  {
    monogram: "H",
    name: "Hotels",
    description: "Stays, ratings and amenities.",
  },
  {
    monogram: "W",
    name: "Weather",
    description: "Current conditions and forecast.",
  },
  {
    monogram: "B",
    name: "Budget",
    description: "Costs, risks and ways to save.",
  },
  {
    monogram: "I",
    name: "Itinerary",
    description: "A day-by-day plan you can revise.",
  },
];

export function AgentGrid() {
  return (
    <section
      id="agents"
      className="mx-auto w-full max-w-[var(--container)] px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mb-8 space-y-2">
        <p className="label">Meet the agents</p>
        <h2 className="h2 text-[var(--text)]">Six specialists.</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALISTS.map((agent) => (
          <Card key={agent.name} className="flex flex-col gap-5 p-6">
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-[var(--r-pill)] text-xs font-semibold",
                agent.primary
                  ? "bg-[var(--primary-bg)] text-[var(--primary-fg)]"
                  : "border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-2)]"
              )}
            >
              {agent.monogram}
            </span>
            <div className="space-y-1">
              <h3 className="h3 text-[var(--text)]">{agent.name}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {agent.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
