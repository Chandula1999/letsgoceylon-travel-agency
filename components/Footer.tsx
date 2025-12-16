"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Send,
    ShieldCheck,
    Award,
    CreditCard,
    Globe
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">

                    {/* Column 1: Brand & Authority */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            {/* Logo Icon */}
                            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Let's Go Ceylon Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Logo Text */}
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight leading-none">
                                    <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Let's Go</span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent ml-1">Ceylon</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for exploring Sri Lanka. We craft personalized experiences that turn into lifelong memories.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 py-4 border-y border-white/5">
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span>Certified Guides</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                                <Award className="w-4 h-4 text-primary" />
                                <span>Top Rated Service</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary active:scale-95 transition-all duration-300 group">
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Curated Tours (SEO) */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-white">Curated Experiences</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                "Wildlife Safaris",
                                "Beach Holidays",
                                "Cultural Triangles",
                                "Hill Country Escapes",
                                "Adventure Tours",
                                "Luxury Honeymoons"
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="/tours" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support & Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-white">Support & Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">No;681/3,Wattegedara, Pelena, Weligama</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">+94 71 962 9664</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">letsgoceylontours@gmail.com</span>
                            </li>
                            <li className="pt-4">
                                <Link href="/contact" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                                    Visit Help Center <ArrowRightIcon className="w-3 h-3" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter (Lead Gen) */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                        <h4 className="text-lg font-bold mb-2 text-white">Unlock Secret Deals</h4>
                        <p className="text-xs text-gray-400 mb-4">
                            Subscribe to get exclusive offers and travel tips delivered to your inbox.
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary focus:outline-none transition-colors text-white text-base placeholder:text-gray-600"
                                />
                                <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-600" />
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                Subscribe Now <Send className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-500 mt-3 text-center">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} LetsGoCeylon. All rights reserved.
                    </p>

                    {/* Payment Trust Signals */}
                    <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <CreditCard className="w-4 h-4" />
                            <span>Secure Payments</span>
                        </div>
                        {/* Placeholder for payment icons - using text/divs for now */}
                        <div className="h-4 w-px bg-white/20"></div>
                        <span className="text-xs font-bold text-gray-400">VISA</span>
                        <span className="text-xs font-bold text-gray-400">Mastercard</span>
                        <span className="text-xs font-bold text-gray-400">PayPal</span>
                    </div>

                    <div className="flex gap-6 text-xs text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
