import CTASection from "@/src/components/shared/CTASection";
import SectionHeader from "@/src/components/shared/SectionHeader";
import { Target, Eye, Heart, Users, Award, Globe, Briefcase, Code, Layout, Headphones } from "lucide-react";

const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "500+", label: "Consultancies" },
    { value: "50+", label: "Countries Served" },
    { value: "98%", label: "Satisfaction Rate" },
];

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description:
            "We're committed to empowering education consultancies with tools that make a real difference in student outcomes.",
    },
    {
        icon: Eye,
        title: "Transparency",
        description:
            "We believe in clear communication, honest pricing, and building trust through every interaction.",
    },
    {
        icon: Heart,
        title: "Customer First",
        description:
            "Your success is our success. We listen, adapt, and continuously improve based on your feedback.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We work alongside our clients as partners, understanding your unique challenges and goals.",
    },
];

const team = [
    {
        name: "Alex Johnson",
        role: "CEO & Founder",
        icon: Briefcase,
        bio: "Former education consultant with 15+ years of experience in international student placement.",
    },
    {
        name: "Maria Garcia",
        role: "CTO",
        icon: Code,
        bio: "Tech veteran who has built scalable SaaS products for Fortune 500 companies.",
    },
    {
        name: "James Chen",
        role: "Head of Product",
        icon: Layout,
        bio: "Product leader passionate about creating intuitive solutions for complex workflows.",
    },
    {
        name: "Sarah Williams",
        role: "Head of Customer Success",
        icon: Headphones,
        bio: "Dedicated to ensuring every client achieves their business goals with our platform.",
    },
];

const AboutUsPage = () => {
    return (
        <div className="min-h-screen">
            <main>
                {/* Hero Section */}
                <section className="pt-28 md:pt-40 pb-16 md:pb-24 gradient-hero bg-[#016AF5]">
                    <div className="container mx-auto px-6 md:px-8">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                About <span className="font-script font-normal">Karyavaar</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                                We're on a mission to transform how education and visa
                                consultancies manage their operations, helping them focus on
                                what matters most—their students.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 md:py-20 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-6 md:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-5xl font-bold text-[#016AF5]">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-500 mt-2 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
                                    Our <span className="font-script text-[#0166EB]">Story</span>
                                </h2>
                                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        Karyavaar was born from firsthand experience in the
                                        education consultancy industry. Our founder, Alex Johnson,
                                        spent over 15 years helping students achieve their dreams of
                                        studying abroad.
                                    </p>
                                    <p>
                                        During that time, he witnessed the challenges that
                                        consultancies face—managing hundreds of leads, tracking
                                        student progress, coordinating team tasks, and ensuring no
                                        opportunity slips through the cracks.
                                    </p>
                                    <p>
                                        In 2020, we set out to build the CRM that education
                                        consultancies truly need. Not a generic tool adapted for the
                                        industry, but a purpose-built solution designed from the
                                        ground up for the unique workflows of visa and education
                                        consultancies.
                                    </p>
                                    <p>
                                        Today, Karyavaar serves over 500 consultancies across 50+
                                        countries, helping them streamline operations and focus on
                                        what they do best—guiding students toward their educational
                                        goals.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-blue-50/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                                <Award className="w-8 h-8 text-[#016AF5]" />
                                            </div>
                                            <span className="font-bold text-black text-lg text-center mb-1">Award Winning</span>
                                            <span className="text-sm text-gray-500 text-center">Best EdTech CRM 2023</span>
                                        </div>
                                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                                <Globe className="w-8 h-8 text-[#016AF5]" />
                                            </div>
                                            <span className="font-bold text-black text-lg text-center mb-1">Global Reach</span>
                                            <span className="text-sm text-gray-500 text-center">50+ Countries</span>
                                        </div>
                                        <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 flex flex-col items-center col-span-1 sm:col-span-2 hover:shadow-md transition-shadow">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                                <Users className="w-8 h-8 text-[#016AF5]" />
                                            </div>
                                            <span className="font-bold text-black text-xl text-center mb-2">Trusted by 10,000+ Users</span>
                                            <span className="text-base text-gray-500 text-center">Global education professionals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-8">
                        <SectionHeader
                            title="Our"
                            highlight="Values"
                            subtitle="The principles that guide everything we do"
                        />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="w-8 h-8 text-[#016AF5]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-base text-gray-500 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-6 md:px-8">
                        <SectionHeader
                            title="Meet Our"
                            highlight="Team"
                            subtitle="The passionate people behind Karyavaar"
                        />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                                        <member.icon className="w-12 h-12 text-[#016AF5]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-[#016AF5] mb-4 uppercase tracking-wider">{member.role}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection
                    title="Join Our Growing Community"
                    subtitle="Be part of the future of education consultancy management"
                />
            </main>
        </div>
    );
};

export default AboutUsPage;
