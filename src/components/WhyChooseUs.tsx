import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Zap, DollarSign, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Skilled Barbers",
    text: "Our team consists of award-winning professionals with years of experience.",
    icon: ShieldCheck
  },
  {
    title: "Hygiene First",
    text: "We use medical-grade sterilization for all our tools after every single cut.",
    icon: Sparkles
  },
  {
    title: "Fast Service",
    text: "We value your time. Our booking system ensures zero waiting time.",
    icon: Zap
  },
  {
    title: "Fair Pricing",
    text: "Premium quality grooming at prices that make sense for regular visits.",
    icon: DollarSign
  },
  {
    title: "Modern Styles",
    text: "From classic pompadours to modern skin fades, we stay ahead of trends.",
    icon: TrendingUp
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Why Smart Cuts?</p>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
              WE DON'T JUST CUT HAIR,<br />
              <span className="text-accent">WE CRAFT IDENTITY.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl">
              Smart Cuts was founded on the principle that every man deserves a premium grooming experience without the pretension. We combine old-school hospitality with new-school techniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <f.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden border-8 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1593702275677-f916c8c76045?q=80&w=2070&auto=format&fit=crop" 
                alt="Barber Shop Vibe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full blur-[100px] opacity-20"></div>
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" />
                  ))}
                </div>
                <span className="text-primary font-black text-sm">Join the Club</span>
              </div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">100+ Slots Booked Today</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
