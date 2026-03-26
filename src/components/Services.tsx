import { motion } from "motion/react";
import { Scissors, Zap, User, Star, Crown, Clock } from "lucide-react";

const services = [
  {
    title: "Classic Haircut",
    description: "Precision cut tailored to your face shape and style preference.",
    price: "£25",
    duration: "30-45 mins",
    icon: Scissors,
    tag: "Popular"
  },
  {
    title: "Beard Trim & Shape",
    description: "Professional beard grooming with hot towel finish and oils.",
    price: "£15",
    duration: "20 mins",
    icon: Zap,
  },
  {
    title: "Skin Fade & Styling",
    description: "Ultra-sharp fade with expert styling using premium products.",
    price: "£30",
    duration: "45-60 mins",
    icon: Star,
  },
  {
    title: "Kids Cut",
    description: "Gentle and stylish cuts for the younger gentlemen (under 12).",
    price: "£18",
    duration: "30 mins",
    icon: User,
  },
  {
    title: "VIP Grooming Package",
    description: "The ultimate experience: Haircut, Beard, Facial & Scalp Massage.",
    price: "£55",
    duration: "90 mins",
    icon: Crown,
    tag: "Best Value"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-black text-primary"
            >
              PREMIUM SERVICES FOR THE <span className="text-accent">MODERN MAN</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-xs font-medium"
          >
            Every service includes a complimentary consultation and premium styling products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                s.tag ? "border-accent bg-primary text-white" : "border-gray-100 bg-surface text-primary"
              }`}
            >
              {s.tag && (
                <span className="absolute -top-3 right-8 bg-accent text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                s.tag ? "bg-accent text-primary" : "bg-primary text-accent"
              }`}>
                <s.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-display font-black mb-3">{s.title}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${s.tag ? "text-gray-400" : "text-gray-500"}`}>
                {s.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-current/10">
                <div className="flex flex-col">
                  <span className="text-3xl font-black">{s.price}</span>
                  <div className="flex items-center gap-1 opacity-60">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{s.duration}</span>
                  </div>
                </div>
                <a
                  href="#booking"
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    s.tag 
                    ? "bg-accent text-primary hover:bg-white" 
                    : "bg-primary text-white hover:bg-accent hover:text-primary"
                  }`}
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
