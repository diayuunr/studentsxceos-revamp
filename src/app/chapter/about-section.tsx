import React from 'react';

// Biasakan mendefinisikan tipe data di TypeScript ya Bob!
interface Highlight {
  label: string;
  value: string;
}

interface AboutSectionProps {
  description: React.ReactNode;
  coverageAreas?: string[]; // Pake '?' karena nggak semua chapter punya ini
  highlights: Highlight[];
}

export default function AboutSection({ description, coverageAreas, highlights }: AboutSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
      
      {/* KIRI: Teks Deskripsi */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-4 tracking-tight leading-tight">
          A Growing Leadership Platform
        </h2>
        <div className="text-gray-800 leading-relaxed text-base">
          {description}
        </div>
      </div>

      {/* KANAN: Grid Kotak-kotak */}
      {/* Logika grid: Kalau ada coverageAreas jadikan 3 kolom, kalau nggak ada jadikan 2 kolom (2x2) */}
      <div className={`w-full lg:w-3/5 grid gap-4 md:gap-5 ${coverageAreas && coverageAreas.length > 0 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
        
        {/* Kotak Coverage Areas (Makan 2 baris ke bawah) */}
        {coverageAreas && coverageAreas.length > 0 && (
          <div className="md:row-span-2 bg-[#F4F8FC] p-6 rounded-[16px] flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-blue-50">
            <p className="text-black text-[15px] leading-relaxed mb-3">
              You may join our events or become part of us if you are around:
            </p>
            <ul className="list-disc pl-5 text-black text-[15px] space-y-1.5 font-medium">
              {coverageAreas.map((area, idx) => (
                <li key={idx}>{area}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Kotak Highlights (Angka-angka) */}
        {highlights.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-[#F8FAFC] p-6 rounded-[16px] flex flex-col justify-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100"
          >
            <p className="text-gray-600 text-sm md:text-[15px] mb-1 font-light tracking-wide">{item.label}</p>
            <p className="text-3xl md:text-4xl font-bold text-[#0A3C8E]">{item.value}</p>
          </div>
        ))}
      </div>

    </section>
  );
}