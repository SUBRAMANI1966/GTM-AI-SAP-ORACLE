import { ArrowRight, Sparkles, Database, Code, ShieldCheck, Zap, BarChart3, Cloud, Users, Globe2, Award, HeartHandshake, Layers } from 'lucide-react';
import { ActiveTab } from '../types';

interface HomeProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  // 10 Core Services as outlined in the request
  const coreServices = [
    {
      title: 'Artificial Intelligence & Generative AI',
      desc: 'Harness the power of Large Language Models, custom GPTs, and predictive analytics to automate cognitive workflows.',
      icon: Sparkles,
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'SAP Consulting & Implementation',
      desc: 'Seamless migration, implementation, and custom Fiori development for S/4HANA, SuccessFactors, and Ariba.',
      icon: Database,
      color: 'from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Oracle ERP & Cloud Solutions',
      desc: 'Configure, deploy, and scale Oracle Fusion Cloud Financials, HCM, SCM, and cloud infrastructure.',
      icon: Layers,
      color: 'from-rose-500/10 to-orange-500/10 text-rose-600 border-rose-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Enterprise Digital Transformation',
      desc: 'Re-engineer outdated business operations, migrate key legacy infrastructure to the cloud, and build modern API bridges.',
      icon: Cloud,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Business Process Automation',
      desc: 'Eliminate repetitive tasks and streamline administrative bottlenecks with intelligent RPA workflows.',
      icon: Zap,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Data Analytics & Business Intelligence',
      desc: 'Convert dark data into interactive dashboards, visual reports, and data lake pipelines with high availability.',
      icon: BarChart3,
      color: 'from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Cloud Migration & Modernization',
      desc: 'Safely lift-and-shift or refactor on-premise application systems to AWS, Azure, GCP, or Oracle Cloud.',
      icon: Cloud,
      color: 'from-indigo-500/10 to-violet-500/10 text-indigo-600 border-indigo-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'Application Dev & System Integration',
      desc: 'Build high-performance, responsive full-stack applications tied directly into ERP backbones with robust APIs.',
      icon: Code,
      color: 'from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'AI Agents & Intelligent Automation',
      desc: 'Deploy self-directed cognitive agents to field customer support, automate document sorting, and trigger processes.',
      icon: Sparkles,
      color: 'from-fuchsia-500/10 to-pink-500/10 text-fuchsia-600 border-fuchsia-100',
      actionTab: 'services' as ActiveTab
    },
    {
      title: 'IT Consulting & Managed Services',
      desc: 'Ensure zero-downtime, continuous security patches, monitoring, and certified database administrations.',
      icon: ShieldCheck,
      color: 'from-slate-500/10 to-slate-700/10 text-slate-700 border-slate-200',
      actionTab: 'services' as ActiveTab
    }
  ];

  // Why Nexora Global?
  const pillars = [
    {
      title: 'Industry-Focused Expertise',
      desc: 'We map technology to industry-specific bottlenecks, offering specialized solutions for finance, retail, and manufacturing.',
      icon: Award,
    },
    {
      title: 'Experienced Technology Consultants',
      desc: 'Our team comprises certified architects, SAP consultants, Oracle experts, and veteran ML engineers.',
      icon: Users,
    },
    {
      title: 'Customer-Centric Approach',
      desc: 'We design around your workflows, scaling incrementally to ensure low risk and high corporate adoption.',
      icon: HeartHandshake,
    },
    {
      title: 'Innovative AI-Powered Solutions',
      desc: 'We build future-proof workflows incorporating state-of-the-art Generative AI agents and neural search pipelines.',
      icon: Sparkles,
    },
    {
      title: 'End-to-End Implementation & Support',
      desc: 'From initial design consulting and database blueprinting to deployment and 24/7 technical operations support.',
      icon: ShieldCheck,
    },
    {
      title: 'Global Delivery Model',
      desc: 'Leverage our hybrid engagement structure to get top-tier support across multiple global time zones.',
      icon: Globe2,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50" id="home-view">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 border-b border-slate-100" id="hero-section">
        {/* Abstract background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70"></div>
        
        {/* Glow visual highlights */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Innovate • Transform • Grow</span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight" id="hero-title">
            Transforming Businesses with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              AI, SAP & Oracle
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-sans font-light leading-relaxed" id="hero-description">
            Nexora Global is a technology consulting and digital transformation partner helping organizations modernize operations, improve productivity, and accelerate growth through innovative, scalable, and future-ready solutions.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setActiveTab('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              id="hero-cta-services"
            >
              Explore Core Services
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 cursor-pointer"
              id="hero-cta-contact"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Highlights bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-100 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <span className="block font-display font-bold text-3xl text-blue-600">AI-First</span>
              <span className="text-xs text-slate-500 font-medium">Generative AI Agents</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <span className="block font-display font-bold text-3xl text-purple-600">SAP</span>
              <span className="text-xs text-slate-500 font-medium">S/4HANA & Integrations</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <span className="block font-display font-bold text-3xl text-rose-600">Oracle</span>
              <span className="text-xs text-slate-500 font-medium">Fusion Cloud Solutions</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <span className="block font-display font-bold text-3xl text-emerald-600">End-to-End</span>
              <span className="text-xs text-slate-500 font-medium">Strategic Delivery Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid Section */}
      <section className="py-20 bg-slate-50/30" id="services-highlight-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
              We deliver measurable business value by deploying intelligent enterprise suites and bespoke technology architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
            {coreServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={index}
                  id={`service-card-${index}`}
                  className="flex flex-col justify-between p-8 bg-white border border-slate-100 rounded-3xl hover:border-slate-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Icon frame */}
                    <div className={`inline-flex items-center justify-center p-3.5 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed font-sans">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-50">
                    <button
                      onClick={() => setActiveTab(service.actionTab)}
                      className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-slate-700 group-hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Nexora Global Pillar Section */}
      <section className="py-20 bg-white border-t border-slate-100" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Why Nexora Global?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
              Partnering with businesses to guide digital transformations using cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-grid">
            {pillars.map((p, index) => {
              const IconComp = p.icon;
              return (
                <div
                  key={index}
                  id={`why-card-${index}`}
                  className="flex flex-col p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-50 text-blue-600 rounded-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner Call-to-action */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden" id="cta-banner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Empower Your Enterprise Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans font-light">
            Whether implementing secure enterprise suites, designing custom AI agents, or modernizing workloads, Nexora Global is your trusted consulting partner.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setActiveTab('contact')}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-white hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md cursor-pointer group"
              id="cta-banner-btn"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
