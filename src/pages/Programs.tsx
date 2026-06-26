import { motion } from 'motion/react';
import { Leaf, Zap, BookOpen, Users } from 'lucide-react';
import programsBg from '../assets/images/programs-bg.jpg';

const programs = [
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: 'Sustainable Agriculture',
    description: 'Master regenerative farming techniques, soil health, and sustainable food systems that harmonize with natural ecosystems.',
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: 'Eco-Technology',
    description: 'Explore innovations in renewable energy, green building, and sustainable resource management technologies.',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: 'Civilization Studies',
    description: 'Analyze historical transitions, cultural evolution, and the frameworks needed for a sustainable future society.',
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Leadership Institute',
    description: 'Develop the skills to lead communities, organizations, and policy initiatives toward ecological balance and social equity.',
  }
];

export default function Programs() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative bg-slate-900 text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src={programsBg} 
          alt="Canopy view of tall pine trees" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-slate-200">
            Immerse yourself in our four core pillars, designed to provide comprehensive education for a sustainable future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                {program.title}
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
