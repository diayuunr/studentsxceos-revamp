// src/components/Partners.tsx
export default function Partners() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
          We Trusted by Our Partner
        </h2>
        <p className="text-black text-sm md:text-base font-light">
          Each chapter develops its own initiatives and programs, under the shared values of SXC.
        </p>
        <button className="mt-6 mb-6 bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition cursor-pointer">
          Join our community
        </button>
      </div>
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 w-full max-w-350 mx-auto">
          {[
            'paragon', 'pizzahut', 'loreal', 'bri', 'jbl', 'cake', 'gojek', 'avoskin',
            'tbi', 'ajaib', 'puyo', 'blibli', 'jbl', 'loreal', 'pizzahut', 'bri',
          ].map((brand, index) => (
            <div key={index} className="flex items-center justify-center transition-all duration-300 cursor-pointer">
              <img
                src={`/${brand}.png`}
                alt={`${brand} logo`}
                className={`w-auto object-contain ${
                  brand.includes('pizzahut') || brand.includes('cake') ? 'h-14 md:h-20' : 'h-8 md:h-20'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}