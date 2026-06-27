import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { logout } from '../lib/firebase';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, userData } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                <Leaf size={20} />
              </div>
              <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-primary-900' : 'text-primary-950'}`}>
                SATYA Civilization Academy
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    if (link.href.includes('#')) {
                      const id = link.href.split('#')[1];
                      const element = document.getElementById(id);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.href);
                      }
                    }
                  }}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-full">
                    <UserIcon size={16} className="text-primary-600" />
                    {userData?.displayName || user.email?.split('@')[0]}
                  </div>
                  <button 
                    onClick={() => logout()}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
                    title="Sign Out"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="px-6 py-2.5 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm hover:shadow"
                >
                  Sign In
                </button>
              )}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-slate-700 block py-2 border-b border-slate-50"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href.includes('#')) {
                        const id = link.href.split('#')[1];
                        const element = document.getElementById(id);
                        if (element) {
                          e.preventDefault();
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth' });
                            window.history.pushState(null, '', link.href);
                          }, 100);
                        }
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {user ? (
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-slate-700 font-medium py-2">
                      <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                        <UserIcon size={20} />
                      </div>
                      <div>
                        <div>{userData?.displayName || user.email?.split('@')[0]}</div>
                        <div className="text-sm text-slate-500 font-normal">{user.email}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium w-full text-center flex items-center justify-center gap-2"
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                    className="mt-4 px-5 py-3 rounded-xl bg-primary-600 text-white font-medium w-full text-center"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}
