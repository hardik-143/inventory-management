import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

interface AccordionProps {
  title: string | React.ReactNode;
  children?: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      setHeight(isOpen ? `${contentRef.current!.scrollHeight}px` : "0px");
    };

    updateHeight(); // initial

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [isOpen, children]);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <h3 className="font-semibold text-slate-900 dark:text-white text-left mb-0!">
          {title}
        </h3>

        <svg
          className={clsx(
            "w-5 h-5 text-slate-600 dark:text-slate-300 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className="p-4 space-y-4 border-t border-slate-200 dark:border-slate-700"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
