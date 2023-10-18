import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
