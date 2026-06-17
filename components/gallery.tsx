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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791789_y-7vDdi1aNfbu6WVv0qMfhOQjaaNwx0j.jpg",
    alt: "Two clients at professional barber convention with Level3 signage",
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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791786_y-T9CZdnMbbTvKA9KgC247VLD4nQPkU9.jpg",
    alt: "Professional barbering session at Babyliss PRO event with blue cape",
    span: "md:col-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791791_y-SglmGFtutqy6B3vpMOGSTNrEHQ8W2b.jpg",
    alt: "Geometric line design carved into fade in luxury apartment",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791787_y-60iylZRDs321LgTUnop385MdcurJZe.jpg",
    alt: "Elegant fade with neon barber shop window in background",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791793_y-ypRmIi399rFGLxrmqiYCe2e2DarAP1.jpg",
    alt: "High-fade mohawk design with clean lines",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791792_y-HN9RdbFkruo633PlmM4daRQNqBZbmo.jpg",
    alt: "Artistic braids and hair design work from above",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791788_y-sGh0MjkeqJTZwhqNbkcO78qlYIIPZm.jpg",
    alt: "Profile shot of sharp fade with braids in professional setting",
    span: "row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5877623201272106939_y-G3y9tlqscxA7VVwKd1AxvABJOI5Bc4.jpg",
    alt: "Braided cornrows with fade and beard detailing in studio",
    span: "md:col-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791794_y-KC7Z14wVg3T5LWSQrOXb3MNpAjCvfP.jpg",
    alt: "Two clients showing off fade designs in lounge",
    span: "",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5879875001085791790_y-aDeqq0x2kyfMxc1tz0AWyW4Tuh47SH.jpg",
    alt: "Two clients in modern orange-lit luxury barber lounge",
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
