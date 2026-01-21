"use client";

import { useState } from "react";
import SectionHeader from "@/src/components/shared/SectionHeader";
import Button from "@/src/components/ui/Button";
import { Check, ChevronDown } from "lucide-react";

const PRIMARY = "#4D96F4";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small consultancies just getting started",
    price: 29,
    period: "/month",
    popular: false,
    features: [
      "Up to 500 leads",
      "2 team members",
      "Basic reporting",
      "Email support",
      "Lead management",
      "Follow-up reminders",
    ],
  },
  {
    name: "Professional",
    description: "For growing consultancies with more needs",
    price: 79,
    period: "/month",
    popular: true,
    features: [
      "Up to 5,000 leads",
      "10 team members",
      "Advanced analytics",
      "Priority support",
      "Document management",
      "Appointment scheduling",
      "Email marketing",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    description: "For large consultancies with custom requirements",
    price: 199,
    period: "/month",
    popular: false,
    features: [
      "Unlimited leads",
      "Unlimited team members",
      "Custom reporting",
      "Dedicated account manager",
      "Multi-location support",
      "White-label options",
      "Custom integrations",
      "SLA guarantee",
      "Training & onboarding",
    ],
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes apply in the next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all plans include a 14-day free trial with no credit card required.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel anytime with no cancellation fees.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use SSL encryption, regular backups, and GDPR-compliant practices.",
  },
];

const Pricing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 bg-[#0166EB] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold">
                Simple, Transparent{" "}
                <span className="font-script font-normal">Pricing</span>
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Choose the plan that fits your consultancy. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 border transition ${plan.popular ? "scale-105 shadow-xl" : "shadow-sm"}`}
                  style={{ borderColor: PRIMARY }}
                >
                  {plan.popular && (
                    <span
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-sm font-semibold px-4 py-1.5 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    >   
                      Most Popular
                    </span>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2 text-gray-700">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                    <div className="flex justify-center items-end gap-1">
                      <span className="text-4xl font-bold text-gray-700">${plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <Check className="w-4 h-4 mt-1" style={{ color: PRIMARY }} />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Use Button with label and showArrow instead of children */}
                  <Button
                    label="Get Started"
                    showArrow={true}
                    className="w-full"
                    style={{
                      backgroundColor: plan.popular ? PRIMARY : "transparent",
                      color: plan.popular ? "white" : PRIMARY,
                      border: `1px solid ${PRIMARY} `,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE COMPARISON TABLE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Compare"
              highlight="Plans"
              subtitle="See what's included in each plan"
            />

            <div className="mt-12 overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
                <thead>
                  <tr className="border-b" style={{ borderColor: PRIMARY }}>
                    <th className="text-left p-6 font-semibold text-gray-500">Feature</th>
                    <th className="text-center p-6 font-semibold text-gray-500">Starter</th>
                    <th className="text-center p-6 font-semibold text-gray-500">Professional</th>
                    <th className="text-center p-6 font-semibold text-gray-500">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Leads", starter: "500", pro: "5,000", enterprise: "Unlimited" },
                    { feature: "Team Members", starter: "2", pro: "10", enterprise: "Unlimited" },
                    { feature: "Lead Management", starter: true, pro: true, enterprise: true },
                    { feature: "Document Storage", starter: "1 GB", pro: "10 GB", enterprise: "Unlimited" },
                    { feature: "Email Marketing", starter: false, pro: true, enterprise: true },
                    { feature: "API Access", starter: false, pro: true, enterprise: true },
                    { feature: "Custom Integrations", starter: false, pro: false, enterprise: true },
                    { feature: "White Label", starter: false, pro: false, enterprise: true },
                    { feature: "Priority Support", starter: false, pro: true, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b last:border-0" style={{ borderColor: PRIMARY + "33" }}>
                      <td className="p-6 text-gray-500">{row.feature}</td>
                      <td className="text-center p-6">
                        {typeof row.starter === "boolean" ? (row.starter ? <Check className="w-5 h-5 text-[#0166EB] mx-auto" /> : <span className="text-gray-400">—</span>) : <span className="text-gray-500">{row.starter}</span>}
                      </td>
                      <td className="text-center p-6">
                        {typeof row.pro === "boolean" ? (row.pro ? <Check className="w-5 h-5 text-[#0166EB] mx-auto" /> : <span className="text-gray-400">—</span>) : <span className="text-gray-500">{row.pro}</span>}
                      </td>
                      <td className="text-center p-6">
                        {typeof row.enterprise === "boolean" ? (row.enterprise ? <Check className="w-5 h-5 text-[#0166EB] mx-auto" /> : <span className="text-gray-400">—</span>) : <span className="text-gray-500">{row.enterprise}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

{/* FAQ ACCORDION */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-3xl">
    <SectionHeader
      title="Frequently Asked"
      highlight="Questions"
      subtitle="Find answers to common questions about our pricing plans"
    />

    <div className="mt-10 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ borderColor: PRIMARY }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-700 text-base md:text-lg">
                {faq.question}
              </span>

              {/* Use Lucide Chevron Icons */}
              {isOpen ? (
                <ChevronDown
                  className="w-5 h-5 text-gray-500 transform rotate-180 transition-transform duration-300"
                />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
              )}
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-gray-500 text-sm md:text-base bg-white transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* CTA */}
        <section className="py-20 bg-[#0166EB]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Still Have Questions?
            </h2>
            <p className="text-white mb-8">
              Our team is happy to help you choose the right plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                label="Start Free Trial"
                showArrow={true}
                size="lg"
                className="gap-2 text-white hover:bg-white hover:text-[#0166EB] border-2 border-[#569BF5] "
                
              />
              <Button
                label="Contact Sales"
                variant="text"
                size="lg"
                className="gap-2 text-white  hover:bg-white hover:text-[#0166EB] border-2 border-[#569BF5] "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
