
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Service from "./sections/Service";
import Projects from "./sections/Projects";
import HeroSection from "./sections/HeroSection";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/herobg.png)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full text-white "
    >
      <div id="home" className="flex flex-col  w-full h-screen overflow-hidden gap-8">
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <Service />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  );
}
