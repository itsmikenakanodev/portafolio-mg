"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/images/hero.png";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="text-sm font-medium text-primary">
            Hola, soy
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Michael García
          </h1>

          <h2 className="text-xl sm:text-2xl text-secondary-text">
            Full Stack Developer
          </h2>

          <p className="text-secondary-text leading-relaxed">
            Desarrollo aplicaciones web modernas enfocadas en rendimiento,
            escalabilidad y buenas prácticas.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-button-primary text-button-text font-medium"
            >
              Ver proyectos
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg border border-border"
            >
              Contacto
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src={heroImage}
            alt="Hero"
            width={420}
            height={420}
            className="rounded-2xl shadow-[var(--image-shadow)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
