'use client';

import { Award, Heart, Trello } from "react-feather";

export default function Ways() {
const values = [
    {
        title: "Corporate Partnership",
        description: "Collaborate with us to gain brand visibility, access top emerging talent, and align with your CSR goals through sponsorship and executive involvement in our talent pipeline programs.",
        icon: <Heart/>
    },
    {
        title: "Financial Support",
        description: "Make a direct impact by funding our leadership programs, providing student scholarships, sponsoring events, and supporting the establishment of new chapters across the nation.",
        icon: <Award/>
    },
    {
        title: "Mentorship & Expertise",
        description: "Share your industry expertise and shape future leaders by serving as a mentor, facilitating workshops, joining our advisory board, or speaking at our national events.",
        icon: <Trello/>
    },
]
  return (
    <section className="w-full px-6 md:px-16 py-20 md:py-5 mb-20 text-center">
        <div className="relative p-[2px] rounded-[22px] bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] backdrop-blur-md w-full">
            <div className="relative justify-center h-full pt-20 pb-10 max-w-3xl mx-auto">
            <h1 className="text-xl md:text-3xl font-medium mb-2 text-[var(--color-white)]">Ways to Support</h1>
            <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal text-[var(--color-white)]">
                Choose how you&apos;d like to contribute to our mission.
            </p>
            </div>
            <div className="relative justify-center h-full pb-15 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map((value, i) => (
            <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl p-6 shadow-sm bg-[var(--color-white)] flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 flex items-center justify-center text-[var(--color-white)] rounded-md bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]">
                    {value.icon}
                </div>
                <h2 className="text-md md:text-lg font-medium">
                    {value.title}
                </h2>
                </div>

                <div className="border-t border-[var(--color-neutral-200)] mb-3"></div>

                <p className="text-sm font-light max-w-md tracking-wide text-left">
                {value.description}
                </p>
                <div className="mt-auto">
                <button className="mt-4 py-1.5 w-full rounded-md bg-[var(--color-black)] text-white text-sm font-medium cursor-pointer hover:bg-[var(--neutral-800)] transition-colors">
                    Join our community
                </button>
                </div>
            </div>
            ))}
            </div>
            </div>
        </div>
    </section>
  );
}   