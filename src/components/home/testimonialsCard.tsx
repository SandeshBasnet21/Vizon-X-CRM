import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

export default function TestimonialCard({
  name,
  role,
  message,
}: TestimonialCardProps) {
  return (
    <div className=" bg-white rounded-2xl p-6 shadow-sm border-2">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
            {name.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 text-blue-600">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>

      {/* Message */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{message}</p>
    </div>
  );
}
