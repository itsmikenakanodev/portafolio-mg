"use client";

import { motion } from "framer-motion";

type ProjectLinks = {
    frontend?: string
    backend?: string
    mobile?: string
    demo?: string
}

type ProjectCardProps = {
    title: string
    description: string
    stack: string[]
    links: ProjectLinks
}

export function ProjectCard({
    title,
    description,
    stack,
    links,
}: ProjectCardProps) {
    return (
        <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">{description}</p>

            <ul className="flex flex-wrap gap-2 mt-4">
                {stack.map((tech) => (
                    <li
                        key={tech}
                        className="text-xs text-button-text bg-primary px-3 py-1 rounded-full"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-6">
                {links.frontend && (
                    <motion.a
                        href={links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-button-secondary hover:border-button-secondary-hover transition text-sm font-medium"
                    >
                        Frontend
                    </motion.a>
                )}
                {links.backend && (
                    <motion.a
                        href={links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-button-secondary hover:border-button-secondary-hover transition text-sm font-medium"
                    >
                        Backend
                    </motion.a>
                )}
                {links.mobile && (
                    <motion.a
                        href={links.mobile}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-button-secondary hover:border-button-secondary-hover transition text-sm font-medium"
                    >
                        Mobile
                    </motion.a>
                )}
                {links.demo && (
                    <motion.a
                        href={links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-button-primary text-button-text hover:bg-button-primary-hover transition text-sm font-medium"
                    >
                        Demo
                    </motion.a>
                )}
            </div>
        </div>
    )
}
