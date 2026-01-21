export default function CTASection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div
        className="max-w-6xl mx-auto bg-[#006DDF] rounded-2xl
        px-6 py-12 sm:py-14 text-center text-white"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to Transform Your Consultancy?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
          Study in USA with the best consultancy in Nepal and explore the best
          Nepal and explore the best
        </p>

        {/* Button */}
        <button
          className="mt-8 inline-flex items-center gap-3 bg-white text-blue-600
          px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
        >
          Get Started Now
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
