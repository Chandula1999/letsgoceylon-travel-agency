export interface Category {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
}

export const CATEGORIES: Category[] = [
    {
        id: 1,
        title: "Wildlife Tours",
        description: "Encounter majestic elephants, leopards, and exotic birds in their natural habitat.",
        image: "/assets/categories/wildlife.jpg",
        slug: "wildlife-tours"
    },
    {
        id: 2,
        title: "Family Tours",
        description: "Create lasting memories with kid-friendly adventures across the island.",
        image: "/assets/categories/Family category.jpg",
        slug: "family-tours"
    },
    {
        id: 3,
        title: "Adventure Tours",
        description: "From white-water rafting to jungle trekking, get your adrenaline pumping.",
        image: "/assets/categories/adventure.jpg",
        slug: "adventure-tours"
    },
    {
        id: 4,
        title: "Ramayana Tours",
        description: "Trace the footsteps of the epic through ancient temples and sacred sites.",
        image: "/assets/categories/kovil.jpg",
        slug: "ramayana-tours"
    },
    {
        id: 5,
        title: "Ayurvedic Tours",
        description: "Rejuvenate your mind and body with traditional healing retreats.",
        image: "/assets/categories/ayurvedic.jpg",
        slug: "ayurvedic-tours"
    },
    {
        id: 6,
        title: "Honeymoon Tours",
        description: "Romantic escapes to paradise beaches and private hideaways.",
        image: "/assets/categories/honeymoon.jpg",
        slug: "honeymoon-tours"
    },
    {
        id: 7,
        title: "Golf Tours",
        description: "Tee off at world-class courses with stunning tropical backdrops.",
        image: "/assets/categories/golf.jpg",
        slug: "golf-tours"
    },
    {
        id: 8,
        title: "Cultural Tours",
        description: "Discover ancient kingdoms, UNESCO heritage sites, and vibrant traditions.",
        image: "/assets/categories/cultural.jpg",
        slug: "cultural-tours"
    },
    {
        id: 9,
        title: "Beach Tours",
        description: "Sun, sand, and surf at the most beautiful coastlines in Asia.",
        image: "/assets/categories/beach.jpg",
        slug: "beach-tours"
    }
];
