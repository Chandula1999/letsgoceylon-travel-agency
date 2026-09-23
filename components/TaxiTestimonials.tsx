"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export interface ReviewItem {
    id: number;
    quote: string;
    author: string;
    location: string;
    flag: string;
    routeTag: string;
    initials: string;
}

const REVIEWS_DATA: ReviewItem[] = [
    {
        id: 1,
        quote: "Our driver Nalaka was nothing short of extraordinary. Over 10 days covering Sigiriya, Kandy, Nuwara Eliya, and Mirissa, his gentle driving on narrow mountain hairpin curves gave us absolute peace of mind. Not a single hidden charge.",
        author: "David & Sarah M.",
        location: "London, United Kingdom",
        flag: "🇬🇧",
        routeTag: "10-Day Circuit",
        initials: "DM"
    },
    {
        id: 2,
        quote: "Our flight with Qatar Airways was delayed 2 hours landing at CMB at 1 AM. Driver Chaminda was waiting with our name-board, smiling, cold coconut water ready, and took us straight to Galle via expressway in 2 hours flat. Pure German precision.",
        author: "Helena Schmidt",
        location: "Munich, Germany",
        flag: "🇩🇪",
        routeTag: "Airport ➔ Galle",
        initials: "HS"
    },
    {
        id: 3,
        quote: "Booking via their WhatsApp desk took under 3 minutes. The Toyota Prius was brand new, spotlessly clean, and our chauffeur recommended local roadside roti and spice gardens without any commission pressure. Highly recommended!",
        author: "Antoine Dubois",
        location: "Lyon, France",
        flag: "🇫🇷",
        routeTag: "Colombo ➔ Ella",
        initials: "AD"
    }
];

export default function TaxiTestimonials() {
    return (
        <section className="w-full py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                            Unfiltered Traveler Feedback
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Trusted by 14,000+ Global Travelers
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/80 border border-slate-700 shrink-0">
                        <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-slate-200">
                            4.98 on TripAdvisor & Google
                        </span>
                    </div>
                </div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS_DATA.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-xl relative"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <Quote className="w-6 h-6 text-slate-700" />
                                </div>

                                <p className="text-xs md:text-sm text-slate-300 italic leading-relaxed">
                                    &quot;{review.quote}&quot;
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-emerald-900 border border-emerald-700 text-emerald-300 flex items-center justify-center font-bold text-xs">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">{review.author}</p>
                                        <p className="text-[11px] text-slate-400">{review.location} {review.flag}</p>
                                    </div>
                                </div>

                                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                    {review.routeTag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
