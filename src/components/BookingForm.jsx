import React, { useState, useEffect } from "react";
import { servicesData } from "../data/servicesData";
import { Send, Calendar, User, Phone, MapPin, Sparkles, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

export default function BookingForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Bridal Makeup",
    eventDate: "",
    eventLocation: "",
    requirements: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.eventDate) {
      newErrors.eventDate = "Please choose your prospective event date.";
    }
    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = "Please specify event location / city (e.g. Salem).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    const businessPhone = "918438407835";
    
    // Construct exact requested message template
    const message = `Hello Malu Makeover Artist!

I would like to enquire about a makeup appointment.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Service: ${formData.service || "Bridal Makeup"}
Event Date: ${formData.eventDate || "Not specified"}
Location: ${formData.eventLocation.trim() || "Salem"}
Requirements: ${formData.requirements.trim() || "Standard consultation required"}

Please share your availability and pricing.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="book" className="py-20 bg-ivory-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase mb-2">
            RESERVE YOUR SPECIAL DAY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Appointment <span className="text-rosewood-700 italic font-normal">Booking</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-charcoal/75 max-w-xl mx-auto">
            Fill in your wedding or event details below to instantly connect with Malu Makeover Artist via WhatsApp.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-200 shadow-card">
          <form onSubmit={handleWhatsAppSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  Customer Name <span className="text-rosewood-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sundaram"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border ${
                      errors.name ? "border-rosewood-500 bg-rosewood-500/5" : "border-gold-200 focus:border-rosewood-600"
                    } text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-rosewood-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  Phone Number <span className="text-rosewood-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border ${
                      errors.phone ? "border-rosewood-500 bg-rosewood-500/5" : "border-gold-200 focus:border-rosewood-600"
                    } text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-rosewood-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Makeup Service Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  Select Makeup Service <span className="text-rosewood-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border border-gold-200 focus:border-rosewood-600 text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all appearance-none cursor-pointer"
                  >
                    {servicesData.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.name} (from {svc.startingPrice})
                      </option>
                    ))}
                    <option value="Custom Bridal Package">Custom Multi-Event Package</option>
                    <option value="Bridal Combo + Family Guests">Bridal + Family Guests Package</option>
                  </select>
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  Event Date <span className="text-rosewood-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border ${
                      errors.eventDate ? "border-rosewood-500 bg-rosewood-500/5" : "border-gold-200 focus:border-rosewood-600"
                    } text-sm text-charcoal focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all`}
                  />
                </div>
                {errors.eventDate && (
                  <p className="text-xs text-rosewood-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.eventDate}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Event Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                Event Location / Mandapam <span className="text-rosewood-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="e.g. Salem (Kalyana Mandapam / Home) or Destination Venue"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border ${
                    errors.eventLocation ? "border-rosewood-500 bg-rosewood-500/5" : "border-gold-200 focus:border-rosewood-600"
                  } text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all`}
                />
              </div>
              {errors.eventLocation && (
                <p className="text-xs text-rosewood-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.eventLocation}</span>
                </p>
              )}
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                Additional Requirements / Timings
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3.5 pointer-events-none text-gold-500">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  name="requirements"
                  rows="3"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="e.g. Muhurtham starts at 6:00 AM, need saree draping for bride and 2 relatives, poola jada preferred..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border border-gold-200 focus:border-rosewood-600 text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-rosewood-600 transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border border-emerald-500/30 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>

            {/* Note & Confirmation Disclaimer */}
            <div className="p-4 rounded-xl bg-gold-50/80 border border-gold-300 text-center">
              <p className="text-xs text-charcoal/80 font-medium">
                🔔 <span className="font-semibold text-rosewood-700">Please Note:</span> Your appointment will be confirmed after availability is checked by Malu Makeover Artist.
              </p>
            </div>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Opening WhatsApp with your filled enquiry details...</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
