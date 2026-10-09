import React from "react";
import { Award, Crown, Sparkles, Plane, ShieldCheck, Heart } from "lucide-react";

export default function WhyChooseUs({ onBookClick }) {
  const features = [
    {
      icon: Award,
      title: "Certified MUA",
      subtitle: "Professional Training",
      description: "Professionally trained and certified in modern makeup artistry, hygiene protocols, and skin safety."
    },
    {
      icon: Crown,
      title: "Bridal Makeup Specialist",
      subtitle: "Weddings & Ceremonies",
      description: "Specialized focus on wedding occasions from traditional South Indian Muhurthams to reception galas."
    },
    {
      icon: Sparkles,
      title: "Specialised Skin Finish",
      subtitle: "Flawless & Radiant",
      description: "Signature techniques delivering natural, seamless, and lightweight skin texture that lasts all day long."
    },
    {
      icon: Plane,
      title: "Open to Travel",
      subtitle: "Venue & Destination",
      description: "Convenient on-location bridal service traveling to your home, mandapam, resort, or venue across Tamil Nadu."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white via-ivory-100/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            THE MALU MAKEOVER PROMISE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Why Choose <span className="text-rosewood-700 italic font-normal">Malu Makeover?</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-charcoal/75">
            Dedicated to ensuring every bride walks down the aisle with grace, poise, and undeniable confidence.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-white border border-gold-200/80 shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Accent top gold line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gold-300 to-rosewood-600 rounded-b-full group-hover:w-24 transition-all" />

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blush-100 via-ivory-100 to-gold-100 border border-gold-300/60 flex items-center justify-center text-rosewood-700 mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Subtitle */}
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 mb-1">
                  {feat.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Confidence Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-rosewood-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-gold-300" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                Book Your Wedding Date in Advance
              </h4>
              <p className="text-xs sm:text-sm text-ivory-200">
                Peak Muhurtham dates fill up quickly. Secure your slot with Malu Makeover Artist today.
              </p>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="shrink-0 px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-500 text-charcoal-900 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
          >
            Check Date Availability
          </button>
        </div>

      </div>
    </section>
  );
}
