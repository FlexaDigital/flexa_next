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
  title: "Flexa Digital - Digital Product Studio",
  description: "We build digital products that grow businesses. Product-led design, scalable engineering, clear results.",
  keywords: "web development, mobile apps, UI/UX design, digital marketing, cloud solutions",
  authors: [{ name: "Flexa Digital" }],
  openGraph: {
    title: "Flexa Digital - Digital Product Studio",
    description: "We build digital products that grow businesses",
    url: "https://flexadigital.com",
    siteName: "Flexa Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexa Digital - Digital Product Studio",
    description: "We build digital products that grow businesses",
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