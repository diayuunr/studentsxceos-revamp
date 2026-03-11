'use client';
import Image from "next/image";

const methodology = [
    {
        title: "Learn",
        description: "The most successful people are lifelong learners, constantly evolving by mastering new skills to stay ahead in a changing world.",
        image: "/method1.png"
    },
    {
        title: "Share",
        description: "Sharing deepens knowledge and reinforces learning, unlocking opportunities that drive greater personal and collective growth.",
        image: "/method2.png"
    },
    {
        title: "Impact",
        description: "Only those who create lasting impact become memorable drivers of personal growth and meaningful transformation.",
        image: "/method3.png"
    },
]
export default function Method() {
  return (
    <section className="w-full px-6 md:px-16 py-20 md:py-25 text-center">
      <h1 className="text-xl md:text-3xl font-medium mb-3">Our Methodology</h1>
      <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10">
        Each chapter develops its own initiatives and programs, under the shared values of SXC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {methodology.map((method, i) => (
          <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl p-6 text-center shadow-sm">
            <div className="relative w-full h-40 mb-3 overflow-hidden rounded-lg bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]">
            <Image 
              src={method.image} 
              alt={method.title} 
              className="object-contain scale-150 opacity-70"
              fill
            />
            </div>
            <h2 className="text-md md:text-lg bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-400)] text-transparent bg-clip-text font-medium">{method.title}</h2>
            <p className="text-sm md:text-base font-normal max-w-md">{method.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}