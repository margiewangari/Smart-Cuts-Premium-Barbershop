import { motion } from "motion/react";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Shop Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white text-xs font-bold tracking-wider uppercase">
                Top Rated in London
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] mb-6">
              SHARP CUTS.<br />
              <span className="text-accent">SMART STYLE.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Premium grooming experience tailored for the modern man. 
              Expert barbers, classic techniques, contemporary style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="group bg-accent hover:bg-accent-hover text-primary px-8 py-4 rounded-full font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-accent/20"
              >
                BOOK NOW
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                VIEW SERVICES
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Our Location</p>
                  <p className="text-gray-400 text-xs">123 Barber St, London, UK</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Opening Hours</p>
                  <p className="text-gray-400 text-xs">Mon - Sat: 9AM - 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:block absolute bottom-12 right-12 bg-white p-6 rounded-2xl shadow-2xl max-w-[200px]"
      >
        <p className="text-primary font-black text-4xl leading-none mb-1">500+</p>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Happy Clients Served This Month</p>
      </motion.div>
    </section>
  );
}
