import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Code, Shield, Cpu, Terminal, 
  Award, Briefcase, Camera, Plane, Download, Menu, X 
} from 'lucide-react';

const Portfolio = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const certifications = [
    [cite_start]{ title: "LF Certified Kubestronaut", date: "2025", color: "from-yellow-400 to-orange-500", icon: <Award /> }, // [cite: 56]
    [cite_start]{ title: "CKS: Security Specialist", date: "2024", color: "from-red-500 to-pink-600", icon: <Shield /> }, // [cite: 58]
    [cite_start]{ title: "CKA: Administrator", date: "2022", color: "from-blue-400 to-cyan-500", icon: <Server /> }, // [cite: 64]
    [cite_start]{ title: "CKAD: App Developer", date: "2022", color: "from-blue-400 to-cyan-500", icon: <Code /> }, // [cite: 60]
    [cite_start]{ title: "AWS Solutions Architect", date: "2021", color: "from-orange-400 to-yellow-500", icon: <Cloud /> }, // [cite: 62]
    [cite_start]{ title: "Red Hat Certified Engineer", date: "2021", color: "from-red-600 to-red-800", icon: <Terminal /> }, // [cite: 66]
  ];

  const experience = [
    {
      company: "Verizon Data Services",
      role: "Engineer III Csit-Cloud",
      [cite_start]period: "Sep 2023 - Current", // [cite: 12, 13, 14, 15]
      [cite_start]desc: "Troubleshooting large scale OpenShift clusters. Building CI/CD automations using GitLab, Prometheus, and Grafana.", // [cite: 16, 17, 18]
      tech: ["OpenShift", "ArgoCD", "Python"]
    },
    {
      company: "Nokia Solutions",
      role: "Solutions Specialist",
      [cite_start]period: "Feb 2018 - Aug 2023", // [cite: 19, 20, 21]
      [cite_start]desc: "E2E design and deployment of network functions on OpenStack/OpenShift. 4G/5G domain expert and team mentor.", // [cite: 23, 28, 31]
      tech: ["OpenStack", "5G Core", "Ansible"]
    },
    {
      company: "Tata Consultancy Services",
      role: "System Engineer",
      [cite_start]period: "Jan 2016 - Feb 2018", // [cite: 32, 33, 34]
      [cite_start]desc: "Design and execution of automation frameworks using Selenium and HP ALM.", // [cite: 36]
      tech: ["Selenium", "Automation", "Java"]
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            HY.
          </h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#certs" className="hover:text-cyan-400 transition">Certifications</a>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="z-10 text-center px-4 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase">
              Cloud & Network Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Hemanth <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Yerasuri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8">
              [cite_start]A <span className="text-yellow-400 font-bold">Kubestronaut</span> [cite: 8] architecting the future of Telco Cloud.
              [cite_start]9+ years driving large-scale OpenShift & Network Automation. [cite: 9]
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#experience" className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition shadow-lg shadow-cyan-500/25">
                View My Journey
              </a>
              <button className="px-8 py-3 rounded-full border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2">
                <Download size={18} /> Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS GRID --- */}
      <section id="skills" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Technical <span className="text-purple-400">Command Center</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Cloud size={40} className="text-cyan-400" />}
              title="Cloud Orchestration"
              skills={["Kubernetes & OpenShift", "AWS Architecture", "Red Hat OpenStack", "ArgoCD & GitOps"]} 
              [cite_start]// [cite: 9, 23, 62, 66]
            />
             <SkillCard 
              icon={<Terminal size={40} className="text-green-400" />}
              title="DevOps & Automation"
              skills={["CI/CD Pipelines", "Python & Bash Scripting", "Ansible Automation", "Prometheus & Grafana"]}
              [cite_start]// [cite: 17, 18, 30]
            />
             <SkillCard 
              icon={<Cpu size={40} className="text-purple-400" />}
              title="Telco & Embedded"
              skills={["5G/4G Core Networks", "TCP/IP, SIP, DIAMETER", "ARM7 & IoT", "Linux Systems"]}
              [cite_start]// [cite: 28, 43]
            />
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS (THE KUBESTRONAUT GALLERY) --- */}
      <section id="certs" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The Kubestronaut Gallery</h2>
          <p className="text-center text-slate-400 mb-16">Verified expertise by The Linux Foundation & AWS</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                
                <div className="relative p-6 h-full flex flex-col items-center text-center border border-slate-700 rounded-xl bg-slate-900/90">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${cert.color} bg-opacity-10 mb-4`}>
                    {React.cloneElement(cert.icon, { size: 32, className: "text-white" })}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                  <p className="text-sm text-slate-500">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE --- */}
      <section id="experience" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Mission Log</h2>
          
          <div className="space-y-12 relative border-l-2 border-slate-700 ml-4 md:ml-0">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
                
                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
                  <div className="hidden md:block w-5/12"></div> {/* Spacer */}
                  
                  <div className="md:w-5/12 mb-2">
                    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-lg hover:border-cyan-500/50 transition">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{job.period}</span>
                      <h3 className="text-xl font-bold mt-1 text-white">{job.role}</h3>
                      <h4 className="text-slate-400 mb-4">{job.company}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded bg-slate-700 text-cyan-300 border border-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOBBIES & PERSONAL INTERESTS --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Beyond The Terminal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <HobbyCard 
                icon={<Camera />} 
                title="Photography" 
                desc="Capturing nature and landscapes. [cite_start]Exploring visuals through editing." // [cite: 93]
             />
             <HobbyCard 
                icon={<Cpu />} 
                title="DIY Electronics" 
                desc="Building projects on SBCs like Raspberry Pi and exploring embedded systems." [cite_start]// [cite: 95]
             />
             <HobbyCard 
                icon={<Plane />} 
                title="Aerospace" 
                desc="Deep interest in avionics, aerospace tech, and exploring new cultures." [cite_start]// [cite: 91, 94]
             />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-950">
        <p>Hemanth Gopalakrishna Yerasuri © {new Date().getFullYear()}</p>
        [cite_start]<p className="mt-2">Hyderabad, India • hemanth.krishna1@gmail.com</p> {/* [cite: 3, 5] */}
      </footer>
    </div>
  );
};

// Helper Components
const SkillCard = ({ icon, title, skills }) => (
  <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const HobbyCard = ({ icon, title, desc }) => (
  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col items-center">
    <div className="p-4 rounded-full bg-slate-700 text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

export default Portfolio;