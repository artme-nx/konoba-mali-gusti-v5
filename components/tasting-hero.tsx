"use client";

import * as React from "react";
import gsap from "gsap";
import { PLATES } from "./plates-data";
import { PlateCard } from "./plate-card";

const PHONE = "+385 98 984 0959";
const PHONE_HREF = "tel:+385989840959";

// A 3-plate teaser of the full sampler board (see TastingFlight), sized down
// and arranged beside the headline so the hero itself already reads as a
// tasting flight rather than a conventional full-bleed photo hero.
const TEASER = [PLATES[0], PLATES[2], PLATES[4]];

export function TastingHero() {
  const teaserRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!teaserRef.current) return;

    // Never animate opacity -- the starting state below (slightly lower +
    // smaller) must already read as a complete, legible visual on its own
    // in case this effect never resolves (see tasting-flight.tsx for why).
    const els = teaserRef.current.querySelectorAll<HTMLElement>("[data-plate]");
    gsap.set(els, { y: 18, scale: 0.92 });
    gsap.to(els, {
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.12,
      delay: 0.15,
      ease: "back.out(1.5)",
    });
  }, []);

  return (
    <section id="pocetak" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="text-label text-paprika">Vodice · konoba</span>
          <h1 className="font-display mt-5 text-balance text-5xl italic leading-[1.05] text-foreground md:text-6xl lg:text-[4.5rem]">
            Mali gušti,
            <br />
            veliki stol
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Konoba Mali Gušti u Vodicama slaže stol od malih zalogaja —
            probate pomalo od svega umjesto da birate jedno jelo. Ime govori
            samo za sebe: male slasti, veliko društvo.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-label text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)]"
            >
              Rezervacija: {PHONE}
            </a>
            <a
              href="#ponuda"
              className="rounded-full border px-6 py-3 text-label text-foreground transition-colors duration-(--duration-micro)"
              style={{ borderColor: "var(--button-ghost-border)" }}
            >
              Cijela degustacija ↓
            </a>
          </div>
          <p className="text-label mt-8 text-muted-foreground">
            Otvoreno svaki dan · 12:00 – 24:00
          </p>
        </div>

        <div
          ref={teaserRef}
          className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-5 sm:max-w-lg"
        >
          <div data-plate className="col-span-2 aspect-[5/4] justify-self-center w-[78%] sm:w-[70%]">
            <PlateCard plate={TEASER[0]} />
          </div>
          <div data-plate className="aspect-square justify-self-end w-[85%]">
            <PlateCard plate={TEASER[1]} />
          </div>
          <div data-plate className="aspect-square justify-self-start w-[85%]">
            <PlateCard plate={TEASER[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
