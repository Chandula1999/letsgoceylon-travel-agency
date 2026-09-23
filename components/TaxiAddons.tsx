"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, Wifi, Smartphone, Languages, Gift, BadgeCheck, Luggage } from "lucide-react";

export default function TaxiAddons() {
    const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});

    const toggleAddon = (key: string) => {
        setSelectedAddons(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="w-full py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                            Tailored Sri Lankan Hospitality
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Customize Your Chauffeur Journey
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base mt-1">
                            Choose optional amenities or complimentary VIP touches designed specifically for foreign tourists.
                        </p>
                    </div>

                    <div className="p-4 bg-emerald-900 text-white rounded-2xl flex items-center gap-3 shadow.md border border-emerald-800 shrink-0">
                        <Luggage className="w-6 h-6 text-amber-400 shrink-0" />
                        <p className="text-xs font-semibold">
                            Surfboard racks & excess golf bags accommodated at no extra charge on KDH Vans.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Addon 1: Child Car Seat */}
                    <div 
                        onClick={() => toggleAddon('childSeat')}
                        className={`relative flex items-start p-5 rounded-2xl cursor-pointer transition-all border ${
                            selectedAddons['childSeat'] 
                                ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={!!selectedAddons['childSeat']}
                            onChange={() => {}}
                            className="mt-1 mr-3 rounded accent-emerald-600 w-4 h-4 cursor-pointer"
                        />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                    <Baby className="w-4 h-4 text-emerald-600" />
                                    ISOFIX Child Car Seat
                                </h4>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">
                                    +LKR 1,500/day
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                European standard certified infant (0-2y) or child booster (2-8y). Sanitized before every trip.
                            </p>
                        </div>
                    </div>

                    {/* Addon 2: 4G SIM Card */}
                    <div 
                        onClick={() => toggleAddon('simCard')}
                        className={`relative flex items-start p-5 rounded-2xl cursor-pointer transition-all border ${
                            selectedAddons['simCard'] 
                                ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={!!selectedAddons['simCard']}
                            onChange={() => {}}
                            className="mt-1 mr-3 rounded accent-emerald-600 w-4 h-4 cursor-pointer"
                        />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                    <Smartphone className="w-4 h-4 text-emerald-600" />
                                    Pre-Activated 4G SIM
                                </h4>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">
                                    +LKR 2,500
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Dialog 50GB high-speed tourist data pack handed directly to you at BIA arrivals with passport verification.
                            </p>
                        </div>
                    </div>

                    {/* Addon 3: Mobile Wi-Fi */}
                    <div 
                        onClick={() => toggleAddon('mobileWifi')}
                        className={`relative flex items-start p-5 rounded-2xl cursor-pointer transition-all border ${
                            selectedAddons['mobileWifi'] 
                                ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={!!selectedAddons['mobileWifi']}
                            onChange={() => {}}
                            className="mt-1 mr-3 rounded accent-emerald-600 w-4 h-4 cursor-pointer"
                        />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                    <Wifi className="w-4 h-4 text-emerald-600" />
                                    Portable Mobile Wi-Fi
                                </h4>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">
                                    +LKR 1,200/day
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                Connect up to 8 smartphones and laptops anywhere across the island. 12-hour battery life.
                            </p>
                        </div>
                    </div>

                    {/* Addon 4: Language Guide */}
                    <div 
                        onClick={() => toggleAddon('languageGuide')}
                        className={`relative flex items-start p-5 rounded-2xl cursor-pointer transition-all border ${
                            selectedAddons['languageGuide'] 
                                ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={!!selectedAddons['languageGuide']}
                            onChange={() => {}}
                            className="mt-1 mr-3 rounded accent-emerald-600 w-4 h-4 cursor-pointer"
                        />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                    <Languages className="w-4 h-4 text-emerald-600" />
                                    Language Chauffeur
                                </h4>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">
                                    +LKR 3,500/day
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                SLTDA-licensed fluent German, French, Mandarin, or Russian speaking chauffeur guide.
                            </p>
                        </div>
                    </div>

                    {/* Addon 5: Complimentary King Coconut */}
                    <div className="relative flex items-start p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                        <Gift className="w-5 h-5 text-amber-400 mt-0.5 mr-3 shrink-0" />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-white">Chilled King Coconuts</h4>
                                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                                    Complimentary
                                </span>
                            </div>
                            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                                Fresh Ceylon thambili (king coconut) and cold spring mineral water prepared in your vehicle cooler.
                            </p>
                        </div>
                    </div>

                    {/* Addon 6: Airport Nameboard */}
                    <div className="relative flex items-start p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                        <BadgeCheck className="w-5 h-5 text-amber-400 mt-0.5 mr-3 shrink-0" />
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-sm font-bold text-white">VIP Meet & Greet</h4>
                                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                                    Complimentary
                                </span>
                            </div>
                            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                                Personalized printed name-board held inside the air-conditioned arrival lobby counter 14.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
