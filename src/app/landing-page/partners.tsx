<<<<<<< HEAD
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
=======
'use client';

import LogoMarquee from "@/components/LogoMarquee";
import { logos } from "@/data/Partners";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

const MotionLink = motion(Link);

export default function Partners() {
  const isMobile = useIsMobile();
  const logoRows = chunkArray(logos, isMobile ? 8 : 9);

  return (
    <section id="partners" className="w-full px-6 md:px-16 py-15 md:py-10 text-center mb-3">
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-3xl mx-auto"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-medium mb-2"
        >
          We Trusted by Our Partners
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-sm md:text-base tracking-wider"
        >
          Each chapter develops its own initiatives and programs,
          under the shared values of SXC.
        </motion.p>
      </motion.div>

      <motion.div>
        <MotionLink
          href="/support"
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
          className="relative inline-block cursor-pointer mt-6 mb-6 bg-gradient-to-br from-[#121926] to-[#0A3C8E] overflow-hidden py-2 px-8 rounded-xl text-base z-0 border border-black"
        >
          <motion.div
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1.1 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-white -z-10"
          />

          <motion.span
            variants={{
              initial: { color: '#ffffff' },
              hover: { color: '#000000' },
            }}
            className="relative z-10 font-medium flex flex-row items-center gap-2"
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
              <line x1="8" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </motion.svg>
          </motion.span>
        </MotionLink>
      </motion.div>

      {logoRows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: "easeOut"
          }}
        >
          <LogoMarquee
            logos={row}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={25 - i * 6}
          />
        </motion.div>
      ))}
>>>>>>> df08600e602e9fa0cbd1d2792ff5d31617a071d8
    </section>
  );
}