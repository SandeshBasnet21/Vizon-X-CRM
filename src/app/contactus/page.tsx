import React from "react";
import { Send, MessageSquare } from "lucide-react";
import { contactInfoData } from "@/src/mockData/contactInfo";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full  h-[60vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#006DDF] to-[#0051A5] px-4 sm:px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get in <span className="font-serif italic"> Touch</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-blue-100">
            Have questions about Karyavaar? We're here to help. Reach out to our
            team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#F5F9FF] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfoData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-blue-600">{item.main}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form Section */}
      <section className=" bg-[#F5F9FF] py-12 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm p-6 sm:p-10 border-2">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <MessageSquare size={22} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Send us a Message
              </h2>
              <p className="text-sm text-gray-500">
                Fill out the form and we’ll be in touch
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name *" placeholder="John Doe" />
              <Input
                label="Email Address *"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Company Name" placeholder="Your Consultancy" />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Subject */}
            <Input label="Subject *" placeholder="How can we help you?" />

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more about your needs..."
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;

/* Reusable Input Component */
const Input = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
