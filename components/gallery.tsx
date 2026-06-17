const IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106937_y-iHhRmnhHVrWWIX3ENdTk6WPLr9fbbS.jpg",
    alt: "High-top fade with locs and clean lineup in a luxury lounge",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106938_y-Y0U3NOeQmjGvLHzvtjzvq9l19HwXdi.jpg",
    alt: "VicShears applying product during a red-stripe polo session",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106941_y-mREkBoW05zA2hyn1G8QZSZpr7W7gHn.jpg",
    alt: "Intricate freehand design work carved into a fade",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106936_y-7KpVH1J5tK2nIMXZyiNDHNBEsLNpeh.jpg",
    alt: "Barbering session on the deck of a yacht at dusk",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106939_y-G3y9tlqscxA7VVwKd1AxvABJOI5Bc4.jpg",
    alt: "Braided cornrows with fade and beard detailing in studio",
    span: "md:col-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106963_y-nUGTWi2z8okGQg1tRq5i49Psdc741q.jpg",
    alt: "Clean fade and lineup finished in a marble bathroom suite",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106942_y-SQ3GbfkETSzNzM1BNg71zZqn8qXkN7.jpg",
    alt: "Detailed braid work during a private luxury apartment session",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106940_y-MElmLDbSgn9n16E1ATCDNAHxne2i1k.jpg",
    alt: "Victor of VicShears in a tailored suit",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            The Portfolio
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
            The <span className="text-gold">Gallery</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Fades, lineups, braids, and design work — across cultures and
            continents.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[260px] md:grid-cols-4">
          {IMAGES.map((img) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-sm bg-card ${img.span}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
