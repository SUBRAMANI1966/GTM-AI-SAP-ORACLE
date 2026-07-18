import { useState } from 'react';
import { Sparkles, Database, Layers, RefreshCw, Terminal, CheckCircle2, ArrowRight, BrainCircuit, MessageSquareCode, Workflow, Milestone, FileSpreadsheet, Eye, Network, Code, Server, LayoutDashboard, Globe, TrendingUp, Cpu, Landmark, ShieldAlert, KanbanSquare } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'sap' | 'oracle' | 'digital'>('all');

  const categories = [
    { id: 'all', label: 'All Fields' },
    { id: 'ai', label: 'Artificial Intelligence & Gen AI' },
    { id: 'sap', label: 'SAP Enterprise Suites' },
    { id: 'oracle', label: 'Oracle ERP & OCI' },
    { id: 'digital', label: 'Digital Transformation' },
  ];

  // AI Domain bullet points
  const aiSolutions = {
    title: 'Artificial Intelligence & Generative AI Solutions',
    tagline: 'Leading the enterprise charge toward cognitive automation and predictive intelligence.',
    badge: 'State of the Art',
    items: [
      {
        title: 'Generative AI Applications',
        desc: 'Custom-tuned LLM applications built to draft enterprise content, respond to secure documentation search, and augment knowledge workers.',
        icon: BrainCircuit,
      },
      {
        title: 'AI Chatbots & Virtual Assistants',
        desc: 'Context-aware conversational interfaces trained on internal files, serving high-throughput client requests with human-like precision.',
        icon: MessageSquareCode,
      },
      {
        title: 'AI Agents & Workflow Automation',
        desc: 'Autonomous software agents that execute multi-step routines, communicate across toolsets, and resolve administrative actions.',
        icon: Workflow,
      },
      {
        title: 'Machine Learning Solutions',
        desc: 'Custom classification, neural networks, and model fine-tuning architectures to solve bespoke industry business logic.',
        icon: Cpu,
      },
      {
        title: 'Predictive Analytics',
        desc: 'Leverage historical tabular databases to predict customer churn, optimize pricing curves, and flag critical inventory needs.',
        icon: TrendingUp,
      },
      {
        title: 'Intelligent Document Processing',
        desc: 'Extract structural, key-value data fields out of physical invoices, contracts, and shipping logs via advanced OCR pipelines.',
        icon: FileSpreadsheet,
      }
    ]
  };

  // SAP Domain bullet points
  const sapSolutions = {
    title: 'SAP Consulting & Implementation Services',
    tagline: 'Aligning business metrics with global ERP standards to build intelligent enterprises.',
    badge: 'Enterprise Gold standard',
    items: [
      {
        title: 'SAP S/4HANA Implementation',
        desc: 'End-to-end greenfield implementations, selective data transition, or brownfield system conversions to S/4HANA.',
        icon: Database,
      },
      {
        title: 'SAP SuccessFactors',
        desc: 'Modernize global HR workflows, payroll modules, employee profiles, and active career onboarding suites.',
        icon: Network,
      },
      {
        title: 'SAP Ariba',
        desc: 'Re-engineer strategic sourcing, supplier lifecycle compliance, and secure digital procurement transactions.',
        icon: Server,
      },
      {
        title: 'SAP Analytics Cloud',
        desc: 'Live analytics tracking and financial projection models mapped across databases in elegant dashboards.',
        icon: LayoutDashboard,
      },
      {
        title: 'SAP Fiori Development',
        desc: 'Responsive, user-friendly, and custom-branded frontends designed to run seamlessly on top of complex ABAP schemas.',
        icon: Code,
      },
      {
        title: 'SAP Support & Managed Services',
        desc: 'Around-the-clock maintenance patches, transaction troubleshooting, database tuning, and performance audits.',
        icon: ShieldAlert,
      }
    ]
  };

  // Oracle Domain bullet points
  const oracleSolutions = {
    title: 'Oracle ERP & Cloud Infrastructure',
    tagline: 'Optimizing supply chain operations, ledger ledgers, and secure database hosting.',
    badge: 'Oracle Certified partner',
    items: [
      {
        title: 'Oracle ERP Cloud',
        desc: 'Configure financial general ledgers, active revenue billing, asset tracking, and statutory accounting reports.',
        icon: Landmark,
      },
      {
        title: 'Oracle Fusion Applications',
        desc: 'Highly integrated software modules addressing human capital, project portfolios, and complex customer data.',
        icon: RefreshCw,
      },
      {
        title: 'Oracle HCM Cloud',
        desc: 'Align recruitment pipelines, optimize payroll distributions, and map international compliance frameworks.',
        icon: Network,
      },
      {
        title: 'Oracle SCM (Supply Chain)',
        desc: 'Synchronize global suppliers, optimize warehouse distributions, track logistics, and manage procurement pipelines.',
        icon: KanbanSquare,
      },
      {
        title: 'Oracle Database Solutions',
        desc: 'Configure, migration, and maintenance of high-throughput Oracle Autonomous databases and custom PL/SQL clusters.',
        icon: Database,
      },
      {
        title: 'Oracle Cloud Infrastructure (OCI)',
        desc: 'Migrate on-premise compute workloads onto high-performance bare metal servers and cloud architectures.',
        icon: Server,
      }
    ]
  };

  // Digital Transformation bullet points
  const digitalSolutions = {
    title: 'Digital Transformation & Enterprise Consulting',
    tagline: 'Bridging technical debt and modern application architectures to achieve structural scalability.',
    badge: 'Modern Horizons',
    items: [
      {
        title: 'Process Consulting',
        desc: 'Map existing corporate workflows, identify operational bottlenecks, and lay out clean technology blueprints.',
        icon: Milestone,
      },
      {
        title: 'Enterprise Automation',
        desc: 'Implement cross-application integrations and robotic process automation (RPA) tools to boost human productivity.',
        icon: Workflow,
      },
      {
        title: 'Cloud Migration',
        desc: 'Expertly guide migrations of legacy monolithic systems onto modern public or hybrid clouds with near-zero business impact.',
        icon: Server,
      },
      {
        title: 'API & System Integration',
        desc: 'Build secure, high-throughput REST and GraphQL API gateways connecting ERP modules to bespoke applications.',
        icon: Network,
      },
      {
        title: 'Data Engineering',
        desc: 'Construct robust ETL/ELT pipelines, structure secure enterprise data lakes, and standardize unstructured databases.',
        icon: BrainCircuit,
      },
      {
        title: 'Business Intelligence',
        desc: 'Enable executive leadership with interactive dashboards, live KPI reports, and automated slide summaries.',
        icon: LayoutDashboard,
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16" id="services-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Consulting Portfolio</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight" id="services-page-title">
            What We Do
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Nexora Global partners with businesses to accelerate digital transformation using cutting-edge enterprise platforms, artificial intelligence, and tailored software architectures.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-slate-200/60 pb-6 max-w-4xl mx-auto" id="services-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white border border-transparent hover:border-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Service Grid rendering */}
        <div className="space-y-24" id="services-content-blocks">
          {/* AI Domain block */}
          {(activeCategory === 'all' || activeCategory === 'ai') && (
            <div className="space-y-10 animate-fadeIn" id="ai-solutions-block">
              <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-3xl">
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-400">
                    {aiSolutions.badge}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
                    {aiSolutions.title}
                  </h2>
                  <p className="mt-4 text-slate-300 font-sans font-light text-base leading-relaxed">
                    {aiSolutions.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiSolutions.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      id={`ai-item-card-${index}`}
                      className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SAP Domain block */}
          {(activeCategory === 'all' || activeCategory === 'sap') && (
            <div className="space-y-10 animate-fadeIn" id="sap-solutions-block">
              <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-3xl">
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-purple-400">
                    {sapSolutions.badge}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
                    {sapSolutions.title}
                  </h2>
                  <p className="mt-4 text-slate-300 font-sans font-light text-base leading-relaxed">
                    {sapSolutions.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sapSolutions.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      id={`sap-item-card-${index}`}
                      className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-purple-200 hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Oracle Domain block */}
          {(activeCategory === 'all' || activeCategory === 'oracle') && (
            <div className="space-y-10 animate-fadeIn" id="oracle-solutions-block">
              <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-3xl">
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-rose-400">
                    {oracleSolutions.badge}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
                    {oracleSolutions.title}
                  </h2>
                  <p className="mt-4 text-slate-300 font-sans font-light text-base leading-relaxed">
                    {oracleSolutions.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {oracleSolutions.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      id={`oracle-item-card-${index}`}
                      className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-rose-200 hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-rose-50 text-rose-600 rounded-xl mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Digital Transformation block */}
          {(activeCategory === 'all' || activeCategory === 'digital') && (
            <div className="space-y-10 animate-fadeIn" id="digital-solutions-block">
              <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="max-w-3xl">
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-emerald-400">
                    {digitalSolutions.badge}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mt-3">
                    {digitalSolutions.title}
                  </h2>
                  <p className="mt-4 text-slate-300 font-sans font-light text-base leading-relaxed">
                    {digitalSolutions.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalSolutions.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      id={`digital-item-card-${index}`}
                      className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-emerald-200 hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Technology Stack Visualizer */}
        <div className="mt-24 p-8 sm:p-12 bg-white border border-slate-100 rounded-3xl shadow-sm text-center" id="architecture-blueprint-panel">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl text-slate-900">
              Integrated Enterprise Blueprint
            </h3>
            <p className="mt-2 text-sm text-slate-500 font-sans">
              Nexora Global coordinates data and process structures seamlessly across multiple specialized layers to ensure reliable scaling.
            </p>
            
            {/* Visual mapping structure */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-mono font-bold tracking-tight">
              <div className="p-4 bg-blue-50 border border-blue-100 text-blue-700 rounded-xl w-full md:w-1/4 shadow-sm">
                AI COGNITIVE LAYER
                <span className="block text-[10px] font-normal text-blue-500 mt-1">Gemini, Agents, IDP</span>
              </div>
              <div className="text-slate-400">➔</div>
              <div className="p-4 bg-purple-50 border border-purple-100 text-purple-700 rounded-xl w-full md:w-1/4 shadow-sm">
                INTEGRATION HUB
                <span className="block text-[10px] font-normal text-purple-500 mt-1">API Gateways, ETLs</span>
              </div>
              <div className="text-slate-400">➔</div>
              <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl w-full md:w-1/4 shadow-sm">
                ENTERPRISE RECORD
                <span className="block text-[10px] font-normal text-rose-500 mt-1">SAP Hana, Oracle Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
