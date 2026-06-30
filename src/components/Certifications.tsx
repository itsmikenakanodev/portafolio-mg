"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="py-8 md:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Certificaciones
                    </h2>
                    <p className="mt-4 text-secondary-text">
                        Certificaciones y credenciales profesionales.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-primary">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs text-secondary-text">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-secondary-text leading-relaxed">
                                {cert.description}
                            </p>
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-hover transition-colors"
                                >
                                    Ver credencial
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center text-sm text-secondary-text"
                >
                    ¿Te interesa mi perfil?{' '}
                    <a
                        href="#contact"
                        className="text-primary hover:text-primary-hover underline transition-colors"
                    >
                        Contáctame
                    </a>
                </motion.p>

            </div>
        </section>
    );
}
