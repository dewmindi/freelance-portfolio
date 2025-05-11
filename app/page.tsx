import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Certifications from "@/components/certifications"
import Services from "@/components/services"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export const metadata: Metadata = {
  title:
    "Hakeem Ahmed | Digital Marketing Expert | Brand Strategist | Growth Consultant",
  description:
    "Hi, I'm Hakeem Ahmed — a Digital marketing expert and brand strategist with a passion for helping businesses grow online. I work with startups and enterprises to enhance their online presence, increase traffic, and drive real results. My specialties include content marketing, social media strategy, performance marketing, and data-driven campaigns that deliver impact.",
};


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-400/60 text-white">
      <Navbar />
      <Hero />
      <About />
      <InfiniteMovingCards
        items={[
          {
            image: "/Brands/ajwan-group.jpg",
            caption: "",
            link: "https://www.ajwan.group/en",
          },
          {
            image: "/Brands/bayt-al-waldah.jpg",
            caption: "",
            link: "https://www.baytalwaldah.com/",
          },
          {
            image: "/Brands/boostems.jpg",
            caption: "",
            link: "https://boostgym.qa/",
          },
          {
            image: "/Brands/cannelle.jpg",
            caption: "",
            link: "https://www.cannelleshop.com/",
          },
          {
            image: "/Brands/forall.jpg",
            caption: "",
            link: "https://forall.qa/",
          },
          {
            image:  "/Brands/fryin-system.png",
            caption: "",
            link: "https://fryingsystem.com/",
          },
          {
            image: "/Brands/gewan-resort.png",
            caption: "",
            link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgewanresort%2F&is_from_rle",
          },
          {
            image: "/Brands/go-crispy.jpg",
            caption: "",
            link: "https://www.gocrispy.com/",
          },
          {
            image: "/Brands/mamas-cuisine.jpg",
            caption: "",
            link: "https://www.mamas-cuisine.com/",
          },
                    {
            image: "/Brands/smart-kitchen.png",
            caption: "",
            link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fsmart_kitchen.qa%2F&is_from_rle",
          },
          {
            image: "/Brands/tbakh-al-waldah.jpg",
            caption: "",
            link: "https://www.tbakhalwaldah.com/",
          },
                    {
            image:"/Brands/zad-al-yemen.jpg",
            caption: "",
            link: "https://www.instagram.com/zad.alyemenq/",
          },
        ]}
      />
      <Skills />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
