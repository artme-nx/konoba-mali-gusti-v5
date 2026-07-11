"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PLATES } from "./plates-data";
import { PlateCard } from "./plate-card";

gsap.registerPlugin(ScrollTrigger);

export function TastingFlight() {
  const clusterRef = React.useRef<HTMLDivElement>(null);
  const rowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = [
        ...(clusterRef.current
          ? Array.from(clusterRef.current.querySelectorAll<HTMLElement>("[data-plate]"))
          : []),
        ...(rowRef.current
          ? Array.from(rowRef.current.querySelectorAll<HTMLElement>("[data-plate]"))
          : []),
      ];

      targets.forEach((el, i) => {
        const finalRotate = Number(el.dataset.rotate ?? 0);
        // IMPORTANT: never animate opacity here. The resting/starting state
        // (set below) must already be fully visible and legible on its own
        // -- a slightly smaller scale and steeper tilt -- so that if
        // ScrollTrigger never fires (JS error, no scroll event captured,
        // reduced-motion edge cases, automated tooling that resizes the
        // viewport instead of scrolling) the plate is still a perfectly
        // fine permanent visual, never a stuck-invisible one.
        gsap.set(el, { scale: 0.92, rotate: finalRotate * 1.8 });
        gsap.to(el, {
          scale: 1,
          rotate: finalRotate,
          duration: 0.7,
          delay: i * 0.09,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="ponuda" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="text-label text-paprika">Degustacija</span>
          <h2 className="font-display mt-3 text-balance text-4xl italic leading-tight md:text-5xl">
            Sampler ploča malih zalogaja
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ime konobe znači &ldquo;male slasti&rdquo; — filozofija stola gdje se
            proba pomalo od svega: riba, meso s gradela, hladni tanjur i
            slatki kraj, poslagani kao degustacijski krug, ne kao dugačak
            popis.
          </p>
        </div>

        {/* Desktop / tablet: scattered sampler cluster, not a grid. */}
        <div
          ref={clusterRef}
          className="relative mt-16 hidden md:block"
          style={{ height: "clamp(560px, 58vw, 700px)" }}
        >
          {PLATES.map((plate) => (
            <div
              key={plate.id}
              data-plate
              data-rotate={plate.rotate}
              className="absolute"
              style={{
                top: plate.top,
                left: plate.left,
                width: plate.size,
                height: plate.size,
              }}
            >
              <PlateCard plate={plate} />
            </div>
          ))}
        </div>

        {/* Mobile: same round plates, ordered as a horizontal tasting row. */}
        <div
          ref={rowRef}
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:hidden"
        >
          {PLATES.map((plate) => (
            <div
              key={plate.id}
              data-plate
              data-rotate={0}
              className="relative shrink-0 snap-center"
              style={{ width: "min(64vw, 260px)", height: "min(64vw, 260px)" }}
            >
              <PlateCard plate={plate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
