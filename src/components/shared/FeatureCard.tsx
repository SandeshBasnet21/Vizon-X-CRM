import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-[#016AF5]" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      {link && (
        <a
          href={link}
          className="inline-flex text-[#016AF5] items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
        >
          Explore More
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
