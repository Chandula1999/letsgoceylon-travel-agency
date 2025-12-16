"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogGalleryProps {
    images: string[];
}

export default function BlogGallery({ images }: BlogGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="my-12">
            <h3 className="font-serif font-bold text-2xl mb-6">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative rounded-xl overflow-hidden shadow-lg h-64 ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
