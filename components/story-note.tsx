export function StoryNote() {
  return (
    <section id="prica" className="relative border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <span className="text-label text-olive">Priča</span>
            <h2 className="font-display mt-3 text-balance text-3xl italic leading-tight md:text-4xl">
              Zašto &ldquo;mali gušti&rdquo;
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              &bdquo;Gušt&ldquo; je dalmatinska riječ za užitak, malo
              zadovoljstvo — a &bdquo;mali gušti&ldquo; su upravo to: sitni
              zalogaji koji se dijele oko stola umjesto jednog velikog jela
              po osobi. Konoba se nalazi u Vodicama, na Ulici Roca Pave 5, u
              blizini mjesta gdje grad izlazi na more.
            </p>
            <p>
              Stol je otvoren svaki dan od podneva do ponoći — za brzi
              zalogaj usred dana ili za dugu večer uz punu degustacijsku
              ploču.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
