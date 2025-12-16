"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BedDouble, Utensils, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface DayPlan {
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    meals?: string[];
}

interface TourItineraryProps {
    itinerary: DayPlan[];
}

export default function TourItinerary({ itinerary }: TourItineraryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative py-10">
            {/* Central Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 md:translate-x-0">
                <motion.div
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-200 origin-top"
                />
            </div>

            <div className="space-y-12">
                {itinerary.map((day, index) => (
                    <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={cn(
                            "relative flex flex-col md:flex-row items-start gap-8 md:gap-0",
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        )}
                    >
                        {/* Timeline Marker */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white shadow-lg" />
                        </div>

                        {/* Date/Day Indicator - Mobile: Top, Desktop: Side */}
                        <div className={cn(
                            "flex-1 md:w-1/2 px-4 md:px-12 flex flex-col justify-center",
                            index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"
                        )}>
                            <span className="text-emerald-500 font-bold tracking-widest text-sm uppercase mb-1">
                                Day {day.day}
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight">
                                {day.title}
                            </h3>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 md:w-1/2 pl-16 md:pl-0 md:px-12">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    {day.description}
                                </p>

                                {(day.accommodation || day.meals) && (
                                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-50">
                                        {day.accommodation && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-emerald-600 transition-colors">
                                                <BedDouble className="w-4 h-4" />
                                                <span className="font-medium">{day.accommodation}</span>
                                            </div>
                                        )}
                                        {day.meals && day.meals.length > 0 && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-emerald-600 transition-colors">
                                                <Utensils className="w-4 h-4" />
                                                <span>{day.meals.join(", ")}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

