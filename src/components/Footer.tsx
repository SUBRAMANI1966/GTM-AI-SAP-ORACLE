import { Hexagon, Sparkles, Phone, Mail, ArrowUp, Globe } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNav = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12" id="nexora-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 bg-white text-slate-950 rounded-lg overflow-hidden">
                <Hexagon className="w-5 h-5" />
                <Sparkles className="absolute w-3 h-3 text-blue-500 -top-0.5 -right-0.5 animate-pulse" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                Nexora Global
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light">
              Empowering enterprises with AI, SAP, Oracle, Cloud, and Digital Transformation solutions.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left">
                  • Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left">
                  • About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left">
                  • Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left">
                  • Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left">
                  • Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Artificial Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • SAP Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Oracle Consulting
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Cloud Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Digital Transformation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Software Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">
                  • Managed Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-sans">
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <div className="font-mono">
                  <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-widest font-sans">Phone</span>
                  <a href="tel:+919384661462" className="block hover:text-white transition-colors">
                    +91 9384661462
                  </a>
                  <a href="tel:+919677097662" className="block hover:text-white transition-colors">
                    +91 9677097662
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0" />
                <div className="font-mono">
                  <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-widest font-sans">Email</span>
                  <a href="mailto:pvsmani66@gmail.com" className="hover:text-white transition-colors">
                    pvsmani66@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Globe className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                <div className="font-mono">
                  <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-widest font-sans">Website</span>
                  <a href="https://www.nexoraglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.nexoraglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Nexora Global. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
            id="back-to-top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
