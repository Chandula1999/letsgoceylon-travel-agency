"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Users, Briefcase, Wifi, Wind, ShieldCheck, UserCheck, Check } from "lucide-react";
import Image from "next/image";

const VEHICLES = [
    {
        id: "sedan",
        name: "Sedan Car",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
        icon: Car,
        capacity: "1-3 Passengers",
        luggage: "2-3 Luggage",
        bestFor: "Airport transfers, couples, small families",
        features: ["Air Conditioned", "Bluetooth Audio", "Comfortable Seating", "English Speaking Driver"]
    },
    {
        id: "minivan",
        name: "Mini Van",
        image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=800",
        icon: Car, // Replace with Van icon if available
        capacity: "4-7 Passengers",
        luggage: "4-6 Luggage",
        bestFor: "Family tours, medium groups, airport runs",
        features: ["Dual A/C", "Spacious Interior", "Sliding Doors", "Child Seat Optional"]
    },
    {
        id: "largevan",
        name: "Large Van",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=800",
        icon: Car,
        capacity: "8-12 Passengers",
        luggage: "8-10 Luggage",
        bestFor: "Large tour groups, extended island trips",
        features: ["High Roof", "PA System", "Ample Legroom", "Overhead Storage"]
    },
    {
        id: "bus",
        name: "Bus / Coaster",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800",
        icon: Car,
        capacity: "13+ Passengers",
        luggage: "High Capacity",
        bestFor: "Delegations, weddings, major group tours",
        features: ["Luxury Seating", "TV/DVD System", "Large Luggage Bay", "Assistant on Board"]
    }
];

export default function VehicleComparison() {
    const [activeTab, setActiveTab] = useState("sedan");

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose the Perfect Vehicle
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From comfortable sedans to spacious buses, we have a fleet to match your group size and travel style.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {VEHICLES.map((vehicle) => (
                        <button
                            key={vehicle.id}
                            onClick={() => setActiveTab(vehicle.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shrink-0 ${activeTab === vehicle.id
                                ? "bg-gray-900 text-white shadow-lg scale-105"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            <vehicle.icon className="w-5 h-5" />
                            {vehicle.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {VEHICLES.map((vehicle) => (
                            activeTab === vehicle.id && (
                                <motion.div
                                    key={vehicle.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                                >
                                    <div className="grid md:grid-cols-2">
                                        {/* Image Side */}
                                        <div className="relative h-64 md:h-auto">
                                            <Image
                                                src={vehicle.image}
                                                alt={vehicle.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                                            <div className="absolute bottom-4 left-4 text-white md:hidden">
                                                <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                                            </div>
                                        </div>

                                        {/* Details Side */}
                                        <div className="p-6 md:p-12">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-6 hidden md:block">
                                                {vehicle.name}
                                            </h3>

                                            <div className="grid grid-cols-2 gap-6 mb-8">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Capacity</p>
                                                        <p className="font-semibold text-gray-900">{vehicle.capacity}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                        <Briefcase className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Luggage</p>
                                                        <p className="font-semibold text-gray-900">{vehicle.luggage}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-8">
                                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                                    Best For
                                                </p>
                                                <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                    {vehicle.bestFor}
                                                </p>
                                            </div>

                                            <div className="mb-8">
                                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                                    Key Features
                                                </p>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {vehicle.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                            <Check className="w-4 h-4 text-secondary" />
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
                                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
                                            >
                                                Book {vehicle.name}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
