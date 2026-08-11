import { 
  Shield, 
  Eye, 
  Cpu, 
  Lock, 
  Users, 
  PhoneCall, 
  Network, 
  Tv, 
  ClipboardCheck, 
  Wrench, 
  Building, 
  TrendingUp, 
  Award, 
  UserCheck, 
  Zap, 
  Layers,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  features: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export interface Sector {
  name: string;
  icon: any;
}

export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  createdAt: number; // epoch ms, used for sorting/display
}

export const COMPANY_INFO = {
  name: "HUAN Surveillance",
  tagline: "Protecting What Matters Most",
  intro: "Pakistan-based security and surveillance solutions provider specializing in CCTV, IP cameras, access control, and complete security infrastructure for businesses, institutions, and industrial facilities.",
  aboutText: "HUAN Surveillance is a Pakistan-based security and surveillance solutions provider specializing in the design, supply, installation, and maintenance of advanced security systems. With over three years of industry experience, we help businesses, institutions, industrial facilities, and residential clients enhance safety, monitor critical assets, and maintain operational security through reliable and modern surveillance technologies.",
  vision: "To become one of Pakistan's most trusted and innovative security solutions providers by delivering advanced surveillance technologies, exceptional service quality, and long-term value to our clients.",
  mission: "To provide reliable, efficient, and technologically advanced security solutions that help businesses, institutions, and communities safeguard their people, assets, and operations. We strive to build lasting relationships through professionalism and integrity.",
  contact: {
    phone: "+92 344 3733996",
    whatsapp: "+923443733996",
    email: "huan.surveillance@gmail.com",
    website: "www.huan-surveillance.com",
    address: "Karachi & All Over Pakistan",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM"
  },
  stats: {
    experience: "3+ Years",
    projects: "90+ Completed"
  }
};

export const SERVICES: Service[] = [
  {
    id: "cctv",
    title: "CCTV Surveillance Systems",
    description: "High-definition camera setups with real-time remote monitoring, motion detection, and secure local or cloud storage options.",
    icon: Tv,
    features: ["AcuSense Smart Filtering", "ColorVu Night Vision", "Local NVR & Cloud Backup"]
  },
  {
    id: "ip-camera",
    title: "IP Camera Solutions",
    description: "Advanced network-based cameras offering superior resolution, intelligent video analytics, and seamless IT network integration.",
    icon: Cpu,
    features: ["4K UHD Resolutions", "PoE Easy Installation", "Smart Intrusion Detection"]
  },
  {
    id: "hikvision",
    title: "Hikvision Solutions",
    description: "Authorized deployment of industry-leading Hikvision systems, including ColorVu, AcuSense, and high-capacity enterprise NVRs.",
    icon: Shield,
    features: ["Authorized System Design", "SLA-grade Hardware", "Remote Mobile Access"]
  },
  {
    id: "dahua",
    title: "Dahua Solutions",
    description: "Professional installation of cutting-edge Dahua cameras, offering robust thermal sensing, face recognition, and starlight technology.",
    icon: Eye,
    features: ["WizSense Smart AI", "Full-Color Starlight Tech", "Active Deterrence Sirens"]
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    description: "Secure electronic door locks, keypad entries, and card reader systems to manage and restrict unauthorized facility entry.",
    icon: Lock,
    features: ["Magnetic Locks & Strikes", "PIN / RFID Access", "Audit Trail Tracking"]
  },
  {
    id: "biometric",
    title: "Biometric Attendance Systems",
    description: "Fingerprint, facial recognition, and RFID-based attendance trackers integrated with automated payroll and HR management systems.",
    icon: Users,
    features: ["Contactless Face ID", "Instant Attendance Logs", "Multi-branch Centralization"]
  },
  {
    id: "video-door",
    title: "Video Door Phone Systems",
    description: "High-fidelity video and audio door intercoms allowing safe visitor verification before granting access to residential or office spaces.",
    icon: PhoneCall,
    features: ["Two-Way Audio Talk", "Snapshots of Visitors", "Mobile App Integrations"]
  },
  {
    id: "network-cabling",
    title: "Network Cabling Infrastructure",
    description: "Structured Cat6/fiber-optic cabling and robust network architectures ensuring zero-latency data transmission for high-bandwidth cameras.",
    icon: Network,
    features: ["Gigabit Cat6/Cat6A", "Fiber-Optic Backbone", "Fluke Certified Testing"]
  },
  {
    id: "intercom",
    title: "Intercom Systems",
    description: "Reliable analog and IP intercom setups for clear, instantaneous voice communication across multi-story buildings and corporate floors.",
    icon: Layers,
    features: ["Multi-Line PABX Systems", "Direct-dial Extensions", "Paging Announcement Speakers"]
  },
  {
    id: "maintenance",
    title: "Maintenance Contracts",
    description: "Comprehensive Annual Maintenance Contracts (AMC) with routine health checks, swift replacement cycles, and 24/7 technical support.",
    icon: Wrench,
    features: ["Scheduled Lens Cleaning", "Firmware & Software Updates", "Guaranteed Response Times"]
  },
  {
    id: "consultation",
    title: "Security Consultation",
    description: "Strategic risk assessments, vulnerability scanning, and custom security blueprint designs engineered by domain experts.",
    icon: ClipboardCheck,
    features: ["Risk Hazard Assessment", "Blind Spot Auditing", "Optimized Budget Planning"]
  }
];

