'use client'

import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function AnimatedButton({ onClick, children, className = '' }: AnimatedButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
} 