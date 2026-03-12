// src/app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is StudentsxCEOs and what makes it unique?",
      answer:
        "StudentsxCEOs (SxC) is Indonesia's premier leadership accelerator and fraternal organization that bridges exceptional students with today's top business leaders...",
    },
    {
      question:
        'Why does StudentsxCEOs focus specifically on "business leaders"?',
      answer:
        "We believe that strong business leadership is the core engine for economic growth...",
    },
    {
      question: "Who can join StudentsxCEOs and how selective is the process?",
      answer:
        "Any active undergraduate student with a strong passion for business and leadership can apply...",
    },
    {
      question: "Is there any membership fee to join the organization?",
      answer:
        "The details regarding membership fees are usually discussed during the onboarding process...",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // === BATAS OTAK FAQ ===

  return (
    // == MAIN BACKGROUND ==
    <main className="bg-white min-h-screen font-sans">
      {/* == HERO SECTION CONTAINER == */}
      <div className="relative w-full  mx-auto h-[800px] rounded-b-[20px] overflow-hidden flex flex-col shadow-[0px_6px_30px_rgba(0,0,0,0.4)]">
        {/* 1. BACKGROUND IMAGE & OVERLAY */}
        <div className="absolute inset-0 z-0">
          {
            <Image
              src="/hero.jpg"
              alt="Background community"
              fill
              className="object-cover"
            />
          }
          <div className="absolute inset-0 bg-linear-to-br from-[#121926]/95 to-[#0A3C8E] drop-shadow-[0_0_20px_rgba(10,60,142,0.6)] opacity-90"></div>
          <div className="absolute pointer-events-none -bottom-48 -right-48 w-[701px] h-[657px] rounded-full bg-gradient-to-b from-[#296A90] to-[#CCE0FF] blur-[300px]"></div>
          <div className="absolute pointer-events-none w-[701px] h-[657px] bg-[#3FB4A0] opacity-100 blur-[275px] rounded-full -bottom-90 -right-10"></div>
        </div>

        {/* 2. KONTEN DALAM HERO SECTION */}
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col h-full">
          {/* NAVBAR */}
          <nav className="relative flex items-center justify-between py-4 md:py-6 px-8 bg-white rounded-[12px] text-[#121926] mt-[49px] shadow-x1 max-w-93% mx-auto w-full">
            <div className="flex items-center cursor-pointerf">
              {
                <Image
                  src="/logo.png"
                  alt="Logo StudentsxCEOs"
                  width={1024}
                  height={573}
                  className="object-contain h-8 w-auto md:h-6.5 md:w-[46px]"
                />
              }
            </div>

            <ul className="hidden absolute left-1/2 -translate-x-1/2 md:flex gap-7 text-sm font-semibold text-[#121926]">
              <li className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                About
              </li>
              <li className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                Community
              </li>
              <li className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                Support
              </li>
              <li className="cursor-pointer hover:text-[#0A3C8E] transition-colors">
                FAQs
              </li>
            </ul>

            <button className="md:hidden text-2xl font-light text-[#0A3C8E]">
              ☰
            </button>
          </nav>

          {/* TEKS HERO */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-10">
            <h1 className="text-[33px] md:text-[56px] text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-tight leading-tight">
              Nurture and Connect{" "}
              <span className="hidden md:inline">Future </span>
            </h1>

            <h2 className="text-4xl md:text-[56px] font-extrabold mt-2 inline-block bg-clip-text bg-linear-to-r from-[#70BBDD] to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-transparent tracking-tighter">
              <span className="inline md:hidden">Future </span> Business Leaders
            </h2>

            <p className="mt-6 max-w-[500px] text-base md:text-lg font-light text-gray-100 leading-relaxed">
              Connecting ambitious students with world-class business leaders to
              shape the future of Indonesia.
            </p>

            <button className="mt-10 bg-white text-black font-bold py-3 px-8 rounded-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:bg-gray-100 transition shadow-lg text-base">
              Join our community
            </button>
          </div>
        </div>
      </div>

      {/* == SECTION ABOUT US == */}
      <section className="mx-auto max-w-full px-2 md:px-20 py-24 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="pr-4 text-center md:text-left">
            <p className="text-[18px] font-semibold text-gray-800 mb-4 tracking-tight lowercase">
              about us
            </p>
            <h3 className="text-[26px] md:text-[30px] font-bold mb-6 tracking-tight text-black">
              Bridging Students to Real-World Leadership
            </h3>
            <p className="text-gray-600 leading-relaxed font-light text-[18px]">
              StudentsxCEOs (SxC) is a strategic leadership platform for
              university students that connects them directly with industry
              leaders through curated talks, leadership forums, mentoring
              sessions, strategic discussions, and high-impact networking
              events. We create real-world learning experiences.
            </p>
          </div>

          <div className="md:mt-10 flex flex-col items-center md:items-end w-full overflow-hidden">
            <div className="w-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-24 md:w-100 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

              <div className="flex w-[200%] animate-marquee">
                <div className="flex gap-8 md:gap-16 w-1/2 justify-around px-8">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      20+
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Years
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      100
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Programs
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      100
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Partners
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      25+
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      University
                    </span>
                  </div>
                </div>

                <div className="flex gap-8 md:gap-16 w-1/2 justify-around px-8">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      20+
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Years
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      100
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Programs
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      100
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      Partners
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold  bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      25+
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      University
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-12 bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:opacity-90 transition">
              Join our community
            </button>
          </div>
        </div>
      </section>

      {/* == SECTION WHAT YOU GAIN == */}
      <section className="max-w-full mx-auto md:px-6 py-12">
        <div className="bg-linear-to-b from-[#121926] to-[#0A3C8E] rounded-xl px-5 py-5 md:p-30 flex flex-col items-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 mt-20 md:mt-0 text-center tracking-tight">
            What You Gain Through StudentxCEOs
          </h2>
          <p className="text-gray-300 text-sm md:text-[18px] mb-12 text-center font-light hidden md:block">
            Each chapter develops its own initiatives and programs, under the
            shared values of SXC.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-24">
            {/* --- CARD 1 --- */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 md:p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-linear-to-b from-[#121926] to-[#0A3C8E] p-2.5 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-slate-900 tracking-tight md:text-[22px]">
                  Leadership development
                </h4>
              </div>
              <hr className="border-gray-200 mb-4" />
              <p className="text-[#121926] text-sm md:text-base leading-relaxed font-light md:mb-8">
                Participants gain exposure to{" "}
                <span className="font-semibold text-slate-900">
                  real-world challenges
                </span>{" "}
                and learn how leaders navigate complex situations.
              </p>
            </div>

            {/* --- CARD 2 --- */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 md:p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-linear-to-b from-[#121926] to-[#0A3C8E] p-2.5 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-slate-900 tracking-tight md:text-[22px]">
                  Professional Networking Events
                </h4>
              </div>
              <hr className="border-gray-200 mb-4" />
              <p className="text-[#121926] text-sm md:text-base leading-relaxed font-light md:mb-8">
                Exclusive events that connect students with{" "}
                <span className="font-semibold text-slate-900">
                  leaders, alumni, and peers
                </span>{" "}
                — creating open doors to{" "}
                <span className="font-semibold text-slate-900">
                  future opportunities.
                </span>
              </p>
            </div>

            {/* --- CARD 3 --- */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 md:p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-linear-to-b from-[#121926] to-[#0A3C8E] p-2.5 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-slate-900 tracking-tight md:text-[22px]">
                  Corporate Mentorship Opportunities
                </h4>
              </div>
              <hr className="border-gray-200 mb-4" />
              <p className="text-[#121926] text-sm md:text-base leading-relaxed font-light md:mb-8">
                Access to experienced professionals and executives who share
                practical{" "}
                <span className="font-semibold text-slate-900">
                  insights and career guidance.
                </span>
              </p>
            </div>

            {/* --- CARD 4 --- */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 md:p-8 flex flex-col shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-linear-to-b from-[#121926] to-[#0A3C8E] p-2.5 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-slate-900 tracking-tight md:text-[22px]">
                  Skill-Building Workshops
                </h4>
              </div>
              <hr className="border-gray-200 mb-4" />
              <p className="text-[#121926] text-sm md:text-base leading-relaxed font-light md:mb-8">
                <span className="font-semibold text-slate-900">
                  Hands-on workshops
                </span>{" "}
                focused on practical competencies such as communication,
                problem-solving, and critical thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* == SECTION EXPLORE OUR COMMUNITY == */}
      <section className="w-full bg-gradient-to-b from-white via-[#E6F2F9] to-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Explore Our Community
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              Each chapter develops its own initiatives and programs, under the
              shared values of SXC.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Jakarta", file: "jakarta.png" },
              { name: "Yogyakarta", file: "yogyakarta.png" },
              { name: "Bandung", file: "bandung.png" },
              { name: "East Java", file: "east java.png" },
              { name: "Semarang", file: "semarang.png" },
            ].map((city, index) => (
              <div
                key={city.name}
                className={`relative bg-linear-to-b from-[#121926] to-[#0A3C8E] rounded-[20px] p-6 flex flex-col items-center justify-end overflow-hidden group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer
                  ${
                    index === 4
                      ? "col-span-2 md:col-span-1 aspect-[2/1.1] md:aspect-square"
                      : "aspect-square"
                  }
                `}
              >
                <Image
                  src="/candi.png"
                  alt="candi"
                  fill
                  className="object-cover z-0 filter grayscale brightness(10%) group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#121926] to-[#0A3C8E] opacity-70 z-1 pointer-events-none"></div>

                <div className="absolute top-4 right-4 bg-[#424547] p-1.5 rounded-lg group-hover:bg-white/20 transition-colors z-30 w-9 h-9">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center mb-2">
                  {
                    <Image
                      src={`/${city.file}`}
                      alt={`Community ${city.name}`}
                      fill
                      className="object-contain md:p-4 group-hover:scale-110  transition-transform duration-500 filter saturate-50 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] opacity-80 group-hover:opacity-100"
                    />
                  }
                </div>

                <h3 className="relative z-10 text-white font-bold text-lg tracking-wide mt-2">
                  {city.name}
                </h3>

                <div className="absolute -bottom-6 w-24 h-24 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* == SECTION PARTNERS == */}
      <section className="w-full bg-white px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            We Trusted by Our Partner
          </h2>
          <p className="text-black text-sm md:text-base font-light">
            Each chapter develops its own initiatives and programs, under the
            shared values of SXC.
          </p>
          <button className="mt-6 mb-6 bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition">
            Join our community
          </button>
        </div>
        <div className="max-w-8xl mx-auto flex flex-col items-center">
          {/* === LOGOS CONTAINER (FLEXBOX MAGIC) === */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 w-full max-w-350 mx-auto">
            {[
              "paragon",
              "pizzahut",
              "loreal",
              "bri",
              "jbl",
              "cake",
              "gojek",
              "avoskin",
              "tbi",
              "ajaib",
              "puyo",
              "blibli",
              "jbl",
              "loreal",
              "pizzahut",
              "bri",
            ].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`/${brand}.png`}
                  alt={`${brand} logo`}
                  className={`w-auto object-contain 
                    ${
                      brand.includes("pizzahut") || brand.includes("cake")
                        ? "h-14 md:h-20"
                        : "h-8 md:h-20"
                    }
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight text-center">
            Frequently Asked Questions
          </h2>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`w-full rounded-2xl cursor-pointer transition-colors duration-300 overflow-hidden
                    ${isOpen ? "bg-[#F4F7F9] border-transparent" : "bg-white border border-gray-200 hover:border-gray-300"}
                  `}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="font-semibold text-slate-900 text-base md:text-lg pr-8">
                      {faq.question}
                    </h3>

                    <div className="flex-shrink-0 text-slate-900">
                      {isOpen ? (
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
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      ) : (
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
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </div>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* == BATAS SECTION FAQ == */}

      <section className="max-w-full mx-auto px-4 md:px-6 py-12">
        <div className="relative rounded-[20px] px-5 py-10 md:p-15 shadow-xl overflow-hidden flex flex-col items-center">
          <img
            src="/sxc-mtc-unilever.jpg"
            alt="Background Pattern"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          />

          <div className="absolute inset-0 bg-linear-to-b from-[#121926] to-[#0A3C8E] z-10 opacity-90 pointer-events-none"></div>

          <div className="relative z-20 flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 mt-5 md:mt-0 text-center tracking-tight">
              <span className="text-[#BBE8E9]">Ready to</span> Grow With
              StudentXCEOs?
            </h2>

            <p className="text-white text-sm md:text-[18px] mb-8 text-center font-light max-w-2xl">
              Whether you're a university student looking to expand your
              network, or an organization seeking meaningful collaboration —
              there's a place for you here.
            </p>

            <div className="flex gap-5 mb-8">
              <button className="flex-1 md:flex-none bg-white text-black font-bold py-2 md:py-3 px-2 md:px-8 rounded-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:bg-gray-100 transition shadow-lg text-xs md:text-base whitespace-nowrap">
                Join our community
              </button>

              <button className="flex-1 md:flex-none bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-2 md:py-3 px-2 md:px-8 rounded-xl border border-white/20 hover:opacity-90 transition shadow-lg text-xs md:text-base whitespace-nowrap">
                Partner with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* == SECTION FOOTER == */}
      <footer className="w-full bg-white px-4 md:px-8 pb-8">
        <div className="max-w-full mx-auto bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] rounded-[30px] pt-16 pb-8 px-8 md:px-16 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
            <div className="flex flex-col max-w-sm md:items-start text-left">
              <img
                src="/logo-sxc.png"
                alt="StudentsxCEOs Logo"
                className="h-10 w-auto object-contain mb-6"
              />

              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-medium text-center md:text-start">
                Connecting ambitious students with world-class business leaders
                to shape the future of Indonesia.
              </p>

              <a
                href="mailto:studentxceos@gmail.com"
                className="text-slate-700 text-sm md:text-base font-medium hover:text-[#0A3C8E] transition-colors text-center"
              >
                studentxceos@gmail.com
              </a>
            </div>

            {/* === KANAN: MENU LINK === */}
            <div className="flex justify-center md:justify-end gap-16 md:gap-24">
              <div className="flex flex-col items-start">
                <h4 className="text-slate-900 font-bold mb-6">Page</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="text-slate-900 font-bold mb-6">Support</h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200/60 flex justify-center items-center">
            <p className="text-slate-700 text-sm font-medium">
              © 2025 Copyright - OmahTI
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
