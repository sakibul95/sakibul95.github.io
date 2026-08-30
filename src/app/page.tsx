import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
