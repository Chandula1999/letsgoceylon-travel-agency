"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    slug: string;
    category: string;
    readTime: string;
    index: number;
}

export default function BlogCard({ title, excerpt, image, date, slug, category, readTime, index }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group relative bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full border border-white/50"
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-bold text-gray-900 rounded-full uppercase tracking-wider shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {date}
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {readTime}
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/blog/${slug}`} className="before:absolute before:inset-0">
                        {title}
                    </Link>
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {excerpt}
                </p>

                <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </motion.article>
    );
}
