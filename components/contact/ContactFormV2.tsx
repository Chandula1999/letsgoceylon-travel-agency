"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactFormV2() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simple verification (in real app, validate properly)
        if (formState.email && formState.message) {
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
                        setFormState({ name: "", email: "", subject: "", message: "" });
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Your Name</label>
                        <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
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

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Subject</label>
                    <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Select a topic</option>
                        <option value="tour">Tour Inquiry</option>
                        <option value="taxi">Taxi Booking</option>
                        <option value="custom">Custom Itinerary</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                    <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        placeholder="Tell us about your travel plans..."
                    />
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
