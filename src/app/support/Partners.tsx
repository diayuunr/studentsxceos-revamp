'use client';

import LogoMarquee from "@/components/LogoMarquee";
import { logos } from "@/data/Partners";
import { useEffect, useState } from "react";

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

export default function Partners() {
  const isMobile = useIsMobile();
  const logoRows = chunkArray(logos, isMobile ? 8 : 9);

  return (
    <section className="w-full px-6 md:px-16 py-15 md:py-20 text-center mb-3 md:mb-7">
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl font-medium mb-2">
          We Trusted by Our Partners
        </h1>

        <p className="text-sm md:text-lg tracking-wider">
          Each chapter develops its own initiatives and programs,
          under the shared values of SXC.
        </p>
      </div>

      {logoRows.map((row, i) => (
        <LogoMarquee
          key={i}
          logos={row}
          direction={i % 2 === 0 ? "left" : "right"}
          speed={25 - i * 6}
        />
      ))}
    </section>
  );
}