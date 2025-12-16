"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

// Triple the array for seamless infinite scroll (desktop)
const INFINITE_CATEGORIES = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

export default function TourCategories() {
    const [currentIndex, setCurrentIndex] = useState(CATEGORIES.length); // For desktop carousel
    const [mobileIndex, setMobileIndex] = useState(0); // For mobile single-card
    const [isHovered, setIsHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobileTouched, setIsMobileTouched] = useState(false);

    // Auto-scroll effect (desktop)
    useEffect(() => {
        if (isHovered || isTransitioning) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered, isTransitioning]);

    // Auto-scroll effect (mobile)
    useEffect(() => {
        if (isMobileTouched) return;

        const interval = setInterval(() => {
            setMobileIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [isMobileTouched, mobileIndex]);

    // Reset position for infinite effect (desktop)
    useEffect(() => {
        if (isTransitioning) return;

        if (currentIndex >= CATEGORIES.length * 2) {
            setTimeout(() => {
                setIsTransitioning(true);
                setCurrentIndex(CATEGORIES.length);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 700);
        } else if (currentIndex < CATEGORIES.length) {
            setTimeout(() => {
                setIsTransitioning(true);
                setCurrentIndex(CATEGORIES.length * 2 - 1);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 700);
        }
    }, [currentIndex, isTransitioning]);

    const handlePrev = () => {
        if (!isTransitioning) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    // Mobile swipe handlers
    const handleMobileDragStart = () => {
        setIsMobileTouched(true);
    };

    const handleMobileDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            setMobileIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
        } else if (info.offset.x < -threshold) {
            setMobileIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
        }
        // Resume auto-scroll after 3 seconds of no interaction
        setTimeout(() => setIsMobileTouched(false), 3000);
    };

    return (
        <section className="pt-14 pb-8 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 md:mb-12 gap-4 md:gap-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block"
                        >
                            Discover by Interest
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-4"
                        >
                            Explore Sri Lanka&apos;s <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Diverse Experiences
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-base md:text-lg max-w-2xl"
                        >
                            As Sri Lanka&apos;s leading travel agency, we craft seamless journeys to iconic and hidden destinations tailored just for you.
                        </motion.p>
                    </div>

                    {/* Navigation Buttons - Desktop Only */}
                    <div className="hidden md:flex gap-4 mb-2">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-all hover:scale-110 border border-gray-100"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-all hover:scale-110 border border-gray-100"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* ============== MOBILE VIEW: Single Card with Swipe ============== */}
                <div className="md:hidden">
                    <motion.div
                        className="cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragStart={handleMobileDragStart}
                        onDragEnd={handleMobileDragEnd}
                    >
                        <motion.div
                            className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                            key={mobileIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={CATEGORIES[mobileIndex].image}
                                alt={CATEGORIES[mobileIndex].title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <motion.div
                                    key={`mobile-content-${mobileIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.4 }}
                                >
                                    <h3 className="text-2xl font-serif font-bold mb-2">
                                        {CATEGORIES[mobileIndex].title}
                                    </h3>
                                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                                        {CATEGORIES[mobileIndex].description}
                                    </p>

                                    <Link
                                        href={`/tours/category/${CATEGORIES[mobileIndex].slug}`}
                                        className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-white active:scale-95 transition-all shadow-lg"
                                    >
                                        Explore <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Swipe Hint */}
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Swipe left or right to explore
                    </p>

                    {/* Mobile Dots Indicator - 44px touch targets */}
                    <div className="flex justify-center gap-1 mt-2">
                        {CATEGORIES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setMobileIndex(index)}
                                className="w-3 h-11 flex items-center justify-center"
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <span className={`block h-2 rounded-full transition-all duration-300 ${mobileIndex === index
                                    ? "bg-primary w-6"
                                    : "bg-gray-300 w-2"
                                    }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ============== DESKTOP VIEW: 3-Card Carousel ============== */}
                <div
                    className="hidden md:block relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: `calc(-${currentIndex} * (100% + 2rem) / 3)`
                            }}
                            transition={{
                                duration: isTransitioning ? 0 : 0.7,
                                ease: isTransitioning ? "linear" : [0.32, 0.72, 0, 1]
                            }}
                        >
                            {INFINITE_CATEGORIES.map((category, index) => (
                                <div
                                    key={`${category.id}-${index}`}
                                    className="min-w-[calc((100%-4rem)/3)] group relative h-96 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        loading="lazy"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 w-full p-8">
                                        <h3 className="text-3xl font-bold text-white mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                                            {category.title}
                                        </h3>

                                        <Link
                                            href={`/tours/category/${category.slug}`}
                                            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all hover:gap-3 shadow-lg"
                                        >
                                            Explore <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Desktop Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {CATEGORIES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index + CATEGORIES.length)}
                                className={`h-2 rounded-full transition-all ${(currentIndex % CATEGORIES.length) === index
                                    ? "bg-primary w-8"
                                    : "bg-gray-300 w-2"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
