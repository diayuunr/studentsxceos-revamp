'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="w-full px-6 py-16 md:py-24 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16 md:mb-24">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-[32px] font-bold text-slate-900 mb-6"
        >
          A Growing Leadership Platform
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-slate-600 leading-relaxed text-sm md:text-[18px]"
        >
          SxC East Java connects ambitious students with industry leaders
          through curated discussions, executive sessions, and strategic
          initiatives. Operating across key academic hubs in{' '}
          <strong className="text-slate-800">
            Surabaya, Malang, Kediri, Madiun, and Jember
          </strong>
          . By uniting diverse academic backgrounds, SxC East Java creates
          meaningful opportunities for collaboration, leadership development,
          and networking among future business leaders.
        </motion.p>
      </div>
    </section>
  );
}