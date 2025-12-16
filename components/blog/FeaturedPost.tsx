"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blogData";

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <section className="container mx-auto px-4 py-16 -mt-20 relative z-30">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0 border border-gray-100"
            >
                <div className="relative h-[400px] md:h-auto min-h-[500px] overflow-hidden group">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-primary text-white text-sm font-bold tracking-wide uppercase rounded-full shadow-lg">
                            Featured Story
                        </span>
                    </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-serif text-gray-900 leading-none select-none pointer-events-none">
                        "
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                        </Link>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium transition-all hover:bg-primary hover:shadow-lg hover:-translate-y-1"
                        >
                            Read Full Story
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
