import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PowerfullFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PowerfullFeatureCard({
  icon,
  title,
  description,
}: PowerfullFeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <Link
        href="#"
        className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-600 hover:gap-3 transition-all"
      >
        Explore More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
