import { useState } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutUs />;
      case 'services':
        return <Services />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white" id="nexora-app-root">
      {/* Dynamic Header / Navigation panel */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Corporate Space */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Consolidated Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
