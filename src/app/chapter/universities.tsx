'use client';
import { motion } from 'framer-motion';

export default function Universities() {
  const universities = [
    { name: 'Universitas Gadjah Mada', logo: '/logo-ugm.png' },
    { name: 'Universitas Pembangunan Nasional', logo: '/logo-upn.png' },
    { name: 'Telkom University', logo: '/logo-telU.png' },
    { name: 'Universitas Indonesia', logo: '/logo-ui.png' },
    { name: 'Institut Teknologi Nasional', logo: '/logo-itenas.png' },
    { name: 'Institut Teknologi Bandung', logo: '/logo-itb.png' },
    { name: 'Universitas Pembangunan Nasional', logo: '/logo-upn.png' },
    { name: 'Telkom University', logo: '/logo-telU.png' },
    { name: 'Universitas Indonesia', logo: '/logo-ui.png' },
    { name: 'Institut Teknologi Nasional', logo: '/logo-itenas.png' },
    { name: 'Institut Teknologi Bandung', logo: '/logo-itb.png' },
  ];

  return (
    <section className="w-full px-4 py-16 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-[32px] font-bold text-[#333333] mb-2">University Reached</h2>
        <p className="text-slate-600 text-sm md:text-base font-light text-center">
          Each chapter develops its own initiatives and programs, under the shared values of SXC.
        </p>
      </motion.div>

      <div className="w-[758px] md:w-full max-w-5xl flex flex-wrap justify-center items-center gap-3 md:gap-4">
        {universities.map((uni, index) => (

          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            transition={{ duration: 0.4}}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full hover:border-[#0A3C8E] transition-all cursor-default"
          >
            <img src={uni.logo} alt={`${uni.name} logo`} className="w-5 h-5 object-contain" />
            <span className="text-xs md:text-sm font-bold text-slate-800">{uni.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}