'use client';
import Image from "next/image";

const methodology = [
    {
        title: "Eka Nilam Dari",
        description: "Director of ShopeePay",
        image: "/eka.png"
    },
    {
        title: "Eka Nilam Dari",
        description: "Director of ShopeePay",
        image: "/eka.png"
    },
    {
        title: "Eka Nilam Dari",
        description: "Director of ShopeePay",
        image: "/eka.png"
    },
    {
        title: "Eka Nilam Dari",
        description: "Director of ShopeePay",
        image: "/eka.png"
    },
]
export default function Speakers() {
  return (
    <section className="w-full px-6 md:px-16 py-20 md:py-10 text-center">
      <h1 className="text-xl md:text-3xl font-medium mb-3">Meet Our Speakers</h1>
      <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10">
        Leaders from top companies who&apos;ve shared their insights with SxC
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {methodology.map((method, i) => (
          <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl p-6 text-center shadow-sm">
            <div className="relative w-full h-45 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-blue-400/20 blur-2xl rounded-full"></div>
              </div>
            <Image 
              src={method.image} 
              alt={method.title} 
              className="object-contain scale-170 z-10 translate-y-12"
              fill
            />
            </div>
            <div className="border border-[var(--color-neutral-200)] rounded-xl px-2 py-2 text-center shadow-xs">
              <h2 className="text-md md:text-lg font-medium">{method.title}</h2>
              <p className="text-sm md:text-base font-normal max-w-md">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-4 py-2 mt-10 text-sm font-medium text-white rounded-md bg-[var(--color-black)] cursor-pointer">See More</button>
    </section>
  );
}