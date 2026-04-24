'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar, MapPin, UserCheck, Users } from "react-feather";
import { FaGraduationCap } from "react-icons/fa";

const stats = [
  {
    icon: <Users size={20}/>,
    value: "70,000+",
    label: "Future Leaders Impacted",
  },
  {
    icon: <FaGraduationCap size={20} />,
    value: "2,500",
    label: "Alumni Created",
  },
  {
    icon: <Briefcase size={20} />,
    value: "100+",
    label: "Corporate Partners",
  },
  {
    icon: <UserCheck size={20} />,
    value: "300+",
    label: "Active Fellows",
  },
  {
    icon: <Calendar size={20} />,
    value: "15+",
    label: "Years of Impact",
  },
  {
    icon: <MapPin size={20} />,
    value: "5",
    label: "Active Chapters",
  },
];

export default function Hero() {
  return (
    <div className="px-3 md:px-10 pt-17">
      <motion.section
        className="relative w-full text-left h-[80vh] md:h-[calc(100vh-4.25rem)] rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        {/* Hero Image */}
        <div className="absolute top-0 left-[-5rem] w-[calc(100%+5rem)] h-full overflow-hidden">
          <motion.div
            className="relative w-full h-full overflow-hidden"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: easeOut }}
          >
            <Image
              src="/hero-bg1.png"
              alt="Hero"
              fill
              priority
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,var(--color-black)_0%,var(--primary-800)_15%,var(--primary-700)_30%,var(--primary-600)_45%,rgba(9,47,110,0.8)_100%)] md:bg-[linear-gradient(to_right,var(--color-black)_0%,var(--primary-800)_15%,var(--primary-700)_30%,var(--primary-600)_45%,rgba(9,47,110,0.8)_100%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.97 }}
            transition={{ duration: 1.2, ease: easeOut }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-[80vh] md:min-h-[calc(100vh-4.25rem)] px-5 md:px-15 text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary-200)] to-[var(--color-white)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
          >
            Nurture and Connect
          </motion.h1>

          <motion.h1
            className="text-4xl md:text-5xl font-medium md:mt-4 tracking-wide"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          >
            Future Business Leaders
          </motion.h1>

          <motion.p
            className="text-[16px] md:text-[18px] max-w-[90%] md:max-w-lg font-thin mt-4 tracking-widest"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
          >
            Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
          </motion.p>

          <Link href="/about">
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {
                  boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.6)',
                },
                hover: {
                  boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.8)',
                },
              }}
              transition={{ duration: 0.4 }}
              className="relative cursor-pointer mt-10 bg-white overflow-hidden py-2 px-5 rounded-lg text-base z-0"
            >
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1.1 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ originX: 0, willChange: 'transform' }}
                className="absolute inset-0 bg-linear-to-br from-[#121926] to-[#0A3C8E] -z-10"
              />

              <motion.span
                variants={{
                  initial: { color: '#000000' },
                  hover: { color: '#ffffff' },
                }}
                className="relative z-10 font-medium"
              >
                Learn More <ArrowUpRight size={20} className="inline-block ml-1 mb-1" />
              </motion.span>
            </motion.button>
          </Link>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 overflow-hidden md:rounded-tr-2xl rounded-bl-2xl py-3 bg-white backdrop-blur-sm">
          <div className="animate-marquee-text flex gap-5 whitespace-nowrap">
            {[...stats, ...stats].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[var(--primary-700)] text-md">
                <span>{item.icon}</span>
                <span className="font-bold">{item.value}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </motion.section>
    </div>
  );
}