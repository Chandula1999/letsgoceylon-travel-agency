"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { getAssetPath } from "@/lib/assetHelpers";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={getAssetPath("hero-beach-video")} type="video/mp4" />
                </video>
                {/* Sophisticated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >


                    {/* Main Heading */}
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-xl">
                        Experience the Magic <br />
                        of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Sri Lanka</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base md:text-2xl text-gray-100 max-w-2xl mx-auto mb-6 md:mb-10 font-light leading-relaxed drop-shadow-md">
                        From golden beaches to misty mountains, explore the island's hidden gems with our curated tour packages and premium travel service.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 w-full max-w-md mx-auto">
                        <Link
                            href="/tours"
                            className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-primary/90 active:scale-95 text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(5,150,105,0.4)] flex items-center justify-center gap-2"
                        >
                            Find Your Tour
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/taxi#booking-form"
                            className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/20 active:scale-95 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Book a Taxi
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 group-hover:text-primary transition-colors" />
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 md:mt-12 flex items-center gap-2 text-xs md:text-sm text-white/80 bg-black/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm"
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="font-medium">4.9/5 from 500+ Travelers</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
