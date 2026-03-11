'use client';

import { CheckCircle } from "react-feather";

export default function Vision() {
    const missions = "flex text-left font-medium gap-4 bg-white/80 p-4 rounded-xl shadow-md"
    const icon = "flex items-center justify-center my-auto w-7 h-7 p-1 ml-2 mr-1 rounded-md bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-600)] text-white"
    const missionList = [
    "Attracting candidates who share the same vision and driving motivation.",
    "Building capabilities to become globally competitive business leaders.",
    "Creating a unified, fraternal culture of high-performing individuals and winning teams.",
    "Delivering impact through a repeatable model that creates sustainable economic value."
    ];
  return (
    <section className="w-full px-6 md:px-16 py-20 md:py-5 text-center">
        <div className="relative p-[2px] rounded-[22px] bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] backdrop-blur-md w-full">
            <div className="relative justify-center h-full p-15 max-w-3xl mx-auto">
            <h1 className="text-xl md:text-3xl font-medium mb-6 text-[var(--color-white)]">Our Vision</h1>
            <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal text-[var(--color-white)]">
                To nurture and connect future business leaders by serving as the home of balanced and connected leaders 
                who drive the nation toward becoming a globally advanced and developed country.
            </p>
            </div>
            <div className="relative justify-center h-full pb-15 max-w-6xl mx-auto">
            <h1 className="text-xl md:text-3xl font-medium mb-6 text-[var(--color-white)]">Our Mission</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-5">
            {missionList.map((text, i) => (
                <div key={i} className={missions}>
                <div className={icon}><CheckCircle /></div>
                <p className="text-md font-normal my-auto text-gray-800">{text}</p>
                </div>
            ))}
            </div>
            </div>
        </div>
    </section>
  );
}   