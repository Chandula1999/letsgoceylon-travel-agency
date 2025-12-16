"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowRight, Car, Users, Briefcase, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const VEHICLES = [
    {
        id: "sedan",
        name: "Standard Sedan",
        icon: Car,
        capacity: "3 Pax",
        luggage: "2 Bags",
        price: "Rs. 4,500", // Example base price
        desc: "Best for small families"
    },
    {
        id: "minivan",
        name: "Mini Van",
        icon: Car, // Ideally a van icon
        capacity: "7 Pax",
        luggage: "6 Bags",
        price: "Rs. 6,500",
        desc: "Great for groups"
    },
    {
        id: "largevan",
        name: "Large Van",
        icon: Car,
        capacity: "12 Pax",
        luggage: "10 Bags",
        price: "Rs. 9,000",
        desc: "Extended trips"
    },
    {
        id: "bus",
        name: "Bus",
        icon: Car,
        capacity: "20+ Pax",
        luggage: "Large",
        price: "Rs. 15,000",
        desc: "Large delegations"
    }
];

export default function NewTaxiHero() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        pickup: "",
        dropoff: "",
        date: "",
        time: "",
        vehicle: "sedan"
    });

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1 && formData.pickup && formData.dropoff && formData.date) {
            setStep(2);
        }
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleBook = () => {
        const message = encodeURIComponent(
            `🚖 *New Taxi Booking*\n\n` +
            `📍 Pickup: ${formData.pickup}\n` +
            `🏁 Dropoff: ${formData.dropoff}\n` +
            `📅 Date: ${formData.date}\n` +
            `⏰ Time: ${formData.time}\n` +
            `🚙 Vehicle: ${VEHICLES.find(v => v.id === formData.vehicle)?.name}`
        );
        window.open(`https://wa.me/94719629661?text=${message}`, "_blank");
    };

    return (
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2574&auto=format&fit=crop"
                    alt="Sri Lanka Sigiriya"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-semibold mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            #1 Trusted Taxi Service
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Your Reliable Ride <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-400">
                                Across Sri Lanka
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-8 max-w-lg font-light leading-relaxed">
                            Comfortable, safe, and fixed rates for Sedans, Vans, and Buses.
                            Experience the island with professional local drivers.
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                Fixed Pricing
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                24/7 Support
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                English Speaking
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Booking Wizard */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto lg:ml-auto w-full"
                    >
                        <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900 text-lg">
                                {step === 1 ? "Get Instant Quote" : "Select Vehicle"}
                            </h3>
                            <div className="flex gap-2">
                                <div className={`w-2 h-2 rounded-full ${step === 1 ? "bg-primary" : "bg-gray-300"}`} />
                                <div className={`w-2 h-2 rounded-full ${step === 2 ? "bg-primary" : "bg-gray-300"}`} />
                            </div>
                        </div>

                        <div className="p-8">
                            <AnimatePresence mode="wait">
                                {step === 1 ? (
                                    <motion.form
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        onSubmit={handleNext}
                                        className="space-y-5"
                                    >
                                        <div className="space-y-4">
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-primary" />
                                                <input
                                                    type="text"
                                                    placeholder="Pick-up Location"
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                    required
                                                    value={formData.pickup}
                                                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-secondary" />
                                                <input
                                                    type="text"
                                                    placeholder="Drop-off Location"
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                    required
                                                    value={formData.dropoff}
                                                    onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="date"
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                    required
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="time"
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                                    required
                                                    value={formData.time}
                                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
                                        >
                                            Check Fares
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                            {VEHICLES.map((v) => (
                                                <div
                                                    key={v.id}
                                                    onClick={() => setFormData({ ...formData, vehicle: v.id })}
                                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between group ${formData.vehicle === v.id
                                                        ? "border-primary bg-primary/5"
                                                        : "border-gray-100 hover:border-primary/30"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${formData.vehicle === v.id ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                                                            }`}>
                                                            <v.icon className="w-6 h-6" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900">{v.name}</p>
                                                            <p className="text-xs text-gray-500 flex items-center gap-2">
                                                                <Users className="w-3 h-3" /> {v.capacity}
                                                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                                <Briefcase className="w-3 h-3" /> {v.luggage}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-primary">{v.price}</p>
                                                        <p className="text-[10px] text-gray-400">Est. Fare</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <button
                                                onClick={handleBack}
                                                className="px-6 py-4 border border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={handleBook}
                                                className="flex-1 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-secondary/20"
                                            >
                                                Book Now
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
