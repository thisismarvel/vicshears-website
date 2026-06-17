const STATS = [
  { value: "4+", label: "Years Pro" },
  { value: "168", label: "Booksy Reviews" },
  { value: "5.0", label: "Star Rating" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106940_y-MElmLDbSgn9n16E1ATCDNAHxne2i1k.jpg"
                alt="Victor of VicShears in a tailored suit"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-sm border border-gold/40 bg-card px-7 py-5 sm:block">
              <p className="font-serif text-3xl text-gold">Dec 24, 2023</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                VicShears was born
              </p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" />
              The Story
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
              Born to cut. <span className="text-gold">Built to lead.</span>
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                What started with a comb, some gel, and his mother&apos;s hair
                in Lagos became something the industry had to reckon with. After
                years honing the craft at K9cut, Victor rebranded as VicShears —
                a name that carries a new standard.
              </p>
              <p>
                A Bloomberg-certified barber known for blurry fades, surgical
                lineups, and intricate design work that moves across cultures
                and continents. Whether in a private suite, a luxury apartment,
                or on the deck of a yacht at dusk — the kit travels. The
                standard never does.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-4xl font-semibold text-gold sm:text-5xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
