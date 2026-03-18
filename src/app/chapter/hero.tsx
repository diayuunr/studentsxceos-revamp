'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      <img
        src="/candi.png"
        alt="East Java Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0A1325]/80 to-[#0A3C8E]/90 z-10"></div>

      <motion.button 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => router.push('/landing-page')} 
        className="absolute top-8 left-4 md:left-8 md:top-10 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm md:text-base font-medium cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </motion.button>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 text-center px-4 mt-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
          East Java
        </h1>
        <p className="text-white/90 text-[16px] md:text-[18px] font-light tracking-wide max-w-sm md:max-w-xl mx-auto">
          Nurturing Future Leaders Across East Java
        </p>
      </motion.div>
    </section>
  );
}