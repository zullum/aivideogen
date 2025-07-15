'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  targetValue: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ targetValue, duration = 2000, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = targetValue
    const steps = 60 // 60 frames for 2 seconds at 30fps
    const increment = end / steps
    const intervalTime = duration / steps
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [targetValue, duration])

  return <span className={className}>{count}{suffix}</span>
}