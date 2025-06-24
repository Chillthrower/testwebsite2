import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Turning Point Retail Solutions - Transforming Retail Across Southeast Asia",
  description:
    "Professional retail consulting services in Cambodia and Southeast Asia. Expert guidance in store operations, franchise development, and retail training with 23+ years of global brand experience.",
  keywords:
    "retail consulting, Cambodia, Southeast Asia, store operations, franchise development, retail training, Walter Dantis",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4ZY14VVWCM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4ZY14VVWCM');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
