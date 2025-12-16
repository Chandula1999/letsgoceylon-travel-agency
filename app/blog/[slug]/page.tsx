
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogData";
import BlogArticle from "@/components/blog/BlogArticle";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    props: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found | Let's Go Ceylon",
        };
    }

    // Optional: Fetch parent metadata (e.g. default openGraph)
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: `${post.title} | Let's Go Ceylon Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image, ...previousImages],
            type: "article",
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function SingleBlogPage(props: PageProps) {
    const params = await props.params;
    const { slug } = params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Post Not Found</h1>
                        <Link href="/blog" className="text-primary hover:underline">
                            Back to Blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return <BlogArticle post={post} />;
}
