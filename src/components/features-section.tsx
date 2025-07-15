'use client'

import { motion } from 'framer-motion'
import { 
  Film, 
  Sparkles, 
  Clock, 
  Palette, 
  Share2, 
  Zap 
} from 'lucide-react'

const features = [
  {
    icon: Film,
    title: 'Text to Video',
    description: 'Transform any text prompt into stunning videos with AI-powered generation',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Image Animation',
    description: 'Bring static images to life with smooth, realistic animations',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Style Transfer',
    description: 'Apply artistic styles and visual effects to your videos',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Fast Generation',
    description: 'Generate high-quality videos in minutes, not hours',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your creations instantly across all platforms',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Zap,
    title: 'AI Enhancement',
    description: 'Automatically enhance video quality and resolution',
    color: 'from-pink-500 to-rose-500',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features for{' '}
            <span className="text-gradient text-gradient-primary">
              Creative Freedom
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to create stunning videos with the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex flex-col flex-grow">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 flex-shrink-0">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}