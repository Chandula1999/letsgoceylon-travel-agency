"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function NewsletterSection() {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Abstract shapes/gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl opacity-50" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                        Join the Community
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Travel Inspiration in Your Inbox
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Subscribe to receive curated travel guides, hidden gem alerts, and exclusive tips for your next Sri Lankan adventure.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm transition-all"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                        >
                            Subscribe <Send className="w-4 h-4" />
                        </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-6">
                        No spam, ever. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
