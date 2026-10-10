import * as React from "react";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/utils";

interface GalleryCardData {
  tag: string;
  title: string;
  offset: boolean;
  rows: Array<{ label: string; value: string }>;
}

const GALLERY_CARDS: GalleryCardData[] = [
  {
    tag: "Itinerary",
    title: "Tokyo, 5 days",
    offset: false,
    rows: [
      { label: "09:00 Senso-ji", value: "Free" },
      { label: "12:30 Tsukiji lunch", value: "$20" },
      { label: "15:00 teamLab", value: "$30" },
    ],
  },
  {
    tag: "Weather",
    title: "Dubai weekend",
    offset: true,
    rows: [
      { label: "Fri", value: "Sunny" },
      { label: "Sat", value: "Clear" },
      { label: "Sun", value: "Warm" },
    ],
  },
  {
    tag: "Flights",
    title: "Lisbon routes",
    offset: false,
    rows: [
      { label: "Airports", value: "3 found" },
      { label: "Airlines", value: "Matched" },
    ],
  },
  {
    tag: "Budget",
    title: "Bangkok, 4 days",
    offset: true,
    rows: [
      { label: "Stay", value: "Mid-range" },
      { label: "Food", value: "Low" },
      { label: "Transit", value: "Low" },
    ],
  },
  {
    tag: "Hotels",
    title: "Kyoto stays",
    offset: false,
    rows: [
      { label: "Ryokan", value: "Top rated" },
      { label: "Central", value: "Near station" },
    ],
  },
];

export interface GalleryScrollerProps {
  className?: string;
}

export function GalleryScroller({ className }: GalleryScrollerProps) {
  return (
    <section
      aria-label="Sample agent outputs"
      className={cn(
        "mx-auto w-full max-w-[var(--container)] py-6 sm:py-10",
        className
      )}
    >
      <div
        role="region"
        aria-label="Sample agent output cards"
        tabIndex={0}
        className="gallery-mask no-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] sm:gap-5 sm:px-6"
      >
        {GALLERY_CARDS.map((card) => (
          <Card
            key={card.title}
            className={cn(
              "w-[228px] shrink-0 p-5 sm:w-[240px]",
              card.offset && "mt-7"
            )}
          >
            <div className="mb-4">
              <Chip asSpan className="text-xs text-[var(--text-2)]">
                {card.tag}
              </Chip>
            </div>
            <h2 className="mb-4 font-serif text-2xl font-normal tracking-[-0.01em] text-[var(--text)]">
              {card.title}
            </h2>
            <dl className="divide-y divide-[var(--border)] text-xs">
              {card.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 py-2.5 first:pt-1 last:pb-0"
                >
                  <dt className="text-[var(--text-2)]">{row.label}</dt>
                  <dd className="text-[var(--muted)]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
    </section>
  );
}
