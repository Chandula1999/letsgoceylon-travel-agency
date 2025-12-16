"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 80% of viewport height
            setIsVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
                >
                    <div className="flex gap-2">
                        {/* Call Now Button */}
                        <a
                            href="tel:+94719629664"
                            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-sm active:scale-95 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>

                        {/* Book Tour Button */}
                        <Link
                            href="/tours"
                            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-white rounded-full font-semibold text-sm active:scale-95 transition-all"
                        >
                            <MapPin className="w-4 h-4" />
                            Book Tour
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
