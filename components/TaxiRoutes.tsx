"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock, ArrowRight, Gauge, Coffee, Camera, Mountain, Trees } from "lucide-react";

export interface RouteItem {
    id: string;
    title: string;
    tag: string;
    distance: string;
    description: string;
    sedanPrice: string;
    sedanUsd: string;
    vanPrice: string;
    vanUsd: string;
    perk: string;
    icon: any;
}

const POPULAR_ROUTES: RouteItem[] = [
    {
        id: "galle",
        title: "BIA Airport ➔ Galle / Mirissa",
        tag: "Via E01 Expressway",
        distance: "155 km • ~2h 15m",
        description: "Direct non-stop airport transfer to the historic Galle Fort or Mirissa surfing bays.",
        sedanPrice: "LKR 20,000",
        sedanUsd: "~$60",
        vanPrice: "LKR 26,000",
        vanUsd: "~$79",
        perk: "All Tolls Included",
        icon: Gauge
    },
    {
        id: "colombo",
        title: "BIA Airport ➔ Colombo City",
        tag: "Via E03 Expressway",
        distance: "35 km • ~40 mins",
        description: "Speedy transfer right to Colombo 01, 02, 03 or 07 luxury hotels and business districts.",
        sedanPrice: "LKR 8,500",
        sedanUsd: "~$26",
        vanPrice: "LKR 13,500",
        vanUsd: "~$40",
        perk: "All Tolls Included",
        icon: Gauge
    },
    {
        id: "kandy",
        title: "BIA Airport ➔ Kandy",
        tag: "Scenic Foothills",
        distance: "105 km • ~3 hours",
        description: "Journey past tropical pineapple plantations and spice gardens into the Temple of the Tooth city.",
        sedanPrice: "LKR 18,500",
        sedanUsd: "~$56",
        vanPrice: "LKR 23,000",
        vanUsd: "~70",
        perk: "Optional Spice Garden Stop",
        icon: Coffee
    },
    {
        id: "ella",
        title: "Colombo / BIA ➔ Ella",
        tag: "Mountain Highway",
        distance: "210 km • ~5.5 hours",
        description: "Picturesque ascent into tea country waterfalls, Ella Rock, and the Nine Arch Bridge viaduct.",
        sedanPrice: "LKR 31,000",
        sedanUsd: "~$95",
        vanPrice: "LKR 37,500",
        vanUsd: "~$112",
        perk: "Ravana Falls Viewpoint",
        icon: Mountain
    },
    {
        id: "sigiriya",
        title: "BIA Airport ➔ Sigiriya Fortress",
        tag: "Cultural Triangle",
        distance: "145 km • ~3.5 hours",
        description: "Direct to the UNESCO 5th Century Citadel, Lion Rock, and Dambulla Cave Temples.",
        sedanPrice: "LKR 24,000",
        sedanUsd: "~$72",
        vanPrice: "LKR 29,000",
        vanUsd: "~$89",
        perk: "Eco Safari Connection",
        icon: Trees
    },
    {
        id: "nuwaraeliya",
        title: "Kandy ➔ Nuwara Eliya",
        tag: "Tea Trail Valleys",
        distance: "78 km • ~2.5 hours",
        description: "Chauffeur guided tour past Ramboda Falls, Damro Tea Factory and mist-veiled colonial estates.",
        sedanPrice: "LKR 16,000",
        sedanUsd: "~$49",
        vanPrice: "LKR 21,000",
        vanUsd: "~$64",
        perk: "Free Tea Tasting Stop",
        icon: Camera
    }
];

interface TaxiRoutesProps {
    onSelectRoute: (routeId: string) => void;
}

export default function TaxiRoutes({ onSelectRoute }: TaxiRoutesProps) {
    return (
        <section className="w-full py-20 bg-slate-900 text-white" id="routes">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                        Guaranteed Fixed Rates
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Most Popular Airport & Intercity Routes
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base mt-2">
                        Every fare includes Southern & Katunayake expressway toll cards, parking fees, luggage handling, and professional chauffeur fee. Zero tipping pressure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POPULAR_ROUTES.map((route, index) => {
                        const IconComponent = route.icon;
                        return (
                            <motion.div
                                key={route.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-2xl transition-all group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                                            <IconComponent className="w-3.5 h-3.5" />
                                            {route.tag}
                                        </span>
                                        <span>{route.distance}</span>
                                    </div>

                                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                                        {route.title}
                                    </h3>

                                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                                        {route.description}
                                    </p>

                                    {/* Fare breakdown */}
                                    <div className="space-y-2 mt-5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                                        <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
                                            <span className="text-slate-300 shrink-0">Sedan (1-3 Pax):</span>
                                            <span className="font-bold text-emerald-400 shrink-0">
                                                {route.sedanPrice} <span className="text-slate-500 font-normal">({route.sedanUsd})</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 text-xs flex-wrap">
                                            <span className="text-slate-200 font-medium shrink-0">Luxury Van (4-8 Pax):</span>
                                            <span className="font-extrabold text-amber-400 shrink-0">
                                                {route.vanPrice} <span className="text-slate-500 font-normal">({route.vanUsd})</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between mt-4 border-t border-slate-800/80">
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        {route.perk}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => onSelectRoute(route.id)}
                                        className="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all flex items-center gap-1 shadow"
                                    >
                                        <span>Quick Book</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
