"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-slate-400/60 dark:bg-slate-800 h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-light-primary dark:text-emerald-400">About Me</h2>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden ">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/hakeem-image.jpg?height=400&width=400')" }}
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 mb-4 leading-relaxed "
                variants={variants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                With over 7 years of experience in digital marketing and content strategy, I've helped brands of all
                sizes establish their online presence and achieve their marketing goals.
              </motion.p>

              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 mb-4 leading-relaxed"
                variants={variants}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My expertise spans across various digital marketing channels, including Google Ads, TikTok, Instagram,
                and other social media platforms. I specialize in creating compelling narratives that resonate with
                target audiences and drive engagement.
              </motion.p>

              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 leading-relaxed"
                variants={variants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As a team leader, I've managed creative professionals to deliver cohesive marketing campaigns that align
                with brand values and business objectives. My approach combines data-driven insights with creative
                storytelling to achieve measurable results.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
