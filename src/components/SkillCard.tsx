"use client";

import { ReactElement } from "react";
import { motion } from "framer-motion";
import {
    Code,
    Server,
    Database,
    Cloud,
} from "lucide-react";

type SkillCardProps = {
    title: string;
    skills: string[];
};

const iconsMap: Record<string, ReactElement> = {
    "Frontend": <Code className="w-6 h-6 text-primary" />,
    "Backend": <Server className="w-6 h-6 text-primary" />,
    "Base de Datos": <Database className="w-6 h-6 text-primary" />,
    "DevOps": <Cloud className="w-6 h-6 text-primary" />,
};

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-card border border-border rounded-2xl p-6 space-y-4"
        >
            <div className="flex items-center gap-3">
                {iconsMap[title]}
                <h3 className="text-xl font-semibold">
                    {title}
                </h3>
            </div>

            <ul className="space-y-2 text-secondary-text">
                {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

