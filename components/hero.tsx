"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Instagram, InstagramIcon as TiktokIcon, MessageSquare } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.6)",
        }}
      /> */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white-900/70 dark:from-transparent dark:to-slate-900 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-600 dark:text-dark-text leading-tight font-mono">
            Managing Campaigns & Creative That Deliver.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-500 dark:text-gray-200 mb-8 leading-relaxed"
          >
            Hi, I'm Hakeem Ahmed, a Digital Marketing and Brand Strategy Expert.
            With over 5+ years of experience, I craft and execute digital marketing strategies that drive growth, enhance brand visibility, and build lasting customer relationships. 
            From designing impactful campaigns to leading creative teams and developing engaging brand narratives, I help businesses connect, engage, and succeed in today's competitive digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* <button className=" bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Let's Connect
            </button> */}
            {/* <button className=" bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ml-2">
              View My Work
            </button> */}
                <div className="flex justify-center gap-2">
                              <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
                </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.7 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full h-full relative"
        >
          <motion.div
            className="absolute text-emerald-400 opacity-70"
            style={{ top: "20%", left: "15%" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 3.868 0 7 3.14 7 7.018 0 3.878-3.132 7.018-7 7.018zm3.2-7.018c0 1.327-.759 1.972-1.41 2.01v.157c0 .125-.108.224-.235.224h-1.117c-.125 0-.235-.1-.235-.224v-.157c-.651-.038-1.41-.683-1.41-2.01h1.372c0 .688.352.886.759.886.352 0 .651-.198.651-.53 0-.281-.175-.414-.759-.588-1.059-.28-2.291-.765-2.291-2.26 0-1.326.759-1.97 1.41-2.009v-.157c0-.125.11-.224.235-.224h1.117c.125 0 .235.1.235.224v.157c.651.038 1.41.683 1.41 2.01h-1.372c0-.688-.352-.886-.759-.886-.352 0-.651.198-.651.53 0 .28.175.414.759.588 1.058.28 2.291.765 2.291 2.26z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute text-pink-400 opacity-70"
            style={{ top: "30%", right: "20%" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          >
            <TiktokIcon size={36} />
          </motion.div>

          <motion.div
            className="absolute text-purple-400 opacity-70"
            style={{ bottom: "25%", left: "25%" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.5, ease: "easeInOut" }}
          >
            <Instagram size={36} />
          </motion.div>

          <motion.div
            className="absolute text-blue-400 opacity-70"
            style={{ bottom: "35%", right: "25%" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute text-green-400 opacity-70"
            style={{ top: "50%", right: "10%" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          >
            <MessageSquare size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
