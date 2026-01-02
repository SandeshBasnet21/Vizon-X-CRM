import Image from "next/image";
import HeroSection from "../components/home/heroSection";
import WhyCRMSection from "../components/home/whyCrmSection";
import PowerfullFeaturesSection from "../components/home/powerfullFeaturesSection";
import TestimonialSection from "../components/home/testimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyCRMSection />
      <PowerfullFeaturesSection />
      <TestimonialSection />
    </>
  );
}
