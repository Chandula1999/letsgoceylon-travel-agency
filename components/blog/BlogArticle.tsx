"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGallery from "@/components/blog/BlogGallery";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { BlogPost } from "@/lib/blogData";

interface BlogArticleProps {
    post: BlogPost;
}

export default function BlogArticle({ post }: BlogArticleProps) {
    // Determine image URL - handle both local and remote images
    // If it starts with http, it's remote (unsplash). If /, it's local.
    // Next/Image handles both if configured, but let's be safe.

    // JSON-LD for the article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: [post.image],
        datePublished: post.date, // Note: Should ideally be ISO format
        author: [{
            "@type": "Person",
            name: post.author,
        }],
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Hero Image - Immersive Full Width */}
            <div className="relative h-[70vh] min-h-[500px] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Blog
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 mb-6">
                                <span className="bg-primary px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {post.date}
                                </span>
                                <span className="flex items-center gap-2 border-l border-white/30 pl-4">
                                    <Clock className="w-4 h-4" /> {post.readTime}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 shadow-sm">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/30">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-lg">{post.author}</p>
                                    <p className="text-white/60 text-sm">Travel Specialist</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content & Sidebar Layout */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Article Content - Left Column */}
                    <article className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="prose prose-lg prose-emerald max-w-none text-gray-700"
                        >
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </motion.div>

                        {/* Image Gallery */}
                        {post.gallery && <BlogGallery images={post.gallery} />}

                        {/* Share & Tag Section */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <h4 className="font-serif font-bold text-2xl text-gray-900">Share this guide</h4>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 hover:bg-primary hover:text-white transition-all text-gray-600 font-medium">
                                        <Share2 className="w-5 h-5" /> Share Article
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar - Right Column (Sticky) */}
                    <aside className="lg:col-span-4 hidden lg:block h-full">
                        <BlogSidebar />
                    </aside>

                    {/* Mobile Sidebar Content (shown at bottom) */}
                    <div className="lg:hidden">
                        <BlogSidebar />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
