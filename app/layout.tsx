import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Raed Trabelsi - Commerce & Distribution Professional | Portfolio",
  description:
    "Professional portfolio of Raed Trabelsi, Commerce & Distribution graduate from Tunisia. Showcasing experience in commercial management, client relations, and business development.",
  keywords:
    "Raed Trabelsi, Commerce Distribution, professional portfolio, CV, Tunisia, commercial management, client relations, business development, Sfax",
  authors: [{ name: "Raed Trabelsi" }],
  creator: "Raed Trabelsi",
  publisher: "Raed Trabelsi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "ar_TN"],
    url: "https://raed-trabelsi.vercel.app",
    siteName: "Raed Trabelsi Portfolio",
    title: "Raed Trabelsi - Commerce & Distribution Professional",
    description: "Professional portfolio showcasing expertise in commercial management and business development.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raed Trabelsi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raed Trabelsi - Commerce & Distribution Professional",
    description: "Professional portfolio showcasing expertise in commercial management and business development.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://raed-trabelsi.vercel.app",
    languages: {
      "en-US": "https://raed-trabelsi.vercel.app/en",
      "fr-FR": "https://raed-trabelsi.vercel.app/fr",
      "ar-TN": "https://raed-trabelsi.vercel.app/ar",
    },
  },
  generator: "Next.js",
  applicationName: "Raed Trabelsi Portfolio",
  referrer: "origin-when-cross-origin",
  category: "portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
