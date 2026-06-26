import { motion } from 'motion/react';
import { ArrowRight, Sprout } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Satellite over Earth" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 text-sm font-medium mb-6">
              <Sprout size={16} />
              <span>Cultivating the Future</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Building <br />
              <span className="text-primary-300 italic">Humanity's Future.</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-xl">
              SATYA Civilization Academy is an educational platform dedicated to empowering individuals and communities through practical knowledge, sustainable innovation, and collaborative learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20">
                Explore Programs
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 font-medium hover:bg-white/20 transition-colors flex items-center justify-center">
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
