import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Projects from "@/components/Projects";
import SkylineBand from "@/components/SkylineBand";
import Departments from "@/components/Departments";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Events />
        <Projects />
        <SkylineBand />
        <Departments />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
