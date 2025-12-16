"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const FAQS = [
    {
        question: "How do I book a Sri Lanka Taxi Service for my trip?",
        answer: "Booking is easy! Simply use our online form above or contact us via WhatsApp. We offer reliable Sri Lanka taxi services for airport transfers, day trips, and multi-day tours across the island."
    },
    {
        question: "Do you provide Airport Transfers from Bandaranaike International Airport?",
        answer: "Yes, we specialize in 24/7 airport transfers from Bandaranaike International Airport (CMB) to any destination in Sri Lanka. Our drivers track your flight to ensure timely pickups."
    },
    {
        question: "Are your Taxi Rates fixed or metered?",
        answer: "We offer transparent, fixed taxi rates with no hidden charges. The price you are quoted includes fuel, driver fees, and highway tolls. Please note that for short-distance travel (below 100km), rates may be higher than the standard per-km price."
    },
    {
        question: "Can I hire a Private Driver for a multi-day tour?",
        answer: "Absolutely! Hiring a private driver is the best way to explore Sri Lanka. We provide comfortable vehicles and experienced English-speaking drivers for custom multi-day itineraries."
    },
    {
        question: "Do you offer long-distance trips like Colombo to Kandy or Ella?",
        answer: "Yes, we cover all major routes including Colombo to Kandy, Ella, Galle, and Sigiriya. Enjoy a comfortable ride in our modern fleet of sedans and vans."
    }
];

export default function TaxiFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-emerald-50/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to know about our <span className="font-semibold text-emerald-600">Sri Lanka Taxi Service</span>.
                    </p>
                </div>

                <div className="space-y-4 mb-12">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                    <p className="text-gray-600 mb-6">
                        Our support team is available 24/7 to assist you.
                    </p>
                    <a
                        href="https://wa.me/94719629664"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
