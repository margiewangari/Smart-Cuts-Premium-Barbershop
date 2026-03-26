import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div>
              <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Find Us</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-6">VISIT THE SHOP</h2>
              <p className="text-gray-500 text-lg max-w-md">
                Located in the heart of London. Easy access by tube and bus. Free parking available for clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="font-black text-lg">Address</span>
                </div>
                <p className="text-gray-500 pl-9">
                  123 Barber Street<br />
                  Soho, London<br />
                  W1D 7AA
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Phone className="w-6 h-6 text-accent" />
                  <span className="font-black text-lg">Contact</span>
                </div>
                <p className="text-gray-500 pl-9">
                  +44 20 7123 4567<br />
                  hello@smartcuts.com
                </p>
              </div>

              <div className="space-y-4 sm:col-span-2">
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="font-black text-lg">Opening Hours</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pl-9 text-gray-500">
                  <div>
                    <p className="font-bold text-primary">Mon - Fri</p>
                    <p>9:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Saturday</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary">Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-surface relative group"
          >
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover opacity-50 grayscale"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl text-center max-w-xs">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="font-black text-xl text-primary mb-2">SMART CUTS SOHO</p>
                    <p className="text-gray-500 text-sm mb-4">We are right next to the central station.</p>
                    <a 
                        href="https://maps.google.com" 
                        target="_blank"
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm inline-block hover:bg-accent hover:text-primary transition-all"
                    >
                        GET DIRECTIONS
                    </a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
