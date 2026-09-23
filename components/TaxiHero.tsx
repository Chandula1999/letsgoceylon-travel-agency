"use client";

import { motion } from "framer-motion";
import {
    Plane, ArrowRightLeft, Clock, Compass, Car, Shield, CheckCircle2,
    Phone, MessageSquare, MapPin, Flag, Calendar, ArrowRight, ShieldCheck,
    Sparkles, Users, UserCheck
} from "lucide-react";
import Image from "next/image";
import LocationAutocomplete from "./LocationAutocomplete";

export interface RouteFare {
    sedan: number;
    suv: number;
    kdh: number;
    highroof: number;
    usd: number;
    label: string;
}

export const ROUTE_FARES: Record<string, RouteFare> = {
    galle: { sedan: 22000, suv: 29000, kdh: 27500, highroof: 34000, usd: 92, label: 'Galle Fort / Unawatuna' },
    colombo: { sedan: 9500, suv: 14000, kdh: 13500, highroof: 17000, usd: 45, label: 'Colombo City / Galle Face' },
    kandy: { sedan: 18500, suv: 24000, kdh: 23000, highroof: 28000, usd: 77, label: 'Kandy Cultural Capital' },
    ella: { sedan: 31000, suv: 39000, kdh: 37500, highroof: 44000, usd: 125, label: 'Ella / Nine Arch Bridge' },
    sigiriya: { sedan: 24000, suv: 31000, kdh: 29000, highroof: 36000, usd: 97, label: 'Sigiriya / Dambulla Rock' },
    mirissa: { sedan: 23000, suv: 30000, kdh: 28500, highroof: 35000, usd: 95, label: 'Mirissa Beach / Weligama' },
    nuwaraeliya: { sedan: 26000, suv: 33000, kdh: 32000, highroof: 39000, usd: 107, label: 'Nuwara Eliya Highlands' }
};

interface TaxiHeroProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    pickupLoc: string;
    setPickupLoc: (loc: string) => void;
    dropoffRoute: string;
    setDropoffRoute: (route: string) => void;
    activeVehicle: string;
    setActiveVehicle: (veh: string) => void;
    guideType: string;
    setGuideType: (guide: string) => void;
    hireDuration: string;
    setHireDuration: (duration: string) => void;
    flightNumber: string;
    setFlightNumber: (fn: string) => void;
    flightDate: string;
    setFlightDate: (fd: string) => void;
    landingTime: string;
    setLandingTime: (lt: string) => void;
    onOpenModal: () => void;
}

