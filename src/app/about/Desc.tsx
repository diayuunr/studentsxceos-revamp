'use client';
import Image from "next/image";

export default function Desc() {
  return (
    <section className="w-full px-6 md:px-16 py-20 md:py-23 text-center">
    <div>
        <h2 className="text-xl md:text-3xl font-bold mb-6">The Origin: Bridging The Gap</h2>
        <p className="text-sm md:text-lg max-w-5xl mx-auto font-medium mb-20">
            Founded in October 2010 by students at the Institut Teknologi Bandung (ITB), StudentsxCEOs (SxC) began with a 
            fundamental question: “What comes after graduation?” Our founders realized that academic excellence alone wasn&apos;t 
            enough to navigate the complexities of the industry. They created SxC to bridge the gap between high-potential students
            and the leaders currently shaping the business landscape.
        </p>
    </div>
    <div className="relative p-[2px] rounded-[22px] bg-gradient-to-r from-[var(--primary-50)]/10 to-[var(--neutral-25)]/50 backdrop-blur-md w-full">
        <div className="flex flex-col md:flex-row justify-content h-full gap-10 p-15">
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <Image
              src="/heroabout-bg.jpg"
              alt="Hero"
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
            </div>
            <div className="w-full md:w-1/2 text-left">
                <h3 className="text-lg md:text-2xl font-bold mt-6 mb-3">The Origin: Bridging the Gap</h3>
                <p className="text-sm md:text-base font-medium max-w-5xl mx-auto font-light mb-8">
                    Founded in October 2010 by students at the Institut Teknologi Bandung (ITB), StudentsxCEOs (SxC) began with a 
                    fundamental question: “What comes after graduation?” Our founders realized that academic excellence alone wasn&apos;t 
                    enough to navigate the complexities of the industry. They created SxC to bridge the gap between high-potential students 
                    and the leaders currently shaping the business landscape.
                </p>
                <h3 className="text-lg md:text-2xl font-bold mb-3">Redefining Leadership</h3>
                <p className="text-sm md:text-base font-medium max-w-5xl mx-auto font-light mb-7">
                    What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
                    and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with prominent industry 
                    players. Our platform is designed to boost professional networks and expand practical knowledge through the direct exchange of ideas and experiences.
                </p>
            </div>
        </div>
    </div>
    <div>
        <h2 className="text-xl md:text-3xl font-bold mb-6 mt-20">Our Purpose</h2>
        <p className="text-sm md:text-lg max-w-5xl mx-auto font-medium mb-5">
            What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
            and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with 
            prominent industry players. Our platform is designed to boost professional networks and expand practical knowledge through 
            the direct exchange of ideas and experiences.
        </p>
    </div>
    </section>
  );
}