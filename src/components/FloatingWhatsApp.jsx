import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setShowTooltip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const defaultMsg = "Hello Malu Makeover Artist! I would like to check bridal makeup availability for my wedding.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Interactive Tooltip / Mini Prompt */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-2xl border border-gold-200/90 max-w-[240px] animate-bounce-subtle relative flex items-start gap-2.5">
          <button
            onClick={() => {
              setShowTooltip(false);
              setHasDismissed(true);
            }}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal text-white text-[10px] flex items-center justify-center hover:bg-rosewood-600"
            aria-label="Dismiss message"
          >
            ✕
          </button>
          
          <div className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center shrink-0 text-rosewood-700">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal">Have a wedding date in mind?</p>
            <p className="text-[11px] text-charcoal/70 mt-0.5">Chat directly with Malu on WhatsApp!</p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Call Pill on mobile/desktop */}
        <a
          href="tel:8438407835"
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white text-charcoal text-xs font-bold shadow-lg border border-gold-300 hover:bg-ivory-100 transition-all hover:scale-105"
          title="Call 8438407835"
        >
          <Phone className="w-3.5 h-3.5 text-rosewood-600" />
          <span>Call Malu</span>
        </a>

        {/* WhatsApp Main Bubble */}
        <a
          href={`https://wa.me/918438407835?text=${encodeURIComponent(defaultMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rosewood-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rosewood-500 rounded-full border-2 border-white" />
          <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
}
