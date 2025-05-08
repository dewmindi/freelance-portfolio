"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, ExternalLink } from "lucide-react"

export default function Certifications() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    const [expandedId, setExpandedId] = useState<number | null>(null)

    const certifications = [
        {
            id: 1,
            name: "Google Ads Search Certification",
            issuer: "Google",
            date: "Feb 2022",
            expiry: "No Expiration",
            description:
                "Advanced proficiency in creating and optimizing Google Ads campaigns across Search, Display, and Video networks.",
            skills: ["Data Analysis", "Social Media Strategy", "Social Media Marketing", "Media Strategy", "Performance Metrics"],
            image: "/certificate.png?height=400&width=600",
            credentialUrl: "https://drive.google.com/file/d/1u9tQpM6Uai6Rn2htT4B6K_lJ1cSz6GO_/view",
        },
        {
            id: 2,
            name: "Google Analytics for Beginners",
            issuer: "Google",
            date: "Jan 2023",
            expiry: "No Expiration",
            description:
                "Expert-level knowledge in Facebook and Instagram advertising, including campaign strategy, audience targeting, and analytics.",
            skills: ["Social Media Advertising", "Media Trends", "Audience Targeting", "Pricing Strategy", "Business Strategy"],
            image: "/certificate1.png?height=400&width=600",
            credentialUrl: "https://drive.google.com/file/d/1QHEPf8onCSX8TVcblIr26RooH6twv4HB/view",
        },
        {
            id: 3,
            name: "Fundamentals of Digital Marketing",
            issuer: "Google",
            date: "Jun 2021",
            expiry: "No Expiration",
            description:
                "Comprehensive understanding of content marketing principles, strategy development, and implementation for business growth.",
            skills: ["Content Strategy", "SEO", "Lead Generation", "Content Creation"],
            image: "/certificate2.png?height=400&width=600",
            credentialUrl: "https://drive.google.com/file/d/1trcriiC2rqcyeE-vdfxf99-9YCgqx_D5/view?usp=sharing",
        },
        {
            id: 4,
            name: "TikTok Ads Strategy - Practical Expertise",
            issuer: "TikTok For Business",
            date: "No IssueDate",
            expiry: "No Expiration",
            description:
                "Specialized knowledge in creating and managing high-performing TikTok advertising campaigns for brand awareness and conversions.",
            skills: ["Short-form Video", "Trend Marketing", "Gen Z Targeting", "Creative Direction"],
            image: "/tiktok.jpg?height=400&width=600",
            credentialUrl: "nocred",
        },
        {
            id: 5,
            name: "Meta Ads Strategy - Practical Expertise",
            issuer: "Meta",
            date: "No IssueDate",
            expiry: "No Expiration",
            description:
                "Advanced proficiency in analyzing website traffic, user behavior, and marketing campaign performance using Google Analytics.",
            skills: ["Data Analysis", "Conversion Tracking", "User Behavior Analysis", "Reporting"],
            image: "/meta.png?height=400&width=600",
            credentialUrl: "nocred",
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

    const handleCardClick = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                        Professional Certifications
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
                        I continuously invest in expanding my knowledge and staying current with industry standards through
                        professional certifications and training.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certifications.map((cert) => (
                        <motion.div key={cert.id} variants={itemVariants}>
                            <Card
                                className={`overflow-hidden transition-all duration-500 ${expandedId === cert.id
                                    ? "bg-white dark:bg-slate-800 shadow-lg transform scale-[1.02]"
                                    : "bg-gray-50 dark:bg-slate-800 hover:shadow-md"
                                    }`}
                                onClick={() => handleCardClick(cert.id)}
                            >
                                <div className="relative overflow-hidden cursor-pointer">
                                    <div className="h-48 overflow-hidden">
                                        <motion.img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-emerald-500 hover:bg-emerald-600">{cert.issuer}</Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{cert.name}</h3>

                                    <div className="flex items-center text-sm text-slate-500 dark:text-gray-400 mb-4">
                                        {cert.date !== "No IssueDate" && <Calendar className="h-4 w-4 mr-1" />}
                                        <span>
                                            {cert.date !== "No IssueDate" && `• Issued: ${cert.date}`} {cert.expiry !== "No Expiration" && `• Expires: ${cert.expiry}`}
                                        </span>
                                    </div>

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: expandedId === cert.id ? "auto" : 0,
                                            opacity: expandedId === cert.id ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-slate-600 dark:text-gray-300 mb-4">{cert.description}</p>

                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {cert.skills.map((skill, index) => (
                                                    <Badge key={index} variant="outline" className="bg-gray-100 dark:bg-slate-700">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-emerald-500 hover:text-emerald-600 text-sm font-medium"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span>View Credential</span>
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </a>
                                    </motion.div>

                                    {/* {expandedId !== cert.id && (
                    <div className="flex justify-center mt-2">
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        className="text-emerald-500 text-sm"
                      >
                        Click to view details
                      </motion.div>
                    </div>
                  )} */}
                                    {expandedId !== cert.id && cert.credentialUrl !== "nocred" && (
                                        <div className="flex justify-center mt-2">
                                            <motion.div
                                                initial={{ y: 0 }}
                                                animate={{ y: [0, 5, 0] }}
                                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                                                className="text-emerald-500 text-sm"
                                            >
                                                Click to view details
                                            </motion.div>
                                        </div>
                                    )}


                                    <div className="absolute bottom-3 right-3">
                                        <Award className="h-6 w-6 text-emerald-500/30" />
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
