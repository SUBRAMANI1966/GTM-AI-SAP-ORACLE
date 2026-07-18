import React, { useState, useRef } from 'react';
import { Briefcase, MapPin, Search, Plus, X, Upload, CheckCircle2, User, Mail, Phone, Code, Sparkles, Building2, HelpCircle, Cpu, Layers } from 'lucide-react';
import { OPEN_JOBS } from '../data/jobs';
import { Job, JobApplicationFormData } from '../types';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState<Job | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // AI Parsing Simulation State
  const [isParsing, setIsParsing] = useState(false);
  const [parsingStep, setParsingStep] = useState('');
  const [matchScore, setMatchScore] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState<JobApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'AI & Data Engineering', label: 'AI & Machine Learning' },
    { id: 'SAP ERP', label: 'SAP ERP Systems' },
    { id: 'Oracle Cloud', label: 'Oracle Cloud Systems' },
    { id: 'Digital Transformation & Cloud', label: 'Software & DevOps' },
    { id: 'Sales & Operations', label: 'Business Dev & Sales' }
  ];

  // Filtering Logic
  const filteredJobs = OPEN_JOBS.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'all' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const simulateAIResumeParse = (nameOfFile: string) => {
    setIsParsing(true);
    setParsingStep('Initializing resume parser context...');
    setMatchScore(null);

    const steps = [
      'Extracting document text structures...',
      'Mapping competencies to Nexora’s Enterprise consulting matrices...',
      'Validating S/4HANA & Cloud compliance indicators...',
      'Scoring technical overlap with position requirements...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setParsingStep(steps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
        const calculatedScore = Math.floor(Math.random() * 12) + 87; // 87% to 98%
        setMatchScore(calculatedScore);
        setIsParsing(false);
        setParsingStep('');
        
        // Smart populate form defaults if empty
        setFormData(prev => ({
          ...prev,
          experience: prev.experience || (Math.floor(Math.random() * 6) + 3).toString(),
          coverLetter: prev.coverLetter || `[Nexora AI Parser Analysis for ${nameOfFile}]\n\n• Core Competencies: System Integration, Enterprise Architecture, High-Performance Systems.\n• Structural Alignment Score: ${calculatedScore}%\n\nCandidate has strong delivery experience. Perfect cultural and technical synergy detected for ${isApplying?.title || 'this position'}.`
        }));
      }
    }, 900);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      simulateAIResumeParse(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      simulateAIResumeParse(file.name);
      if (fileInputRef.current) {
        // Assign file directly to input ref
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !fileName) {
      alert('Please fill out all required fields and upload your CV resume.');
      return;
    }
    // Set submit screen
    setIsSubmitted(true);
  };

  const resetFormState = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      portfolio: '',
      experience: '',
      coverLetter: '',
    });
    setFileName('');
    setIsSubmitted(false);
    setIsApplying(null);
    setIsParsing(false);
    setParsingStep('');
    setMatchScore(null);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-16" id="careers-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Join Our Team</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight" id="careers-page-title">
            Careers at Nexora Global
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans">
            Join a global team shaping the future of enterprise digital transformation. We build scalable solutions using state-of-the-art Generative AI, cloud clusters, SAP, and Oracle Fusion.
          </p>
        </div>

        {/* Search & Filters block */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Text Search field */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="job-search-input"
                placeholder="Search jobs by title, tech stack, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800"
              />
            </div>
            
            {/* Department select filter */}
            <div className="w-full md:w-64">
              <select
                id="job-department-filter"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Career Postings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto" id="jobs-container">
          
          {/* Left panel: List of jobs */}
          <div className={`${selectedJob ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-4`}>
            <div className="flex justify-between items-center px-2">
              <h2 className="font-display font-bold text-lg text-slate-900">
                Open Positions ({filteredJobs.length})
              </h2>
              {searchQuery || selectedDept !== 'all' ? (
                <button
                  onClick={() => { setSearchQuery(''); setSelectedDept('all'); }}
                  className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              ) : null}
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-4" id="job-listings-list">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    id={`job-card-${job.id}`}
                    onClick={() => setSelectedJob(job)}
                    className={`p-6 border rounded-2xl cursor-pointer transition-all ${
                      selectedJob?.id === job.id
                        ? 'border-blue-600 bg-blue-50/20 shadow-sm'
                        : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-wider uppercase bg-slate-100 text-slate-600 mb-2">
                          {job.department}
                        </span>
                        <h3 className="font-display font-bold text-base text-slate-950">
                          {job.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 mt-4 text-xs text-slate-500 font-sans">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white border border-slate-100 rounded-2xl" id="jobs-empty-state">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="font-display font-bold text-slate-900 text-base">No open positions matching your search</h3>
                <p className="text-sm text-slate-500 mt-1">Try clearing your filters or testing other departments.</p>
              </div>
            )}
          </div>

          {/* Right panel: Expanded Details */}
          {selectedJob && (
            <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm h-fit sticky top-24 animate-slideIn" id="job-detail-panel">
              <div className="flex justify-between items-start pb-6 border-b border-slate-100">
                <div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="lg:hidden text-xs text-slate-400 hover:text-slate-600 font-semibold mb-3 cursor-pointer"
                  >
                    ← Back to list
                  </button>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-wider uppercase bg-blue-50 text-blue-700 mb-2">
                    {selectedJob.department}
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>{selectedJob.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="hidden lg:block text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Job Body */}
              <div className="mt-6 space-y-6 overflow-y-auto max-h-[500px] pr-2">
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-2">Role Overview</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-2.5">Key Requirements</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-2.5">Compensation & Benefits</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {selectedJob.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start">
                        <Sparkles className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Action bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                <button
                  onClick={() => setIsApplying(selectedJob)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer"
                  id="job-apply-trigger"
                >
                  Apply for this position
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Speculative Application Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-white border border-slate-150 rounded-3xl text-center max-w-4xl mx-auto" id="speculative-careers-card">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-4" />
          <h3 className="font-display font-bold text-slate-900 text-lg">Don't see your specific role listed?</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto font-sans font-light">
            We are always looking for passionate professionals. Submit your portfolio or CV directly for speculative review, or share it at:
          </p>
          <a
            href="mailto:careers@nexoraglobal.com"
            className="inline-block mt-4 font-mono text-sm font-bold text-blue-600 hover:underline"
          >
            careers@nexoraglobal.com
          </a>
        </div>

        {/* Application Modal Overlay */}
        {isApplying && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm flex justify-center items-center p-4" id="application-modal">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-100 relative animate-scaleIn">
              
              {/* Header */}
              <div className="bg-slate-950 p-6 text-white relative">
                <h3 className="font-display font-bold text-lg">Apply for Position</h3>
                <p className="text-xs text-slate-300 font-sans mt-1">
                  {isApplying.title} • {isApplying.location}
                </p>
                <button
                  onClick={resetFormState}
                  className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="p-6 space-y-5" id="job-application-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
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
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
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
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
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

                    {/* Experience level */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                        Years of Experience <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Code className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="number"
                          name="experience"
                          required
                          min="0"
                          max="40"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                          placeholder="e.g. 5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Portfolio or website link */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Portfolio / LinkedIn Link
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  {/* Drag and Drop File Selection */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5 flex justify-between items-center">
                      <span>Resume Upload (PDF, Word) <span className="text-rose-500">*</span></span>
                      {matchScore !== null && (
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider animate-pulse">
                          AI Parser Active
                        </span>
                      )}
                    </label>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => !isParsing && fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors relative overflow-hidden ${
                        isParsing
                          ? 'border-blue-300 bg-blue-50/10'
                          : isDragOver
                          ? 'border-blue-500 bg-blue-50/50'
                          : fileName
                          ? 'border-emerald-500 bg-emerald-50/10'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        required={!fileName}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        disabled={isParsing}
                      />
                      
                      {isParsing ? (
                        <div className="space-y-3 py-2">
                          <div className="flex items-center justify-center space-x-2 text-blue-600">
                            <svg className="animate-spin h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span className="text-sm font-semibold tracking-wide font-mono">Nexora AI Consulting Engine</span>
                          </div>
                          <p className="text-xs text-slate-500 animate-pulse font-sans">
                            {parsingStep}
                          </p>
                          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden max-w-xs mx-auto">
                            <div className="bg-blue-600 h-1.5 rounded-full animate-pulse w-3/4 mx-auto"></div>
                          </div>
                        </div>
                      ) : fileName ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                              <Layers className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <span className="block text-sm font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-xs">
                                {fileName}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                Parse status: Completed successfully
                              </span>
                            </div>
                          </div>
                          
                          {matchScore !== null && (
                            <div className="pt-2 border-t border-slate-100 max-w-xs mx-auto">
                              <div className="flex justify-between text-xs font-semibold mb-1">
                                <span className="text-slate-500 font-sans">AI Structural Match Score:</span>
                                <span className="text-emerald-600 font-mono">{matchScore}%</span>
                              </div>
                              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className="bg-emerald-500 h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${matchScore}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          
                          <span className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors block underline mt-2">
                            Click to replace file
                          </span>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                          <div>
                            <span className="text-sm font-medium text-slate-600">
                              Drag & drop your resume here, or <span className="text-blue-600 underline">browse</span>
                            </span>
                            <span className="text-xs text-slate-400 block mt-1">
                              PDF, DOC, DOCX up to 5MB
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-400 uppercase mb-1.5">
                      Cover Letter or Summary
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                      placeholder="Briefly state why you're a good fit..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-100 flex gap-3">
                    <button
                      type="button"
                      onClick={resetFormState}
                      className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-md cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              ) : (
                /* Success feedback screen */
                <div className="p-8 text-center space-y-5" id="application-success-view">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                      Thank you for applying, <strong>{formData.name}</strong>. Our human resources recruitment team will review your credentials for the <strong>{isApplying.title}</strong> role and respond to <strong>{formData.email}</strong> within 48 business hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={resetFormState}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 cursor-pointer"
                    >
                      Close Portal
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
