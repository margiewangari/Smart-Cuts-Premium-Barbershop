import { motion } from "motion/react";
import { Scissors, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                SMART<span className="text-accent">CUTS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium grooming experience tailored for the modern man. 
              Expert barbers, classic techniques, contemporary style.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#booking" className="hover:text-accent transition-colors">Book Appointment</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#" className="hover:text-accent transition-colors">Classic Haircut</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Beard Grooming</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Skin Fades</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hot Towel Shave</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">VIP Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-lg mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Get grooming tips and exclusive offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent w-full"
              />
              <button className="bg-accent text-primary p-3 rounded-xl hover:bg-white transition-all">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 SMART CUTS BARBER SHOP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
