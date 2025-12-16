"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, UserCheck, Car, Star } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        name: "Sarah Johnson",
        country: "UK",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        text: "The driver was waiting for us at the airport with a name board. Very professional and safe driving to Kandy.",
        rating: 5
    },
    {
        name: "Michael Chen",
        country: "Singapore",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        text: "Booked a van for our family of 6. The vehicle was brand new and super comfortable. Highly recommended!",
        rating: 5
    },
    {
        name: "Emma Davis",
        country: "Australia",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
        text: "Fixed price as promised. No hidden costs. The driver even stopped at some nice spots for photos.",
        rating: 5
    }
];

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Fixed Pricing",
        desc: "No hidden costs or meters"
    },
    {
        icon: Clock,
        title: "24/7 Support",
        desc: "Always here to help"
    },
    {
        icon: UserCheck,
        title: "Pro Drivers",
        desc: "Licensed & experienced"
    },
    {
        icon: Car,
        title: "Modern Fleet",
        desc: "Clean & comfortable"
    }
];

export default function TrustSection() {
    return (
        <section className="py-14 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Value Props */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-secondary">
                                <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="bg-gray-900 rounded-3xl p-6 md:p-16 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                    </div>

                    <div className="relative z-10 text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Trusted by Travelers
                        </h2>
                        <div className="flex items-center justify-center gap-2 text-amber-400">
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <span className="text-white ml-2 font-semibold">4.9/5 Average Rating</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-8 relative z-10">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-white rounded-2xl p-6 shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{t.name}</p>
                                        <p className="text-xs text-gray-500">{t.country}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 text-amber-400 mb-3">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm italic leading-relaxed">
                                    "{t.text}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
