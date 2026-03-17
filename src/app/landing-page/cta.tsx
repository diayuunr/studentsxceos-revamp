export default function CTA() {
  return (
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
            <span className="text-[#BBE8E9]">Ready to</span> Grow With StudentXCEOs?
          </h2>

          <p className="text-white text-sm md:text-[18px] mb-8 text-center font-light max-w-2xl">
            Whether you're a university student looking to expand your network, or an organization seeking meaningful collaboration — there's a place for you here.
          </p>

          <div className="flex gap-5 mb-8">
            <button className="cursor-pointer flex-1 md:flex-none bg-white text-black font-bold py-2 md:py-3 px-2 md:px-8 rounded-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:bg-gray-100 transition shadow-lg text-xs md:text-base whitespace-nowrap">
              Join our community
            </button>

            <button className="cursor-pointer flex-1 md:flex-none bg-linear-to-b from-[#121926] to-[#0A3C8E] text-white font-semibold py-2 md:py-3 px-2 md:px-8 rounded-xl border border-white/20 hover:opacity-90 transition shadow-lg text-xs md:text-base whitespace-nowrap">
              Partner with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}