import { Job } from '../types';

export const OPEN_JOBS: Job[] = [
  {
    id: 'ai-eng-01',
    title: 'Senior AI Engineer',
    department: 'AI & Data Engineering',
    location: 'Bangalore, India (Hybrid)',
    type: 'Hybrid',
    description: 'We are seeking an experienced AI Engineer to design, build, and deploy generative AI applications, intelligent agents, and custom LLM integrations. You will work with clients to architect scalable conversational AI and document intelligence systems.',
    requirements: [
      '3+ years experience with OpenAI, Google Gemini, Anthropic, or open-source LLMs.',
      'Proficiency in Python, LangChain, LlamaIndex, or AutoGen.',
      'Experience with vector databases (Pinecone, Chroma, pgvector) and RAG architecture.',
      'Strong background in software engineering (Node.js/React or FastAPI/Python).'
    ],
    benefits: [
      'Competitive salary with performace-linked bonuses.',
      'Comprehensive health insurance for you and dependents.',
      'Remote work allowance & top-tier workstation setup.',
      'Continuous learning budget for AI certifications & conferences.'
    ]
  },
  {
    id: 'ml-eng-02',
    title: 'Machine Learning Engineer',
    department: 'AI & Data Engineering',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full-time',
    description: 'Drive the next generation of predictive analytics and machine learning solutions for our enterprise clients. You will build, train, optimize, and deploy custom ML models onto cloud infrastructures.',
    requirements: [
      'Strong experience in supervised & unsupervised learning, deep learning, and predictive modeling.',
      'Expertise in TensorFlow, PyTorch, scikit-learn, and Pandas.',
      'Experience setting up MLOps pipelines using Kubeflow, MLflow, or SageMaker.',
      'Solid math skills: probability, statistics, and linear algebra.'
    ],
    benefits: [
      'Opportunity to work on cutting-edge predictive AI algorithms.',
      'Flexible working hours & wellness programs.',
      'Generous paid-time-off (PTO) policy.',
      'Dedicated mentoring from industry veterans.'
    ]
  },
  {
    id: 'sap-con-03',
    title: 'SAP S/4HANA Principal Consultant',
    department: 'SAP ERP',
    location: 'Bangalore, India (Full-time)',
    type: 'Full-time',
    description: 'Lead end-to-end SAP S/4HANA implementation and optimization projects. You will act as a trusted advisor to major corporate clients, defining roadmap strategies and coordinating solution deployment across modules.',
    requirements: [
      '8+ years SAP consulting experience with at least 3 end-to-end S/4HANA implementation cycles.',
      'Deep functional knowledge of SAP modules (FI/CO, MM, SD, or PP).',
      'Excellent business process advisory and blueprint designing skills.',
      'SAP certification in S/4HANA is highly desired.'
    ],
    benefits: [
      'Industry-leading compensation packages.',
      'Global project exposure with opportunities for short-term international travel.',
      'Annual executive health screening plans.',
      'Performance-based equity options.'
    ]
  },
  {
    id: 'sap-ariba-04',
    title: 'SAP SuccessFactors / Ariba Specialist',
    department: 'SAP ERP',
    location: 'Remote',
    type: 'Remote',
    description: 'Configure and support SAP SuccessFactors (HCM) or SAP Ariba (Procurement) cloud implementations. You will translate HR or supply chain requirements into modern cloud configurations.',
    requirements: [
      '4+ years experience configuring SuccessFactors or SAP Ariba.',
      'Active certification in SuccessFactors Employee Central or Ariba Procurement.',
      'Strong comprehension of cloud integration protocols (CPI/PI).',
      'Superb client-facing communication skills.'
    ],
    benefits: [
      '100% remote working framework.',
      'Flexible annual leave allotments.',
      'Workshops and continuous learning modules funded by Nexora.',
      'Ergonomic remote-office equipment allowance.'
    ]
  },
  {
    id: 'ora-con-05',
    title: 'Oracle ERP Cloud Consultant',
    department: 'Oracle Cloud',
    location: 'Chennai, India (Hybrid)',
    type: 'Hybrid',
    description: 'Design and configure Oracle Fusion Cloud ERP applications. You will guide enterprises through cloud financial processes, ledger setups, and cloud migration blueprints.',
    requirements: [
      '5+ years experience in Oracle ERP Cloud (Financials, Procurement, or Project Portfolio Management).',
      'Hands-on experience in at least 2 full Oracle Fusion implementations.',
      'Strong ability to build integrations, ADF diaries, or OTBI reports.',
      'Excellent analytical skills and client handling experience.'
    ],
    benefits: [
      'Highly competitive base salary + performance bonuses.',
      'State-of-the-art office spaces with dynamic collaboration areas.',
      'Comprehensive family medical coverage.',
      'Industry-certified training paths on OCI & Oracle Fusion.'
    ]
  },
  {
    id: 'fs-dev-06',
    title: 'Full Stack Developer (React & Node.js)',
    department: 'Digital Transformation & Cloud',
    location: 'Remote',
    type: 'Remote',
    description: 'Create scalable, responsive enterprise applications and web interfaces that integrate seamlessly with SAP, Oracle, and custom AI Agents. You will be building modern web apps with React, Tailwind, and Node.js.',
    requirements: [
      '3+ years solid experience in React, TypeScript, Tailwind CSS, and Node.js/Express.',
      'Familiarity with building and consuming RESTful/GraphQL APIs.',
      'Experience with relational or non-relational databases (PostgreSQL, MongoDB, or Firestore).',
      'Knowledge of modern deployment architectures (Docker, Kubernetes, AWS/GCP, or Vercel).'
    ],
    benefits: [
      'Work with a high-growth modern tech stack.',
      'Flat organizational structure with true autonomy.',
      'Annual learning allowance ($1500) for books, courses, and certifications.',
      'Quarterly team-building offsites.'
    ]
  },
  {
    id: 'cloud-eng-07',
    title: 'Senior Cloud & DevOps Engineer',
    department: 'Digital Transformation & Cloud',
    location: 'Chennai, India (Hybrid)',
    type: 'Hybrid',
    description: 'Architect, configure, and maintain robust cloud infrastructures across GCP, AWS, and Oracle Cloud Infrastructure (OCI). You will establish high-throughput CI/CD pipelines, container clustering, and secure networking architectures.',
    requirements: [
      '5+ years of experience in Cloud engineering & DevOps workflows.',
      'Expertise in Terraform (IaC), Docker, and Kubernetes orchestration.',
      'In-depth knowledge of GCP, AWS, or OCI networking, VPCs, IAM, and security compliance.',
      'Hands-on scriptwriting experience (Bash, Python, or Go).'
    ],
    benefits: [
      'Executive-level health insurance.',
      'Access to premium developer tool subscriptions.',
      'Paid cloud certification attempts (AWS, GCP, OCI, HashiCorp).',
      'Flexible workspace arrangement options.'
    ]
  },
  {
    id: 'sales-exec-08',
    title: 'Business Development Manager (Enterprise AI & ERP)',
    department: 'Sales & Operations',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full-time',
    description: 'We are seeking a driven Sales and Business Development Executive to lead enterprise client acquisitions for Nexora Global services. You will identify pipeline opportunities, build connections with CXOs, and present tailored technology solutions.',
    requirements: [
      '5+ years in corporate business development, preferably selling AI or ERP consulting services.',
      'Proven track record of consistently exceeding enterprise sales quotas.',
      'Excellent negotiation, communication, and client presentation skills.',
      'Broad understanding of enterprise architectures (AI agents, SAP, Oracle Cloud).'
    ],
    benefits: [
      'Highly rewarding uncapped commission structures.',
      'Travel allowance and premium client-entertainment budgets.',
      'Executive leadership coaching courses.',
      'Collaborative, high-energy sales workspace.'
    ]
  }
];
