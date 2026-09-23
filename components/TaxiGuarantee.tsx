"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, BedDouble, CheckCircle2, Award, Clock } from "lucide-react";

export default function TaxiGuarantee() {
    return (
        <section className="w-full py-20 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Copy */}
                    <div className="lg:col-span-7 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                            No Advance Deposits Needed
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            100% Risk-Free Traveler Guarantee
                        </h2>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                            We understand international flight itineraries change. Book your chauffeur transfer today with zero upfront payment required for standard airport and day routes.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            
                            <div className="flex items-start gap-3.5 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                    <Banknote className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Multi-Currency Payment</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        Pay cash upon arrival in USD, EUR, GBP, AUD, or LKR. Visa & Mastercard terminal available.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                    <BedDouble className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Driver Stay & Food Included</h4>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        On multi-day tours, driver accommodation and meals are 100% included in the daily rate.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Checklist Box */}
                    <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                            <Award className="w-6 h-6 text-emerald-600 shrink-0" />
                            <h3 className="text-lg font-bold text-slate-900">Official SLTDA Guarantee</h3>
                        </div>

                        <ul className="space-y-3.5 text-xs font-medium text-slate-700">
                            <li className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>All expressways (E01, E02, E03, E04) toll tickets paid</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Unlimited passenger liability insurance</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Zero cancellation fee if notified 24h prior</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Chauffeur background police clearance verified</span>
                            </li>
                        </ul>

                        <div className="mt-6 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-800">Emergency Chauffeur Replacement:</span>
                            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold">
                                &lt; 45 Mins
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
