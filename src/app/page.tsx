import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import ApiWarmup from "@/components/ApiWarmup";

export default function Home() {
  return (
    <>
      <ApiWarmup />
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 text-center text-secondary-text">
        © 2026 Michael García. Todos los derechos reservados.
      </footer>
    </>
  );
}
