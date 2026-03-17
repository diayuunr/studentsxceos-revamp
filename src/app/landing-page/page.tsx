import Hero from './hero';
import About from './about';
import Community from './community';
import CTA from './cta';
import FAQ from './faq';
import Footer from './footer';
import Partners from './partners';
import WhatYouGain from './what-you-gain';

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Hero />
      <About />
      <WhatYouGain />
      <Community />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}