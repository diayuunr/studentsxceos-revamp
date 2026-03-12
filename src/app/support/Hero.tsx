'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-[50%] px-6 md:px-16 py-20 md:py-15 text-center overflow-hidden">
      {/* Hero BG */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-[var(--primary-700)] to-[var(--color-green)] opacity-97">
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h1 className="text-2xl md:text-3xl font-medium mt-40 glow-text tracking-wide">Support Our Mission</h1>
        <p className="text-xs md:text-lg md:max-w-2xl md:text-center mx-auto font-light mt-4 tracking-wider">
            Partner with us to empower Indonesia&apos;s next generation of business leaders and create lasting impact across the nation.
        </p>
      </div>
    </section>
  );
}