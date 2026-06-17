import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
