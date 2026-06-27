import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, LogIn, BookOpen, Clock, Users, Award } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import PaymentModal from '../components/PaymentModal';
import AuthModal from '../components/AuthModal';

const programData = {
  basic: {
    name: 'Basic',
    price: '10,000',
    tagline: 'Start your agricultural journey',
    description: 'The Basic program provides foundational knowledge in sustainable agriculture. Designed for beginners who want to build a strong base before moving on to advanced practices. You will learn the core principles of modern farming.',
    features: ['Digital Course Access', 'Community Forum', 'Monthly Q&A', 'Basic Resources Library'],
    curriculum: [
      { title: 'Week 1: Intro to Farming', desc: 'Understanding the ecosystem and basic crop cycles.' },
      { title: 'Week 2: Soil Health', desc: 'Composting, microbiology, and soil nutrition basics.' },
      { title: 'Week 3: Water Basics', desc: 'Irrigation systems and water conservation.' },
      { title: 'Week 4: First Harvest', desc: 'Planning, planting, and harvesting your first crop.' }
    ],
    stats: [
      { icon: Clock, text: '4 Weeks' },
      { icon: BookOpen, text: '12 Modules' },
      { icon: Users, text: 'Community' },
    ]
  },
  pro: {
    name: 'Pro',
    price: '20,000',
    tagline: 'Master modern farming techniques',
    description: 'Advanced techniques for serious agriculturalists. Learn automated systems, precision farming, and sustainable business scaling. This program takes your basic knowledge and turns it into a professional skillset.',
    features: ['Everything in Basic', '1-on-1 Mentorship Sessions', 'Advanced IoT Farm Kit', 'Professional Certification'],
    curriculum: [
      { title: 'Month 1: Core Systems', desc: 'Mastering the basic systems and scaling them up.' },
      { title: 'Month 2: Precision Ag & IoT', desc: 'Implementing sensors and automated irrigation.' },
      { title: 'Month 3: Business Scaling', desc: 'Market analysis, yield optimization, and sales.' },
      { title: 'Month 4: Certification Project', desc: 'Build and present a fully automated farm plan.' }
    ],
    stats: [
      { icon: Clock, text: '4 Months' },
      { icon: BookOpen, text: '48 Modules' },
      { icon: Award, text: 'Certified' },
    ]
  },
  ultra: {
    name: 'Ultra',
    price: '40,000',
    tagline: 'Lead the agricultural revolution',
    description: 'The complete enterprise package for future industry leaders. Includes physical campus access, investor networking, and enterprise farm setup. Designed for those who want to build agricultural empires.',
    features: ['Everything in Pro', 'Campus Lab Access', 'Investor Network Access', 'Enterprise Farm Setup'],
    curriculum: [
      { title: 'Phase 1: Pro Mastery', desc: 'Complete the Pro curriculum with honors.' },
      { title: 'Phase 2: On-Campus Labs', desc: 'Hands-on experience with industrial farming equipment.' },
      { title: 'Phase 3: Enterprise Architecture', desc: 'Designing multi-acre sustainable ecosystems.' },
      { title: 'Phase 4: Investor Pitching', desc: 'Presenting your agricultural startup to our network.' }
    ],
    stats: [
      { icon: Clock, text: '6 Months' },
      { icon: Users, text: '1-on-1 Mentorship' },
      { icon: Award, text: 'Enterprise' },
    ]
  }
};

export default function ProgramDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, userData } = useAuth();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const program = id ? programData[id.toLowerCase() as keyof typeof programData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen pt-32 pb-24 text-center bg-slate-50">
        <h1 className="text-3xl font-bold mb-4">Program not found</h1>
        <button onClick={() => navigate('/')} className="text-primary-600 hover:underline">Return Home</button>
      </div>
    );
  }

  const handleEnroll = async () => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    if (program.name === 'Basic' && userData?.plan === 'Basic') return;
    
    setIsPaymentModalOpen(true);
  };

  const isPlanActive = () => {
    if (!userData) return false;
    if (userData.plan === program.name) return true;
    if (userData.plan === 'Ultra') return true;
    if (userData.plan === 'Pro' && program.name === 'Basic') return true;
    return false;
  };

  const active = isPlanActive();
  const currentSelected = userData?.plan === program.name;

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate('/#pricing')}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-primary-500/20 text-primary-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-500/30"
              >
                {program.name} Program
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-serif font-bold mb-6"
              >
                {program.tagline}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                {program.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="text-3xl font-bold">
                  ₹{program.price} <span className="text-lg text-slate-400 font-medium">/month</span>
                </div>
                
                <button 
                  onClick={handleEnroll}
                  disabled={currentSelected || (!currentSelected && active)}
                  className={`px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 ${
                    currentSelected
                      ? 'bg-white/10 text-white cursor-default border border-white/20'
                      : active 
                        ? 'bg-white/10 text-slate-300 cursor-not-allowed border border-white/10'
                        : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20'
                  }`}
                >
                  {currentSelected 
                    ? 'Active Plan' 
                    : active 
                      ? 'Included in your Plan'
                      : !user 
                        ? <><LogIn size={18} /> Sign in to Enroll</>
                        : 'Enroll Now'}
                </button>
              </motion.div>
            </div>
            
            <div className="hidden md:flex justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {program.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                      <Icon className="w-8 h-8 text-primary-400 mb-3" />
                      <span className="font-medium text-slate-200">{stat.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Program Curriculum</h2>
              <div className="space-y-6">
                {program.curriculum.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      {idx !== program.curriculum.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {program.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary-100 text-primary-600 rounded-full p-0.5 shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <button 
                  onClick={handleEnroll}
                  disabled={currentSelected || (!currentSelected && active)}
                  className={`w-full py-4 rounded-xl font-medium transition-colors ${
                    currentSelected
                      ? 'bg-slate-100 text-slate-500 cursor-default border border-slate-200'
                      : active 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20'
                  }`}
                >
                  {currentSelected ? 'Active Plan' : active ? 'Included' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
        planName={program.name}
        price={program.price}
      />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}
