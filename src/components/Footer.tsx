import { Leaf, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-950 text-primary-100 py-16 border-t border-primary-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
                <Leaf size={16} />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                SATYA Civilization Academy
              </span>
            </div>
            <p className="text-primary-200 mb-6 max-w-sm">
              Cultivating wisdom, sustainability, and technological integration for the civilizations of tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-primary-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-primary-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-primary-800 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="hover:text-white transition-colors">Sustainable Agriculture</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Eco-Technology</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Civilization Studies</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Leadership Institute</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Academy</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/#about" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    const el = document.getElementById('about');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '/#about');
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/#programs" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    const el = document.getElementById('programs');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '/#programs');
                    }
                  }}
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link 
                  to="/#pricing" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    const el = document.getElementById('pricing');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '/#pricing');
                    }
                  }}
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  className="hover:text-white transition-colors"
                  onClick={(e) => {
                    const el = document.getElementById('contact');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', '/#contact');
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
          <p>© {new Date().getFullYear()} Satya Civilization Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
