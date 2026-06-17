import { Star } from "lucide-react"

const REVIEWS = [
  {
    quote:
      "Best barber I've ever had, hands down. The fade was so clean and the lineup was surgical. Worth every penny.",
    name: "Marcus T.",
  },
  {
    quote:
      "Vic is a true artist. The design work he did was unreal — everyone keeps asking me where I got my cut done.",
    name: "Andre W.",
  },
  {
    quote:
      "Professional, punctual, and incredibly talented. Came right to my apartment and delivered a flawless cut.",
    name: "Jordan M.",
  },
  {
    quote:
      "Hands down the most detailed barber in the game. The attention to detail on the blurry fade is next level.",
    name: "Devon R.",
  },
  {
    quote:
      "I travel a lot and Vic always finds a way to keep me fresh. Customer service and skill are unmatched.",
    name: "Chris B.",
  },
  {
    quote:
      "Booked through Booksy and it was the smoothest experience. Great vibes, elite cut. My go-to from now on.",
    name: "Tyrell J.",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Word of Mouth
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
            The <span className="text-gold">Reviews</span>
          </h2>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background px-5 py-2.5">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-medium text-foreground">
              5.0 · 168 Reviews on Booksy
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-sm border border-border bg-background p-7"
            >
              <span className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <blockquote className="mt-5 flex-1 leading-relaxed text-muted-foreground">
                {`"${review.quote}"`}
              </blockquote>
              <figcaption className="mt-6 font-serif text-lg text-foreground">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