export default function TaxiHero({
    activeTab,
    setActiveTab,
    pickupLoc,
    setPickupLoc,
    dropoffRoute,
    setDropoffRoute,
    activeVehicle,
    setActiveVehicle,
    guideType,
    setGuideType,
    hireDuration,
    setHireDuration,
    flightNumber,
    setFlightNumber,
    flightDate,
    setFlightDate,
    landingTime,
    setLandingTime,
    onOpenModal
}: TaxiHeroProps) {

    // Fare calculation
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

    const handleWhatsAppClick = () => {
        const routeLabel = routeObj.label;
        const msg = encodeURIComponent(
            `🚖 *CeylonFleet Chauffeur Booking Request*\n\n` +
            `📍 Pickup: ${pickupLoc}\n` +
            `🏁 Destination: ${routeLabel}\n` +
            `🚗 Trip Type: ${activeTab.toUpperCase()}\n` +
            `🚙 Vehicle Class: ${activeVehicle.toUpperCase()}\n` +
            `👨‍✈️ Guide Level: ${guideType === 'guide' ? 'SLTDA Licensed Guide' : 'Standard Chauffeur'}\n` +
            `📅 Date: ${flightDate || 'Not specified'}\n` +
            `✈️ Flight/Time: ${flightNumber || 'N/A'} at ${landingTime || 'N/A'}\n` +
            `💰 Estimated Fare: LKR ${baseRate.toLocaleString()} (~$${usdRate} USD)\n\n` +
            `Please confirm availability.`
        );
        window.open(`https://wa.me/94719629664?text=${msg}`, '_blank');
    };

    return (
        <section className="relative w-full pt-24 pb-16 md:pt-28 bg-slate-950 text-white overflow-hidden" id="instant-booking">
            {/* Background Image with Scrim */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1605218427368-35b0198d8d91?q=80&w=2600&auto=format&fit=crop"
                    alt="Chauffeur Luxury Van driving on lush Sri Lankan tea plantation mountain road"
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-all duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

                {/* Official Trust Badge Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-[10px] md:text-xs font-semibold mb-6 border border-white/10 shadow-lg max-w-full">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <span className="truncate">Official SLTDA Licensed Tourist Transport • Reg #TA/01492</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Hero Left Content */}
                    <div className="lg:col-span-5 space-y-5 pt-2">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            Private Sri Lanka Chauffeur &amp; Transfers — <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">Zero Meter Surprises.</span>
                        </h1>

                        <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
                            SLTDA-certified chauffeur guides, pristine air-conditioned modern fleet, automatic flight monitoring at CMB arrivals, and guaranteed all-inclusive transparent fares.
                        </p>

                        {/* Quick Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 md:gap-3 pt-1">
                            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur rounded-xl p-2.5 md:p-3 text-center">
                                <span className="block text-lg md:text-xl font-bold text-amber-400">9.4 Yrs</span>
                                <span className="text-[10px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Avg Experience</span>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur rounded-xl p-2.5 md:p-3 text-center">
                                <span className="block text-lg md:text-xl font-bold text-emerald-400">90 Mins</span>
                                <span className="text-[10px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Free Flight Wait</span>
                            </div>
                            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur rounded-xl p-2.5 md:p-3 text-center">
                                <span className="block text-lg md:text-xl font-bold text-teal-300">100%</span>
                                <span className="text-[10px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Free Cancel (24h)</span>
                            </div>
                        </div>

                        {/* Live Dispatch Counter Banner */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                                <Car className="w-5 h-5" />
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-ping" />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">18 Vehicles Stationed at BIA Arrival Bay</p>
                                <p className="text-emerald-300/80 text-xs">Immediate dispatch available within 15 minutes of landing</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Dynamic Booking Engine Card */}
                    <div className="lg:col-span-7 bg-white rounded-2xl shadow-2xl p-4 md:p-6 text-slate-900">

                        {/* Trip Tabs Header */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100 no-scrollbar">
                            <button
                                type="button"
                                onClick={() => setActiveTab('airport')}
                                className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 md:gap-2 whitespace-nowrap min-h-[44px] ${activeTab === 'airport'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <Plane className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-400 shrink-0" />
                                <span className="hidden sm:inline">Airport Transfer</span>
                                <span className="sm:hidden">Airport</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('oneway')}
                                className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 md:gap-2 whitespace-nowrap min-h-[44px] ${activeTab === 'oneway'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500 shrink-0" />
                                <span className="hidden sm:inline">Point-to-Point</span>
                                <span className="sm:hidden">One Way</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('roundtrip')}
                                className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 md:gap-2 whitespace-nowrap min-h-[44px] ${activeTab === 'roundtrip'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <ArrowRightLeft className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 shrink-0" />
                                <span className="hidden sm:inline">Round Trip</span>
                                <span className="sm:hidden">Return</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('hourly')}
                                className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 md:gap-2 whitespace-nowrap min-h-[44px] ${activeTab === 'hourly'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-500 shrink-0" />
                                <span className="hidden sm:inline">Day / Hourly Hire</span>
                                <span className="sm:hidden">Hourly</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('multiday')}
                                className={`px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 md:gap-2 whitespace-nowrap min-h-[44px] ${activeTab === 'multiday'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                                    }`}
                            >
                                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 shrink-0" />
                                <span className="hidden sm:inline">Multi-Day Tour</span>
                                <span className="sm:hidden">Multi-Day</span>
                            </button>
                        </div>

                        {/* Booking Form Inputs */}
                        <form onSubmit={(e) => { e.preventDefault(); onOpenModal(); }} className="space-y-4">

                            {/* Row 1: Pickup & Dropoff */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <div className="space-y-1">
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pickup Location</label>
                                    <div className="relative">
                                        <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400 z-10" />
                                        <input
                                            type="text"
                                            value={pickupLoc}
                                            onChange={(e) => setPickupLoc(e.target.value)}
                                            placeholder="e.g. BIA Airport or Hotel Name"
                                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Drop-off Destination</label>
                                    <div className="relative">
                                        <Flag className="w-4 h-4 absolute left-3 top-3 text-amber-500 z-10" />
                                        <select
                                            value={dropoffRoute}
                                            onChange={(e) => setDropoffRoute(e.target.value)}
                                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="galle">Galle Fort / Unawatuna (Southern Coast)</option>
                                            <option value="colombo">Colombo City / Galle Face Hotel</option>
                                            <option value="kandy">Kandy Cultural Capital</option>
                                            <option value="ella">Ella / Nine Arch Bridge</option>
                                            <option value="sigiriya">Sigiriya / Dambulla Rock</option>
                                            <option value="mirissa">Mirissa Beach / Weligama</option>
                                            <option value="nuwaraeliya">Nuwara Eliya (Tea Highlands)</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            {/* Conditional Row: Flight Details or Hire Duration */}
                            {activeTab === 'airport' && (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Flight Number</label>
                                        <div className="relative">
                                            <Plane className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                                            <input
                                                type="text"
                                                value={flightNumber}
                                                onChange={(e) => setFlightNumber(e.target.value)}
                                                placeholder="e.g. UL 504 / QR 662"
                                                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Date</label>
                                        <div className="relative">
                                            <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                                            <input
                                                type="date"
                                                value={flightDate}
                                                onChange={(e) => setFlightDate(e.target.value)}
                                                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Landing Time (IST)</label>
                                        <div className="relative">
                                            <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                                            <input
                                                type="time"
                                                value={landingTime}
                                                onChange={(e) => setLandingTime(e.target.value)}
                                                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {(activeTab === 'hourly' || activeTab === 'multiday') && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                            {activeTab === 'multiday' ? 'Tour Days' : 'Hire Duration'}
                                        </label>
                                        <select
                                            value={hireDuration}
                                            onChange={(e) => setHireDuration(e.target.value)}
                                            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
                                        >
                                            {activeTab === 'multiday' ? (
                                                <>
                                                    <option value="3">3 Days Central &amp; Hill Country</option>
                                                    <option value="7">7 Days Classic Round Island</option>
                                                    <option value="10">10 Days Grand Wildlife &amp; Beach</option>
                                                    <option value="14">14 Days Ultimate Discovery</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="4">4 Hours / 40 km (City Safari)</option>
                                                    <option value="8">8 Hours / 80 km (Full Day Tour)</option>
                                                    <option value="12">12 Hours / 120 km (Extended Exploration)</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tour Starting Date</label>
                                        <input
                                            type="date"
                                            value={flightDate}
                                            onChange={(e) => setFlightDate(e.target.value)}
                                            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Row 3: Vehicle Class Selector */}
                            <div className="space-y-1">
                                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Select Vehicle Category</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

                                    {/* Sedan */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveVehicle('sedan')}
                                        className={`flex flex-col p-3 rounded-xl border text-left transition-all min-h-[44px] ${activeVehicle === 'sedan'
                                                ? 'bg-emerald-900 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30'
                                                : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                                            }`}
                                    >
                                        <span className="text-sm font-bold">Sedan</span>
                                        <span className={`text-[11px] ${activeVehicle === 'sedan' ? 'text-emerald-200' : 'text-slate-500'}`}>Prius / Axio</span>
                                        <span className={`mt-1 text-[11px] font-bold ${activeVehicle === 'sedan' ? 'text-amber-300' : 'text-emerald-700'}`}>1-3 Pax • 2 Bags</span>
                                    </button>

                                    {/* SUV */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveVehicle('suv')}
                                        className={`flex flex-col p-3 rounded-xl border text-left transition-all min-h-[44px] ${activeVehicle === 'suv'
                                                ? 'bg-emerald-900 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30'
                                                : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                                            }`}
                                    >
                                        <span className="text-sm font-bold">4x4 SUV</span>
                                        <span className={`text-[11px] ${activeVehicle === 'suv' ? 'text-emerald-200' : 'text-slate-500'}`}>Fortuner / Prado</span>
                                        <span className={`mt-1 text-[11px] font-bold ${activeVehicle === 'suv' ? 'text-amber-300' : 'text-emerald-700'}`}>4 Pax • Hill Country</span>
                                    </button>

                                    {/* Luxury Van */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveVehicle('kdh')}
                                        className={`flex flex-col p-3 rounded-xl border text-left transition-all min-h-[44px] ${activeVehicle === 'kdh'
                                                ? 'bg-emerald-900 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30'
                                                : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                                            }`}
                                    >
                                        <span className="text-sm font-bold">Luxury Van</span>
                                        <span className={`text-[11px] ${activeVehicle === 'kdh' ? 'text-emerald-200' : 'text-slate-500'}`}>Toyota KDH</span>
                                        <span className={`mt-1 text-[11px] font-bold ${activeVehicle === 'kdh' ? 'text-amber-300' : 'text-emerald-700'}`}>6-8 Pax • 5 Bags</span>
                                    </button>

                                    {/* High Roof */}
                                    <button
                                        type="button"
                                        onClick={() => setActiveVehicle('highroof')}
                                        className={`flex flex-col p-3 rounded-xl border text-left transition-all min-h-[44px] ${activeVehicle === 'highroof'
                                                ? 'bg-emerald-900 text-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30'
                                                : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                                            }`}
                                    >
                                        <span className="text-sm font-bold">High-Roof</span>
                                        <span className={`text-[11px] ${activeVehicle === 'highroof' ? 'text-emerald-200' : 'text-slate-500'}`}>KDH Commuter</span>
                                        <span className={`mt-1 text-[11px] font-bold ${activeVehicle === 'highroof' ? 'text-amber-300' : 'text-emerald-700'}`}>9-10 Pax • Luggage</span>
                                    </button>

                                </div>
                            </div>

                            {/* Row 4: Service Level Preference */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl text-xs border border-slate-200">
                                <div className="flex items-center gap-2 shrink-0">
                                    <Shield className="w-4 h-4 text-emerald-600" />
                                    <span className="font-bold text-slate-800">Chauffeur Guide Level:</span>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                    <label className="inline-flex items-center gap-1.5 cursor-pointer min-h-[44px] sm:min-h-0">
                                        <input
                                            type="radio"
                                            name="guideType"
                                            value="standard"
                                            checked={guideType === 'standard'}
                                            onChange={() => setGuideType('standard')}
                                            className="accent-emerald-600 w-4 h-4"
                                        />
                                        <span className="text-slate-700 font-medium">Licensed Driver Only</span>
                                    </label>
                                    <label className="inline-flex items-center gap-1.5 cursor-pointer min-h-[44px] sm:min-h-0">
                                        <input
                                            type="radio"
                                            name="guideType"
                                            value="guide"
                                            checked={guideType === 'guide'}
                                            onChange={() => setGuideType('guide')}
                                            className="accent-amber-500 w-4 h-4"
                                        />
                                        <span className="text-slate-900 font-bold">SLTDA National Guide (+LKR 3,500)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Live Fare Estimation Box */}
                            <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg border border-slate-800">
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">All-Inclusive Instant Quote</span>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                                            Guaranteed Price
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-2xl md:text-3xl font-extrabold text-amber-400">
                                            LKR {baseRate.toLocaleString()}
                                        </span>
                                        <span className="text-sm font-semibold text-emerald-400">
                                            ~ ${usdRate} USD
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-400 mt-1 flex items-start gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>Includes: E01 Expressway Tolls, Airport Parking, Fuel, Chauffeur Baggage Assistance</span>
                                    </p>
                                </div>

                                {/* Action CTAs */}
                                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto shrink-0">
                                    <button
                                        type="button"
                                        onClick={handleWhatsAppClick}
                                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs md:text-sm hover:bg-emerald-400 shadow transition-all whitespace-nowrap gap-1.5 min-h-[44px]"
                                    >
                                        <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
                                        Book via WhatsApp
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onOpenModal}
                                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs md:text-sm hover:bg-amber-300 shadow transition-all whitespace-nowrap gap-1 min-h-[44px]"
                                    >
                                        <span>Reserve Online</span>
                                        <ArrowRight className="w-4 h-4 shrink-0" />
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
