"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import { Users, Heart, Shield, Award } from "lucide-react";

const STATS = [
    { label: "Years of Experience", value: "5+" },
    { label: "Happy Travelers", value: "1000+" },
    { label: "Destinations", value: "50+" },
    { label: "Local Guides", value: "20+" },
];

const VALUES = [
    {
        icon: Heart,
        title: "Authenticity",
        description: "We believe in showing you the real Sri Lanka, connecting you with local communities and hidden gems."
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Your safety is our top priority. We use well-maintained vehicles and experienced, licensed drivers."
    },
    {
        icon: Users,
        title: "Personalized Service",
        description: "Every traveler is unique. We tailor our tours and services to match your specific interests and needs."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutHero />

            {/* Mission Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-serif font-bold text-gray-900 mb-6"
                        >
                            Our Mission
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 leading-relaxed"
                        >
                            At Lets Go Ceylon Tours, our mission is simple: to share the magic of our island home with the world. We strive to create authentic, sustainable, and unforgettable travel experiences that leave a positive impact on both our guests and our local communities.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUES.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-gray-50 rounded-2xl text-center hover:bg-emerald-50 transition-colors duration-300 group"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-accent text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <Footer />
        </main>
    );
}
