import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Zap, BookOpen, Users, ArrowRight } from 'lucide-react';
import craterBg from '../assets/images/crater_bg_1782536966515.jpg';

const programs = [
  {
    id: 'sustainable-agriculture',
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: 'Sustainable Agriculture',
    description: 'Master regenerative farming techniques, soil health, and sustainable food systems that harmonize with natural ecosystems.',
  },
  {
    id: 'eco-technology',
    icon: <Zap className="w-8 h-8 text-white" />,
    title: 'Eco-Technology',
    description: 'Explore innovations in renewable energy, green building, and sustainable resource management technologies.',
  },
  {
    id: 'civilization-studies',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: 'Civilization Studies',
    description: 'Analyze historical transitions, cultural evolution, and the frameworks needed for a sustainable future society.',
  },
  {
    id: 'leadership-institute',
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Leadership Institute',
    description: 'Develop the skills to lead communities, organizations, and policy initiatives toward ecological balance and social equity.',
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 relative overflow-hidden text-white bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={craterBg} 
          alt="Dark volcanic crater" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Our Study Programs
          </h2>
          <p className="text-slate-200 text-lg">
            Immerse yourself in our four core pillars, designed to provide comprehensive education for a sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/study/${program.id}`}
                className="block h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group shadow-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center border border-white/30 shadow-inner group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 border border-white/20">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed">
                  {program.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
