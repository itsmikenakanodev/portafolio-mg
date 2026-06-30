export const projects = [
    {
        id: "championship-system",
        title: "Sistema de Campeonatos de Atletismo",
        description:
            "Plataforma web y móvil para la gestión de campeonatos, pruebas y resultados en tiempo real, basado en requerimientos de la Asociación Nacional de Atletas Máster del Ecuador",
        stack: [
            "Spring Boot",
            "PostgreSQL",
            "Vue",
            "Android",
            "Firebase",
            "Docker"
        ],
        links: {
            frontend: "https://github.com/itsmikenakanodev/frontend_atletismo",
            backend: "https://github.com/itsmikenakanodev/backend_atletismo",
            mobile: "https://github.com/itsmikenakanodev/android_atletismo",
            demo: "https://frontend-atletismo.vercel.app/#/"
        },
        featured: true,
    },
    {
        id: "clinical-atelier",
        title: "Clinical Atelier — Gestión Dental",
        description:
          "Sistema de gestión para clínicas dentales con módulos de autenticación, agenda de turnos, administración de pacientes y equipo profesional. Arquitectura modular con Vue 3 y backend en Spring Boot.",
        stack: [
          "Spring Boot",
          "PostgreSQL",
          "Vue 3",
          "Pinia",
          "TypeScript",
          "Tailwind CSS",
          "Axios",
        ],
        links: {
          frontend: "https://github.com/itsmikenakanodev/dental-frontend",
          backend: "",
          demo: "https://dental-frontend-eight-gray.vercel.app"
        },
        featured: true,
    },
    {
        id: "portfolio",
        title: "Portafolio Personal",
        description:
            "Portafolio web para mostrar proyectos, habilidades y experiencia como desarrollador.",
        stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        links: {
            frontend: "https://github.com/itsmikenakanodev/portafolio-mg",
        },
        featured: false,
    },
]
