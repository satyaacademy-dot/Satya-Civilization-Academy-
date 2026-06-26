import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
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
            <button className="px-5 py-2.5 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm hover:shadow">
              Apply Now
            </button>
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
              <button className="mt-4 px-5 py-3 rounded-xl bg-primary-600 text-white font-medium w-full text-center">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
