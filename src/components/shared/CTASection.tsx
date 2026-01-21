import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Consultancy?",
  subtitle = "Join thousands of education consultancies streamlining their operations with Karyavaar CRM.",
  buttonText = "Get Started Now",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-20 gradient-hero bg-[#016AF5] flex items-center justify-center">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white text-lg mb-8">{subtitle}</p>
          <Link href={buttonLink}>
            <Button variant="hero" size="lg" className="gap-2 bg-white text-black">
              {buttonText}
              <ArrowRight className="w-5 h-5 text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
