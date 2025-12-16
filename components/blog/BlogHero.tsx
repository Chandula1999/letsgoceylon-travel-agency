"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function BlogHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image / Placeholder for video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                />
                {/* Optional: Video Background would go here */}
                {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/path/to/video.mp4" type="video/mp4" />
        </video> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-6">
                        The Travel Journal
                    </span>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        Stories from <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                            Paradise
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover hidden gems, cultural secrets, and the untold stories of Sri Lanka through our curated travel experiences.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
