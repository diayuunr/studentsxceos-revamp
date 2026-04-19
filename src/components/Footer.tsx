'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'react-feather';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-[var(--primary-600)] rounded-t-2xl text-white relative mt-5">
      <button
        onClick={scrollToTop}
        className="absolute text-sm tracker-wide font-medium cursor-pointer top-10 left-1/2 -translate-x-1/2 p-1 px-3 rounded-md shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white/10 group"
      >
        Back to top
      </button>

      <div className="max-w-full mx-auto pt-16 pb-8 px-8 md:px-25 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 items-center">
          <div className="flex flex-col max-w-md md:items-start text-left">
            <div className="flex gap-5 mb-6">
              <Image
                src="/sxc-logo.png"
                alt="StudentsxCEOs Logo"
                width={300}
                height={300}
                className="h-15 w-auto object-contain"
              />
              <h5 className="text-2xl font-normal tracking-wider my-auto">
                StudentsxCEOs
              </h5>
            </div>

            <p className="text-sm md:text-base leading-relaxed mb-6 font-light text-center md:text-start tracking-widest">
              Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
            </p>

            <div className="flex gap-10 justify-center md:justify-start">
              <a href="https://www.instagram.com/studentsxceos/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-gray-300 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/studentsxceos/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="hover:text-gray-300 transition-colors cursor-pointer" />
              </a>
              <a href="mailto:mail@studentsxceos.org" target="_blank" rel="noopener noreferrer">
                <Mail size={20} className="hover:text-gray-300 transition-colors cursor-pointer" />
              </a>
            </div>

          </div>

          <div className="flex justify-center md:justify-end gap-16 md:gap-24">
            <div className="flex flex-col items-start">
              <h4 className="font-medium text-lg mb-5 tracking-wider">Quick Links</h4>
              <ul className="flex flex-col gap-2 font-light tracking-wider">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[var(--neutral-400)] transition-colors text-sm md:text-base"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chapter"
                    className="hover:text-[var(--neutral-400)] transition-colors text-sm md:text-base"
                  >
                    Student Chapters
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-[var(--neutral-400)] transition-colors text-sm md:text-base"
                  >
                    Previous Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-[var(--neutral-400)] transition-colors text-sm md:text-base"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-slate-600/60 flex justify-center items-center">
          <p className="text-sm font-normal tracking-wider">
            © 2026 Copyright - StudentsxCEOs
          </p>
        </div>
      </div>
    </footer>
  );
}