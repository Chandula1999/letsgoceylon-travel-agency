"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { TOURS } from "@/data/tours";

const COUNTRIES = [
    "Select a country",
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "China", "Japan", "Russia", "Other"
];

export default function ContactFormV2() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        tourName: "",
        message: "",
        gdprConsent: false
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simple verification (in real app, validate properly)
        if (formState.email && formState.message && formState.name && formState.gdprConsent) {

            // Construct WhatsApp Message
            const text = `*New Inquiry*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Phone:* ${formState.phone}%0A*Country:* ${formState.country}%0A*Tour Interest:* ${formState.tourName}%0A*Message:* ${formState.message}`;

            // In a real scenario, we might send this to a backend too
            // For now just simulate success + open WhatsApp
            window.open(`https://wa.me/94719629664?text=${text}`, "_blank");

            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm mb-8">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setStatus("idle");
                        setFormState({ name: "", email: "", phone: "", country: "", tourName: "", message: "", gdprConsent: false });
                    }}
                    className="text-primary font-semibold hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
        >
            {/* Decorative background element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll start planning your dream vacation.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Phone</label>
                        <input
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Your Country Origin</label>
                        <select
                            value={formState.country}
                            onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                            {COUNTRIES.map(country => (
                                <option key={country} value={country === "Select a country" ? "" : country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Tour Name</label>
                        <select
                            value={formState.tourName}
                            onChange={(e) => setFormState({ ...formState, tourName: e.target.value })}
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="">Select a tour</option>
                            {TOURS.map(tour => (
                                <option key={tour.id} value={tour.title}>
                                    {tour.title}
                                </option>
                            ))}
                            <option value="Custom Tour">Custom Tour Request</option>
                            <option value="Taxi Service">Taxi Service</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Your Message</label>
                    <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                </div>

                <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">GDPR Compliance</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        By giving your confirmation you explicitly give consent for us to store and use this information to service your requests.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        If you do not consent we will not store any personal information and will only send an email with the relevant details in order to service your requests. <a href="#" className="underline">Privacy Policy</a>
                    </p>
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative pt-1">
                            <input
                                type="checkbox"
                                required
                                checked={formState.gdprConsent}
                                onChange={(e) => setFormState({ ...formState, gdprConsent: e.target.checked })}
                                className="peer sr-only"
                            />
                            <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors" />
                            <CheckCircle className="w-3.5 h-3.5 text-white absolute top-1.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                            I confirm I have read and given consent for the above.
                        </span>
                    </label>

                    <p className="text-xs text-gray-400 mt-4">
                        This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
                    </p>
                    <p className="text-xs text-red-500 mt-2">* Required Fields</p>
                </div>

                {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4" />
                        <span>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
