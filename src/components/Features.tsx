import { motion } from 'motion/react';
import { Leaf, Zap, BookOpen, Users } from 'lucide-react';
import pillarsBg from '../assets/images/pillars-bg.jpg';

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-white" />,
    title: 'Agriculture',
    description: 'Building food security and sustainable farming through education, research, and modern agricultural practices.',
    focusAreas: [
      'Organic Farming',
      'Hydroponics & Aquaponics',
      'Precision Agriculture',
      'Irrigation & Water Management',
      'Agri-Technology',
      'Food Security',
      'Sustainable Farming Practices',
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: 'Education',
    description: 'Empowering people with practical, accessible, and lifelong learning for personal and professional growth.',
    focusAreas: [
      'Courses & Learning Paths',
      'Study Materials',
      'Digital Library',
      'Workshops',
      'Skill Development',
      'Research-Based Learning',
      'AI-Assisted Education',
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Renewable Energy',
    description: 'Promoting clean and sustainable energy solutions for communities and future generations.',
    focusAreas: [
      'Solar Energy',
      'Hydroelectric Systems',
      'Wind Energy',
      'Geothermal Energy',
      'Energy Storage',
      'Smart Energy Solutions',
      'Sustainable Infrastructure',
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Community & Global Collaboration',
    description: 'Connecting learners, educators, researchers, entrepreneurs, farmers, and organizations to solve real-world challenges together.',
    focusAreas: [
      'Community Building',
      'Knowledge Sharing',
      'Research Collaboration',
      'Entrepreneurship',
      'Global Partnerships',
      'Volunteer Networks',
      'Innovation Ecosystem',
    ],
  },
];

export default function Features() {
  return (
    <section id="programs" className="py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={pillarsBg} 
          alt="Wheat field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Our Core Pillars
          </h2>
          <p className="text-slate-200 text-lg">
            We provide a comprehensive framework for individuals to learn, innovate, and lead the transition towards a sustainable civilization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-colors border border-white/20 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 shadow-sm border border-white/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-slate-200 leading-relaxed text-sm mb-6 flex-grow">
                {feature.description}
              </p>
              <div>
                <h4 className="text-xs font-bold text-primary-200 uppercase tracking-wider mb-3">Focus Areas</h4>
                <ul className="space-y-2">
                  {feature.focusAreas.map((area, i) => (
                    <li key={i} className="text-sm text-slate-100 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
