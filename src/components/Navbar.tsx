"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="px-4 text-lg font-bold text-primary shrink-0 hover:text-primary-hover transition-colors"
        >
          Portafolio
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <a
              href="#skills"
              className="relative py-2 text-secondary-text hover:text-primary transition-colors group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative py-2 text-secondary-text hover:text-primary transition-colors group"
            >
              Proyectos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative py-2 text-secondary-text hover:text-primary transition-colors group"
            >
              Experiencia
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative py-2 text-secondary-text hover:text-primary transition-colors group"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
