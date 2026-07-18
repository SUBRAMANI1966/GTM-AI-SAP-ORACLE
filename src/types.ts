export type ActiveTab = 'home' | 'about' | 'services' | 'careers' | 'contact';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface Job {
  id: string;
  title: string;
  department: 'AI & Data Engineering' | 'SAP ERP' | 'Oracle Cloud' | 'Digital Transformation & Cloud' | 'Sales & Operations';
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Hybrid';
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface JobApplicationFormData {
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  experience: string;
  coverLetter: string;
}
