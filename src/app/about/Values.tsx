'use client';

import { Award, Heart, Trello } from "react-feather";

const values = [
    {
        title: "Friendship",
        description: "We treat all fellows and alumni as family, supporting each other anytime, anywhere.",
        icon: <Heart/>
    },
    {
        title: "Leadership",
        description: "We lead with purpose, starting from ourselves to make a tangible impact on the nation.",
        icon: <Award/>
    },
    {
        title: "Partnership",
        description: "We grow through collaboration, building strong partnerships to reach our shared vision.",
        icon: <Trello/>
    },
]
export default function Values() {
  return (
    <>
    <section className="w-full px-6 md:px-16 py-20 md:py-5 text-center mb-10">
      <div>
      <h1 className="text-xl md:text-3xl font-medium mb-3">Our Core Values</h1>
      <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10">
        Each chapter develops its own initiatives and programs, under the shared values of SXC.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {values.map((value, i) => (
        <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl p-6 shadow-sm">
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
        </div>
        ))}
      </div>
      </div>
    </section>
    <section className="w-full px-6 md:px-16 py-20 md:py-15 text-center">
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[var(--secondary-200)] to-[var(--neutral-25)]">
        <div className="rounded-2xl backdrop-blur-md bg-[var(--color-blue)] p-6">
            <div className="relative justify-center h-full p-10 max-w-3xl mx-auto">
            <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-1">
                Our Growth Story
            </p>
            <h1 className="text-xl md:text-3xl font-medium mb-6 bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] text-transparent bg-clip-text">Where Future Leaders Begin</h1>
            </div>
        </div>
        </div>
    </section>
    </>
  );
}