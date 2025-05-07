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
  title: "Hakeem Ahmed | Digital Marketing & Content Strategy Specialist",
  description: "Portfolio of Hakeem Ahmed, Digital Marketing and Content Strategy Specialist",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body>{children}</body> */}
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
