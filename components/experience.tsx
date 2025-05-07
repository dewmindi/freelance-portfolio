"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "TikTok Campaign for Fashion Brand",
      description:
        "Led a viral TikTok campaign that increased engagement by 300% and drove a 45% increase in online sales within 3 months.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Google Ads Strategy for SaaS Startup",
      description:
        "Developed and implemented a comprehensive Google Ads strategy that reduced cost per acquisition by 35% while increasing qualified leads by 50%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Content Strategy for E-commerce Platform",
      description:
        "Created a content strategy that improved organic traffic by 80% and increased conversion rates by 25% through targeted content marketing.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Social Media Rebrand for Lifestyle Company",
      description:
        "Executed a complete social media rebrand across all platforms, resulting in a 120% increase in follower growth and 200% increase in engagement.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-400">Portfolio</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          A selection of my most impactful projects and campaigns that have driven measurable results for clients across
          various industries.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700 overflow-hidden hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
