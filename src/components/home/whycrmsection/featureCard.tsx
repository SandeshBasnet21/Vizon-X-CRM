import Image from "next/image";

interface FeaturesCardProps {
  title: string;
  desc: string;
}

export default function FeatureCard({ title, desc }: FeaturesCardProps) {
  return (
    <div className="flex items-start gap-4 bg-gray-100 rounded-xl p-4">
      {/* Tick Image */}
      <div className="flex items-center justify-center w-8 h-8 rounded-full">
        <Image
          src="/mdi_tick-decagram.svg" // or /tick.svg
          alt="Tick"
          width={20}
          height={20}
        />
      </div>

      {/* Text */}
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
