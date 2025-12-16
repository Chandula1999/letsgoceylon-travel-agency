"use client";


import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourHero from "@/components/TourHero";
import TourFilterBar from "@/components/TourFilterBar";
import TourGrid from "@/components/TourGrid";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

import { TOURS } from "@/data/tours";


export default function ToursPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    // Filter logic
    const filteredTours = TOURS.filter(tour => {
        if (activeCategory === "all") return true;
        // Case-insensitive comparison and handle defaults
        return tour.category?.toLowerCase() === activeCategory.toLowerCase();
    });

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <TourHero />

            <div className="container mx-auto px-4 py-16">
                {/* Editor's Choice / Trending Section - Only show on "all" or keep visible? Usually nicer to hide or filter too. Let's keep it static for now as requested, or maybe hide it when filtering? 
                   Let's hide Trending if filtering for specific category to focus results.
                */}
                {activeCategory === "all" && (
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
                                <p className="text-gray-500 mt-1">Most popular packages this month</p>
                            </div>
                            <button onClick={() => setActiveCategory("all")} className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                                View All <span className="text-xl">→</span>
                            </button>
                        </div>

                        {/* Featured Card (Large) + 2 Smaller Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Large Featured Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={TOURS[0].image}
                                    alt={TOURS[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <div className="bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 uppercase tracking-wider">
                                        Best Seller
                                    </div>
                                    <h3 className="text-4xl font-serif font-bold mb-2">{TOURS[0].title}</h3>
                                    <div className="flex items-center gap-4 text-sm font-medium">
                                        <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-emerald-500 text-emerald-500" /> {TOURS[0].rating} ({TOURS[0].reviews} reviews)</span>
                                        <span>•</span>
                                        <span>{TOURS[0].duration}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Side Stack */}
                            <div className="flex flex-col gap-8">
                                {TOURS.slice(1, 3).map((tour, idx) => (
                                    <motion.div
                                        key={tour.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative h-[234px] rounded-3xl overflow-hidden group cursor-pointer"
                                    >
                                        <Image
                                            src={tour.image}
                                            alt={tour.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-6 text-white">
                                            <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                                            <p className="text-sm text-white/80">{tour.location}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Filter Bar - Now below Trending section */}
                <TourFilterBar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* All Tours Grid */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {activeCategory === "all" ? "All Packages" : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Packages`}
                    </h2>
                    <TourGrid tours={filteredTours} />
                </div>
            </div>

            <Footer />
        </main>
    );
}
