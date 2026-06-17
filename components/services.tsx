import {
  Scissors,
  UserRound,
  Ruler,
  PenTool,
  Baby,
  Droplets,
  Brush,
  Palette,
  Sparkles,
  Crown,
} from "lucide-react"

const BOOKSY_URL =
  "https://booksy.com/en-us/962412_vicshears_barber-shop_28863_hillside#ba_s=seo"

const SERVICES = [
  {
    num: "01",
    icon: Scissors,
    title: "Haircut",
    description: "Precision fade and sculpt tailored to your crown.",
    price: "$50",
    duration: "40 min",
  },
  {
    num: "02",
    icon: UserRound,
    title: "Haircut & Beard",
    description: "Full grooming — clean fade with a sculpted beard line.",
    price: "$55",
    duration: "45 min",
  },
  {
    num: "03",
    icon: Ruler,
    title: "Shape Up",
    description: "Crisp line-up and edge refinement between cuts.",
    price: "$25",
    duration: "25 min",
  },
  {
    num: "04",
    icon: PenTool,
    title: "Pro Design & Cut",
    description: "Custom hair art and intricate design work.",
    price: "$80+",
    duration: "55 min",
  },
  {
    num: "05",
    icon: Baby,
    title: "Kids Fade",
    description: "Patient, precise cuts for the young kings.",
    price: "$40",
    duration: "35 min",
  },
  {
    num: "06",
    icon: Droplets,
    title: "Scalp Treatment",
    description: "Therapeutic scalp care to nourish and restore at the root.",
    price: "$45",
    duration: "30 min",
  },
  {
    num: "07",
    icon: Brush,
    title: "Beard Trim",
    description: "Clean-up and shaping to keep the beard looking intentional.",
    price: "$30",
    duration: "20 min",
  },
  {
    num: "08",
    icon: Palette,
    title: "Hair Color",
    description: "Bold color, highlights, or bleach work to elevate your look.",
    price: "$80+",
    duration: "1 hr",
  },
  {
    num: "09",
    icon: Sparkles,
    title: "Loc Retwist",
    description:
      "Fresh retwist to maintain the structure and health of your locs.",
    price: "$60+",
    duration: "45 min",
  },
  {
    num: "10",
    icon: Crown,
    title: "Top Echelon VIP",
    description: "The complete luxury grooming ceremony — concierge level.",
    price: "$200",
    duration: "1 hr 20 min",
    featured: true,
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            What I Do
            <span className="h-px w-10 bg-gold" />
          </p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground text-balance sm:text-5xl">
            The <span className="text-gold">Menu</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every service delivered at top-echelon standard — in the shop, your
            suite, or anywhere the chair lands.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className={`group flex flex-col rounded-sm border p-7 transition-colors ${
                service.featured
                  ? "border-gold/60 bg-gold/5"
                  : "border-border bg-background hover:border-gold/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <service.icon className="size-5" />
                </span>
                <span className="font-serif text-3xl text-gold/40">
                  {service.num}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-serif text-xl font-semibold text-gold">
                  {service.price}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
