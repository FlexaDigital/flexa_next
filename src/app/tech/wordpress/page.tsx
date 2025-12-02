"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Globe, 
  Palette, 
  Shield, 
  Zap, 
  Users, 
  Code2, 
  Database,
  Smartphone,
  Search,
  ShoppingCart,
  BarChart3,
  CheckCircle2,
  Star,
  Award,
  Rocket,
  Play
} from "lucide-react";
import Link from "next/link";

const WordPressPage = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes tailored to your brand identity and business requirements.",
      color: "text-primary"
    },
    {
      icon: Code2,
      title: "Plugin Development",
      description: "Custom plugins to extend WordPress functionality and meet specific business needs.",
      color: "text-primary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "WooCommerce integration for powerful online stores with payment gateways.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to improve search engine rankings and visibility.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Advanced security measures and performance optimization for fast, secure websites.",
      color: "text-primary"
    }
  ];

  const services = [
    {
      title: "WordPress Development",
      description: "Custom WordPress websites from scratch",
      features: ["Custom Themes", "Plugin Integration", "Database Design", "API Integration"]
    },
    {
      title: "WooCommerce Stores",
      description: "Complete e-commerce solutions",
      features: ["Product Catalogs", "Payment Gateways", "Inventory Management", "Order Processing"]
    },
    {
      title: "WordPress Migration",
      description: "Seamless platform migration services",
      features: ["Data Migration", "SEO Preservation", "Zero Downtime", "Performance Optimization"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing WordPress maintenance",
      features: ["Security Updates", "Performance Monitoring", "Backup Management", "24/7 Support"]
    }
  ];

  const stats = [
    { number: "250+", label: "WordPress Projects", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Custom Plugins", icon: Code2 },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const benefits = [
    {
      title: "Easy Content Management",
      description: "User-friendly dashboard for non-technical users to manage content effortlessly.",
      icon: Users
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business, handling increased traffic and content.",
      icon: BarChart3
    },
    {
      title: "Plugin Ecosystem",
      description: "Access to thousands of plugins for extended functionality and features.",
      icon: Database
    },
    {
      title: "SEO Friendly",
      description: "Built-in SEO features and compatibility with popular SEO plugins.",
      icon: Search
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black to-gray-800 pt-32 pb-20">
          
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-8xl">🌐</span>
                <div className="text-left">
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 mb-4">
                    Content Management System
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-bold">WordPress</h1>
                  <p className="text-xl opacity-90">Flexible CMS Platform</p>
                </div>
              </div>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Powerful, flexible, and user-friendly WordPress solutions that empower your content management and business growth
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>


            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">WordPress Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive WordPress development services to power your digital presence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all"
                  >
                    <Icon className={`w-12 h-12 ${feature.color} mb-6`} />
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Our WordPress Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end WordPress solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Why Choose WordPress?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The world's most popular CMS powering over 40% of all websites
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-black to-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-black to-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with WordPress?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Create powerful, scalable WordPress solutions that grow with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                <Link href="/contact">
                  Start Your WordPress Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/portfolio">View WordPress Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WordPressPage;