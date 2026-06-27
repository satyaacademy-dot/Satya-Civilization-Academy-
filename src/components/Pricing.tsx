import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import PaymentModal from './PaymentModal';
import AuthModal from './AuthModal';
import bgImage from '../assets/images/pricing_bg_1782500352275.jpg';

const plans = [
  {
    name: 'Basic',
    price: '10,000',
    description: 'Essential access for beginners and casual learners.',
    features: [
      'Access to selected courses',
      'Study material and PDF',
      'Community access',
      'Monthly webinars',
      'Basic quizzes',
      'Learning roadmap',
      'Progress tracking'
    ],
    target: 'For beginners and self-paced learners',
    popular: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '20,000',
    description: 'Learn, build, and apply with hands-on implementation.',
    features: [
      'Everything in Basic',
      'Full course library',
      'Premium study materials',
      'Live workshop project-based learning',
      'Downloadable resources',
      'Certificates of completion',
      'AI learning assistance',
      'Priority community support',
      'Agriculture and energy implementation guides'
    ],
    target: 'For professionals, entrepreneurs, educators, and farmers',
    popular: true,
    buttonText: 'Upgrade to Pro',
  },
  {
    name: 'Ultra',
    price: '40,000',
    description: 'Custom-made package for maximum impact and growth.',
    features: [
      'Exclusive masterclasses',
      'Research and innovation resources',
      'Business and startup guidance',
      'Leadership development mentor sessions',
      'Early access to new programs',
      'Private community network',
      'Collaboration opportunities',
      'Priority support',
      'Future premium features'
    ],
    target: 'For researchers, institutes, organizations, and changemakers',
    popular: false,
    buttonText: 'Choose Ultra',
  }
];

export const Pricing = () => {
  const { user, userData } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handlePlanClick = async (planName: string, price: string) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    // If they click basic and they are already basic or higher, do nothing or show active
    if (planName === 'Basic' && userData?.plan === 'Basic') return;
    
    // Open payment modal for Pro and Ultra
    setSelectedPlan({ name: planName, price });
  };

  const isPlanActive = (planName: string) => {
    if (!userData) return false;
    if (userData.plan === planName) return true;
    if (userData.plan === 'Ultra') return true; // Ultra has access to everything
    if (userData.plan === 'Pro' && planName === 'Basic') return true;
    return false;
  };

  return (
    <section id="pricing" className="py-24 relative bg-slate-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-slate-950/70 backdrop-blur-[2px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md"
          >
            Invest in Your Future
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200 mb-8 drop-shadow-md"
          >
            Choose the program that fits your journey. From basic learning to advanced innovation.
          </motion.p>
          
          {user ? (
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                {userData?.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-slate-900">{userData?.displayName || user.email}</p>
                <p className="text-xs text-slate-500">Current Plan: <span className="font-bold text-primary-600">{userData?.plan || 'Loading...'}</span></p>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:text-primary-600 hover:border-primary-200 transition-colors font-medium"
            >
              <LogIn className="w-4 h-4" />
              Sign in to view your plan
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const active = isPlanActive(plan.name);
            const currentSelected = userData?.plan === plan.name;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border ${
                  active ? 'border-primary-500 shadow-xl shadow-primary-500/10' : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && !active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={16} className="fill-current" />
                    Most Popular
                  </div>
                )}
                {active && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Check size={16} strokeWidth={3} />
                    {currentSelected ? 'Current Plan' : 'Included'}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                    <span className="text-slate-500 font-medium">/month</span>
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700">
                    {plan.target}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-0.5 shrink-0 ${active ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={active ? 'text-slate-800 font-medium' : 'text-slate-600'}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => handlePlanClick(plan.name, plan.price)}
                    disabled={currentSelected}
                    className={`w-full py-4 rounded-xl font-medium transition-colors ${
                      currentSelected
                        ? 'bg-primary-50 text-primary-600 border border-primary-200 cursor-default'
                        : active 
                          ? 'bg-slate-100 text-slate-500 cursor-not-allowed'
                          : plan.popular 
                            ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20' 
                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {currentSelected 
                      ? 'Active Plan' 
                      : active 
                        ? 'Included in Plan'
                        : !user 
                          ? 'Sign in to ' + plan.buttonText
                          : plan.buttonText}
                  </button>
                  <Link
                    to={`/program/${plan.name.toLowerCase()}`}
                    className="flex w-full items-center justify-center py-4 rounded-xl font-medium transition-colors border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                  >
                    View Program Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {selectedPlan && (
        <PaymentModal 
          isOpen={!!selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
          planName={selectedPlan.name}
          price={selectedPlan.price}
        />
      )}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
};
