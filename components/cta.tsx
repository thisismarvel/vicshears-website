const BOOKSY_URL =
  "https://booksy.com/en-us/962412_vicshears_barber-shop_28863_hillside#ba_s=seo"

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106941_y-mREkBoW05zA2hyn1G8QZSZpr7W7gHn.jpg"
          alt="Intricate freehand design work carved into a fade"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:px-8 lg:py-36">
        <p className="mb-5 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Ready When You Are
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-serif text-5xl font-semibold leading-[0.95] text-foreground text-balance sm:text-6xl lg:text-7xl">
          Secure Your <span className="text-gold">Seat</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          The standard never travels down. Book your appointment on Booksy and
          experience the top echelon for yourself.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-gold px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book on Booksy
        </a>
      </div>
    </section>
  )
}
