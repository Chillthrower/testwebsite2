import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Turning Point Retail Solutions - Transforming Retail Across Southeast Asia",
  description:
    "Professional retail consulting services in Cambodia and Southeast Asia. Expert guidance in store operations, franchise development, and retail training with 23+ years of global brand experience.",
  keywords:
    "retail consulting, Cambodia, Southeast Asia, store operations, franchise development, retail training, Walter Dantis",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
