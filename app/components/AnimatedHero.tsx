'use client'

import { motion } from 'framer-motion'

interface AnimatedHeroProps {
  title: string
  description: string
  features: Array<{
    title: string
    description: string
  }>
}

export default function AnimatedHero({ title, description, features }: AnimatedHeroProps) {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
    </section>
  )
} 