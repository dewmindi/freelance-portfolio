import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuroraBackground } from '@/components/ui/aurora-background'

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

export const metadata: Metadata = {
  title: "Hakeem Ahmed | Digital Marketing Expert | Brand Strategist | Growth Consultant",
  description: "Hi, I'm Hakeem Ahmed — a Digital marketing expert and brand strategist with a passion for helping businesses grow online. I work with startups and enterprises to enhance their online presence, increase traffic, and drive real results. My specialties include content marketing, social media strategy, performance marketing, and data-driven campaigns that deliver impact.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <AuroraBackground>
          {children}
          </AuroraBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}


