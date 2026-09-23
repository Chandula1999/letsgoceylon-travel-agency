"use client";

import { ShieldCheck, Award, MapPin, Clock, Star } from "lucide-react";

export default function TaxiTrustStrip() {
    return (
        <section className="w-full bg-slate-900/90 border-y border-emerald-500/20 py-5 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center">
                    
                    {/* Trust Item 1 */}
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            <Award className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">SLTDA Certified</p>
                            <p className="text-xs text-slate-400">Licence #TA/01492</p>
                        </div>
                    </div>

                    {/* Trust Item 2 */}
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">Fleet Insurance</p>
                            <p className="text-xs text-slate-400">100% Passenger Cover</p>
                        </div>
                    </div>

                    {/* Trust Item 3 */}
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">BIA Arrival Hub</p>
                            <p className="text-xs text-slate-400">Counter #14 Katunayake</p>
                        </div>
                    </div>

                    {/* Trust Item 4 */}
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">Free Flight Delay</p>
                            <p className="text-xs text-slate-400">90 Mins Included</p>
                        </div>
                    </div>

                    {/* Trust Item 5 */}
                    <div className="flex items-center gap-3 text-white sm:col-span-2 md:col-span-1">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">4.98 / 5.0 Rating</p>
                            <p className="text-xs text-slate-400">420+ Verified Reviews</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
