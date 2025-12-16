"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, HeartHandshake } from "lucide-react";

const FEATURES = [
    {
        icon: UserCheck,
        title: "Expert Local Guides",
        description: "Connect with locals who know the island's best-kept secrets, ensuring an authentic experience.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Secure Travel",
        description: "We prioritize your safety with certified vehicles and experienced, vetted drivers.",
    },
    {
        icon: Clock,
        title: "24/7 On-Trip Support",
        description: "Travel with peace of mind knowing our support team is just a message away, day or night.",
    },
    {
        icon: HeartHandshake,
        title: "100% Tailored Itineraries",
        description: "No generic packages. We design every trip around your pace, preferences, and budget.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="pt-4 pb-12 md:py-14 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">

                    {/* Left Side - Visuals */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2574&auto=format&fit=crop"
                                alt="Traveler in Sri Lanka"
                                width={500}
                                height={600}
                                className="object-cover w-full h-[350px] md:h-[600px]"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                                            <Image
                                                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                                alt="User"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-gray-900">500+ <br /> Happy Travelers</div>
                            </div>
                            <p className="text-xs text-gray-500 italic">"The best trip of my life! Highly recommended."</p>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="text-primary font-semibold tracking-wider uppercase text-sm"
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-8 leading-tight"
                        >
                            We Make Your Dream <br />
                            <span className="text-primary">Sri Lanka Trip</span> a Reality
                        </motion.h2>

                        <div className="space-y-5 md:space-y-8">
                            {FEATURES.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
