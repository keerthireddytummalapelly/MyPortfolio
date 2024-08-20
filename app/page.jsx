"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Education from "@/components/education";

export default function Home() {
  return (
    <main>
      <Header className="sticky top-0 left-0 w-full z-50" />
      <section id="home">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
