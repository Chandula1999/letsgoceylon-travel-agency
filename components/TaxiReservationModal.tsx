"use client";

import { useState } from "react";
import { CheckCircle2, X, ShieldCheck, Send } from "lucide-react";
import { ROUTE_FARES, RouteFare } from "./TaxiHero";

interface TaxiReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
    pickupLoc: string;
    dropoffRoute: string;
    activeVehicle: string;
    guideType: string;
    hireDuration: string;
    activeTab: string;
}

export default function TaxiReservationModal({
    isOpen,
    onClose,
    pickupLoc,
    dropoffRoute,
    activeVehicle,
    guideType,
    hireDuration,
    activeTab
}: TaxiReservationModalProps) {
    const [fullName, setFullName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!isOpen) return null;

    const routeObj = ROUTE_FARES[dropoffRoute] || ROUTE_FARES.galle;
    let baseRate = routeObj[activeVehicle as keyof Omit<RouteFare, 'usd' | 'label'>] || routeObj.kdh;

    if (activeTab === 'multiday') {
        const days = parseInt(hireDuration || '7', 10);
        baseRate = days * 22000;
    } else if (activeTab === 'hourly') {
        const hours = parseInt(hireDuration || '8', 10);
        baseRate = hours * 2400;
    }

    if (guideType === 'guide') {
        baseRate += 3500;
    }

    const usdRate = Math.round(baseRate / 300);

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault();
        setIsConfirmed(true);
        setTimeout(() => {
            alert(`Ayubowan ${fullName || 'Valued Guest'}! Your reservation voucher has been created.\n\nRoute: ${pickupLoc} ➔ ${routeObj.label}\nFare: LKR ${baseRate.toLocaleString()} (~$${usdRate} USD)\n\nOur Colombo dispatch office will contact you via WhatsApp (${whatsapp || 'provided number'}) shortly.`);
            setIsConfirmed(false);
            onClose();
        }, 300);
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl space-y-6 text-slate-900 relative border border-slate-100 animate-in fade-in zoom-in duration-200">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900">Transfer Reservation</h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Booking Summary Box */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between items-start gap-2">
                        <span className="text-slate-500 font-medium shrink-0">Route:</span>
                        <span className="font-bold text-slate-900 text-right">{pickupLoc} ➔ {routeObj.label}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Vehicle & Guide:</span>
                        <span className="font-bold text-slate-900 uppercase text-right">{activeVehicle} • {guideType === 'guide' ? 'SLTDA Guide' : 'Driver Only'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Estimated Fare:</span>
                        <span className="font-extrabold text-emerald-600">LKR {baseRate.toLocaleString()} (~${usdRate} USD)</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-200/80">
                        <span className="text-slate-500 font-medium">Deposit Due:</span>
                        <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">LKR 0 (Pay driver on arrival)</span>
                    </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleConfirm} className="space-y-4">
                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">Your Full Name (As in Passport)</label>
                        <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">WhatsApp Phone Number</label>
                        <input
                            type="tel"
                            required
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            placeholder="+44 7700 900077"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">Email for Booking Voucher</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john.doe@gmail.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                    </div>

                    <div className="pt-3 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs md:text-sm transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isConfirmed}
                            className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs md:text-sm shadow-lg transition-all flex items-center justify-center gap-1.5"
                        >
                            <Send className="w-4 h-4" />
                            <span>Confirm Without Advance</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
