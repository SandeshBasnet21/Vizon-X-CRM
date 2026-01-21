"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./testimonialsCard";
import { testimonials } from "@/src/mockData/testimonials";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;

    container.scrollTo({
      left: card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const next = () => {
    scrollToIndex((activeIndex + 1) % testimonials.length);
  };

  const prev = () => {
    scrollToIndex(
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="bg-[#F2F7FD] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-serif italic text-blue-600 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
            Hear From Our Students
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Study in USA with the best consultancy in Nepal and explore the best
          </p>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-6
            no-scrollbar
          "
        >
          {testimonials.map((item, index) => (
            <div key={item.id} className="snap-center">
              <TestimonialCard data={item} active={index === activeIndex} />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
