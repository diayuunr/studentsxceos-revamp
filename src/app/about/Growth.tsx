"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2010",
    text: "First planted our seeds of leadership in Bandung and Jakarta.",
  },
  {
    year: "2015",
    text: "Extended our reach to key student hubs in Yogyakarta, Semarang, and East Java.",
  },
  {
    year: "Present",
    text: (<>Empowering a nationwide network of <span className="font-bold">300+ active fellows</span> and thousands of alumni annually.</>),
    highlight: true,
  },
];

const GrowthSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto rounded-2xl p-[2px] bg-gradient-to-b from-[var(--secondary-200)] to-[var(--color-white)]">
      {/* OUTER CONTAINER */}
      <div className="max-w-6xl mx-auto bg-[var(--color-blue-thin)] rounded-2xl py-20 px-8 md:px-16 relative overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-md"
          >
            Our Growth Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium mt-1 bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-200)] bg-clip-text text-transparent"
          >
            Where Future Leaders Begin
          </motion.h2>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

        {/* CENTER LINE */}
        <div className="absolute top-3 left-0 w-full h-[5px] bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-white)]" />

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
            {timelineData.map((item, index) => (
            <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
            >
                {/* DOT + GLOW */}
                <div className="relative mb-12">
                {/* glow */}
                <div className="absolute inset-0 rounded-full bg-[var(--secondary-250)] blur-md opacity-70 scale-150" />

                {/* dot */}
                <div className="relative w-6 h-6 bg-[var(--color-blue)] rounded-full border-[3.5] border-[var(--neutral-200)] shadow-md" />
                </div>

                {/* CARD */}
                <div className={`
                    rounded-2xl max-w-sm h-full p-[2px]
                    ${
                    item.highlight
                        ? "bg-gradient-to-b from-[var(--secondary-200)] to-[var(--neutral-200)]"
                        : "bg-[var(--neutral-200)]"
                    }
                `}
                >
                <div className="h-full bg-[var(--color-white)] rounded-2xl border-1 border-[var(--neutral-200)] px-8 py-8 max-w-sm">
                <h3 className="text-lg font-medium bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-200)] bg-clip-text text-transparent mb-1">
                    {item.year}
                </h3>

                <p className="text-sm font-normal tracking-wider">
                    {item.text}
                </p>
                </div>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default GrowthSection;