import React, { useState } from "react";
import { galleryCategories, galleryItems } from "../data/galleryData";
import { Sparkles, Maximize2, ExternalLink, MessageCircle } from "lucide-react";

export default function Gallery({ onSelectImageLook }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleEnquireLook = (item) => {
    setActiveImage(null);
    if (onSelectImageLook) {
      onSelectImageLook(item.title);
    } else {
      const text = `Hello Malu Makeover Artist!\n\nI love this look from your gallery: "${item.title}" (${item.categoryLabel}).\n\nCould you please share details on how to book this style for my event?\n\nThank you!`;
      window.open(`https://wa.me/918438407835?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            PORTFOLIO & INSPIRATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Bridal Makeup <span className="text-rosewood-700 italic font-normal">Gallery</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-charcoal/75">
            Explore curated bridal aesthetics from South Indian temple looks to contemporary HD soft glam.
          </p>
          <p className="text-xs text-charcoal/60 mt-1 italic">
            * Sample styles representing artistic capabilities. Explore our Instagram @malu_makeover_artist for latest client reels & wedding diaries.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-rosewood-600 text-white shadow-md shadow-rosewood-600/20"
                  : "bg-ivory-100 text-charcoal/80 hover:bg-gold-50 border border-gold-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-ivory-100 border border-gold-200/80 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer h-80 sm:h-96"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-rosewood-600" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 rounded-full bg-gold-400 text-charcoal-900 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-200 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-gold-300 font-semibold">
                  <span>Click to view & enquire look</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/malu_makeover_artist?stkn=MWJsM25rZDI5YzBsNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rosewood-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-gold-200" />
            <span>Follow @malu_makeover_artist on Instagram for Daily Updates</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-gold-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[340px] sm:h-[400px] bg-charcoal">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/70 hover:bg-charcoal text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blush-100 text-rosewood-700 text-xs font-semibold">
                  {activeImage.categoryLabel}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-charcoal/80 mb-6 leading-relaxed">
                {activeImage.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleEnquireLook(activeImage)}
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-rosewood-600 to-rosewood-700 text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-gold-200" />
                  <span>Enquire About This Look on WhatsApp</span>
                </button>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-3 rounded-full border border-gold-300 text-charcoal text-xs sm:text-sm font-semibold hover:bg-ivory-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
