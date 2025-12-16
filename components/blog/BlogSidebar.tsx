"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function BlogSidebar() {
    return (
        <div className="sticky top-24 space-y-8">
            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/5 rounded-2xl p-6 border border-primary/10"
            >
                <h3 className="font-serif font-bold text-xl mb-3 text-primary">
                    Plan Your Sri Lanka Trip
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                    Inspired by this article? Let us help you plan the perfect custom itinerary for your dream vacation.
                </p>
                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary-dark transition-colors"
                >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>

            {/* Quick Links / Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-serif font-bold text-lg mb-4">Explore More</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li>
                        <Link href="/tours" className="hover:text-primary transition-colors flex justify-between">
                            <span>Tour Packages</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/taxi" className="hover:text-primary transition-colors flex justify-between">
                            <span>Taxi Service</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-primary transition-colors flex justify-between">
                            <span>Travel Blog</span>
                            <span className="text-gray-400">→</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Contact Mini */}
            <div className="bg-emerald-900 rounded-2xl p-6 text-white">
                <h4 className="font-serif font-bold text-lg mb-4">Need Help?</h4>
                <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3 opacity-90">
                        <Phone className="w-4 h-4" />
                        <span>+94 71 962 9664</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-90">
                        <Mail className="w-4 h-4" />
                        <span>letsgoceylontours@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
