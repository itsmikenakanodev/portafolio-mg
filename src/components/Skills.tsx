"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-6">

                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Skills
                    </h2>
                    <p className="mt-4 text-secondary-text">
                        Tecnologías y herramientas con las que trabajo.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {skills.map((category) => (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}