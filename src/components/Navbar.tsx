import { useState } from 'react';
import { Hexagon, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm" id="nexora-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Brand */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 focus:outline-none group cursor-pointer"
              id="brand-logo"
            >
              <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 text-white rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                <Hexagon className="w-6 h-6 animate-pulse" />
                <Sparkles className="absolute w-3.5 h-3.5 text-blue-400 -top-0.5 -right-0.5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  NEXORA
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 font-mono -mt-1 uppercase">
                  GLOBAL
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? 'text-blue-600 bg-blue-50/60 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              id="nav-cta-contact"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 shadow-sm shadow-slate-900/10 cursor-pointer group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg animate-fadeIn" id="mobile-menu-drawer">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-4 border-t border-slate-100">
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
