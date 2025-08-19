"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Head from "next/head";

const faqs = [
  {
    question: "What is Nagpur Heights and how does it help property buyers in Nagpur?",
    answer:
      "Nagpur Heights is a PropTech company that connects buyers, sellers, and renters in Nagpur with verified real estate listings, virtual tours, and advanced property search tools.",
  },
  {
    question: "Does Nagpur Heights provide verified property listings in Nagpur?",
    answer:
      "Yes, all listings on Nagpur Heights go through a verification process to ensure authenticity and reduce the risk of fraud for buyers, sellers, and tenants.",
  },
  {
    question: "Can I find affordable flats and apartments in Nagpur on Nagpur Heights?",
    answer:
      "Absolutely! Nagpur Heights offers property listings across different budgets, including affordable flats, mid-range apartments, and premium luxury homes in Nagpur.",
  },
  {
    question: "Does Nagpur Heights list properties near MIHAN and Wardha Road?",
    answer:
      "Yes, MIHAN and Wardha Road are two of Nagpur’s most popular real estate investment zones. Nagpur Heights provides updated listings, price trends, and infrastructure updates for these areas.",
  },
  {
    question: "How does Nagpur Heights help property sellers in Nagpur?",
    answer:
      "Property owners can list their properties with high-quality photos, videos, and even 3D walkthroughs. Nagpur Heights ensures maximum visibility through digital marketing and targeted outreach.",
  },
  {
    question: "Can I use Nagpur Heights to find rental properties in Nagpur?",
    answer:
      "Yes, Nagpur Heights features a wide range of rental options, including 1BHK, 2BHK, 3BHK apartments, PGs, and commercial spaces for lease in Nagpur.",
  },
  {
    question: "Does Nagpur Heights assist with home loans and property finance?",
    answer:
      "Nagpur Heights partners with leading banks and NBFCs to help buyers get quick loan approvals, EMI calculations, and financial guidance.",
  },
  {
    question: "Are virtual property tours available on Nagpur Heights?",
    answer:
      "Yes, buyers can explore properties through 3D virtual tours and video walkthroughs, making it easier to shortlist options before visiting in person.",
  },
  {
    question: "Why should I invest in real estate in Nagpur through Nagpur Heights?",
    answer:
      "Nagpur is one of India’s fastest-growing smart cities with projects like MIHAN, metro connectivity, and improved infrastructure. Nagpur Heights helps investors choose the best locations with high ROI potential.",
  },
  {
    question: "How do I contact Nagpur Heights for property-related queries?",
    answer:
      "You can contact Nagpur Heights through the website’s enquiry form, WhatsApp support, or by visiting our Nagpur office for personalized property consultation.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (FAQ Schema for SEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - PropTech Company</title>
        <meta
          name="description"
          content="Find answers to the most common questions about PropTech, real estate technology, property buying, selling, rentals, and the future of real estate."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-sm p-4 transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
