import Image from "next/image";
import HeroSection from "../components/home/herosection/heroSection";
import WhyCRMSection from "../components/home/whycrmsection/whyCrmSection";

import TestimonialSection from "../components/home/testimonials/testimonialsSection";
import PowerfullFeaturesSection from "../components/home/powerfulsection/powerfullFeaturesSection";
import CTASection from "../components/home/ctasection/ctaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyCRMSection />
      <PowerfullFeaturesSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
