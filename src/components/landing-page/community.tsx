// src/components/Community.tsx
import Image from 'next/image';

export default function Community() {
  return (
    <section className="w-full bg-linear-to-b from-white via-[#E6F2F9] to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Explore Our Community
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light">
            Each chapter develops its own initiatives and programs, under the shared values of SXC.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { name: 'Jakarta', file: 'jakarta.png' },
            { name: 'Yogyakarta', file: 'yogyakarta.png' },
            { name: 'Bandung', file: 'bandung.png' },
            { name: 'East Java', file: 'east java.png' },
            { name: 'Semarang', file: 'semarang.png' },
          ].map((city, index) => (
            <div
              key={city.name}
              className={`relative bg-linear-to-b from-[#121926] to-[#0A3C8E] rounded-[20px] p-6 flex flex-col items-center justify-end overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer
                ${index === 4 ? 'col-span-2 md:col-span-1 aspect-[2/1.1] md:aspect-square' : 'aspect-square'}
              `}
            >
              <Image
                src="/candi.png"
                alt="candi"
                fill
                className="object-cover z-0 filter grayscale brightness(10%) group-hover:scale-110 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#121926] to-[#0A3C8E] opacity-70 z-1 pointer-events-none"></div>

              <div className="absolute top-4 right-4 bg-[#424547] p-1.5 rounded-lg group-hover:bg-white/20 transition-colors z-30 w-9 h-9">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              <div className="relative z-10 w-full h-full flex items-center justify-center mb-2">
                <Image
                  src={`/${city.file}`}
                  alt={`Community ${city.name}`}
                  fill
                  className="object-contain md:p-4 group-hover:scale-110  transition-transform duration-500 filter saturate-50 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] opacity-80 group-hover:opacity-100"
                />
              </div>

              <h3 className="relative z-10 text-white font-bold text-lg tracking-wide mt-2">
                {city.name}
              </h3>

              <div className="absolute -bottom-6 w-24 h-24 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}