"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormV2 from "@/components/contact/ContactFormV2";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import FAQSection from "@/components/contact/FAQSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Immersive Hero */}
            <ContactHero />

            {/* Main Contact Section */}
            <section className="py-24 -mt-20 relative z-30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left Side: Form */}
                        <div className="lg:col-span-7">
                            <ContactFormV2 />
                        </div>

                        {/* Right Side: Info & Map */}
                        <div className="lg:col-span-5 flex flex-col gap-8 pt-10 lg:pt-0">
                            <div className="lg:sticky lg:top-32 space-y-8">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                        Contact Information
                                    </h2>
                                    <p className="text-gray-500">
                                        Reach out to us directly or visit our office.
                                    </p>
                                </div>

                                <ContactInfoSection />

                                {/* Mini Map */}
                                <div className="rounded-2xl overflow-hidden h-64 border border-gray-100 shadow-lg relative bg-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80385597899!2d79.8211859928647!3d6.92192257611598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1709665432100!5m2!1sen!2slk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            <Footer />
        </main>
    );
}
