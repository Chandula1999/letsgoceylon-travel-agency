"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palmtree, Mountain, Camera, Heart, Coffee, Sun, Map } from "lucide-react";

const CATEGORIES = [
    { id: "all", name: "All Tours", icon: Map },
    { id: "beach", name: "Beach", icon: Palmtree },
    { id: "wildlife", name: "Wildlife", icon: Camera },
    { id: "adventure", name: "Adventure", icon: Mountain },
    { id: "cultural", name: "Cultural", icon: Coffee }, // Using Coffee as a placeholder for culture/tea
    { id: "hill country", name: "Hill Country", icon: Mountain },
    { id: "honeymoon", name: "Honeymoon", icon: Heart },

];

export default function TourFilterBar({ activeCategory, onCategoryChange }: { activeCategory: string, onCategoryChange: (cat: string) => void }) {
    return (
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => onCategoryChange(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all whitespace-nowrap ${isActive
                                    ? "bg-black text-white shadow-lg scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-gray-500"}`} />
                                <span className="font-medium text-sm">{cat.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
