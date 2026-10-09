import React from "react";
import { Phone, MessageCircle, MapPin, Plane, Clock, Award, Sparkles, Send } from "lucide-react";
import { InstagramIcon } from "./Icons";

export default function Contact() {
  const phone = "8438407835";
  const whatsappNumber = "918438407835";
  const instagramUrl = "https://www.instagram.com/malu_makeover_artist?stkn=MWJsM25rZDI5YzBsNw==";

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Contact <span className="text-rosewood-700 italic font-normal">Malu Makeover</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-charcoal/75">
            Reach out directly for date consultations, custom packages, and wedding enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-ivory-100 via-ivory-50 to-blush-50/50 rounded-3xl p-8 sm:p-10 border border-gold-200/90 shadow-card flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-700" />
                <span className="text-xs font-semibold uppercase tracking-wider text-rosewood-800">
                  Certified Bridal Makeup Artist
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-1">
                Malu Makeover Artist
              </h3>
              <p className="text-sm text-gold-700 font-semibold mb-6">
                Bridal Makeup Artist | Certified MUA
              </p>

              {/* Direct Details List */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gold-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blush-100 flex items-center justify-center text-rosewood-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                      Phone Number
                    </span>
                    <a href={`tel:${phone}`} className="text-base font-bold text-charcoal hover:text-rosewood-700 transition-colors">
                      +91 {phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gold-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                      Primary Location
                    </span>
                    <span className="text-base font-bold text-charcoal">
                      Salem, Tamil Nadu
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gold-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-rosewood-100 flex items-center justify-center text-rosewood-700 shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                      Booking Availability
                    </span>
                    <span className="text-base font-bold text-charcoal">
                      Open to Travel (All Across Tamil Nadu & South India)
                    </span>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gold-200/70 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] uppercase tracking-wider text-charcoal/60 font-semibold block">
                      Instagram Official
                    </span>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-rosewood-700 hover:underline truncate block"
                    >
                      @malu_makeover_artist
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Consultation Notice */}
            <div className="pt-4 border-t border-gold-200 text-xs text-charcoal/70">
              ⚡ Instant responses for wedding booking queries between 8:00 AM - 9:00 PM.
            </div>
          </div>

          {/* Action CTAs Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
                DIRECT CHANNELS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Let's Discuss Your Dream Bridal Look
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed mb-8">
                Reach out right now through your preferred method. We look forward to being part of your most cherished celebration.
              </p>

              <div className="space-y-3.5">
                
                {/* Call Now Button */}
                <a
                  href={`tel:${phone}`}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-ivory-100 text-charcoal-900 font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 text-rosewood-600" />
                  <span>Call Now (+91 8438407835)</span>
                </a>

                {/* WhatsApp Now Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Malu Makeover Artist! I would like to enquire about your bridal makeup services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>

                {/* Follow on Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rosewood-600 hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow on Instagram</span>
                </a>

              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-charcoal-700 text-center">
              <p className="text-xs text-gold-300/90 italic font-serif">
                “Making Brides Shine with Elegance & Confidence”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
