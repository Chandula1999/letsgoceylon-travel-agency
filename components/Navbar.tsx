"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "Taxi Service", href: "/taxi" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "py-2"
                        : "py-4"
                )}
            >
                {/* Glassmorphism Background */}
                <div
                    className={cn(
                        "absolute inset-0 transition-all duration-500",
                        isScrolled
                            ? "bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border-b border-white/10"
                            : "bg-transparent"
                    )}
                />

                {/* Animated Gradient Line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                        scaleX: isScrolled ? 1 : 0,
                        opacity: isScrolled ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent origin-center"
                />

                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative z-50 flex items-center gap-3 group"
                    >
                        {/* Logo Icon */}
                        <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden ring-2 ring-amber-400/50 group-hover:ring-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20">
                            <img
                                src="/assets/logo.png"
                                alt="Let's Go Ceylon Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Logo Text */}
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold tracking-tight leading-none">
                                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">Lets Go</span>
                                <span className="bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent ml-1.5 drop-shadow-sm">Ceylon Tours</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            isActive
                                                ? "text-white bg-white/15 backdrop-blur-sm"
                                                : "text-white/80 hover:text-white hover:bg-white/10"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-white/20"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}

                        {/* CTA Button with Shimmer */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="ml-4"
                        >
                            <Link
                                href="/contact"
                                className="hidden lg:inline-flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                <Sparkles className="w-4 h-4 relative z-10" />
                                <span className="relative z-10">Book Now</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center text-white rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 active:scale-95 transition-all"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                        />

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-20 -left-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-40 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col items-center justify-center p-6">
                            <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
                                {navLinks.map((link, index) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 50 }}
                                            transition={{ delay: 0.1 + index * 0.08 }}
                                            className="w-full"
                                        >
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "flex items-center justify-center text-2xl font-bold py-4 rounded-2xl transition-all duration-300",
                                                    isActive
                                                        ? "text-white bg-white/10 border border-white/20"
                                                        : "text-white/70 hover:text-white hover:bg-white/5"
                                                )}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    transition={{ delay: 0.5 }}
                                    className="w-full pt-6 mt-4 border-t border-white/10"
                                >
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white w-full py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-95 transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Sparkles className="w-5 h-5" />
                                        <span>Book Now</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
