'use client';

import LogoMarquee from "@/components/LogoMarquee";
import { logos } from "@/data/Partners";

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

export default function Partners() {
  const logoRows = chunkArray(logos, 9);

  return (
    <section className="w-full px-6 md:px-16 py-20 text-center mb-7">
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-xl md:text-3xl font-medium mb-2">
          We Trusted by Our Partners
        </h1>

        <p className="text-sm md:text-lg">
          Each chapter develops its own initiatives and programs,
          under the shared values of SXC.
        </p>
      </div>

      {logoRows.map((row, i) => (
        <LogoMarquee
          key={i}
          logos={row}
          direction={i % 2 === 0 ? "left" : "right"}
          speed={24 + i * 6}
        />
      ))}
    </section>
  );
}