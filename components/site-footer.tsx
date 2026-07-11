export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg italic text-foreground">
            Konoba Mali Gušti
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ulica Roca Pave 5, 22211 Vodice, Hrvatska
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a
            href="tel:+385989840959"
            className="transition-colors duration-(--duration-micro) hover:text-paprika"
          >
            +385 98 984 0959
          </a>
          <a
            href="mailto:konobamaligusti@gmail.com"
            className="transition-colors duration-(--duration-micro) hover:text-paprika"
          >
            konobamaligusti@gmail.com
          </a>
          <a
            href="#pocetak"
            className="transition-colors duration-(--duration-micro) hover:text-paprika"
          >
            Na vrh
          </a>
          <span>Otvoreno 12:00 – 24:00</span>
        </div>
      </div>
    </footer>
  );
}
