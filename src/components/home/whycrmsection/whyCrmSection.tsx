import Image from "next/image";
import FeatureCard from "./featureCard";

const features = [
  {
    title: "Experienced Counsellors",
    desc: "Leads lost due to missed follow-ups",
  },
  {
    title: "Lead Management System",
    desc: "Leads lost due to missed follow-ups",
  },
  {
    title: "Automated Follow-ups",
    desc: "Leads lost due to missed follow-ups",
  },
  {
    title: "Student Progress Tracking",
    desc: "Leads lost due to missed follow-ups",
  },
];

export default function WhyCRMSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Consultancies <br />
            Need <span className="text-blue-600 italic font-serif">CRM</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Manage leads, clients, follow-ups, and team tasks from one powerful
            dashboard.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} desc={item.desc} />
            ))}
          </div>

          {/* Button */}
          <button
            className="mt-8 inline-flex items-center gap-3 bg-blue-600
            text-white px-6 py-3 rounded-full font-medium
            hover:bg-blue-700 transition"
          >
            Start Free Trial
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <Image
            src="/herophoto.jpg"
            alt="CRM Dashboard"
            width={500}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
