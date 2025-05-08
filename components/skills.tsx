"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const skills = [
    { name: "Digital Marketing Strategy", level: 95 },
    { name: "Social Media Campaigns", level: 90 },
    { name: "AI Content Creation & Management", level: 85 },
    { name: "AI-Driven Campaigns", level: 95 },
    { name: "Performance Marketing", level: 90 },
    { name: "Brand Positioning", level: 88 },
    { name: "SEO & SEM", level: 85 },
    { name: "Data Analytics & Reporting", level: 80 },
    { name: "WhatsApp Bulk Campaigns", level: 90 },
    { name: "Cross-Border Marketing", level: 95 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" },
    }),
  }

  return (
    <section id="skills" className="py-20 bg-slate-400/70 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-emerald-400">Skills</h2>
        <p className="text-lg text-light-text dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          My expertise spans across various aspects of digital marketing and content strategy, with a focus on
          delivering measurable results.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="dark:text-emerald-400 font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500 rounded-full"
                  variants={barVariants}
                  custom={skill.level}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
