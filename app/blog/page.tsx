"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import CategoryFilter from "@/components/blog/CategoryFilter";
import NewsletterSection from "@/components/blog/NewsletterSection";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
    // 1. Get unique categories (including 'All')
    const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

    // 2. State for active category
    const [activeCategory, setActiveCategory] = useState("All");

    // 3. Filter posts
    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);

    // 4. Identify Featured Post (First one marked featured, or just the first one)
    const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

    // Exclude featured post from the main grid if we are in "All" view? 
    // Usually yes, but if filtering, we might want to show it if it matches.
    // For simplicity and "premium" feel, let's keep the featured post always at top 
    // and show standard grid below.
    // However, if we filter, the featured post might not match the category.
    // Let's decide: Featured Post section is static (or rotates), Grid is dynamic.
    // Or: Featured Post updates with category? No, usually Featured is global.
    // Strategy: Show Featured Post at top always. 
    // Filtered Grid shows ALL posts (including featured one? maybe skip it to avoid dupes).
    // Let's skip the featured post in the grid IF it matches the filter.

    const displayPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Navbar />

            {/* Hero Section */}
            <BlogHero />

            {/* Featured Post (Overlapping Hero) */}
            <FeaturedPost post={featuredPost} />

            {/* Main Content Area */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelectCategory={setActiveCategory}
                    />

                    {/* Blog Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayPosts.map((post, index) => (
                                <BlogCard
                                    key={post.id}
                                    index={index}
                                    {...post}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {displayPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 text-gray-500"
                        >
                            <p>No stories found in this category.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-4 text-primary font-medium hover:underline"
                            >
                                View all stories
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <NewsletterSection />

            <Footer />
        </main>
    );
}
