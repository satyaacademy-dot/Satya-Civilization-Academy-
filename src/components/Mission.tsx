import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import aboutBg from '../assets/images/about-bg.jpg';

export default function Mission() {
  const values = [
    'Integrity',
    'Sustainability',
    'Innovation',
    'Collaboration',
    'Lifelong Learning',
    'Service to Society',
  ];

  return (
    <section id="about" className="py-24 text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutBg} 
          alt="Aerial view of clouds over mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/80 mix-blend-multiply"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary-400" />
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                About SATYA Civilization Academy
              </h2>
            </div>
            <div className="text-primary-100 text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                We believe that the future is built by people who continuously learn, adapt, and work together to solve real-world challenges. Our goal is to make quality education accessible while encouraging sustainable development and community-driven progress.
              </p>
              <p>
                Our work is guided by four core pillars that shape every initiative, learning program, and project within the academy.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-800/50 p-10 rounded-3xl border border-primary-700/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-primary-400" />
              <h2 className="text-3xl font-serif font-bold">
                Our Purpose
              </h2>
            </div>
            <p className="text-primary-100 text-lg leading-relaxed">
              Our purpose is to create an ecosystem where knowledge leads to action. By bringing together education, agriculture, renewable energy, and global collaboration, we aim to help individuals develop practical skills that create positive and lasting impact in their communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary-800/50 p-10 rounded-3xl border border-primary-700/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary-400" />
              <h2 className="text-3xl font-serif font-bold">
                Our Values
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0" />
                  <span className="text-primary-50 font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
