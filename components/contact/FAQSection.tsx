"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: "How do I book a tour?",
        answer: "You can book a tour directly through our website by selecting your preferred package and filling out the booking form. Alternatively, you can contact us via phone or WhatsApp for a custom itinerary."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We offer a flexible cancellation policy. Cancellations made 48 hours before the scheduled tour date are fully refundable. For cancellations within 48 hours, a small processing fee may apply."
    },
    {
        question: "Do you provide airport transfers?",
        answer: "Yes, we provide reliable airport transfers to and from Bandaranaike International Airport (CMB). You can book your transfer separately or as part of a tour package."
    },
    {
        question: "Can I customize my tour itinerary?",
        answer: "Absolutely! We specialize in tailor-made experiences. Contact our team with your interests and preferences, and we will create a personalized itinerary just for you."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
                        Common Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
