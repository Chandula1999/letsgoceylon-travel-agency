"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const FAQS_DATA: FaqItem[] = [
    {
        id: 1,
        question: "How will I meet my driver at Bandaranaike International Airport (CMB)?",
        answer: "After clearing Sri Lanka immigration, luggage collection, and custom gates, walk into the main arrival lobby. Our representative or your assigned chauffeur guide will be standing at Official Airport Counter 14 holding a prominent name-board with your full name. You will also receive their mobile number and WhatsApp link 12 hours prior to landing."
    },
    {
        id: 2,
        question: "What happens if my international flight to Colombo is delayed?",
        answer: "We actively monitor all incoming flight schedules via live radar telemetry. Whether your flight lands 30 minutes early or 3 hours late, your chauffeur will adjust accordingly. We provide 90 minutes of complimentary waiting time starting strictly from the actual recorded wheel-touchdown time."
    },
    {
        id: 3,
        question: "Are highway expressway toll fees included in the quoted fare?",
        answer: "Yes, 100%. All Katunayake Expressway (E03), Central Expressway (E04), and Southern Expressway (E01) toll booth electronic card payments are fully absorbed by CeylonFleet. You will never be asked to pay cash at any toll gate."
    },
    {
        id: 4,
        question: "How does chauffeur accommodation work on multi-day custom tours?",
        answer: "Most 4-star and 5-star tourist hotels in Sri Lanka provide complimentary driver quarters and food. However, if you choose boutique villas or private Airbnb rentals without driver quarters, our daily multi-day hire rate already covers your driver's allowance, so you have zero unexpected expenses."
    }
];

export default function TaxiFAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                        Frequently Asked Questions
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Everything You Need to Know Before You Land
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS_DATA.map((faq) => {
                        const isOpen = openId === faq.id;
                        return (
                            <div 
                                key={faq.id}
                                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full p-5 text-left font-bold text-slate-900 text-sm md:text-base flex items-center justify-between hover:bg-slate-50 transition-colors gap-4"
                                >
                                    <span className="flex items-center gap-3">
                                        <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                                        {faq.question}
                                    </span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                                            isOpen ? "rotate-180 text-emerald-600" : ""
                                        }`} 
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
