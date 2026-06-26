import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/cta_bg_1782500686535.jpg';

export default function CTA() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-slate-950/70 backdrop-blur-[2px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Build the Future.
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Join a global community of innovators, agriculturalists, and visionaries dedicated to harmonizing human civilization with the natural world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20"
            >
              Apply for Fall 2026
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 backdrop-blur-md transition-colors flex items-center justify-center shadow-lg"
            >
              Contact Admission
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

