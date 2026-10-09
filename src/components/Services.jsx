import React, { useState } from "react";
import { servicesData } from "../data/servicesData";
import { Sparkles, MessageCircle, Clock, Check, ArrowUpRight } from "lucide-react";

export default function Services({ onSelectServiceForBooking }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All 12 Services" },
    { id: "bridal", label: "Bridal & Reception" },
    { id: "pre-wedding", label: "Pre-Wedding (Haldi/Mehendi)" },
    { id: "occasion", label: "Party & Soft Glam" },
    { id: "styling", label: "Hairstyling & Saree Draping" }
  ];

  const filteredServices = activeTab === "all"
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  const handleBookService = (service) => {
    // Open WhatsApp with prefilled service request or invoke parent booking
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.name);
    }
  };

  const handleDirectWhatsApp = (serviceName) => {
    const text = `Hello Malu Makeover Artist!\n\nI would like to enquire about your "${serviceName}" service.\n\nPlease share availability and package details.\n\nThank you!`;
    const url = `https://wa.me/918438407835?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-ivory-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            CURATED MAKEOVER PACKAGES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Our Makeup <span className="text-rosewood-700 italic font-normal">Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-charcoal/70">
            Professional bridal & event makeover services personalized with signature skin finish techniques.
          </p>
          <p className="text-xs text-rosewood-700 font-medium mt-1">
            * All rates are starting estimates and can be tailored to event timings, location, and guest count.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-rosewood-600 text-white shadow-md shadow-rosewood-600/20"
                  : "bg-white text-charcoal/80 hover:bg-gold-50 border border-gold-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (All 12 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gold-200/70 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-56 overflow-hidden bg-ivory-200">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

                  {/* Price Tag Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-200 shadow-sm">
                    <span className="text-[10px] uppercase font-semibold text-charcoal/60 block -mb-1">
                      Starting from
                    </span>
                    <span className="font-serif text-base font-bold text-rosewood-700">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-300" />
                    <span>{service.duration}</span>
                  </div>

                  {service.popular && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-rosewood-600 to-rosewood-800 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-gold-300/40">
                      <Sparkles className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Content Info */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-rosewood-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Inclusions checklist */}
                  {service.includes && (
                    <div className="pt-3 border-t border-gold-100 mb-2 space-y-1.5">
                      {service.includes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-charcoal/80">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 pt-0">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleBookService(service)}
                    className="w-full py-2.5 px-3 rounded-full bg-ivory-100 hover:bg-ivory-200 border border-gold-300 text-charcoal text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Fill Form</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(service.name)}
                    className="w-full py-2.5 px-3 rounded-full bg-gradient-to-r from-rosewood-600 to-rosewood-700 hover:from-rosewood-700 hover:to-rosewood-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold-200" />
                    <span>Book This</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Requirements / Group Bookings Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blush-100 via-ivory-50 to-gold-50 border border-gold-300/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              Need a Custom Bridal Combo or Destination Package?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
              Planning Muhurtham + Reception + Saree Draping for family? We offer customized packages tailored for your wedding schedule.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking("Custom Bridal Package")}
            className="shrink-0 px-6 py-3 rounded-full bg-rosewood-600 hover:bg-rosewood-700 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
          >
            Get Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
