"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import { EASE } from "@/components/motion/presets";
import type { FaqItem } from "./PricingFaq.data";

/** Accordeon waarin één vraag tegelijk openstaat; de eerste is standaard open. */
export function PricingFaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div data-reveal-group className="w-[1020px]">
      {items.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;
        const questionId = `${baseId}-question-${index}`;
        const answerId = `${baseId}-answer-${index}`;

        return (
          <div key={question} className="border-b border-black">
            <h3>
              <button
                type="button"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between pt-[26px] text-left font-michroma text-[28px] leading-[38px] tracking-[0.5px] transition-[padding] duration-200 ${
                  isOpen ? "pb-[18px] text-brand" : "pb-[26px] text-black"
                }`}
              >
                <span className="min-w-0 flex-1">{question}</span>
                <img
                  src={isOpen ? "/figma/pricing/faq/0ad4c.svg" : "/figma/pricing/faq/9ff98.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </button>
            </h3>
            <motion.div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              inert={!isOpen}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="relative top-px w-[880px] pb-[30px] font-manrope text-[20px] leading-[30px] text-grey">
                {answer}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
