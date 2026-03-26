import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286332618-f2803b1950d4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690196252-741d2fd3f305?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592647425447-18256434740b?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-primary"
          >
            REAL CUTS. <span className="text-accent">REAL CLIENTS.</span>
          </motion.h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Haircut ${i + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent font-black text-xl uppercase tracking-tighter">Fresh Fade</p>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">By Master Barber Leo</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
                href="https://instagram.com" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-primary font-black hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1"
            >
                FOLLOW US ON INSTAGRAM @SMARTCUTS
            </a>
        </div>
      </div>
    </section>
  );
}
