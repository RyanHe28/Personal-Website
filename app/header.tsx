'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div>
        <Link href="/" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-5xl leading-tight">
          Ryan He
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 mt-2"
          delay={0.5}
        >
          Data Science and Economics Major @ Claremont McKenna College
        </TextEffect>
      </div>
    </header>
  )
}

