const BOOKSY_URL =
  "https://booksy.com/en-us/962412_vicshears_barber-shop_28863_hillside#ba_s=seo"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106936_y-7KpVH1J5tK2nIMXZyiNDHNBEsLNpeh.jpg"
          alt="VicShears giving a haircut on the deck of a yacht at dusk"
          className="size-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28">
        <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Top Echelon Barber
        </p>
        <h1 className="font-serif text-[clamp(4rem,16vw,13rem)] font-semibold leading-[0.85] tracking-tight text-foreground text-balance">
          VIC<span className="text-gold">SHEARS</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Born to cut. Built to lead. Bloomberg-certified barber known for
          blurry fades, surgical lineups, and intricate design work — from
          private suites to the deck of a yacht at dusk.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book on Booksy
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-border px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            View the Work
          </a>
        </div>

        <div className="mt-14 flex items-center gap-8 border-t border-border pt-7">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-gold">5.0</span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                168 Booksy Reviews
              </span>
              <span className="text-xs text-gold" aria-hidden="true">
                ★★★★★
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
