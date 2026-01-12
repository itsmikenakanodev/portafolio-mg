"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="px-4 text-lg font-bold text-primary shrink-0"
        >
          Michael Developer
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-secondary-text">
          <li>
            <a href="#about" className="hover:text-primary transition">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-primary transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
