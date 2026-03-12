'use client';

import { Award, Heart, Trello } from "react-feather";

const values = [
    {
        title: "Impact-Driven Programs",
        description: "Every program is designed to create measurable impact on student development and career outcomes, ensuring real-world readiness and success.",
        icon: <Heart/>
    },
    {
        title: "National Reach",
        description: "Your support extends across top 30+ universities and 5 major cities in Indonesia, creating a nationwide network of future leaders.",
        icon: <Award/>
    },
    {
        title: "Leaders Made Here",
        description: "2,500+ alumni successfully placed in leadership positions across top companies, demonstrating the effectiveness of our leadership development approach.",
        icon: <Trello/>
    },
]
export default function Why() {
  return (
    <>
    <section className="w-full px-6 md:px-16 py-20 md:py-5 text-center mb-10">
      <div>
        <div className="absolute inset-1 flex items-center justify-center">
            <div className="w-3/4 h-2/4 bg-blue-400/10 blur-2xl rounded-full translate-y-130"></div>
        </div>
      <h1 className="text-xl md:text-3xl font-medium mb-2">Why Support StudentsxCEOs?</h1>
      <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10">
        Invest in developing Indonesia&apos;s future leaders, directly shaping the future of national business and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {values.map((value, i) => (
        <div key={i} className="border border-[var(--color-neutral-200)] rounded-xl p-6 shadow-sm bg-[var(--color-white)]">
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
    </>
  );
}