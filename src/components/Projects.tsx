"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos
          </h2>
          <p className="mt-4 text-secondary-text">
            Algunos de los proyectos en los que he trabajado recientemente.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                delay: index * 0.1 
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                stack={project.stack}
                links={project.links}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
