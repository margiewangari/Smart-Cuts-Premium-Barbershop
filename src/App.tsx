/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <BookingForm />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-accent text-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-display font-black mb-8 leading-none"
                >
                    READY FOR A <br />
                    FRESH LOOK?
                </motion.h2>
                <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-80">
                    Join the hundreds of men who trust Smart Cuts for their signature style. 
                    Limited slots available today.
                </p>
                <a
                    href="#booking"
                    className="inline-block bg-primary text-white px-12 py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl"
                >
                    BOOK YOUR CUT NOW
                </a>
            </div>
        </section>

        <LocationSection />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <a
          href="#booking"
          className="flex items-center justify-center gap-3 bg-accent text-primary py-4 rounded-2xl font-black text-lg shadow-2xl shadow-accent/40 border-2 border-white/20"
        >
          <Scissors className="w-6 h-6" />
          BOOK APPOINTMENT
        </a>
      </div>
    </div>
  );
}

function Scissors({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}
