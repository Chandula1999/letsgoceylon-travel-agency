"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingContactProps {
    position?: "left" | "right";
}

export default function FloatingContact({ position = "right" }: FloatingContactProps) {
    const positionClasses = position === "left" ? "left-6 flex-row-reverse" : "right-6 flex-row";
    const tooltipClasses = position === "left" ? "left-full ml-3" : "right-full mr-3";

    return (
        <motion.a
            href="https://wa.me/94719629661"
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            className={`fixed bottom-6 z-50 flex items-center gap-3 group ${positionClasses}`}
        >
            <span className={`bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity absolute whitespace-nowrap pointer-events-none ${tooltipClasses}`}>
                Chat with us
            </span>
            <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
                <MessageCircle className="w-7 h-7" />
            </div>
        </motion.a>
    );
}
