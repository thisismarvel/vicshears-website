"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const BOOKSY_URL =
  "https://booksy.com/en-us/962412_vicshears_barber-shop_28863_hillside#ba_s=seo"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20Logo%20%28on%20Black%20bg%29-RYV9unZkVHbcgLBegAIYr5pmL73q3M.png"
            alt="VicShears - Top Echelon Barber"
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-6 py-3 text-center text-sm font-medium tracking-wide text-primary-foreground"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
