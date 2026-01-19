import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

    </>
  );
}
