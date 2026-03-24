"use client";

import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";
import { CONTACT_CONFIG } from "@/config/contact";

export default function Contact() {
    return (
        <section id="contact" className="py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Contacto
                    </h2>
                    <p className="mt-4 text-secondary-text">
                        ¿Tienes un proyecto o una oportunidad? Escríbeme.
                    </p>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <a
                        href={`mailto:${CONTACT_CONFIG.email}`}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:-translate-y-1 transition"
                    >
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                            {CONTACT_CONFIG.email}
                        </span>
                    </a>

                    <a
                        href={`https://wa.me/${CONTACT_CONFIG.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:-translate-y-1 transition"
                    >
                        <MessageCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                            WhatsApp
                        </span>
                    </a>

                    <a
                        href="https://github.com/itsmikenakanodev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:-translate-y-1 transition"
                    >
                        <Github className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                            GitHub
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
