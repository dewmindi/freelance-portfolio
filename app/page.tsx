import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { AuroraBackground } from "@/components/ui/aurora-background"

export const metadata: Metadata = {
  title: "Hakeem Ahmed | Digital Marketing & Content Strategy Specialist",
  description:
    "Digital Marketing and Content Strategy Specialist with 7+ years of experience in transforming brands online and offline.",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-400 text-white">
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
