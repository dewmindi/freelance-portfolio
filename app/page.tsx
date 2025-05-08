import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { AuroraBackground } from "@/components/ui/aurora-background"
import Certifications from "@/components/certifications"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import Services from "@/components/services"

export const metadata: Metadata = {
  title: "Hakeem Ahmed | Digital Marketing & Content Strategy Specialist",
  description:
    "Digital Marketing and Content Strategy Specialist with 7+ years of experience in transforming brands online and offline.",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-400/60 text-white">
      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <ParallaxScroll 
        images={["/Brands/AjwanGroup.jpg", "/Brands/BaytAlWaldah.jpg", "/Brands/BOOSTEMS.jpg","/Brands/Cannelle.jpg", "/Brands/FORALL.jpg", "/Brands/fryinsystem.png", "/Brands/Gewan Resort.png", "/Brands/Go Crispy.jpg", "/Brands/Mama’s Cuisine.jpg", "/Brands/SmartKitchen.png", "/Brands/Tbakh Al Waldah.jpg", "/Brands/Zad Al Yemen.jpg"]} 
        links={["https://www.ajwan.group/en","https://www.baytalwaldah.com/","https://boostgym.qa/","https://www.cannelleshop.com/","https://forall.qa/","https://fryingsystem.com/","https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgewanresort%2F&is_from_rle","https://www.gocrispy.com/","https://www.mamas-cuisine.com/","https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fsmart_kitchen.qa%2F&is_from_rle","https://www.tbakhalwaldah.com/","https://www.instagram.com/zad.alyemenq/"]}
      />
      <Skills />
      <Certifications />
      {/* <Testimonials /> */}
      <Services/>
      <Contact />
      <Footer />
    </main>
  )
}
