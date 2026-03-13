'use client';

import LogoMarquee from "@/components/LogoMarquee";

const logos = [
  "/logos-trim/partner/ajaib.png",
  "/logos-trim/partner/avaskin.png",
  "/logos-trim/partner/bagikopi.png",
  "/logos-trim/partner/batindo.png",
  "/logos-trim/partner/bca.png",
  "/logos-trim/partner/blibli.png",
  "/logos-trim/partner/bosch.png",
  "/logos-trim/partner/bri.png",
  "/logos-trim/partner/cakap.png",
  "/logos/partner/cake.jpg",
  "/logos-trim/partner/gojek.png",
  "/logos-trim/partner/itoen.png",
  "/logos-trim/partner/jbl.png",
  "/logos-trim/partner/loreal.png",
  "/logos-trim/partner/luna.png",
  "/logos-trim/partner/moonchick.png",
  "/logos-trim/partner/nutrifood.png",
  "/logos-trim/partner/oishi.png",
  "/logos-trim/partner/paragon.png",
  "/logos-trim/partner/pizza.png",
  "/logos-trim/partner/purwadhika.png",
  "/logos-trim/partner/puyo.png",
  "/logos-trim/partner/rohto.png",
  "/logos-trim/partner/syailendra.png",
  "/logos-trim/partner/tbi.png",
  "/logos-trim/partner/woods.png",
  "/logos-trim/partner/zenius.png",
];

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

export default function Partners() {
  const logoRows = chunkArray(logos, 9);

  return (
    <section className="w-full px-6 md:px-16 py-20 text-center mb-10">
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