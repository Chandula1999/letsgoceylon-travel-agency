"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1590606623666-412497645185?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center parallax-bg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-6">
                        24/7 Support
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        We&apos;re Here to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                            Help You Plan
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                        Whether you have a question about our tours, need a custom itinerary, or just want to say hello, we&apos;d love to hear from you.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+94719629664" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all">
                            <Phone className="w-4 h-4" />
                            <span>+94 71 962 9664</span>
                        </a>
                        <a href="mailto:letsgoceylontours@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all">
                            <Mail className="w-4 h-4" />
                            <span>letsgoceylontours@gmail.com</span>
                        </a>
                        <a href="https://wa.me/94719629664" className="flex items-center gap-2 px-6 py-3 bg-[#25D366]/20 backdrop-blur-md border border-[#25D366]/30 text-white rounded-full hover:bg-[#25D366]/30 transition-all">
                            <MessageCircle className="w-4 h-4" />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
