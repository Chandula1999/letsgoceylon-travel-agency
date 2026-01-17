"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assetHelpers";

const VEHICLES = [
    {
        name: "Economy Sedan",
        image: getAssetPath("vehicle-sedan"),
        price: "120",
        pax: 3,
        luggage: 2,
        features: ["Air Conditioned", "Comfortable Seating", "Bluetooth Music", "Spacious Interior"],
        recommended: false
    },
    {
        name: "Mini Van",
        image: getAssetPath("vehicle-minivan"),
        price: "145",
        pax: 6,
        luggage: 4,
        features: ["Fully Air Conditioned", "Spacious Interior", "Sliding Doors", "Ideal for Families"],
        recommended: true
    },
    {
        name: "Large Van",
        image: getAssetPath("vehicle-high-roof"),
        price: "160",
        pax: 10,
        luggage: 7,
        features: ["High Roof / AC", "Adjustable Seats", "Ample Luggage Space", "Perfect for Tours"],
        recommended: false
    }
];

export default function TaxiPricing() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-emerald-50/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-emerald-600 font-bold tracking-wider uppercase mb-3">
                        Transparent Pricing
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Choose Your <span className="text-emerald-600">Perfect Ride</span>
                    </h3>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                        No hidden fees. Pay only for the distance you travel.
                        Comfort and safety guaranteed on every trip.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {VEHICLES.map((vehicle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 pt-32 pb-8 px-8 border ${vehicle.recommended ? "border-emerald-500 ring-4 ring-emerald-500/10" : "border-gray-100"
                                }`}
                        >
                            {/* Overflowing Vehicle Image */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-50">
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {vehicle.recommended && (
                                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Popular
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h4>
                                <div className="flex items-baseline justify-center gap-1 text-emerald-600">
                                    <span className="text-sm font-semibold text-gray-500">LKR</span>
                                    <span className="text-5xl font-extrabold">{vehicle.price}</span>
                                    <span className="text-gray-500 font-medium">/km</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-center gap-4 text-sm text-gray-600 border-b border-gray-100 pb-4">
                                    <span className="flex items-center gap-1">
                                        👥 <strong>{vehicle.pax}</strong> Pax
                                    </span>
                                    <span className="flex items-center gap-1">
                                        🧳 <strong>{vehicle.luggage}</strong> Bags
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {vehicle.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="/taxi"
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${vehicle.recommended
                                    ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30"
                                    : "bg-gray-900 text-white hover:bg-black"
                                    }`}>
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
