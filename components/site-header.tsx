"use client";

import * as React from "react";

const NAV_LINKS = [
  { href: "#pocetak", label: "Početak" },
  { href: "#prica", label: "Priča" },
  { href: "#ponuda", label: "Degustacija" },
  { href: "#lokacija", label: "Lokacija" },
];

const PHONE = "+385 98 984 0959";
const PHONE_HREF = "tel:+385989840959";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    // IMPORTANT: header and the mobile drawer are rendered as SIBLINGS in
    // this fragment, never nested. A `backdrop-blur` on a `sticky` header
    // creates a stacking/filter context that clips a nested `fixed` child;
    // keeping the drawer as an independent fixed sibling avoids that trap.
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#pocetak" className="flex items-baseline gap-2.5">
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-sm font-display italic text-paprika"
            >
              g
            </span>
            <span className="font-display text-xl italic text-foreground">
              Mali Gušti
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-label md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors duration-(--duration-micro) hover:text-paprika"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="hidden rounded-full bg-[var(--button-primary-bg)] px-5 py-2.5 text-label text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)] md:block"
          >
            {PHONE}
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otvori izbornik"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex aspect-square items-center justify-center rounded-full border border-border p-2 text-foreground md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Sibling of <header>, not a child -- fixed full-screen drawer. */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-(--duration-base) md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <span className="font-display text-xl italic text-foreground">
            Mali Gušti
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Zatvori izbornik"
            className="flex aspect-square items-center justify-center rounded-full border border-border p-2 text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display py-3 text-3xl italic text-foreground transition-colors duration-(--duration-micro) hover:text-paprika"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          onClick={() => setOpen(false)}
          className="m-6 rounded-full bg-[var(--button-primary-bg)] px-6 py-4 text-center text-label text-[var(--button-primary-fg)]"
        >
          Nazovi: {PHONE}
        </a>
      </div>
    </>
  );
}
