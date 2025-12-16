"use client";

import TourCard from "@/components/TourCard";
import { motion } from "framer-motion";

interface Tour {
    id: string;
    title: string;
    image: string;
    duration: string;
    price: number;
    rating: number;
    reviews: number;
    location: string;
    category: string;
}

export default function TourGrid({ tours, className = "" }: { tours: Tour[], className?: string }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
            {tours.map((tour, index) => (
                <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: index * 0.05 }}
                >
                    <TourCard tour={tour} />
                </motion.div>
            ))}
        </div>
    );
}
