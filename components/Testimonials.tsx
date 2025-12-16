"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        location: "United Kingdom",
        rating: 5,
        text: "An unforgettable experience! The tour was perfectly organized, and our driver was incredibly knowledgeable and friendly. Sri Lanka is truly a paradise.",
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Singapore",
        rating: 5,
        text: "Lets Go Ceylon made our family vacation stress-free and amazing. The vehicle was comfortable, and the itinerary covered all the best spots. Highly recommended!",
    },
    {
        id: 3,
        name: "Emma & David",
        location: "Australia",
        rating: 5,
        text: "From the airport pickup to the final drop-off, everything was seamless. The beach tour was the highlight of our trip. Thank you for the wonderful memories!",
    },
];

export default function Testimonials() {
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isTouched, setIsTouched] = useState(false);

    // Auto-scroll for mobile
    useEffect(() => {
        if (isTouched) return;

        const interval = setInterval(() => {
            setMobileIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isTouched, mobileIndex]);

    const handleDragStart = () => {
        setIsTouched(true);
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x > threshold) {
            setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        } else if (info.offset.x < -threshold) {
            setMobileIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }
        setTimeout(() => setIsTouched(false), 3000);
    };

    const currentTestimonial = testimonials[mobileIndex];

    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        Guest Reviews
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-accent mb-4"
                    >
                        What Our Travelers Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Don&apos;t just take our word for it. Here&apos;s what our guests have to say.
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
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 relative z-10">
                                &quot;{currentTestimonial.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                    {currentTestimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-accent">{currentTestimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Swipe Hint */}
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Swipe to read more reviews
                    </p>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-1 mt-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setMobileIndex(index)}
                                className="w-8 h-8 flex items-center justify-center"
                                aria-label={`Go to review ${index + 1}`}
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
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/10" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-6 relative z-10">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-accent">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
