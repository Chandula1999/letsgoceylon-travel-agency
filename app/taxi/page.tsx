"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TaxiHero from "@/components/TaxiHero";
import TaxiTrustStrip from "@/components/TaxiTrustStrip";
import TaxiFleet from "@/components/TaxiFleet";
import TaxiRoutes from "@/components/TaxiRoutes";
import TaxiAddons from "@/components/TaxiAddons";
import TaxiTestimonials from "@/components/TaxiTestimonials";
import TaxiGuarantee from "@/components/TaxiGuarantee";
import TaxiFAQ from "@/components/TaxiFAQ";
import TaxiReservationModal from "@/components/TaxiReservationModal";
import TaxiStickyBar from "@/components/TaxiStickyBar";
import FloatingContact from "@/components/FloatingContact";

export default function TaxiPage() {
    const [activeTab, setActiveTab] = useState<string>("airport");
    const [pickupLoc, setPickupLoc] = useState<string>("Bandaranaike Int'l Airport (CMB)");
    const [dropoffRoute, setDropoffRoute] = useState<string>("galle");
    const [activeVehicle, setActiveVehicle] = useState<string>("kdh");
    const [guideType, setGuideType] = useState<string>("standard");
    const [hireDuration, setHireDuration] = useState<string>("8");
    const [flightNumber, setFlightNumber] = useState<string>("");
    const [flightDate, setFlightDate] = useState<string>("");
    const [landingTime, setLandingTime] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const scrollToBooking = () => {
        const el = document.getElementById("instant-booking");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleSelectVehicleFromFleet = (vehId: string) => {
        setActiveVehicle(vehId);
        scrollToBooking();
    };

    const handleSelectRouteFromRoutes = (routeId: string) => {
        setDropoffRoute(routeId);
        scrollToBooking();
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white font-sans antialiased pb-16">
            <Navbar />

            {/* Hero & Dynamic Booking Engine */}
            <TaxiHero
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    if (tab === "airport") {
                        setPickupLoc("Bandaranaike Int'l Airport (CMB)");
                    } else if (tab === "hourly" || tab === "multiday") {
                        setPickupLoc("Any Colombo or Coastal Hotel");
                    } else {
                        setPickupLoc("Colombo City / Negombo");
                    }
                }}
                pickupLoc={pickupLoc}
                setPickupLoc={setPickupLoc}
                dropoffRoute={dropoffRoute}
                setDropoffRoute={setDropoffRoute}
                activeVehicle={activeVehicle}
                setActiveVehicle={setActiveVehicle}
                guideType={guideType}
                setGuideType={setGuideType}
                hireDuration={hireDuration}
                setHireDuration={setHireDuration}
                flightNumber={flightNumber}
                setFlightNumber={setFlightNumber}
                flightDate={flightDate}
                setFlightDate={setFlightDate}
                landingTime={landingTime}
                setLandingTime={setLandingTime}
                onOpenModal={() => setIsModalOpen(true)}
            />

            {/* Trust & Safety Strip */}
            <TaxiTrustStrip />

            {/* Comprehensive Fleet Section */}
            <TaxiFleet onSelectVehicle={handleSelectVehicleFromFleet} />

            {/* Popular Fixed Routes Section */}
            <TaxiRoutes onSelectRoute={handleSelectRouteFromRoutes} />

            {/* Tourist Personalization Add-ons */}
            <TaxiAddons />

            {/* Real Traveler Testimonials */}
            <TaxiTestimonials />

            {/* Risk-Free Payment & SLTDA Guarantee */}
            <TaxiGuarantee />

            {/* FAQs Accordion */}
            <TaxiFAQ />

            {/* Floating Contact Widget */}
            <FloatingContact position="left" />

            {/* Persistent Conversion Bottom Bar */}
            <TaxiStickyBar onBookClick={scrollToBooking} />

            {/* Online Reservation Modal */}
            <TaxiReservationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                pickupLoc={pickupLoc}
                dropoffRoute={dropoffRoute}
                activeVehicle={activeVehicle}
                guideType={guideType}
                hireDuration={hireDuration}
                activeTab={activeTab}
            />

            <Footer />
        </main>
    );
}
