export function LocationSection() {
  return (
    <section id="lokacija" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-label text-paprika">Lokacija</span>
          <h2 className="font-display mt-3 text-balance text-4xl italic leading-tight md:text-5xl">
            Stol vas čeka u Vodicama
          </h2>

          <dl className="mt-10 space-y-7">
            <div>
              <dt className="text-label text-muted-foreground">Adresa</dt>
              <dd className="font-display mt-1 text-2xl italic">
                Ulica Roca Pave 5, 22211 Vodice
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">Telefon</dt>
              <dd className="mt-1 text-2xl">
                <a
                  href="tel:+385989840959"
                  className="transition-colors duration-(--duration-micro) hover:text-paprika"
                >
                  +385 98 984 0959
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">E-mail</dt>
              <dd className="mt-1 text-2xl">
                <a
                  href="mailto:konobamaligusti@gmail.com"
                  className="transition-colors duration-(--duration-micro) hover:text-paprika"
                >
                  konobamaligusti@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-label text-muted-foreground">Radno vrijeme</dt>
              <dd className="mt-1 text-2xl">Svaki dan, 12:00 – 24:00</dd>
            </div>
          </dl>

          <a
            href="tel:+385989840959"
            className="mt-10 inline-block rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-label text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)]"
          >
            Nazovi i rezerviraj stol
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1746460158832-182329efbf80?auto=format&fit=crop&w=1600&q=80"
            alt="Čamci privezani u vodičkoj luci navečer"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-8">
            <div className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 shadow-lg backdrop-blur-sm">
              <span
                aria-hidden
                className="block h-3 w-3 shrink-0 rounded-full"
                style={{ background: "var(--paprika)" }}
              />
              <span className="text-label text-foreground">Vodice · Roca Pave 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
