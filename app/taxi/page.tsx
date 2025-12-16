"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TaxiHero from "@/components/TaxiHero";
import TaxiPricing from "@/components/TaxiPricing";
import TaxiFeatures from "@/components/TaxiFeatures";
import TaxiFAQ from "@/components/TaxiFAQ";
import FloatingContact from "@/components/FloatingContact";

export default function TaxiPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <TaxiHero />
            <TaxiPricing />
            <TaxiFeatures />
            <TaxiFAQ />
            <FloatingContact position="left" />
            <Footer />
        </main>
    );
}
