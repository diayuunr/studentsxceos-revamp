'use client';
import { useState, useRef } from 'react';

export default function ChapterDetail() {
  // Bikin state: Default-nya false (artinya belum lihat semua)
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  // Tangan gaib buat megang kontainer slider
  const scrollContainerRef = useRef(null);

  // Fungsi buat geser kiri-kanan
  const slide = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Cek kartu pertama dan kedua buat ngukur jarak geser yang paling akurat (Lebar Kartu + Gap)
      const firstCard = container.children[0];
      const secondCard = container.children[1];

      if (firstCard && secondCard) {
        // Jarak presisi = Posisi kiri kartu 2 dikurangi posisi kiri kartu 1
        const scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft;

        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* === 1. HERO SECTION === */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <img
          src="/candi.png"
          alt="East Java Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#0A1325]/80 to-[#0A3C8E]/90 z-10"></div>

        <button className="absolute top-8 left-4 md:left-8 md:top-10 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm md:text-base font-medium">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>

        {/* Layer 3: Teks Judul */}
        <div className="relative z-20 text-center px-4 mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            East Java
          </h1>
          <p className="text-white/90 text-[16px] md:text-[18px] font-light tracking-wide">
            Nurturing Future Leaders Across East Java
          </p>
        </div>
      </section>

      {/* === 2. CONTENT SECTION === */}
      <section className="w-full px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-6">
            A Growing Leadership Platform
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-[18px]">
            SxC East Java connects ambitious students with industry leaders
            through curated discussions, executive sessions, and strategic
            initiatives. Operating across key academic hubs in{' '}
            <strong className="text-slate-800">
              Surabaya, Malang, Kediri, Madiun, and Jember
            </strong>
            . By uniting diverse academic backgrounds, SxC East Java creates
            meaningful opportunities for collaboration, leadership development,
            and networking among future business leaders.
          </p>
        </div>

        {/* === 3. CHAPTER HIGHLIGHTS  === */}
        <div className="w-full max-w-4xl flex flex-col items-center">
          <h3 className="text-xl md:text-[32px] font-bold text-slate-900 mb-8">
            Chapter Highlights
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {/* Card 1 */}
            <div className="shadow-md shadow-black/10 bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] border border-[#E3E8EF]/200 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-slate-600 text-sm md:text-[22px] mb-1">
                Established
              </span>
              <span className="text-2xl md:text-[38px] font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent">
                2010
              </span>
            </div>

            {/* Card 2 */}
            <div className="shadow-md shadow-black/10 bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] border border-[#E3E8EF]/200 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-slate-600 text-sm md:text-[22px] mb-1">
                Members
              </span>
              <span className="text-2xl md:text-[38px] font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent">
                70+
              </span>
            </div>

            {/* Card 3 */}
            <div className="shadow-md shadow-black/10 bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] border border-[#E3E8EF]/200 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-slate-600 text-sm md:text-[22px] mb-1">
                Programs
              </span>
              <span className="text-2xl md:text-[38px] font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent">
                10+
              </span>
            </div>

            {/* Card 4 */}
            <div className="shadow-md shadow-black/10 bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] border border-[#E3E8EF]/200 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <span className="text-slate-600 text-sm md:text-[22px] mb-1">
                Established
              </span>
              <span className="text-2xl md:text-[38px] font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent">
                2010
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. PROGRAMS SECTION (SKENARIO 2: EXPAND) === */}
      <section className="w-full px-4 md:px-6 py-16 flex flex-col items-center overflow-hidden bg-[#F8FAFC]">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent mb-2">
            Programs
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light max-w-2xl text-center">
            Each chapter develops its own initiatives and programs, under the
            shared values of SXC.
          </p>
        </div>

        <div className="w-full max-w-[90%] flex flex-co md:flex-row items-center justify-center gap-2 md:gap-6 px-0 md:px-4">
          {/* TOMBOL PANAH KIRI (Laptop) */}
          <button
            onClick={() => slide('left')}
            className="hidden md:flex shrink-0 w-10 h-10 bg-[#3BA1E5] text-white rounded-full items-center justify-center hover:bg-[#0A3C8E] transition-colors shadow-lg z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* PEMBUNGKUS KARTU */}
          <div className="overflow-hidden w-full px-4 md:px-0">
            <div
              ref={scrollContainerRef}
              className="flex flex-col md:flex-row md:flex-nowrap gap-4 md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory scroll-smooth pb-4 "
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className={`relative shrink-0 w-full md:w-[calc(25%-18px)] aspect-video md:aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 md:snap-start
                    ${!showAllPrograms && index >= 3 ? 'hidden md:block' : 'block'}
                  `}
                >
                  <img
                    src="/candi.png"
                    alt="Program"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-5 z-20">
                    <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">
                      Meet the CEOs
                    </h4>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Hands-on workshops
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOMBOL SEE MORE (Khusus HP) */}

            {!showAllPrograms && (
              <button
                onClick={() => setShowAllPrograms(true)}
                className="md:hidden mt-2 mb-4 w-full bg-[#0A1325] text-white font-semibold py-3.5 rounded-xl hover:bg-[#0A3C8E] transition-colors shadow-md"
              >
                See More
              </button>
            )}
          </div>

          {/* TOMBOL PANAH KANAN (Laptop) */}
          <button
            onClick={() => slide('right')}
            className="hidden md:flex shrink-0 w-10 h-10 bg-[#3BA1E5] text-white rounded-full items-center justify-center hover:bg-[#0A3C8E] transition-colors shadow-lg z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* TITIK PAGINATION (Laptop) */}
        <div className="hidden md:flex justify-center gap-2 mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#EEF2F6]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#EEF2F6]"></div>
        </div>
      </section>

      {/* === 5. UNIVERSITY REACHED SECTION === */}
      <section className="w-full px-4 py-16 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[32px] font-bold text-#333333 mb-2">
            University Reached
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Each chapter develops its own initiatives and programs, under the
            shared values of SXC.
          </p>
        </div>

        <div className=" w-[758px] md:w-full max-w-5xl flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {[
            { name: 'Universitas Gadjah Mada', logo: '/logo-ugm.png' },
            { name: 'Universitas Pembangunan Nasional', logo: '/logo-upn.png' },
            { name: 'Telkom University', logo: '/logo-telU.png' },
            { name: 'Universitas Indonesia', logo: '/logo-ui.png' },
            { name: 'Institut Teknologi Nasional', logo: '/logo-itenas.png' },
            { name: 'Institut Teknologi Bandung', logo: '/logo-itb.png' },
            { name: 'Universitas Pembangunan Nasional', logo: '/logo-upn.png' },
            { name: 'Telkom University', logo: '/logo-telU.png' },
            { name: 'Universitas Indonesia', logo: '/logo-ui.png' },
            { name: 'Institut Teknologi Nasional', logo: '/logo-itenas.png' },
            { name: 'Institut Teknologi Bandung', logo: '/logo-itb.png' },
          ].map((uni, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm px-4 py-2.5 rounded-full hover:border-[#0A3C8E] transition-colors cursor-default"
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="w-5 h-5 object-contain"
              />

              <span className="text-xs md:text-sm font-bold text-slate-800">
                {uni.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* === 6. CONNECT & CONTACT SECTION === */}

      <section className="w-full bg-[#E6F2F9] px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[26px] font-bold text-[#333333] mb-4">
              Connect with us
            </h2>
            <p className="text-slate-600 mb-8 max-w-sm">
              We're always looking to connect with those who share an interest
              in our community.
            </p>

            <div className="flex gap-4">
              {/* Instagram */}
              <div className="w-10 h-10 bg-[#0A1325] text-white rounded-lg flex items-center justify-center hover:bg-[#0A3C8E] transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.32 4 20 5.68 20 7.75v8.5C20 18.32 18.32 20 16.25 20h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.88a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" />
                </svg>
              </div>

              {/* LinkedIn */}
              <div className="w-10 h-10 bg-[#0A1325] text-white rounded-lg flex items-center justify-center hover:bg-[#0A3C8E] transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.18h.07c.66-1.25 2.28-2.57 4.69-2.57C21.42 7.61 24 10.09 24 14.28V24h-5v-8.43c0-2.01-.04-4.59-2.8-4.59-2.8 0-3.23 2.18-3.23 4.44V24h-5V8z" />
                </svg>
              </div>

              {/* TikTok */}
              <div className="w-10 h-10 bg-[#0A1325] text-white rounded-lg flex items-center justify-center hover:bg-[#0A3C8E] transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21 8.5a7.5 7.5 0 01-4.5-1.5V16a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.03a3 3 0 10 3 2.89V2h3a4.5 4.5 0 003.5 3.5v3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-b from-[#0A1325] to-[#0A3C8E] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Contact us</h3>
            <p className="text-white/80 text-sm md:text-base mb-8 font-light">
              We're always looking to connect with those who share an interest
              in our community.
            </p>

            <button className="bg-white text-slate-900 font-bold py-2.5 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm">
              Email us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
