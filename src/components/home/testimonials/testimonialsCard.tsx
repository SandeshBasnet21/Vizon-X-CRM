import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialData {
  image: string;
  name: string;
  college: string;
  rating: number;
  message: string;
}

interface Props {
  data: TestimonialData;
  active: boolean;
}

export default function TestimonialCard({ data, active }: Props) {
  return (
    <div
      className={`
        flex-shrink-0
        w-[85vw] sm:w-[380px]
        rounded-2xl
        p-6
        transition-all
        duration-300
        ${
          active
            ? "bg-gradient-to-br from-[#006DDF] to-[#004FA8] text-white scale-105"
            : "bg-white text-gray-700"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={data.image}
            alt={data.name}
            width={44}
            height={44}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{data.name}</p>
            <p
              className={`text-xs ${
                active ? "text-blue-100" : "text-gray-400"
              }`}
            >
              {data.college}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: data.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                active
                  ? "fill-white text-white"
                  : "fill-[#006DDF] text-[#006DDF]"
              }
            />
          ))}
        </div>
      </div>

      {/* Message */}
      <p
        className={`text-sm leading-relaxed ${
          active ? "text-blue-100" : "text-gray-600"
        }`}
      >
        {data.message}
      </p>
    </div>
  );
}
