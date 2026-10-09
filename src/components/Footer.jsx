import React from "react";
import { Sparkles, Phone, MessageCircle, MapPin, Heart, ArrowUp } from "lucide-react";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Malu", href: "#why-us" },
    { name: "Book Appointment", href: "#book" },
    { name: "Contact", href: "#contact" },
  ];

  const servicesList = [
    "Bridal Makeup",
    "HD Bridal Makeup",
    "Reception Makeup",
    "Engagement Makeup",
    "Haldi & Mehendi",
    "Bridal Hairstyling",
    "Saree Draping"
  ];

  return (
    <footer className="bg-charcoal-900 text-ivory-100 relative overflow-hidden border-t border-gold-400/30">
      
      {/* Decorative top shimmer bar */}
      <div className="h-1 bg-gradient-to-r from-gold-400 via-rosewood-600 to-gold-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400/80 shadow-lg bg-black flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Malu Makeover Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                  Malu Makeover
                </span>
                <span className="text-[10px] tracking-[0.25em] font-medium text-gold-400 uppercase block -mt-1">
                  Certified Bridal Makeup Artist
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-200/80 leading-relaxed font-serif italic text-lg">
              “Making Brides Shine”
            </p>

            <p className="text-xs text-ivory-200/70 leading-relaxed">
              Enhancing natural beauty with specialized skin finish techniques for brides in Salem, Tamil Nadu, and destination weddings across South India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918438407835?text=Hello%20Malu%20Makeover%20Artist!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600/80 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                title="WhatsApp Malu"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/malu_makeover_artist?stkn=MWJsM25rZDI5YzBsNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 hover:opacity-90 flex items-center justify-center text-white transition-opacity"
                title="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:8438407835"
                className="w-9 h-9 rounded-full bg-gold-400/20 hover:bg-gold-400/40 text-gold-300 flex items-center justify-center transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-gold-300 mb-4 tracking-wider uppercase text-xs">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-ivory-200/75 hover:text-gold-300 hover:pl-1 transition-all inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-gold-300 mb-4 tracking-wider uppercase text-xs">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-ivory-200/75">
              {servicesList.map((svc, i) => (
                <li key={i}>{svc}</li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-gold-300 mb-4 tracking-wider uppercase text-xs">
              Direct Contact
            </h4>
            
            <p className="text-xs text-ivory-200 flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>Call / WhatsApp: <a href="tel:8438407835" className="font-bold hover:text-gold-300">+91 8438407835</a></span>
            </p>

            <p className="text-xs text-ivory-200 flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>Salem, Tamil Nadu (Open to Travel)</span>
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-800 border border-charcoal-700 hover:border-gold-400 text-xs text-ivory-200 hover:text-white transition-all"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-gold-300" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-ivory-200/50">
          <p>
            © {currentYear} Malu Makeover Artist. All Rights Reserved. Salem, Tamil Nadu.
          </p>
          <p className="flex items-center gap-1">
            <span>Specialised in Flawless Skin Finish Bridal Artistry</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
