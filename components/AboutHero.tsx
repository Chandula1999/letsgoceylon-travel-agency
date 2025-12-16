"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588258524675-55d656396b8a?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 border border-white/30">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Authentic Journeys, <br />
                        <span className="text-primary">Unforgettable Memories</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        We are more than just a travel agency. We are your local friends in Sri Lanka, dedicated to showing you the true heart of our island.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
