import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf, Zap, BookOpen, Users, ArrowLeft, CheckCircle2 } from 'lucide-react';
import craterBg from '../assets/images/crater_bg_1782536966515.jpg';

const studyPrograms = {
  'sustainable-agriculture': {
    title: 'Sustainable Agriculture',
    icon: Leaf,
    description: 'Master regenerative farming techniques, soil health, and sustainable food systems that harmonize with natural ecosystems.',
    overview: 'Our Sustainable Agriculture program is designed to equip students with the knowledge and hands-on skills required to transform modern farming. By focusing on regenerative practices, we aim to restore soil health, increase biodiversity, and create resilient food systems that can withstand the challenges of climate change. Students will explore permaculture, agroforestry, and closed-loop agricultural systems that eliminate waste and naturally enhance crop yields.',
    curriculum: [
      'Introduction to Permaculture and Design',
      'Soil Biology and Regenerative Practices',
      'Water Conservation and Management',
      'Agroforestry and Polycultures',
      'Sustainable Pest Management',
      'Urban Agriculture and Vertical Farming'
    ],
    skills: [
      'Soil Health Analysis',
      'Crop Rotation Planning',
      'Water Management Systems',
      'Composting and Organic Fertilizers'
    ],
    careers: ['Regenerative Farmer', 'Agricultural Consultant', 'Sustainability Manager', 'Food Systems Analyst'],
    duration: '2 Years (4 Semesters)'
  },
  'eco-technology': {
    title: 'Eco-Technology',
    icon: Zap,
    description: 'Explore innovations in renewable energy, green building, and sustainable resource management technologies.',
    overview: 'The Eco-Technology program delves into the practical application of sustainable technologies. Students explore how to design, implement, and maintain systems that reduce environmental impact. From renewable energy generation to smart grid integration and sustainable materials, this program bridges the gap between ecological principles and technological innovation. Hands-on labs include solar photovoltaic systems, wind energy mechanics, and eco-friendly structural design.',
    curriculum: [
      'Renewable Energy Systems (Solar, Wind, Geothermal)',
      'Green Building and Sustainable Architecture',
      'Waste-to-Energy Technologies',
      'Smart Grids and Energy Efficiency',
      'Water Purification and Desalination Tech',
      'Life Cycle Assessment of Materials'
    ],
    skills: [
      'Energy System Auditing',
      'Solar & Wind Grid Setup',
      'Lifecycle Material Analysis',
      'Smart Grid Integration'
    ],
    careers: ['Renewable Energy Engineer', 'Green Building Consultant', 'Eco-Tech Entrepreneur', 'Sustainability Coordinator'],
    duration: '2 Years (4 Semesters)'
  },
  'civilization-studies': {
    title: 'Civilization Studies',
    icon: BookOpen,
    description: 'Analyze historical transitions, cultural evolution, and the frameworks needed for a sustainable future society.',
    overview: 'Civilization Studies takes a macroscopic view of human history, analyzing how societies rise, fall, and adapt to their environments. By understanding past ecological collapses and successes, students develop the analytical frameworks necessary to design robust, sustainable future civilizations. This interdisciplinary program combines sociology, history, anthropology, and environmental science to map out a resilient human future on Earth.',
    curriculum: [
      'Environmental History of Human Civilizations',
      'Sociology of Climate Change',
      'Cultural Evolution and Paradigm Shifts',
      'Ethics of Sustainability',
      'Designing Future Societies',
      'Systems Thinking and Complex Dynamics'
    ],
    skills: [
      'Systems Thinking',
      'Historical Trend Analysis',
      'Cultural Evolution Frameworks',
      'Socio-Ecological Policy Design'
    ],
    careers: ['Policy Analyst', 'Environmental Historian', 'Social Researcher', 'Sustainability Educator'],
    duration: '1.5 Years (3 Semesters)'
  },
  'leadership-institute': {
    title: 'Leadership Institute',
    icon: Users,
    description: 'Develop the skills to lead communities, organizations, and policy initiatives toward ecological balance and social equity.',
    overview: 'The Leadership Institute prepares the next generation of environmental leaders. We focus on developing practical skills in advocacy, policy-making, sustainable business management, and community organizing. Students learn how to mobilize people, navigate complex regulatory landscapes, and drive systemic change towards ecological balance, ultimately fostering leaders capable of guiding corporations and governments toward net-zero goals.',
    curriculum: [
      'Environmental Policy and Law',
      'Community Organizing and Mobilization',
      'Sustainable Business and ESG Management',
      'Conflict Resolution and Negotiation',
      'Eco-Entrepreneurship',
      'Strategic Communication for Sustainability'
    ],
    skills: [
      'Public Policy Advocacy',
      'ESG Strategy Implementation',
      'Conflict Mediation',
      'Non-profit Leadership'
    ],
    careers: ['Environmental Advocate', 'Sustainability Director', 'Eco-Entrepreneur', 'Policy Advisor'],
    duration: '1.5 Years (3 Semesters)'
  }
};

export default function StudyProgramDetails() {
  const { id } = useParams<{ id: string }>();
  const program = id ? studyPrograms[id as keyof typeof studyPrograms] : null;

  if (!program) {
    return (
      <div className="min-h-screen pt-32 pb-24 text-center bg-slate-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Program not found</h1>
        <Link to="/#programs" className="text-primary-400 hover:text-primary-300 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Programs
        </Link>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <main className="min-h-screen bg-slate-900 text-white pb-24">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={craterBg} 
            alt="Atmospheric landscape" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/#programs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            <span>Back to Programs</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-600/20 flex items-center justify-center mb-6 border border-primary-500/30 backdrop-blur-md">
              <Icon className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {program.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-white">Program Overview</h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                <p>{program.overview}</p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-white">Core Curriculum</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 text-white">Key Competencies</h2>
              <div className="flex flex-wrap gap-3">
                {program.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-primary-900/40 border border-primary-500/30 text-primary-100 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Program Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Duration</p>
                  <p className="font-medium text-white">{program.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Format</p>
                  <p className="font-medium text-white">In-person & Hybrid options</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Next Cohort</p>
                  <p className="font-medium text-white">Fall 2026</p>
                </div>
              </div>
              
              <Link 
                to="/#pricing" 
                className="mt-8 w-full py-4 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                View Enrollment Plans
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Career Pathways</h3>
              <ul className="space-y-3">
                {program.careers.map((career, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
