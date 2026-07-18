import React, { useState } from 'react';
import { Phone, Mail, Landmark, MessageSquare, ArrowRight, CheckCircle2, User, Building2, Calendar, HelpCircle, Globe } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI & Generative AI Solutions',
    message: ''
  });

  const domains = [
    'AI & Generative AI Solutions',
    'SAP Consulting & Implementation',
    'Oracle ERP & Cloud Solutions',
    'Enterprise Digital Transformation',
    'Business Process Automation',
    'Data Analytics & Business Intelligence',
    'Managed IT Support Services'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'AI & Generative AI Solutions',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16" id="contact-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight" id="contact-page-title">
            Contact Nexora Global
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Whether you are looking for AI solutions, SAP consulting, Oracle implementation, enterprise automation, or digital transformation services, our team is ready to help.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Panel: Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl text-slate-950">
                Corporate Inquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans font-light leading-relaxed">
                Connect directly with our technology practices to schedule an architectural exploration call or schedule general evaluations.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4" id="contact-info-cards">
              {/* Telephone Support Card */}
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start space-x-4 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">
                    Direct Support
                  </h3>
                  <div className="mt-2 space-y-1 font-mono text-sm sm:text-base text-slate-800 font-semibold">
                    <a href="tel:+919384661462" className="block hover:text-blue-600 transition-colors">
                      +91 9384661462
                    </a>
                    <a href="tel:+919677097662" className="block hover:text-blue-600 transition-colors">
                      +91 9677097662
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start space-x-4 shadow-sm">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">
                    General & Sales Mail
                  </h3>
                  <div className="mt-2 font-mono text-sm sm:text-base text-slate-800 font-semibold">
                    <a href="mailto:pvsmani66@gmail.com" className="hover:text-purple-600 transition-colors">
                      pvsmani66@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Website Card */}
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start space-x-4 shadow-sm">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">
                    Corporate Website
                  </h3>
                  <div className="mt-2 font-mono text-sm sm:text-base text-slate-800 font-semibold">
                    <a href="https://www.nexoraglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                      www.nexoraglobal.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Head office illustration/badge */}
              <div className="p-6 bg-white border border-slate-100 rounded-2xl flex items-start space-x-4 shadow-sm">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-400 uppercase tracking-wider">
                    Global Delivery Hub
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 font-sans leading-relaxed">
                    Corporate Technology Park, Bangalore, Karnataka, India • Global Distributed Delivery Model.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual World Network Map Representation */}
            <div className="border border-slate-150 rounded-3xl p-6 bg-white shadow-sm overflow-hidden text-center relative" id="world-delivery-map">
              <span className="block text-xs font-bold font-mono tracking-wider uppercase text-slate-400 mb-4">
                Active Client Coverage
              </span>
              <div className="h-32 w-full bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-70"></div>
                
                {/* Node connection visual */}
                <div className="flex gap-16 relative">
                  <div className="text-center relative">
                    <span className="w-3 h-3 bg-blue-600 rounded-full inline-block animate-ping absolute top-0 left-3"></span>
                    <span className="w-3 h-3 bg-blue-600 rounded-full inline-block relative"></span>
                    <span className="block text-[9px] font-bold font-mono text-slate-500 mt-1 uppercase">US Hub</span>
                  </div>
                  <div className="text-center relative">
                    <span className="w-3 h-3 bg-purple-600 rounded-full inline-block animate-ping absolute top-0 left-3"></span>
                    <span className="w-3 h-3 bg-purple-600 rounded-full inline-block relative"></span>
                    <span className="block text-[9px] font-bold font-mono text-slate-500 mt-1 uppercase">India Hub</span>
                  </div>
                  <div className="text-center relative">
                    <span className="w-3 h-3 bg-rose-600 rounded-full inline-block relative"></span>
                    <span className="block text-[9px] font-bold font-mono text-slate-500 mt-1 uppercase">EU clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive RFP Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm" id="contact-form-panel">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6" id="consultation-request-form">
                <div>
                  <h2 className="font-display font-bold text-xl text-slate-900">
                    Request a Consultation
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the corporate outline below to schedule a review with a certified consultant.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Corporate email */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Corporate Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telephone support */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Contact Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        placeholder="+91 9XXXX XXXXX"
                      />
                    </div>
                  </div>

                  {/* Company/Org Name */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Organization / Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        placeholder="Acme Enterprise Ltd."
                      />
                    </div>
                  </div>
                </div>

                {/* Service Area of interest dropdown */}
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                    Area of Strategic Interest
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white cursor-pointer"
                    >
                      {domains.map((dom, idx) => (
                        <option key={idx} value={dom}>{dom}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                    Consultation Outline / Scope Brief <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                    placeholder="Describe your current software context, challenges, or transition roadmap objectives..."
                  ></textarea>
                </div>

                {/* Submit action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 disabled:bg-slate-400 transition-all duration-300 shadow-md cursor-pointer group"
                  id="contact-form-submit"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Verifying Outlines...
                    </span>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success confirmation Screen */
              <div className="p-8 text-center space-y-6" id="contact-success-view">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-2xl text-slate-900">
                    Consultation Request Logged!
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. A senior enterprise technology architect specializing in <strong>{formData.service}</strong> will coordinate with you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> to schedule a preliminary review call.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
