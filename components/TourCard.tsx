"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface TourProps {
    id: string;
    title: string;
    image: string;
    duration: string;

    location: string;
}

export default function TourCard({ tour }: { tour: TourProps }) {
    return (
        <motion.div
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITEHE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQIRITH/2gAMAwEAAhEDEEA8Af/Z"
                />

            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">


                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                    </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {tour.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    Explore the beauty of {tour.location} with our guided tour. Experience local culture, cuisine, and breathtaking views.
                </p>

                <Link
                    href={`/tours/${tour.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                    View Itinerary <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
