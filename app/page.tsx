import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import TourCategories from "@/components/TourCategories";
import PopularTours from "@/components/PopularTours";

import WhyChooseUs from "@/components/WhyChooseUs";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";
import Testimonials from "../components/Testimonials";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TaxiPricing from "@/components/TaxiPricing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-white">
        <TourCategories />
        <PopularTours />
        <TaxiPricing />
        <WhyChooseUs />
        <Testimonials />
        <BlogTeaser />
        <Footer />
      </div>
      {/* <StickyMobileCTA /> */}
    </main>
  );
}
