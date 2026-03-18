import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import Why from "./Why";
import Ways from "./Ways";
import Medpart from "./Medpart";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Why />
      <Medpart />
      <Ways />
    </main>
  );
}