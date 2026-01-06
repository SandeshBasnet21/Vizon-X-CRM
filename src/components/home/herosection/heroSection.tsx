export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0051A5] to-[#006DDF] px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          All-in-One CRM for <br />
          <span className="block mt-2">
            Education & Visa{" "}
            <span className="font-serif italic font-medium">Consultancies</span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
          Manage leads, clients, follow-ups, and team tasks from one powerful
          dashboard. Streamline your consultancy operations and never miss an
          opportunity.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Start Free Trial */}
          <button
            className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3
              rounded-full  hover:bg-blue-50 transition"
          >
            Start Free Trial
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm">
              →
            </span>
          </button>

          {/* Explore More */}
          <button
            className="flex items-center gap-2 text-white font-medium
              hover:underline underline-offset-4 transition"
          >
            Explore More →
          </button>
        </div>
      </div>
    </section>
  );
}
