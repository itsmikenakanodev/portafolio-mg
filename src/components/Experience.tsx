import ExperienceItem from "./ExperienceItem";
import { experienceData } from "@/data/experience";


export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experiencia
          </h2>
          <p className="mt-4 text-secondary-text">
            Experiencia técnica y proyectos desarrollados.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Línea */}
          <div className="absolute left-1 top-0 bottom-0 w-px bg-border" />

          {experienceData.map((item) => (
            <ExperienceItem
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
