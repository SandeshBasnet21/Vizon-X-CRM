import Image from "next/image";

import Button from "../ui/Button";
import FeatureCard from "./featureCard";

export default function WhyCRMSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Consultancies <br />
            Need <span className="text-blue-600">CRM</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            Manage leads, clients, follow-ups, and team tasks from one powerful
            dashboard.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 space-y-4">
            <FeatureCard
              title="Experienced Counsellors"
              description="Leads lost due to missed follow-ups"
            />
            <FeatureCard
              title="Lead Management System"
              description="Leads lost due to missed follow-ups"
            />
            <FeatureCard
              title="Automated Follow-ups"
              description="Leads lost due to missed follow-ups"
            />
            <FeatureCard
              title="Student Progress Tracking"
              description="Leads lost due to missed follow-ups"
            />
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              label="Start Free Trial"
              variant="primary"
              showArrow
              className="bg-blue-600 text-white hover:bg-blue-700"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="bg-blue-50 rounded-3xl p-6 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/hero-phone.jpg"
              alt="CRM Dashboard"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
