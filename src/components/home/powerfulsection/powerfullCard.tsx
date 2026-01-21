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
    <div
      className="group bg-white rounded-2xl p-6 shadow-sm
      hover:bg-[#006DDF] hover:shadow-lg transition"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl
        bg-blue-50 text-blue-600 mb-5
        group-hover:bg-blue-500 group-hover:text-white transition"
      >
        {icon}
      </div>

      {/* Content */}
      <h3
        className="text-lg font-semibold text-gray-900
        group-hover:text-white transition"
      >
        {title}
      </h3>

      <p
        className="mt-2 text-sm text-gray-600 leading-relaxed
        group-hover:text-blue-100 transition"
      >
        {description}
      </p>

      {/* CTA */}
      <Link
        href="#"
        className="inline-flex items-center gap-2 mt-5 text-sm font-medium
        text-blue-600 group-hover:text-white
        hover:gap-3 transition-all"
      >
        Explore More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
