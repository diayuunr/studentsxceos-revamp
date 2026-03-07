import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Vision from "./Vision";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Desc />
      <Vision />
    </main>
  );
}