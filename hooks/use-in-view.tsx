"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0,
  triggerOnce = false,
  rootMargin = "0px",
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)

        if (entry.isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, triggerOnce, rootMargin])

  return [ref, isInView]
}
