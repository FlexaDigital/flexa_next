import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClientProvider from "./client-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlexaDigital - Premium Web Development & Digital Solutions | Custom Software Development Company",
  description: "Transform your business with FlexaDigital's expert web development, mobile app development, UI/UX design, and cloud solutions. 500+ successful projects delivered. Get free consultation today!",
  keywords: "web development company, custom software development, mobile app development, UI UX design agency, digital transformation, cloud solutions, enterprise software, e-commerce development, SaaS development, React development, Next.js development, Node.js development, full stack development, digital agency, software consulting",
  authors: [{ name: "FlexaDigital Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "FlexaDigital - Premium Web Development & Digital Solutions",
    description: "Transform your business with expert web development, mobile apps, and digital solutions. 50+ successful projects delivered worldwide.",
    url: "https://flexadigital.com",
    siteName: "FlexaDigital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://flexadigital.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlexaDigital - Premium Web Development Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexaDigital - Premium Web Development & Digital Solutions",
    description: "Transform your business with expert web development, mobile apps, and digital solutions. 500+ successful projects delivered worldwide.",
    creator: "@FlexaDigital",
    images: ["https://flexadigital.com/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ClientProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ClientProvider>
      </body>
    </html>
  );
}