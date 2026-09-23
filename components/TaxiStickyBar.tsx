"use client";

import { Car, MessageSquare, ArrowUp } from "lucide-react";

interface TaxiStickyBarProps {
    onBookClick?: () => void;
}

export default function TaxiStickyBar({ onBookClick }: TaxiStickyBarProps) {
    const handleScrollTop = () => {
        if (onBookClick) {
            onBookClick();
        } else {
            const element = document.getElementById('instant-booking');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/94719629664?text=Hi%20CeylonFleet,%20I%20would%20like%20to%20inquire%20about%20a%20private%20chauffeur%20transfer', '_blank');
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-2xl py-3 px-4 md:px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                
                {/* Status indicator */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Car className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs md:text-sm font-bold text-white leading-tight">Ready for a Smooth Sri Lanka Journey?</p>
                        <p className="text-[11px] text-emerald-400">Instant Dispatch • Official Counter 14 at BIA Arrivals</p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
                    <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow gap-1.5 whitespace-nowrap min-h-[44px]"
                    >
                        <MessageSquare className="w-3.5 h-3.5 fill-slate-950 shrink-0" />
                        <span className="sm:hidden">WhatsApp</span>
                        <span className="hidden sm:inline">WhatsApp Desk (+94 71 962 9664)</span>
                    </button>
                    <button
                        type="button"
                        onClick={handleScrollTop}
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all gap-1 whitespace-nowrap min-h-[44px]"
                    >
                        <span className="sm:hidden">Book Now</span>
                        <span className="hidden sm:inline">Book Transfer Now</span>
                        <ArrowUp className="w-3.5 h-3.5 shrink-0" />
                    </button>
                </div>

            </div>
        </div>
    );
}
