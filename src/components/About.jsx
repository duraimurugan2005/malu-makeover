import React from "react";
import { Sparkles, HeartHandshake, Palette, Eye, Plane, CheckCircle2 } from "lucide-react";

export default function About({ onBookClick }) {
  const points = [
    {
      icon: Sparkles,
      title: "Bridal Makeup Services",
      desc: "Complete bridal transformations crafted with care for Muhurtham, Engagement, Reception, and Pre-wedding rituals."
    },
    {
      icon: Palette,
      title: "Personalized Makeup Looks",
      desc: "Every bride is unique. Makeup is tailored to complement your skin tone, facial features, bridal attire, and jewelry."
    },
    {
      icon: Eye,
      title: "Attention to Skin Finish & Details",
      desc: "Specialized in seamless, glowing skin finish with meticulous blending, precision eyeliner, and fine lash placement."
    },
    {
      icon: HeartHandshake,
      title: "Traditional & Modern Styles",
      desc: "Equally skilled in authentic South Indian traditional styles with poola jada as well as contemporary soft glam looks."
    },
    {
      icon: Plane,
      title: "Open to Travel for Bookings",
      desc: "Based in Salem, Tamil Nadu, and available to travel to your wedding venue or destination across Tamil Nadu and beyond."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blush-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            ABOUT MALU MAKEOVER ARTIST
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Beauty, Elegance & <span className="text-rosewood-700 italic font-normal">Confidence</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Makeup Artist Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-300 to-blush-300 opacity-70 blur-md transform rotate-1" />
              
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-ivory-100">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                  alt="Malu Makeover Artist at Work"
                  className="w-full h-[460px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-xl font-bold">Malu</p>
                  <p className="text-xs text-gold-200 tracking-wide font-medium">Certified Bridal Makeup Artist • Salem</p>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-5 -right-3 bg-white p-4 rounded-2xl shadow-xl border border-gold-200/80 max-w-[210px]">
                <p className="text-xs italic text-charcoal font-serif">
                  "Making every bride look and feel radiant on her dream day."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Introduction & Value Points */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <p className="text-base sm:text-lg text-charcoal/90 font-normal leading-relaxed mb-6">
              Welcome to <span className="font-semibold text-rosewood-700">Malu Makeover Artist</span>. As a passionate, certified bridal makeup artist based in Salem, Tamil Nadu, Malu is dedicated to bringing out the finest version of every bride with artistry that enhances your natural elegance rather than masking it.
            </p>

            <p className="text-sm text-charcoal/80 leading-relaxed mb-8">
              With deep expertise in <span className="font-medium text-charcoal">skin finish techniques</span>, every look is crafted to ensure a smooth, breathable, and radiant complexion that stays picture-perfect throughout the ceremony, tears of joy, and high-resolution camera lenses.
            </p>

            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-ivory-50 border border-gold-200/60 hover:border-gold-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-blush-100 flex items-center justify-center shrink-0 text-rosewood-700 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-charcoal">{pt.title}</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA in About */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-full bg-rosewood-600 hover:bg-rosewood-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                Discuss Your Wedding Look
              </button>
              <a
                href="#services"
                className="text-xs sm:text-sm font-semibold text-charcoal hover:text-rosewood-600 underline underline-offset-4 transition-colors"
              >
                Explore All 12 Services →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
