import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-b from-blue-600 to-blue-700 ">
      <div className="max-w-5xl mx-auto px-6 py-32 text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          All-in-One CRM for <br />
          <span className="block mt-2">Education & Visa Consultancies</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Manage leads, clients, follow-ups, and team tasks from one powerful
          dashboard.
          <br className="hidden md:block" />
          Streamline your consultancy operations and never miss an opportunity.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            label="Start Free Trial"
            variant="primary"
            showArrow
            className="bg-white text-blue-600 hover:bg-white/80"
          />

          <Button
            label="Explore More"
            variant="primary"
            showArrow
            className="bg-transparent border border-white text-white hover:bg-white/10"
          />
        </div>
      </div>
    </section>
  );
}
