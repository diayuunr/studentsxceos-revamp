// src/components/Hero.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full mx-auto h-200 rounded-b-[20px] overflow-hidden flex flex-col shadow-[0px_6px_30px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Background community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#121926] to-[#0A3C8E] drop-shadow-[0_0_20px_rgba(10,60,142,0.6)] opacity-90"></div>
        <div className="absolute pointer-events-none -bottom-48 -right-48 w-[701px] h-[657px] rounded-full bg-gradient-to-b from-[#296A90] to-[#CCE0FF] blur-[300px]"></div>
        <div className="absolute pointer-events-none w-[701px] h-[657px] bg-[#3FB4A0] opacity-100 blur-[275px] rounded-full -bottom-90 -right-10"></div>
      </div>

      <div className="relative z-50 w-full px-6 md:px-12 flex flex-col h-full">
        {/* NAVBAR */}
        <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-1000 flex items-center justify-between py-4 md:py-6 px-8 bg-white/95 backdrop-blur-sm rounded-[12px] text-[#121926] shadow-xl w-[90%] md:w-[93%] transition-all duration-300">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/logo.png"
              alt="Logo StudentsxCEOs"
              width={1024}
              height={573}
              className="object-contain h-8 w-auto md:h-6.5 md:w-[46px]"
            />
          </div>

          <ul className="hidden absolute left-1/2 -translate-x-1/2 md:flex gap-7 text-sm font-semibold text-[#121926]">
            <li>
              <a href="#about" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#what-you-gain" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                Community
              </a>
            </li>
            <li>
              <a href="#footer" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                Support
              </a>
            </li>
            <li>
              <a href="#faq" className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                FAQs
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl font-light text-[#121926] focus:outline-none"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-lg flex flex-col p-5 gap-4 md:hidden border border-slate-100">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">
                About
              </a>
              <a href="#what-you-gain" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">
                Community
              </a>
              <a href="#footer" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">
                Support
              </a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-[#121926] font-semibold hover:text-[#0A3C8E] transition-colors">
                FAQs
              </a>
            </div>
          )}
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center pb-10">
          <h1 className="text-[33px] md:text-[56px] text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-tight leading-tight">
            Nurture and Connect <span className="hidden md:inline">Future </span>
          </h1>

          <h2 className="text-4xl md:text-[56px] font-extrabold mt-2 inline-block bg-clip-text bg-linear-to-r from-[#70BBDD] to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-transparent tracking-tighter">
            <span className="inline md:hidden">Future </span> Business Leaders
          </h2>

          <p className="mt-6 max-w-[500px] text-base md:text-lg font-light text-gray-100 leading-relaxed">
            Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
          </p>

          <button className="cursor-pointer mt-10 bg-white text-black font-bold py-3 px-8 rounded-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:bg-gray-100 transition shadow-lg text-base">
            Join our community
          </button>
        </div>
      </div>
    </div>
  );
}