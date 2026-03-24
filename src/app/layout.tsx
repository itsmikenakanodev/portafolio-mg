import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Michael García - Full Stack Developer",
  description: "Portafolio de Michael García. Full Stack Developer con experiencia en React, Next.js, Spring Boot, Java y más.",
  keywords: ["Full Stack", "Developer", "React", "Next.js", "Java", "Spring Boot"],
  openGraph: {
    title: "Michael García - Full Stack Developer",
    description: "Portafolio web con proyectos, habilidades y experiencia profesional.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
