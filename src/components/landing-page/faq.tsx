'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is StudentsxCEOs and what makes it unique?',
      answer:
        "StudentsxCEOs (SxC) is Indonesia's premier leadership accelerator and fraternal organization that bridges exceptional students with today's top business leaders...",
    },
    {
      question: 'Why does StudentsxCEOs focus specifically on "business leaders"?',
      answer:
        'We believe that strong business leadership is the core engine for economic growth...',
    },
    {
      question: 'Who can join StudentsxCEOs and how selective is the process?',
      answer:
        'Any active undergraduate student with a strong passion for business and leadership can apply...',
    },
    {
      question: 'Is there any membership fee to join the organization?',
      answer:
        'The details regarding membership fees are usually discussed during the onboarding process...',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white px-6 py-24">
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
                  ${isOpen ? 'bg-[#F4F7F9] border-transparent' : 'bg-white border border-gray-200 hover:border-gray-300'}
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="font-semibold text-slate-900 text-base md:text-lg pr-8">
                    {faq.question}
                  </h3>

                  <div className="flex-shrink-0 text-slate-900">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </div>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}
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
  );
}