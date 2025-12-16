"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationAutocompleteProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    iconColor?: string;
}

export default function LocationAutocomplete({
    label,
    value,
    onChange,
    placeholder = "Enter location",
    iconColor = "text-gray-400"
}: LocationAutocompleteProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fetchSuggestions = async (query: string) => {
        if (!query || query.length < 2) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=lk&limit=5`
            );
            const data = await response.json();
            const places = data.map((item: any) => item.display_name);
            setSuggestions(places);
            setIsOpen(true);
        } catch (error) {
            console.error("Error fetching locations:", error);
            setSuggestions([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange(val);

        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        if (val.length >= 2) {
            debounceTimerRef.current = setTimeout(() => {
                fetchSuggestions(val);
            }, 300);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    };

    const handleSelect = (loc: string) => {
        onChange(loc);
        setIsOpen(false);
    };

    return (
        <div className="space-y-1" ref={wrapperRef}>
            <label className="text-xs font-bold text-gray-500 uppercase">{label}</label>
            <div className="relative">
                <MapPin className={`absolute left-3 top-3 w-4 h-4 ${iconColor}`} />
                <input
                    type="text"
                    value={value}
                    onChange={handleInput}
                    onFocus={() => value.length >= 2 && setIsOpen(true)}
                    placeholder={placeholder}
                    className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                    required
                />
                {isLoading && (
                    <div className="absolute right-3 top-3">
                        <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
                    </div>
                )}

                <AnimatePresence>
                    {isOpen && suggestions.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                        >
                            {suggestions.map((loc, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handleSelect(loc)}
                                    className="w-full px-4 py-3 text-left text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-start gap-2 border-b border-gray-50 last:border-0"
                                >
                                    <MapPin className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="line-clamp-2">{loc}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