export const CORE_VALUES: Value[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We lead with honesty, transparency, and high professionalism in all client consultations, billing, and project operations.",
    icon: Shield
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "Our solutions are engineered to run 24/7/365 without failure, providing a dependable safety net you can trust.",
    icon: Clock
  },
  {
    id: "quality",
    title: "Quality",
    description: "We never cut corners. From heavy-gauge conduit piping to high-grade camera models, we deliver exceptional craftsmanship.",
    icon: Award
  },
  {
    id: "commitment",
    title: "Customer Commitment",
    description: "We place your operational safety at the absolute center of our designs, offering relentless post-installation support.",
    icon: UserCheck
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "We continuously research and adopt modern, future-ready technologies to stay ahead of security challenges.",
    icon: Zap
  }
];

export const SECTORS: Sector[] = [
  { name: "Educational Institutions", icon: Building },
  { name: "Industrial Facilities", icon: Wrench },
  { name: "Manufacturing Plants", icon: Cpu },
  { name: "Corporate Offices", icon: Briefcase },
  { name: "Commercial Buildings", icon: Building },
  { name: "Retail Stores & Malls", icon: Building },
  { name: "Warehouses & Logistics Centers", icon: MapPin },
  { name: "Healthcare Facilities", icon: Shield },
  { name: "Residential Communities", icon: Users },
  { name: "Government Organizations", icon: Award },
  { name: "Semi-Government Environments", icon: Layers },
  { name: "Logistics & Distribution Hubs", icon: TrendingUp }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: 1,
    title: "Requirement Assessment",
    description: "In-depth discussions with your operations team to understand safety concerns and specific surveillance objectives.",
    details: ["Consultation with stakeholders", "Identifying critical threat vectors", "Determining security policies"]
  },
  {
    number: 2,
    title: "Site Survey",
    description: "On-site physical inspection of your facility to map camera angles, identify blind spots, and plan routing paths.",
    details: ["Analyzing coverage angles", "Evaluating ambient lighting", "Mapping cable run pathways"]
  },
  {
    number: 3,
    title: "Solution Design",
    description: "Engineering a customized surveillance blueprint, selecting optimal hardware, and drafting a cost-effective proposal.",
    details: ["Selecting NVRs/cameras/storage", "Structuring network topology", "Custom budget optimization"]
  },
  {
    number: 4,
    title: "Installation & Deployment",
    description: "Precise, professional mounting of cameras, running of structured low-voltage cabling, and clean hardware racks installation.",
    details: ["Structured Cat6 cable runs", "Heavy-duty conduit protection", "Server rack and power layout"]
  },
  {
    number: 5,
    title: "Testing & Commissioning",
    description: "Rigorous focus tuning, camera angle adjustments, network optimization, recording validation, and full remote-viewing setup.",
    details: ["Multi-angle visual fine-tuning", "Mobile app & remote web setup", "Failover power testing"]
  },
  {
    number: 6,
    title: "Ongoing Support",
    description: "Dedicated client handover with comprehensive system training, user manuals, and our rapid-response support desk.",
    details: ["Hands-on system training", "Operation manuals handover", "AMC proactive maintenance checks"]
  }
];

export const WHY_US_BULLETS = [
  { title: "Nationwide Service Coverage", desc: "Expert security deployment in Karachi and across all major provinces in Pakistan." },
  { title: "Customized Security Solutions", desc: "Architectures custom-tailored to map your workflows without causing friction." },
  { title: "Professional Installation Standards", desc: "Clean cable management and heavy-duty structural installations built to last." },
  { title: "Reliable Technical Support", desc: "Rapid-response helpline and dedicated SLAs to minimize security downtime." },
  { title: "Cost-Effective Implementations", desc: "Maximum ROI by pairing high-tier performance with optimal resource allocation." },
  { title: "Proven Cross-Sector Expertise", desc: "Diverse experience protecting sensitive industrial, academic, and military sectors." }
];

export const NOTABLE_EXPERIENCE = {
  client: "CMES (Pakistan Navy)",
  description: "Successful delivery of professional security configurations within highly sensitive defense zones, demonstrating elite engineering capability and organizational trustworthiness."
};

// Sample reviews shown before Firebase is connected (see src/firebase.ts).
// Once Firebase is configured, real customer reviews replace this list.
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "sample-1",
    name: "Ahsan Raza",
    rating: 5,
    comment: "Very professional team, cabling was neat and the cameras cover every corner of our warehouse. Support response is fast too.",
    createdAt: Date.parse("2026-05-14")
  },
  {
    id: "sample-2",
    name: "Sana Malik",
    rating: 5,
    comment: "Installed a full CCTV + access control setup at our school. Clean work and they explained the mobile app clearly to our staff.",
    createdAt: Date.parse("2026-04-02")
  },
  {
    id: "sample-3",
    name: "Bilal Ahmed",
    rating: 4,
    comment: "Good pricing and honest recommendations for our office. Took a bit longer than planned but the final result was solid.",
    createdAt: Date.parse("2026-02-20")
  }
];

export const SAFETY_QUALITY = {
  safety: "Our commitment to a zero-harm safety policy ensures that our engineers and technicians adhere to rigorous personal protective equipment (PPE) standards, secure scaffolding practices, and specialized low-voltage electrical safety measures during all installation phases.",
  standards: "Every cable we run, conduit we lay, and system we configure strictly complies with international EIA/TIA-568-C structural wiring standards and local engineering guidelines, assuring optimal data integrity and safety compliance.",
  disruption: "We coordinate installation phases around your operational schedule, utilizing off-peak windows or quiet-zone methodologies to completely eliminate day-to-day workflow disruption."
};
