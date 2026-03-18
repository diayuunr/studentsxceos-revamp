'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is StudentsxCEOs and what makes it unique?',
      answer: "StudentsxCEOs (SxC) is Indonesia's premier leadership accelerator and fraternal organization that bridges exceptional students with today's top business leaders. Founded in October 2010, we're not just another student club—we're the number one business-oriented organization in Indonesia, distinguished by our scale and impact.",
    },
    {
      question: 'Why does StudentsxCEOs focus specifically on "business leaders"?',
      answer: 'Indonesian transformation from a developing to a developed country requires exceptional business leadership across three complementary domains. First, we need policy-makers because government shapes the rules of the game. Second, we need corporate leaders because corporations drive the economy forward. Third, we need entrepreneurs because startups catalyze innovation and change',
    },
    {
      question: 'Who can join StudentsxCEOs and how selective is the process?',
      answer: 'We attract exceptional candidates from top-tier Indonesian universities who share our vision and driving motivation. Our fellows typically demonstrate strong academic performance, leadership potential, entrepreneurial mindset, commitment to Indonesian economic development, and open-mindedness with problem-solving abilities. However, the selectivity actually depends on each chapters specific context and needs.',
    },
    {
      question: 'How do I apply to become a fellow and what does the timeline look like?',
      answer: 'A "fellow" is an official member of our organization. To become one, you need to apply through the open recruitment process run by the chapter nearest to your current location. Each chapter manages its own recruitment independently while maintaining our national standards. Recruitment typically happens around the end of the year or early in the new year, so we encourage you to prepare yourself now. Keep an eye on your nearest chapters social media channels and website for specific announcement dates and application requirements.',
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-wide text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                
                className={`w-full rounded-2xl cursor-pointer transition-colors duration-300 overflow-hidden
                  ${isOpen ? 'bg-[#F4F7F9] border-transparent shadow-sm' : 'bg-white border border-gray-200 hover:border-gray-300'}
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="font-medium tracking-wide text-slate-900 text-base md:text-lg pr-8">
                    {faq.question}
                  </h3>

                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex-shrink-0 text-slate-900"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 text-sm md:text-base font-normal tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}