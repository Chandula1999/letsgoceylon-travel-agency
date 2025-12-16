"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const CATEGORIES = [
    "Wildlife", "Family", "Adventure", "Ramayana",
    "Ayurvedic", "Honeymoon", "Golf", "Cultural", "Beach"
];

const DURATIONS = [
    "1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"
];

export default function TourFilters() {
    const [priceRange, setPriceRange] = useState(1000);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24 overflow-x-auto flex md:block gap-8 md:gap-0 snap-x snap-mandatory">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 md:w-auto w-full min-w-[150px] snap-center">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-gray-900">Filter Tours</h3>
            </div>

            {/* Categories */}
            <div className="mb-8 min-w-[280px] snap-center">
                <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
                <div className="space-y-3">
                    {CATEGORIES.map((category) => (
                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all" />
                                <svg className="absolute w-3.5 h-3.5 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="text-gray-600 group-hover:text-primary transition-colors">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Duration */}
            <div className="mb-8 min-w-[280px] snap-center">
                <h4 className="font-semibold text-gray-900 mb-4">Duration</h4>
                <div className="space-y-3">
                    {DURATIONS.map((duration) => (
                        <label key={duration} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all" />
                                <svg className="absolute w-3.5 h-3.5 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span className="text-gray-600 group-hover:text-primary transition-colors">{duration}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="min-w-[280px] snap-center">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">Max Price</h4>
                    <span className="text-primary font-bold">${priceRange}</span>
                </div>
                <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>$100</span>
                    <span>$5000+</span>
                </div>
            </div>
        </div>
    );
}
