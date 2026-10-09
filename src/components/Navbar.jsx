import React, { useState, useEffect } from "react";
import { Sparkles, Phone, MessageCircle, Menu, X, Calendar } from "lucide-react";

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Malu", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-gold-200/50"
          : "bg-ivory-50/90 backdrop-blur-sm py-4 border-b border-gold-100/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-300 shadow-md group-hover:scale-105 group-hover:border-rosewood-600 transition-all bg-black flex items-center justify-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Malu Makeover Logo"
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-rosewood-700 uppercase group-hover:text-rosewood-800 transition-colors">
              Malu Makeover
            </span>
            <span className="text-[10px] tracking-[0.25em] font-medium text-gold-600 uppercase -mt-1">
              Bridal Makeup Artist • Salem
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-charcoal hover:text-rosewood-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rosewood-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:8438407835"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-charcoal hover:text-rosewood-600 transition-colors rounded-full border border-gold-200 hover:border-gold-400 bg-white/70"
            title="Call 8438407835"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>8438407835</span>
          </a>

          <button
            onClick={onBookClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rosewood-600 via-rosewood-700 to-rosewood-800 hover:from-rosewood-700 hover:to-rosewood-900 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300 border border-gold-300/40"
          >
            <Calendar className="w-4 h-4 text-gold-200" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onBookClick}
            className="sm:hidden flex items-center gap-1 px-3 py-1.5 rounded-full bg-rosewood-600 text-white text-xs font-semibold shadow"
          >
            <Calendar className="w-3 h-3 text-gold-200" />
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-charcoal hover:text-rosewood-600 hover:bg-gold-100/50 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gold-200 shadow-xl px-5 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-gold-100 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Menu Navigation
              </span>
              <span className="text-xs text-charcoal/60">Salem, Tamil Nadu</span>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-charcoal hover:text-rosewood-600 hover:pl-2 transition-all flex items-center justify-between py-1"
              >
                <span>{link.name}</span>
                <span className="text-gold-400 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-gold-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-full bg-rosewood-600 hover:bg-rosewood-700 text-white text-center font-semibold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold-200" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:8438407835"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full border border-gold-300 text-charcoal text-xs font-semibold bg-ivory-100 hover:bg-ivory-200"
                >
                  <Phone className="w-3.5 h-3.5 text-rosewood-600" />
                  <span>Call 8438407835</span>
                </a>
                <a
                  href="https://wa.me/918438407835?text=Hello%20Malu%20Makeover%20Artist!%20I%20would%20like%20to%20enquire%20about%20a%20makeup%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
