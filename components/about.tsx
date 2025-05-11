"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";


export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-slate-400/70 dark:bg-slate-800 ">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3  -ml-12">
              {/* <div className="relative w-64 h-64  rounded-full overflow-hidden ">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/hakeem-ahmed.png')",
                  }}
                />
              </div> */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src="/ahmed-image.png"
                  alt="Hakeem Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <TypewriterEffect
                words={[{ text: "About" }, { text: "Hakeem :" }]}
                className="mb-4 "
              ></TypewriterEffect>
              <TypewriterEffect
                words={[
                  { text: "Your" },
                  { text: "Growth" },
                  { text: "Partner" },
                ]}
                className="mb-4"
              />
              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 mb-4 leading-relaxed tracking-wide"
                variants={variants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm Hakeem Ahmed, a Digital Marketing and Brand Strategy
                Expert. With 5+ years of experience, I blend creativity with
                data-driven strategies to help brands grow, connect, and succeed
                in the ever-evolving digital landscape. My approach is
                collaborative and hands-on, ensuring that every campaign is
                crafted to meet your unique needs and deliver real, measurable
                results.
              </motion.p>

              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 mb-4 leading-relaxed "
                variants={variants}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I've had the privilege of working across diverse industries,
                including food & beverage, fitness, retail, and tech, empowering
                businesses to launch campaigns that build awareness and drive
                growth. Whether it's managing social media strategies, leading
                creative direction, or optimizing campaigns, I focus on building
                authentic connections that resonate with your audience.
              </motion.p>

              <motion.p
                className="text-xl  text-light-text dark:text-gray-300 leading-relaxed "
                variants={variants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's work together to bring your vision to life and create
                impactful marketing strategies that help your brand stand out
                and thrive.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
