"use client";

import { motion } from "framer-motion";

type ExperienceItemProps = {
  title: string;
  organization: string;
  date: string;
  description: string[];
};

export default function ExperienceItem({
  title,
  organization,
  date,
  description,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8"
    >
      
      <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />

      <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
        <div className="flex flex-wrap justify-between gap-2">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
          <span className="text-sm text-secondary-text">
            {date}
          </span>
        </div>

        <p className="text-sm font-medium text-primary">
          {organization}
        </p>

        <ul className="list-disc list-inside text-secondary-text space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
