"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACT_INFO = [
    {
        icon: Phone,
        title: "Call Us",
        label: "Mon-Fri from 8am to 5pm",
        value: "+94 71 962 9664",
        action: "tel:+94719629664",
        color: "bg-blue-50 text-blue-600"
    },
    {
        icon: Mail,
        title: "Email Us",
        label: "Online support 24/7",
        value: "letsgoceylontours@gmail.com",
        action: "mailto:letsgoceylontours@gmail.com",
        color: "bg-orange-50 text-orange-600"
    },
    {
        icon: MapPin,
        title: "Visit Our Office",
        label: "Come say hello at our HQ",
        value: "No;681/3,Wattegedara, Pelena, Weligama",
        action: "https://maps.google.com",
        color: "bg-purple-50 text-purple-600"
    },
];

export default function ContactInfoSection() {
    return (
        <div className="grid grid-cols-1 gap-6">
            {CONTACT_INFO.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group flex items-start gap-4"
                >
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{item.label}</p>
                        <p className="font-medium text-gray-800 group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                </motion.a>
            ))}

            {/* Working Hours Card (Static) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-gray-900 text-white flex items-start gap-4 shadow-xl"
            >
                <div className="p-3 rounded-xl bg-white/10 text-primary">
                    <Clock className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-400 text-sm mb-3">Operating hours</p>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between gap-8">
                            <span className="text-gray-300">Mon - Fri</span>
                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                            <span className="text-gray-300">Sat - Sun</span>
                            <span className="font-medium">9:00 AM - 2:00 PM</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
