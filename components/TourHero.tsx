"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";

interface TourHeroProps {
    title?: string;
    image?: string;
    location?: string;
    duration?: string;
    rating?: number;
    reviews?: number;
}

export default function TourHero({ title, image, location, duration, rating, reviews }: TourHeroProps) {
    const isDetailView = !!title;

    return (
        <section className="relative h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                {isDetailView && image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/beach.mp4" type="video/mp4" />
                        </video>
                    </div>
                )}
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    {isDetailView ? (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center justify-center gap-3 text-emerald-300 mb-6 font-medium tracking-[0.2em] uppercase text-sm md:text-base bg-white/10 backdrop-blur-md py-2 px-6 rounded-full inline-flex border border-white/10"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>{location}</span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-lg font-light tracking-wide">
                                <div className="flex items-center gap-3 bg-black/30 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <Clock className="w-5 h-5 text-emerald-400" />
                                    <span>{duration}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-black/30 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span>{rating} <span className="opacity-60 text-sm">({reviews} reviews)</span></span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
                                Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 italic">Ceylon</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                                Curated journeys through ancient cities, misty mountains, and pristine beaches.
                            </p>

                            {/* Search Bar - Glassmorphism Premium */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/30 p-2 rounded-full flex items-center shadow-2xl overflow-hidden ring-1 ring-white/20"
                            >
                                <div className="flex-1 px-8">
                                    <input
                                        type="text"
                                        placeholder="Where does your soul allow you to go?"
                                        className="w-full bg-transparent text-white placeholder-white/60 outline-none text-xl font-light"
                                    />
                                </div>
                                <button className="bg-emerald-500 hover:bg-emerald-400 text-white p-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                    <Search className="w-6 h-6" />
                                </button>
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-4 cursor-pointer hover:text-white transition-colors"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to Explore</span>
                <div className="relative w-[1px] h-16 bg-white/20 overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-emerald-400"
                        animate={{ y: [0, 64, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

