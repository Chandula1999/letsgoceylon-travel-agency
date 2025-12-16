"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourHero from "@/components/TourHero";
import TourItinerary from "@/components/TourItinerary";
import { Check, Calendar, Info, ShieldCheck, CreditCard, X } from "lucide-react";
import { motion } from "framer-motion";
import { TOURS } from "@/data/tours";

export default function SingleTourPage() {
    const params = useParams();
    const id = typeof params?.id === 'string' ? params.id : '1';
    const tour = TOURS.find(t => t.id === id) || TOURS[0];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <TourHero
                title={tour.title}
                image={tour.image}
                location={tour.location}
                duration={tour.duration}
                rating={tour.rating}
                reviews={tour.reviews}
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Overview Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                                The Experience
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-600 font-light">
                                {tour.description}
                            </p>
                        </motion.section>

                        {/* Highlights Section */}
                        {tour.highlights && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10">
                                    Tour Highlights
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {tour.highlights.map((highlight: string, index: number) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition-colors duration-300 group">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                                                <Check className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-lg text-gray-700 font-light">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Itinerary Section */}
                        {tour.itinerary && (
                            <section>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                                        Your Journey
                                    </h2>
                                    <p className="text-gray-500 font-light">A day-by-day guide to your adventure.</p>
                                </motion.div>
                                <TourItinerary itinerary={tour.itinerary} />
                            </section>
                        )}

                        {/* Inclusions & Exclusions */}
                        {(tour.inclusions || tour.exclusions) && (
                            <section className="grid md:grid-cols-2 gap-12">
                                {tour.inclusions && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                            <h3 className="text-2xl font-serif font-bold text-gray-900">What's Included</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {tour.inclusions.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-gray-700">
                                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                                {tour.exclusions && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <X className="w-6 h-6 text-gray-400" />
                                            <h3 className="text-2xl font-serif font-bold text-gray-900">What's Excluded</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {tour.exclusions.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-gray-600">
                                                    <span className="text-gray-400 font-light flex-shrink-0">—</span>
                                                    <span className="font-light">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </section>
                        )}

                        {/* Payment Policy */}
                        {tour.paymentPolicy && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-100 pt-12"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Payment Policy</h3>
                                <p className="text-gray-600 mb-6 font-light leading-relaxed">{tour.paymentPolicy}</p>
                                {tour.paymentMethods && (
                                    <div className="flex flex-wrap gap-3">
                                        {tour.paymentMethods.map((method, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">
                                                <CreditCard className="w-4 h-4 text-gray-400" />
                                                {method}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.section>
                        )}
                    </div>

                    {/* Booking Sidebar Column */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-8 space-y-8">
                            {/* Price Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />

                                <div className="mb-8">
                                    <span className="text-gray-500 text-sm uppercase tracking-wider font-medium">Starting from</span>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-5xl font-serif font-bold text-gray-900">${tour.price}</span>
                                        <span className="text-gray-500 font-light">/ person</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-4 text-gray-600 bg-gray-50/80 p-4 rounded-2xl hover:bg-emerald-50/50 transition-colors cursor-pointer border border-transparent hover:border-emerald-100">
                                        <Calendar className="w-6 h-6 text-emerald-500" />
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Dates</span>
                                            <span className="font-medium">Select Availability</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600 bg-gray-50/80 p-4 rounded-2xl hover:bg-emerald-50/50 transition-colors cursor-pointer border border-transparent hover:border-emerald-100">
                                        <Info className="w-6 h-6 text-emerald-500" />
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Confirmation</span>
                                            <span className="font-medium">Instant Booking</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-gray-900 text-white font-medium py-5 rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200 transform hover:-translate-y-1">
                                    Book This Experience
                                </button>

                                <p className="text-center text-xs text-gray-400 mt-6 font-light">
                                    Secure your spot today. No hidden fees.
                                </p>
                            </motion.div>

                            {/* Help Card */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="bg-emerald-900/5 rounded-3xl p-6 text-center border border-emerald-100/50 backdrop-blur-sm"
                            >
                                <h4 className="font-serif font-bold text-gray-900 mb-2">Need Help?</h4>
                                <p className="text-sm text-gray-600 mb-4 font-light">Our travel experts are here to assist you.</p>
                                <button className="text-emerald-600 font-medium text-sm hover:underline">
                                    Contact Support
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
}

