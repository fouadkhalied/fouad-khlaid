import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-green-500/30 selection:text-green-500">
      <Navbar />
      <main className="container-narrow pt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Learning />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
