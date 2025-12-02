"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Eye, Heart, MessageCircle, Twitter, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ReactPatterns2024() {
  const relatedPosts = [
    {
      title: "Server Components",
      href: "/blog/server-components",
      category: "React",
      readTime: "11 min read"
    },
    {
      title: "UI/UX Psychology",
      href: "/blog/ui-ux-psychology", 
      category: "Design",
      readTime: "10 min read"
    },
    {
      title: "DevOps Best Practices",
      href: "/blog/devops-best-practices",
      category: "DevOps", 
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-gradient-hero pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 bg-card/50 backdrop-blur-sm">
                React
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                React Patterns 2024
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                Modern React patterns and best practices for scalable applications. Learn about server components, concurrent features, and advanced hooks.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                <div className="flex items-center gap-1 md:gap-2">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Jan 15, 2024</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">8 min read</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 md:gap-2">
                  <User className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">FlexaDigital Team</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>2.1k views</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>156 likes</span>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <span className="text-xs md:text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  {[
                    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?text=React Patterns 2024&url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Facebook, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Linkedin, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '' : ''}` },
                    { icon: Share2, label: "Share", action: () => typeof window !== 'undefined' && typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'React Patterns 2024', url: window.location.href}) : console.log('Share') }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button key={social.label} size="sm" variant="outline" className="bg-card/50 backdrop-blur-sm" onClick={() => social.url ? (typeof window !== 'undefined' && window.open(social.url, '_blank')) : social.action?.()}>
                        <Icon className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="blog-content"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 sm:h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
                      <Image
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
                        alt="React Patterns 2024"
                        className="w-full h-full object-cover"
                        width={800}
                        height={400}
                      />
                    </div>

                    <h2>Modern React Patterns for 2024</h2>
                    <p>React continues to evolve, and with it, the patterns and best practices that help us build better applications. In this comprehensive guide, we'll explore the most important React patterns for 2024 that every developer should know.</p>
                    
                    <h3>1. Server Components Revolution</h3>
                    <p>React Server Components represent a paradigm shift in how we think about React applications. They allow us to render components on the server, reducing bundle size and improving performance significantly.</p>
                    
                    <div className="bg-card border border-border rounded-lg md:rounded-xl p-4 md:p-6 my-6 md:my-8">
                      <h4 className="text-base md:text-lg font-semibold mb-3 text-foreground">Key Benefits:</h4>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        <li>• Zero JavaScript bundle impact</li>
                        <li>• Direct database access</li>
                        <li>• Better SEO and initial load times</li>
                        <li>• Simplified data fetching</li>
                      </ul>
                    </div>
                    
                    <h3>2. Concurrent Features</h3>
                    <p>React 18 introduced concurrent features like Suspense, useTransition, and useDeferredValue. These features help us build more responsive user interfaces by allowing React to interrupt rendering work.</p>
                    
                    <h3>3. Advanced Custom Hooks Patterns</h3>
                    <p>Custom hooks remain one of the most powerful patterns in React. We'll explore advanced patterns for data fetching, state management, and side effects that make your code more reusable and maintainable.</p>
                    
                    <div className="bg-secondary/30 border border-border rounded-lg md:rounded-xl p-4 md:p-6 my-6 md:my-8">
                      <h4 className="text-base md:text-lg font-semibold mb-3 text-foreground">Pro Tip:</h4>
                      <p className="text-sm md:text-base text-muted-foreground mb-0">Always start with the simplest solution and gradually add complexity as needed. Premature optimization is the root of all evil in React applications.</p>
                    </div>
                    
                    <h3>4. Component Composition Strategies</h3>
                    <p>Building flexible, reusable components through composition patterns. Learn how to create components that are both powerful and easy to use, following the principle of "composition over inheritance".</p>
                    
                    <h3>5. State Management Evolution</h3>
                    <p>From Redux to Zustand, from Context API to Jotai - explore modern state management solutions and when to use each approach for optimal performance and developer experience.</p>
                    
                    <h3>Conclusion</h3>
                    <p>These patterns will help you build more maintainable, performant, and scalable React applications in 2024 and beyond. Remember that patterns are tools - use them when they solve real problems, not just because they're trendy.</p>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6 my-6 md:my-8">
                      <h4 className="text-base md:text-lg font-semibold mb-3 text-foreground">What's Next?</h4>
                      <p className="text-sm md:text-base text-muted-foreground mb-4">Ready to implement these patterns in your projects? Check out our related articles for deeper dives into specific topics.</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="sm" className="w-full sm:w-auto" asChild>
                          <Link href="/blog/server-components">Server Components Guide</Link>
                        </Button>
                        <Button size="sm" variant="outline" className="w-full sm:w-auto" asChild>
                          <Link href="/contact">Get Expert Help</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 order-1 lg:order-2">
                  <div className="space-y-4 lg:space-y-8 lg:sticky lg:top-8">
                    {/* Table of Contents - Hidden on mobile, shown on larger screens */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="hidden lg:block bg-card border border-border rounded-xl p-6"
                    >
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Table of Contents
                      </h4>
                      <nav className="space-y-2 text-sm">
                        <a href="#server-components" className="block text-muted-foreground hover:text-primary transition-colors">1. Server Components</a>
                        <a href="#concurrent-features" className="block text-muted-foreground hover:text-primary transition-colors">2. Concurrent Features</a>
                        <a href="#custom-hooks" className="block text-muted-foreground hover:text-primary transition-colors">3. Custom Hooks</a>
                        <a href="#composition" className="block text-muted-foreground hover:text-primary transition-colors">4. Component Composition</a>
                        <a href="#state-management" className="block text-muted-foreground hover:text-primary transition-colors">5. State Management</a>
                      </nav>
                    </motion.div>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-card border border-border rounded-lg lg:rounded-xl p-4 lg:p-6"
                    >
                      <h4 className="font-semibold mb-4 text-sm lg:text-base">About the Author</h4>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base">
                          FD
                        </div>
                        <div>
                          <p className="font-medium text-sm lg:text-base">FlexaDigital Team</p>
                          <p className="text-xs lg:text-sm text-muted-foreground">Expert Developers</p>
                        </div>
                      </div>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Our team of expert developers shares insights from building scalable applications for startups and enterprises.
                      </p>
                    </motion.div>

                    {/* Related Posts */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-card border border-border rounded-lg lg:rounded-xl p-4 lg:p-6"
                    >
                      <h4 className="font-semibold mb-4 text-sm lg:text-base">Related Articles</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4">
                        {relatedPosts.map((post) => (
                          <Link key={post.href} href={post.href} className="block group">
                            <div className="space-y-1 p-3 lg:p-0 bg-secondary/20 lg:bg-transparent rounded-lg lg:rounded-none">
                              <h5 className="font-medium text-xs lg:text-sm group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                              </h5>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs">
                                  {post.category}
                                </Badge>
                                <span className="hidden sm:inline">{post.readTime}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 md:py-12 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                {[
                  { icon: Heart, label: "Like (156)", shortLabel: "Like", action: () => console.log('Liked') },
                  { icon: MessageCircle, label: "Comment", shortLabel: "Comment", action: () => console.log('Comment') },
                  { icon: Share2, label: "Share", shortLabel: "Share", action: () => typeof window !== 'undefined' && navigator.share ? navigator.share({title: 'React Patterns 2024', url: window.location.href}) : console.log('Share') }
                ].map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <Button key={btn.label} variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => btn.action?.()}>
                      <Icon className="h-4 w-4 mr-2" />
                      <span className="sm:hidden">{btn.shortLabel}</span>
                      <span className="hidden sm:inline">{btn.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}