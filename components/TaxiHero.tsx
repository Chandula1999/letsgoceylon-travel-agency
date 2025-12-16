"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Calendar, Clock, Car, ArrowRight, Star, Users, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import LocationAutocomplete from "./LocationAutocomplete";

export default function TaxiHero() {
    const [formData, setFormData] = useState({
        pickup: "",
        dropoff: "",
        phone: "",
        date: "",
        time: "",
        vehicle: "sedan",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = encodeURIComponent(
            `🚖 *Taxi Booking*\n\n` +
            `📍 Pickup: ${formData.pickup}\n` +
            `🏁 Dropoff: ${formData.dropoff}\n` +
            `📱 Phone: ${formData.phone}\n` +
            `📅 Date: ${formData.date}\n` +
            `⏰ Time: ${formData.time}\n` +
            `🚙 Vehicle: ${formData.vehicle}\n` +
            `💬 Message: ${formData.message}`
        );
        window.open(`https://wa.me/94719629661?text=${message}`, "_blank");
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-black overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1605218427368-35b0198d8d91?q=80&w=2600&auto=format&fit=crop"
                    alt="Luxury Taxi Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-emerald-500 font-bold tracking-wider uppercase mb-4">
                            Reliable & Affordable Taxi Service
                        </h2>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            BOOK YOUR <br />
                            <span className="text-emerald-500">RIDE NOW</span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                                <Phone className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Call for Booking</p>
                                <a href="tel:0719629661" className="text-3xl md:text-5xl font-bold text-white hover:text-emerald-500 transition-colors">
                                    071 962 9661
                                </a>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg max-w-lg leading-relaxed border-l-4 border-emerald-500 pl-6">
                            Experience the comfort of our premium fleet.
                            Professional drivers, fixed rates, and 24/7 service across Sri Lanka.
                        </p>

                        {/* Trust Indicators */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800 pt-8">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                                    <Star className="w-5 h-5 fill-emerald-500" />
                                    <span className="font-bold">4.9/5</span>
                                </div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Top Rated</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                                    <Users className="w-5 h-5" />
                                    <span className="font-bold">500+</span>
                                </div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Happy Riders</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="font-bold">100%</span>
                                </div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Safe Rides</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-bold">24/7</span>
                                </div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">Support</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Booking Form (Box Style) */}
                    <motion.div
                        id="booking-form"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-emerald-600 p-1 rounded-3xl shadow-2xl"
                    >
                        <div className="bg-white rounded-[20px] p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">
                                Get Your Quote
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <LocationAutocomplete
                                        label="Pickup"
                                        value={formData.pickup}
                                        onChange={(val) => setFormData({ ...formData, pickup: val })}
                                        iconColor="text-emerald-600"
                                    />
                                    <LocationAutocomplete
                                        label="Dropoff"
                                        value={formData.dropoff}
                                        onChange={(val) => setFormData({ ...formData, dropoff: val })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="Your mobile number"
                                            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                            required
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input
                                                type="date"
                                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                                required
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Time</label>
                                        <div className="relative">
                                            <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <input
                                                type="time"
                                                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                                                required
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Vehicle Type</label>
                                    <div className="relative">
                                        <Car className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <select
                                            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium appearance-none"
                                            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                                        >
                                            <option value="sedan">Standard Sedan (3 Pax)</option>
                                            <option value="minivan">Mini Van (7 Pax)</option>
                                            <option value="largevan">Large Van (12 Pax)</option>
                                            <option value="bus">Bus (20+ Pax)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Message (Optional)</label>
                                    <textarea
                                        placeholder="Any special requests?"
                                        rows={2}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium resize-none"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg uppercase tracking-wider hover:bg-gray-900 transition-all flex items-center justify-center gap-2 mt-2"
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5 text-emerald-500" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
