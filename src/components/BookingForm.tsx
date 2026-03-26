import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Scissors, CheckCircle2, MessageCircle } from "lucide-react";

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to a backend
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[40px] shadow-2xl border-2 border-accent"
          >
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl font-display font-black text-primary mb-4">BOOKING CONFIRMED!</h2>
            <p className="text-gray-600 text-lg mb-8">
              We've received your request. You'll receive a confirmation SMS shortly. Get ready for your fresh look!
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all"
            >
              BOOK ANOTHER SESSION
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] select-none">
        <p className="text-[20vw] font-black whitespace-nowrap leading-none">BOOK NOW BOOK NOW BOOK NOW</p>
        <p className="text-[20vw] font-black whitespace-nowrap leading-none ml-[-10vw]">FRESH CUT FRESH CUT FRESH CUT</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Reservations</p>
            <h2 className="text-5xl md:text-7xl font-display font-black text-primary mb-8 leading-[0.9]">
              SECURE YOUR <br />
              <span className="text-accent">PRIME SLOT.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Our slots fill up fast. Book your appointment today and experience the gold standard of grooming.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary">Instant Confirmation</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary">No Waiting Time</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-primary">Free Consultation Included</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-3xl shadow-xl border border-gray-100 inline-block">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Prefer WhatsApp?</p>
                <a 
                    href="https://wa.me/1234567890" 
                    className="flex items-center gap-3 text-green-600 font-black text-xl hover:scale-105 transition-transform"
                >
                    <MessageCircle className="w-8 h-8 fill-green-600 text-white" />
                    CHAT WITH US
                </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      required
                      type="tel" 
                      placeholder="+44 7123 456789"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Select Service</label>
                <div className="relative">
                  <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  <select className="w-full bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all font-medium appearance-none">
                    <option>Classic Haircut - £25</option>
                    <option>Beard Trim - £15</option>
                    <option>Skin Fade - £30</option>
                    <option>VIP Package - £55</option>
                    <option>Kids Cut - £18</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      required
                      type="date" 
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input 
                      required
                      type="time" 
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-2xl py-4 pl-12 pr-4 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10 mt-4"
              >
                BOOK APPOINTMENT
              </button>
              
              <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                Limited slots available for today
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
