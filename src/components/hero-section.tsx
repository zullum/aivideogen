'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatedCounter } from './animated-counter'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-4000" />
      </div>

      {/* Floating particles - only render on client to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 800,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/90">
              AI-Powered Video Creation
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Create Stunning Videos with{' '}
            <span className="text-gradient text-gradient-primary">
              AI Magic
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl text-white/70 leading-relaxed"
          >
            Transform your ideas into professional-quality videos in minutes. 
            No technical skills required - just describe what you want and let our AI do the rest.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/en/dashboard"
              className="group relative px-8 py-4 rounded-full gradient-primary text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Creating
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/en/login"
              className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get Started
                <Zap className="w-5 h-5" />
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter targetValue={10} suffix="K+" />
              </div>
              <div className="text-sm text-white/60">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter targetValue={2} suffix="min" />
              </div>
              <div className="text-sm text-white/60">Avg. Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter targetValue={99} suffix="%" />
              </div>
              <div className="text-sm text-white/60">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}