"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { motion } from "framer-motion";

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </div>
  );
}