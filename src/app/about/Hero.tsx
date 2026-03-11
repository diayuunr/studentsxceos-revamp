'use client';
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[50%] md:h-[calc(100vh+100px)] px-6 md:px-16 py-20 md:py-28 text-center rounded-b-2xl overflow-hidden">
      {/* Hero Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src="/heroabout-bg.jpg"
          alt="Hero"
          fill
          className="w-full object-top scale-100 h-[50%] md:h-full"
        />
      <div className="absolute top-0 left-0 w-full h-full md:h-full bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] opacity-97"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <p className="text-sm md:text-base font-light mt-20 md:mt-8 tracking-wide">About us</p>
        <h1 className="text-2xl md:text-3xl font-medium mt-4 glow-text tracking-wide">Transforming Indonesia&apos;s Brigthest Minds</h1>
        <p className="text-xs md:text-lg md:max-w-xl md:text-center mx-auto font-light mt-4 tracking-wide">Connecting ambitious students with world-class business leaders to shape the future of Indonesia.</p>
      </div>
      {/* Hero Photo */}
      <div className="flex justify-center bg-[var(--color-white)] w-full mt-10 hidden md:flex md:items-center">
          <div className="relative p-[2px] rounded-[22px] bg-white/30 backdrop-blur-md w-[80%] h-[415px] shadow-2xl border border-white/50">
            <Image
              src="/heroabout-pic.jpg"
              alt="Hero"
              fill
              className="object-cover p-5 justify-center mx-auto object-[center_65%]"
            />   
        </div>
      </div>
    </section>
  );
}