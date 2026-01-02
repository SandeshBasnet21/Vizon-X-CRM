import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border">
      {/* Icon */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
        <Check size={18} />
      </div>

      {/* Text */}
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
