"use client";

import { motion } from "framer-motion";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                            ? "text-white"
                            : "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
                        }`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-gray-900 rounded-full"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
}
