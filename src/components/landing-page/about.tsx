
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-full px-2 md:px-20 py-24 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="pr-4 text-center md:text-left">
          <p className="text-[18px] font-semibold text-gray-800 mb-4 tracking-tight lowercase">
            about us
          </p>
          <h3 className="text-[26px] md:text-[30px] font-bold mb-6 tracking-tight text-black">
            Bridging Students to Real-World Leadership
          </h3>
          <p className="text-gray-600 leading-relaxed font-light text-[18px]">
            StudentsxCEOs (SxC) is a strategic leadership platform for university students that connects them directly with industry leaders through curated talks, leadership forums, mentoring sessions, strategic discussions, and high-impact networking events. We create real-world learning experiences.
          </p>
        </div>

        <div className="md:mt-10 flex flex-col items-center md:items-end w-full overflow-hidden">
          <div className="w-full overflow-hidden relative">
            <div className="absolute top-0 left-0 w-24 md:w-100 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-[100%] animate-marquee">
              <div className="flex gap-8 md:gap-16 min-w-full shrink-0 justify-around px-8">
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

              <div className="flex gap-8 md:gap-16 shrink-0 min-w-full justify-around px-8">
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
          <button className="cursor-pointer mt-12 bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:opacity-90 transition">
            Join our community
          </button>
        </div>
      </div>
    </section>
  );
}