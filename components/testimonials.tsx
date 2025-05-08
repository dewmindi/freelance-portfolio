"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director, TechStart Inc.",
      content:
        "Hakeem transformed our digital presence completely. His strategic approach to content and marketing campaigns resulted in a 200% increase in qualified leads within just 3 months.",
    },
    {
      name: "Michael Chen",
      position: "CEO, Fashion Forward",
      content:
        "Working with Hakeem on our TikTok campaign was a game-changer. His creative direction and data-driven approach helped us reach a new audience segment we had been struggling to connect with.",
    },
    {
      name: "Priya Patel",
      position: "Founder, Wellness Collective",
      content:
        "Hakeem's content strategy expertise helped us establish our brand voice and connect authentically with our community. Our engagement metrics have never been better!",
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
    <section id="testimonials" className="py-20 bg-slate-900 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-400">Certf</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my clients have to say about working with me.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700 h-full hover:shadow-emerald-500/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="text-emerald-400 mb-4 h-8 w-8" />
                  <p className="text-gray-300 mb-6 flex-grow">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
