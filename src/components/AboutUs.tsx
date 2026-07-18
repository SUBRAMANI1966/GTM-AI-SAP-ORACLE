import { Quote, Eye, Target, Sparkles, Shield, Trophy, Users, GraduationCap, ClipboardCheck, Compass } from 'lucide-react';

export default function AboutUs() {
  const coreValues = [
    {
      name: 'Innovation',
      desc: 'We aggressively research, test, and adopt cutting-edge models and cloud features to deliver continuous performance milestones.',
      icon: Sparkles,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      name: 'Integrity',
      desc: 'We practice absolute operational transparency, ensuring data compliance, strict security posture, and honest consulting guides.',
      icon: Shield,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      name: 'Customer Success',
      desc: 'We gauge our prosperity purely by the measurable business performance, cost savings, and scale improvements of our clients.',
      icon: Target,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      name: 'Excellence',
      desc: 'We maintain pristine engineering standards across software codebases, database systems, and enterprise cloud migrations.',
      icon: Trophy,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      name: 'Collaboration',
      desc: 'We work as an integrated unit with our clients internal personnel, sharing resources, workshops, and architectural logs.',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      name: 'Continuous Learning',
      desc: 'We support team certifications, technical research, and model evaluations, ensuring we remain at the forefront of the industry.',
      icon: GraduationCap,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      name: 'Accountability',
      desc: 'We take total ownership of our code, systems integration blueprints, project timelines, and post-launch managed support services.',
      icon: ClipboardCheck,
      color: 'bg-slate-100 text-slate-700',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 py-16" id="about-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight" id="about-page-title">
            Who We Are
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Nexora Global is built on the belief that intelligent technologies should solve enterprise complexities—not multiply them.
          </p>
        </div>

        {/* What We Think (Philosophy Statement) */}
        <div className="p-8 sm:p-12 md:p-16 bg-white border border-slate-100 rounded-3xl shadow-sm mb-16 relative" id="philosophy-panel">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-slate-100 transform -scale-x-100 -z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-6">What We Think</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-sans font-light leading-relaxed italic">
              "Technology should solve business problems—not create complexity. At Nexora Global, we believe that Artificial Intelligence, SAP, Oracle, and Cloud technologies are powerful enablers of business transformation. Every organization deserves solutions that are secure, scalable, and aligned with long-term business goals."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1.5 w-12 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="vision-mission-row">
          {/* Vision card */}
          <div className="p-8 sm:p-10 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-500/15 rounded-2xl text-blue-400">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl tracking-tight">Our Vision</h2>
            </div>
            <p className="text-slate-300 font-sans font-light leading-relaxed text-sm sm:text-base" id="about-vision-text">
              To become a trusted global technology partner delivering intelligent digital solutions that transform industries.
            </p>
          </div>

          {/* Mission card */}
          <div className="p-8 sm:p-10 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple-500/15 rounded-2xl text-purple-400">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl tracking-tight">Our Mission</h2>
            </div>
            <p className="text-slate-300 font-sans font-light leading-relaxed text-sm sm:text-base" id="about-mission-text">
              To empower businesses with innovative AI and enterprise technologies that improve efficiency, enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12" id="values-section">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 font-sans">
              The fundamental standards that drive our consulting methodology, customer stewardship, and engineering discipline daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="values-grid">
            {coreValues.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  id={`value-card-${index}`}
                  className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-slate-200 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl mb-4 ${val.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    {val.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
