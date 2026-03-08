'use client';

import { Menu, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const activeNav = "font-medium text-[var(--primary-600)] drop-shadow after:hidden"
  const navLink = "relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:origin-center after:h-[1px] after:bg-[var(--neutral-900)] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed w-full z-50 px-9 py-8 transition-shadow">
      <div className="mx-auto max-w-[98rem] rounded-2xl bg-[var(--color-white)] px-6 py-2 shadow-sm">
        
        <div className="relative flex items-center justify-between">

          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <Image
              src="/logo-sxc.png"
              alt="StudentsxCEOs Logo"
              width={40}
              height={40}
            />
          </div>

          {/* CENTER - MENU */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-base font-normal">
            <Link href="/about" className={`${navLink} ${pathname === "/about" ? activeNav : ""}`}>
              About
            </Link>
            <Link href="/#community" onClick={() => setActive("community")} className={`${navLink} ${active === "community" ? activeNav : ""}`}>
              Community
            </Link>
            <Link href="/support" className={`${navLink} ${pathname === "/support" ? activeNav : ""}`}>
              Support
            </Link>
            <Link href="/#faqs" onClick={() => setActive("faqs")} className={`${navLink} ${active === "faqs" ? activeNav : ""}`}>
              FAQs
            </Link>
          </div>

          {/* RIGHT - HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="mt-3 flex flex-col gap-1.5 text-sm justify-items-center items-center md:hidden">
            <a href="/about">About</a>
            <a href="/community">Community</a>
            <a href="/support">Support</a>
            <a href="/faqs">FAQs</a>
          </div>
        )}

      </div>
    </nav>
  );
}