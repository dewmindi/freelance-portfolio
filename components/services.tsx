"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  TrendingUp,
  MessageSquare,
  PenTool,
  Palette,
  Share2,
  Bot,
  LineChart,
  Video,
  ImageIcon,
  Lightbulb,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const services = [
    {
      id: 1,
      title: "Paid Advertising",
      description:
        "Strategic campaign management across various platforms to maximize ROI and drive measurable results.",
      icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
      subIcons: [
        { icon: <BarChart3 size={20} />, label: "ROI Optimization" },
        { icon: <Share2 size={20} />, label: "Cross-Platform Campaigns" },
      ],
    },
    {
      id: 2,
      title: "Content & Social Media Strategy",
      description:
        "Developing engaging content calendars, managing social communities, and overseeing creative production. Additionally, leveraging advanced AI technologies to create high-quality, AI-generated content, including videos and images, to keep your brand innovative and relevant in today's digital landscape.",
      icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
      subIcons: [
        { icon: <Video size={20} />, label: "AI Video Generation" },
        { icon: <ImageIcon size={20} />, label: "AI Image Creation" },
      ],
    },
    {
      id: 3,
      title: "Creative & Brand Strategy",
      description:
        "Crafting compelling brand narratives, mood boards, and coordinating creative teams to ensure consistent storytelling.",
      icon: <Palette className="h-10 w-10 text-emerald-500" />,
      subIcons: [
        { icon: <PenTool size={20} />, label: "Brand Identity" },
        { icon: <Lightbulb size={20} />, label: "Creative Direction" },
      ],
    },
    {
      id: 4,
      title: "Marketing Automation & Analytics",
      description:
        "Implementing AI-driven CRM flows, chatbot automations, and performance tracking to enable data-driven decision-making.",
      icon: <LineChart className="h-10 w-10 text-emerald-500" />,
      subIcons: [
        { icon: <Bot size={20} />, label: "Chatbot Automation" },
        { icon: <BarChart3 size={20} />, label: "Performance Analytics" },
      ],
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

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
            How Can I Help?
          </h2>
          <p className="text-lg text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a range of services designed to elevate your brand and achieve your marketing goals:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <motion.div
                        variants={iconVariants}
                        className="mr-4 p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl"
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{service.title}</h3>
                        <div className="flex space-x-4 mb-2">
                          {service.subIcons.map((subIcon, index) => (
                            <div key={index} className="flex items-center text-sm text-slate-600 dark:text-gray-400">
                              {subIcon.icon}
                              <span className="ml-1">{subIcon.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
