"use client";

import { motion } from "framer-motion";
import { Home, Zap, MapPin, Gift } from "lucide-react";

const FEATURES = [
    {
        icon: Home,
        title: "Home Pickup",
        desc: "We pick you up from your doorstep"
    },
    {
        icon: Zap,
        title: "Fast Booking",
        desc: "Instant confirmation via WhatsApp"
    },
    {
        icon: Gift,
        title: "Bonuses",
        desc: "Special discounts for long trips"
    },
    {
        icon: MapPin,
        title: "GPS Searching",
        desc: "Live tracking for your safety"
    }
];

export default function TaxiFeatures() {
    return (
        <section className="py-20 bg-emerald-700 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 border-4 border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-emerald-700 transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-extrabold uppercase mb-2">{feature.title}</h3>
                            <p className="font-medium opacity-80 max-w-xs mx-auto">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
