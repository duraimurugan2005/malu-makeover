import React from "react";
import { Sparkles, Award, MapPin, Plane, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function Hero({ onBookClick }) {
  const highlights = [
    { icon: Sparkles, text: "Bridal Makeup Artist" },
    { icon: Award, text: "Certified MUA" },
    { icon: CheckCircle2, text: "Specialised in Skin Finish" },
    { icon: Plane, text: "Open to Travel" },
  ];

  const handleGalleryClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#gallery");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory-50 to-white">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blush-200/30 via-gold-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-rosewood-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-300/60 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-rosewood-600 animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-rosewood-700">
                Certified Bridal Makeup Artist • Salem, TN
              </span>
            </div>

            {/* Main Brand Title */}
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
              MALU MAKEOVER ARTIST
            </h2>

            {/* Tagline Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight leading-[1.15] mb-4">
              Making Brides <span className="font-serif italic text-rosewood-700 font-normal">Shine</span>
            </h1>

            {/* Main Quote / Value Prop */}
            <p className="text-base sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed mb-6 border-l-2 border-gold-400 pl-4 bg-gold-50/40 py-1 rounded-r-lg">
              “Enhancing your natural beauty with elegant bridal makeup and a flawless skin finish for your special moments.”
            </p>

            {/* 4 Core Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full max-w-lg mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-gold-200/70 shadow-sm hover:border-gold-400 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blush-100 flex items-center justify-center shrink-0 text-rosewood-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-charcoal-800">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-rosewood-600 via-rosewood-700 to-rosewood-800 hover:from-rosewood-700 hover:to-rosewood-900 text-white font-semibold text-sm shadow-md hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 border border-gold-300/30 group"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#gallery"
                onClick={handleGalleryClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gold-50 text-charcoal hover:text-rosewood-700 font-semibold text-sm border border-gold-300 shadow-sm transition-all"
              >
                <span>View My Work</span>
              </a>

              <a
                href="https://wa.me/918438407835?text=Hello%20Malu%20Makeover%20Artist!%20I%20would%20like%20to%20enquire%20about%20a%20makeup%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Location & Travel micro note */}
            <div className="flex items-center gap-2 mt-6 text-xs text-charcoal/70">
              <MapPin className="w-3.5 h-3.5 text-rosewood-600" />
              <span>Based in Salem, Tamil Nadu • Accepting bookings across South India</span>
            </div>
          </div>

          {/* Right Column: Featured Indian Bridal Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-300/40 via-blush-300/30 to-rosewood-400/20 blur-lg transform -rotate-1" />
              
              {/* Main Bridal Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                  alt="Indian Bridal Makeup by Malu Makeover Artist"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-rosewood-700">
                      Signature Aesthetic
                    </p>
                    <p className="font-serif text-base font-bold text-charcoal">
                      Flawless Skin Finish Bridal
                    </p>
                    <p className="text-xs text-charcoal/60">
                      Tailored to your wedding outfit & jewelry
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 border border-gold-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gold-300 shadow-md flex items-center gap-1.5 text-xs font-semibold text-rosewood-800">
                  <Award className="w-3.5 h-3.5 text-gold-600" />
                  <span>Certified MUA</span>
                </div>
              </div>

              {/* Decorative Secondary Mini Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-ivory-50 p-3.5 rounded-2xl border border-gold-300 shadow-xl items-center gap-3 max-w-[220px]">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-gold-200">
                  <img
                    src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=200&q=80"
                    alt="HD Close Up"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">HD Camera Ready</p>
                  <p className="text-[10px] text-charcoal/70">Sweat & tear resistant</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
