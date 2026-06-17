import { AtSign, Calendar } from "lucide-react"

const BOOKSY_URL =
  "https://booksy.com/en-us/962412_vicshears_barber-shop_28863_hillside#ba_s=seo"
const INSTAGRAM_URL = "https://www.instagram.com/vic_shears/"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20Logo%20%28on%20Black%20bg%29-fDDuOpvwMLsFI06advsQRkzVYxGhZA.png"
              alt="VicShears — Top Echelon Barber logo"
              className="h-28 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Bloomberg-certified barber. Blurry fades, surgical lineups, and
              intricate design work — wherever you are.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
              Connect
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Calendar className="size-4 text-gold" />
                Book on Booksy
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <AtSign className="size-4 text-gold" />
                @vic_shears
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-xs tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} VicShears. Top Echelon Barber.
          </p>
          <p className="text-xs tracking-wide text-muted-foreground">
            Born to cut. Built to lead.
          </p>
        </div>
      </div>
    </footer>
  )
}
