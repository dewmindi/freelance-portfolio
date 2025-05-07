"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

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
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-400"
          >
            Let's Build Something Great Together.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Ready to elevate your digital marketing strategy? Let's connect and discuss how I can help your brand stand
            out.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-900 border-slate-700 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        rows={5}
                        required
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-900 border-slate-700 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>

                  <div className="space-y-6">
                    <a
                      href="https://wa.me/?text=Hi%20Hakeem%2C%20I'd%20love%20to%20discuss%20working%20together%20on%20marketing%20%26%20content%20projects."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-full mr-4">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">WhatsApp</h4>
                        <p className="text-gray-400 text-sm">Chat with me directly</p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-full mr-4">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">LinkedIn</h4>
                        <p className="text-gray-400 text-sm">Connect professionally</p>
                      </div>
                    </a>

                    <a
                      href="mailto:hakeem@example.com"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-emerald-600 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-gray-400 text-sm">hakeem@example.com</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
