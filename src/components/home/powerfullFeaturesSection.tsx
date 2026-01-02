import {
  Users,
  UserCheck,
  Bell,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react";
import PowerfullFeatureCard from "./powerfullCard";

export default function PowerfullFeaturesSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Powerful CRM <span className="text-blue-600">Features</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Everything You Need to Manage Your Consultancy
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PowerfullFeatureCard
            icon={<Users size={22} />}
            title="Lead Management"
            description="Capture, organize, and track all enquiries from one place. Never lose a potential student again."
          />

          <PowerfullFeatureCard
            icon={<UserCheck size={22} />}
            title="Client / Student Tracking"
            description="Monitor progress from first inquiry to final completion. Keep detailed records of every interaction."
          />

          <PowerfullFeatureCard
            icon={<Bell size={22} />}
            title="Follow-up Reminders"
            description="Never miss a call or meeting with automated reminders. Stay on top of every opportunity."
          />

          <PowerfullFeatureCard
            icon={<Calendar size={22} />}
            title="Appointment Scheduling"
            description="Easy calendar integration for consultations. Let clients book appointments seamlessly."
          />

          <PowerfullFeatureCard
            icon={<FileText size={22} />}
            title="Document Management"
            description="Store and organize visa documents, transcripts, and applications in one secure location."
          />

          <PowerfullFeatureCard
            icon={<BarChart3 size={22} />}
            title="Analytics & Reports"
            description="Get insights into your consultancy performance with detailed analytics and visual reports."
          />
        </div>
      </div>
    </section>
  );
}
