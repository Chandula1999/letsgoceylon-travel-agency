"use client";

import { useState, useEffect } from "react";
import TourCard from "./TourCard";
import { motion, PanInfo } from "framer-motion";

import { TOURS } from "@/data/tours";

const POPULAR_TOURS = TOURS.slice(0, 3);

export default function PopularTours() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isTouched, setIsTouched] = useState(false);

    // Auto-scroll for mobile
    useEffect(() => {
        if (isTouched) return;

        const interval = setInterval(() => {
            setMobileIndex((prev) => (prev === POPULAR_TOURS.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isTouched, mobileIndex]);

    const handleDragStart = () => {
        setIsTouched(true);
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            setMobileIndex((prev) => (prev === 0 ? POPULAR_TOURS.length - 1 : prev - 1));
        } else if (info.offset.x < -threshold) {
            setMobileIndex((prev) => (prev === POPULAR_TOURS.length - 1 ? 0 : prev + 1));
        }
        setTimeout(() => setIsTouched(false), 3000);
    };

    return (
        <section className="py-14 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4 md:mb-6"
                    >
                        Popular Tour Packages
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
                    >
                        Discover our most loved itineraries, crafted to give you the perfect blend of adventure, culture, and relaxation.
                    </motion.p>
                </div>

                {/* Mobile Swipable View */}
                <div className="md:hidden">
                    <motion.div
                        className="cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    >
                        <motion.div
                            key={mobileIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <TourCard tour={POPULAR_TOURS[mobileIndex]} />
                        </motion.div>
                    </motion.div>

                    {/* Swipe Hint */}
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Swipe to see more tours
                    </p>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-1 mt-4">
                        {POPULAR_TOURS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setMobileIndex(index)}
                                className="w-11 h-11 flex items-center justify-center"
                                aria-label={`Go to tour ${index + 1}`}
                            >
                                <span className={`block h-2 rounded-full transition-all duration-300 ${mobileIndex === index
                                    ? "bg-primary w-6"
                                    : "bg-gray-300 w-2"
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POPULAR_TOURS.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TourCard tour={tour} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
