"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Luggage, ShieldCheck, Wifi, Sparkles, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface FleetVehicle {
    id: string;
    category: 'sedan' | 'suv' | 'van';
    name: string;
    subtitle: string;
    description: string;
    image: string;
    badge?: string;
    acBadge: string;
    pax: string;
    luggage: string;
    featureHighlight: string;
    amenities: string[];
    ratePerKm: number;
}

const FLEET_DATA: FleetVehicle[] = [
    {
        id: "sedan",
        category: "sedan",
        name: "Toyota Prius / Allion",
        subtitle: "Comfort Sedan",
        description: "Ideal for swift expressway trips between Colombo, BIA Airport, Galle, and southern beach towns.",
        image: "/assets/vehicles/prius30.jpg",
        badge: "Most Popular for Couples",
        acBadge: "100% Dual AC",
        pax: "3-4 Pax",
        luggage: "2 Lg + 2 Sm",
        featureHighlight: "Plush Velvet",
        amenities: ["High-speed 4G Wi-Fi", "Cold King Coconut", "Mobile Chargers"],
        ratePerKm: 135
    },
    {
        id: "suv",
        category: "suv",
        name: "Toyota Fortuner 4x4",
        subtitle: "Premium SUV",
        description: "High ground clearance and power for Nuwara Eliya mountain passes, Ella ravines, and national parks.",
        image: "/assets/vehicles/Toyota Fortuner.jpg",
        badge: "Hill Country & Safari Ready",
        acBadge: "4WD Active",
        pax: "4-5 Pax",
        luggage: "3 Lg + 2 Sm",
        featureHighlight: "4WD Switch",
        amenities: ["Leather Reclining", "High Ground Clearance", "Panoramic Windows"],
        ratePerKm: 190
    },
    {
        id: "kdh",
        category: "van",
        name: "Toyota HiAce KDH Super GL",
        subtitle: "Luxury Van",
        description: "Our crown-jewel touring van. Superior suspension, extra legroom, velvet seats, and cavernous luggage hold.",
        image: "/assets/vehicles/Toyota KDH Flat Roof.jpg",
        badge: "★ Family & Group Flagship",
        acBadge: "Individual Row AC",
        pax: "6-8 Pax",
        luggage: "5 Lg + 4 Sm",
        featureHighlight: "4G Unlimited",
        amenities: ["USB Ports per Seat", "Chilled Cooler Box", "Reclining Velvet"],
        ratePerKm: 165
    },
    {
        id: "highroof",
        category: "van",
        name: "Toyota KDH High Roof",
        subtitle: "High-Roof Van",
        description: "Standing room interior with custom surfboard and oversized suitcase capacity for full island excursions.",
        image: "/assets/vehicles/Toyota KDH High Roof.jpg",
        badge: "Large Groups (9-10 Pax)",
        acBadge: "High Overhead AC",
        pax: "9-10 Pax",
        luggage: "8 Lg + 6 Sm",
        featureHighlight: "Standing Height",
        amenities: ["High Overhead Clearance", "PA Microphone System"],
        ratePerKm: 210
    },
    {
        id: "vip",
        category: "sedan",
        name: "Mercedes-Benz E-Class",
        subtitle: "VIP Luxury",
        description: "Discreet executive travel with suited multilingual chauffeur guide, ambient quiet cabin, and priority airport ramp.",
        image: "/assets/vehicles/Mercedes-Benz E-Class.jpg",
        badge: "VIP Executive Protocol",
        acBadge: "Dual Climate Control",
        pax: "3 Pax",
        luggage: "2 Large Bags",
        featureHighlight: "VIP Chauffeur",
        amenities: ["Suited Driver", "Mineral Water & Mints", "Privacy Blinds"],
        ratePerKm: 350
    },
    {
        id: "economy",
        category: "sedan",
        name: "Toyota Axio / Wagon R",
        subtitle: "Economy Sedan",
        description: "Lightweight, agile and economical for solo backpackers, digital nomads, and short suburban trips.",
        image: "/assets/vehicles/Wagon R.jpg",
        badge: "Eco Budget Friendly",
        acBadge: "Climate Control",
        pax: "2-3 Pax",
        luggage: "2 Cabin Bags",
        featureHighlight: "Hybrid Tech",
        amenities: ["Fuel-Efficient", "Digital Meter Verified"],
        ratePerKm: 110
    }
];

interface TaxiFleetProps {
    onSelectVehicle: (vehId: string) => void;
}

export default function TaxiFleet({ onSelectVehicle }: TaxiFleetProps) {
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'sedan' | 'suv' | 'van'>('all');

    const filteredVehicles = FLEET_DATA.filter(veh =>
        selectedFilter === 'all' ? true : veh.category === selectedFilter
    );

    return (
        <section className="w-full py-20 bg-slate-50" id="fleet">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Header & Filter Pills */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                            Pristine Island Fleet
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            Purpose-Built for Sri Lankan Roads
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base mt-2">
                            From coastal expressway cruisers to hill country 4WD safari rigs — all inspected monthly.
                        </p>
                    </div>

                    {/* Fleet Filter Buttons */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button
                            onClick={() => setSelectedFilter('all')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedFilter === 'all'
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                                }`}
                        >
                            All Fleet ({FLEET_DATA.length})
                        </button>
                        <button
                            onClick={() => setSelectedFilter('sedan')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedFilter === 'sedan'
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                                }`}
                        >
                            Sedans
                        </button>
                        <button
                            onClick={() => setSelectedFilter('suv')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedFilter === 'suv'
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                                }`}
                        >
                            4x4 SUVs
                        </button>
                        <button
                            onClick={() => setSelectedFilter('van')}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedFilter === 'van'
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                                }`}
                        >
                            Vans & Mini-Coaches
                        </button>
                    </div>
                </div>

                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVehicles.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Card Header Image */}
                            <div className="relative h-48 md:h-56 w-full overflow-hidden bg-slate-900">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                                {vehicle.badge && (
                                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                                        {vehicle.badge}
                                    </div>
                                )}

                                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-0.5 rounded border border-white/10">
                                    {vehicle.acBadge}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-xl font-bold text-slate-900 leading-snug">{vehicle.name}</h3>
                                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shrink-0">
                                            {vehicle.subtitle}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                                        {vehicle.description}
                                    </p>

                                    {/* Capacity & Highlights Grid */}
                                    <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                                        <div>
                                            <Users className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                                            <span className="block text-xs font-bold text-slate-900">{vehicle.pax}</span>
                                        </div>
                                        <div>
                                            <Luggage className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                                            <span className="block text-xs font-bold text-slate-900">{vehicle.luggage}</span>
                                        </div>
                                        <div>
                                            <Sparkles className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                                            <span className="block text-xs font-bold text-slate-900">{vehicle.featureHighlight}</span>
                                        </div>
                                    </div>

                                    {/* Amenity Badges */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {vehicle.amenities.map((amenity, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-[11px] text-slate-400 font-semibold block uppercase">From Rate</span>
                                        <span className="text-lg font-extrabold text-slate-900">
                                            LKR {vehicle.ratePerKm} <span className="text-xs font-normal text-slate-500">/ km</span>
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => onSelectVehicle(vehicle.id)}
                                        className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-emerald-600 transition-colors flex items-center gap-1 shadow"
                                    >
                                        <span>Select {vehicle.subtitle.split(' ')[0]}</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
