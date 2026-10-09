import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [selectedService, setSelectedService] = useState("Bridal Makeup");

  const scrollToBooking = (serviceName = null) => {
    if (serviceName && typeof serviceName === "string") {
      setSelectedService(serviceName);
    }
    const bookingSection = document.querySelector("#book");
    if (bookingSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-rosewood-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* About Section */}
        <About onBookClick={() => scrollToBooking()} />

        {/* Makeup Services (All 12 services) */}
        <Services onSelectServiceForBooking={(svc) => scrollToBooking(svc)} />

        {/* Makeup Gallery & Lightbox */}
        <Gallery onSelectImageLook={(lookTitle) => scrollToBooking(`Look Inquiry: ${lookTitle}`)} />

        {/* Why Choose Malu Makeover */}
        <WhyChooseUs onBookClick={() => scrollToBooking()} />

        {/* Appointment Booking with WhatsApp */}
        <BookingForm preselectedService={selectedService} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
