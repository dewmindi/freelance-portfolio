"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form";

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

  type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:udewmindi.ud@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
  };

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
    <section id="contact" className="py-20 bg-slate-400/60 dark:bg-slate-900">
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
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-600"
          >
            Let's Build Something Great Together.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-light-text dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Ready to elevate your digital marketing strategy? Let's connect and discuss how I can help your brand stand
            out.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-400 dark:bg-slate-900  dark:border-slate-700 h-full shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <Input {...register("name")}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <Input {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea {...register("message")}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        rows={5}
                        required
                        className="dark:bg-slate-800 dark:border-slate-700 dark:text-white"
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
              <Card className="bg-slate-400 dark:bg-slate-900 dark:border-slate-700 h-full shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Me</h3>

                  <div className="space-y-6">
                    <a
                      href="https://wa.me/97459986554?text=Hi%20Hakeem%2C%20I'd%20love%20to%20discuss%20working%20together%20on%20marketing%20%26%20content%20projects."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full mr-4">
                        {/* <MessageSquare className="h-6 w-6 text-white" /> */}
                        <img
                          src="/socialLogos/whatsapp.png"
                          className="rounded-md h-6 w-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">WhatsApp</h4>
                        <p className="text-gray-400 text-sm">Chat with me directly</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/hakeem-ahmed/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full mr-4">
                        {/* <Linkedin className="h-6 w-6 text-white" /> */}
                        <img
                          src="/socialLogos/linkedin.png"
                          className="rounded-md h-6 w-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">LinkedIn</h4>
                        <p className="text-gray-400 text-sm">Connect professionally</p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@hakeemahmed.com"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full mr-4">
                        {/* <Mail className="h-6 w-6 text-white" /> */}
                        <img
                          src="/socialLogos/gmail.png"
                          className="rounded-md h-6 w-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-gray-400 text-sm">hello@hakeemahmed.com</p>
                      </div>
                    </a>
                    <a
                      href=" https://www.instagram.com/hakim8_/"
                      className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full mr-4">
                        <img
                          src="/socialLogos/insta.png"
                          className="rounded-md h-6 w-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Instagram</h4>
                        <p className="text-gray-400 text-sm">For Collaborations</p>
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
