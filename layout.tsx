import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google' // Import Inter font
import "./globals.css"

// Configure Inter font
const inter = Inter({
subsets: ["latin"],
variable: "--font-inter", // Define CSS variable for Inter
display: "swap",
})

export const metadata: Metadata = {
title: "Ben Stickland | Build a Personal Brand People Actually Care About",
description:
  "Work with Ben to grow visibility, land clients, and show up as your real self – without sounding like a robot.",
keywords:
  "personal brand coach, founder branding, BE MORE YOU framework, LinkedIn strategy, done-for-you content, brand messaging consultant",
icons: {
  icon: "/favicon.ico", // Placeholder favicon
},
openGraph: {
  images: "/social-share.jpg", // Placeholder social share image
},
    generator: 'v0.dev'
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
  <html lang="en" className={`${inter.variable}`}><body>{children}</body></html>
)
}
