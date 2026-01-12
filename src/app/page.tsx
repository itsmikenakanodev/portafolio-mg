import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen justify-left items-center bg-background text-foreground p-10">
        <h1 className="text-4xl font-bold text-primary">
          Michael García – Full Stack Developer
        </h1>

        <p className="mt-4 text-secondary-text">
          Portafolio en Next.js
        </p>
      </main>
    </>
  );
}
