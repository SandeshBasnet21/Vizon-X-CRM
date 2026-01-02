"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./testimonialsCard";

export default function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Testimonial
          </h2>
          <p className="mt-4 text-gray-600">
            Study in USA with the best consultancy. Hear what our clients have
            to say about their experience.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <TestimonialCard
                name="Rachel Martinez"
                role="Director, Global Education Consultants"
                message="I had an excellent experience with this CRM. From the very first counseling session, the team guided me clearly about course selection, university options, and the entire application process."
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                name="David Chen"
                role="Founder, Asia Visa Services"
                message="Karyavaar transformed how we manage our visa consultancy. The automated follow-ups alone have increased our conversion rate by 40%."
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                name="Sarah Thompson"
                role="Operations Manager, StudyAbroad Pro"
                message="The best investment we've made for our consultancy. Managing hundreds of student applications is now seamless."
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                name="Michael Lee"
                role="Senior Counselor"
                message="The interface is extremely intuitive, and the support team is always quick to respond. Highly recommended!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
