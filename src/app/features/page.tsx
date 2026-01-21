import CTASection from "@/src/components/shared/CTASection";
import FeatureCard from "@/src/components/shared/FeatureCard";
import SectionHeader from "@/src/components/shared/SectionHeader";
import {
  Users,
  UserCheck,
  Bell,
  Calendar,
  FileText,
  BarChart3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture, organize, and track all enquiries from one place. Never lose a potential student again.",
  },
  {
    icon: UserCheck,
    title: "Client / Student Tracking",
    description:
      "Monitor progress from first inquiry to final completion. Keep detailed records of every interaction.",
  },
  {
    icon: Bell,
    title: "Follow-up Reminders",
    description:
      "Never miss a call or meeting with automated reminders. Stay on top of every opportunity.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Easy calendar integration for consultations. Let clients book appointments seamlessly.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Store and organize visa documents, transcripts, and applications in one secure location.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Get insights into your consultancy performance with detailed analytics and visual reports.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* HERO */}
        <section className="pt-28 pb-20 gradient-hero bg-[#016AF5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Powerful{" "}
                <span className="font-script font-normal">Features</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Everything you need to streamline your consultancy operations.
                Built specifically for education and visa consultancies.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-accent/30 pt-20 text-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up flex justify-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    link="/features"
                  />
                </div>
              ))}
            </div>

            {/* INTEGRATIONS */}
            <section className="mt-20">
              <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-card max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-black">
                      Seamless{" "}
                      <span className="font-script text-[#016AF5]">
                        Integrations
                      </span>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Connect Karyavaar with your favorite tools. Our CRM
                      integrates with popular email providers, calendar apps,
                      and communication platforms.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {[
                        "Google Workspace",
                        "Microsoft 365",
                        "Zoom",
                        "WhatsApp",
                        "Mailchimp",
                        "Slack",
                      ].map((integration) => (
                        <span
                          key={integration}
                          className="px-4 py-2 bg-[#E7F3FF] rounded-full text-sm text-black"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            </section>
          </div>

          {/* ✅ FULL WIDTH CTA (ONLY CHANGE) */}
          <div className="mt-24 ">
            <CTASection
              title="Ready to Experience These Features?"
              subtitle="Start your free trial today and see the difference"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
