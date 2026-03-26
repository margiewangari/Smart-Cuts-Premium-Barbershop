import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Regular Client",
    text: "Best fade I've ever had. The attention to detail at Smart Cuts is unmatched. Highly recommend the VIP package.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "David Chen",
    role: "Business Professional",
    text: "Professional, clean, and fast. I always leave feeling like a new man. The atmosphere is exactly what a modern shop should be.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Marcus Thorne",
    role: "First-time Visitor",
    text: "Found my new regular spot. The barbers here actually listen to what you want and offer great styling advice.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=marcus"
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4"
          >
            Social Proof
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-primary mb-6"
          >
            TRUSTED BY <span className="text-accent">500+</span> HAPPY CLIENTS
          </motion.h2>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 font-bold text-lg">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-gray-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Teaser */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-black text-primary">REMARKABLE TRANSFORMATIONS</h3>
            <p className="text-gray-600 text-lg">
              We don't just cut hair; we craft confidence. See why our clients keep coming back for that fresh, sharp look.
            </p>
            <div className="flex gap-4">
                <div className="text-center">
                    <p className="text-4xl font-black text-primary">98%</p>
                    <p className="text-xs text-gray-400 font-bold uppercase">Retention Rate</p>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                    <p className="text-4xl font-black text-primary">15k+</p>
                    <p className="text-xs text-gray-400 font-bold uppercase">Cuts Completed</p>
                </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop" 
                    alt="Barber at work" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-2xl shadow-xl font-black text-xl">
                EST. 2018
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
