'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Partners() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            We Trusted by Our Partner
          </h2>
          <p className="text-black text-sm md:text-base font-light">
            Each chapter develops its own initiatives and programs, under the
            shared values of SXC.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/support">
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={{
              initial: {
                boxShadow: '0 0 10px rgba(10, 60, 142, 0.2)',
              },
              hover: {
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
            transition={{ duration: 0.4 }}
            className="relative cursor-pointer mt-6 mb-6 bg-linear-to-br from-[#121926] to-[#0A3C8E] overflow-hidden py-3 px-8 rounded-xl text-base z-0 border border-black"
          >
            <motion.div
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1.1 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ originX: 0, willChange: 'transform' }}
              className="absolute inset-0 bg-white -z-10"
            />

            <motion.span
              variants={{
                initial: { color: '#ffffff' },
                hover: { color: '#000000' },
              }}
              className="relative z-10 font-bold flex flex-row"
            >
              Learn more
              <motion.svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                variants={{
                  initial: { stroke: '#ffffff' },
                  hover: { stroke: '#000000' },
                }}
                transition={{ duration: 0.4 }}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </motion.svg>
            </motion.span>
          </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 w-full max-w-350 mx-auto">
          {[
            'paragon',
            'pizzahut',
            'loreal',
            'bri',
            'jbl',
            'cake',
            'gojek',
            'avoskin',
            'tbi',
            'ajaib',
            'puyo',
            'blibli',
            'jbl',
            'loreal',
            'pizzahut',
            'bri',
          ].map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center cursor-pointer"
            >
              <img
                src={`/${brand}.png`}
                alt={`${brand} logo`}
                className={`w-auto object-contain ${
                  brand.includes('pizzahut') || brand.includes('cake')
                    ? 'h-14 md:h-20'
                    : 'h-8 md:h-20'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
