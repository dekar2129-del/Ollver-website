import { motion } from "motion/react";
import { 
  Plus, 
  ArrowUpRight, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Dribbble, 
  Instagram,
  Star,
  Quote
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav id="navbar" className="container-custom py-6 flex items-center justify-between bg-bg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold">O</div>
        <span className="text-xl font-display font-bold tracking-tight">Ollvor.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 bg-white/50 border border-dark/5 px-6 py-2 rounded-full shadow-sm text-sm font-medium">
        <a href="#" className="text-brand">Home</a>
        <a href="#" className="hover:text-brand transition-colors">Services</a>
        <a href="#" className="hover:text-brand transition-colors">Portfolio</a>
        <a href="#" className="hover:text-brand transition-colors">Blog</a>
        <a href="#" className="hover:text-brand transition-colors">Contacts</a>
      </div>

      <button id="cta-button" className="bg-dark text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-brand transition-all duration-300">
        Let's Talk
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="container-custom py-12 lg:py-20 relative min-h-[80vh] flex flex-col items-center">
      {/* Background Decorative Element (The badge on top right) */}
      <div className="absolute top-0 right-10 lg:right-20">
        <div className="relative animate-spin-slow">
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-80">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[10px] font-bold fill-dark/40 uppercase">
              <textPath href="#circlePath">Product Designer • Creative UI • Designer • UX • </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center shadow-lg">
               <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-10 z-10 w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-px bg-brand"></div>
          <span className="text-sm font-bold uppercase tracking-widest text-dark/60">Hello There!</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 text-dark break-words">
          I'm <span className="text-brand italic font-display">Oliver Scott</span>
        </h1>
        <p className="text-lg md:text-xl text-dark/60 font-medium max-w-lg mx-auto leading-relaxed">
          Product Designer based in USA
        </p>
      </div>

      <div className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center gap-12 mt-10">
        {/* Left Side Quote */}
        <div className="lg:absolute lg:left-0 lg:top-20 max-w-xs text-left hidden lg:block">
          <Quote className="w-10 h-10 text-brand mb-4 rotate-180" />
          <p className="text-dark/80 font-medium leading-[1.6] mb-6 italic">
            "Oliver's Remarkable Design Transformed Our Website - Highly Recommended!"
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-dark/10 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="ml-2">
              <p className="font-bold text-sm leading-tight text-dark">100+ Reviews</p>
              <div className="flex items-center gap-1">
                 <span className="font-bold text-xs text-dark/40">(4.9 of 5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] z-0">
          <div className="absolute inset-0 top-10 left-10 w-full h-full bg-brand rounded-full blur-[100px] opacity-20"></div>
          <div className="relative w-full h-full rounded-t-full overflow-hidden flex items-end justify-center bg-brand/10 border-b-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-brand"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
              alt="Oliver Scott" 
              className="relative z-10 w-full h-full object-cover object-top filter contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Action Buttons Overlay */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-2xl z-20">
             <button className="bg-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group hover:bg-brand transition-all">
                Portfolio
                <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:text-brand" />
                </div>
             </button>
             <button className="bg-white text-dark px-8 py-4 rounded-full font-bold border border-dark/10 hover:bg-dark hover:text-white transition-all">
                Hire Me
             </button>
          </div>
        </div>

        {/* Right Side Badges */}
        <div className="lg:absolute lg:right-0 lg:top-20 flex flex-col items-end gap-3 hidden lg:flex">
          <div className="bg-dark text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-tight">Product</div>
          <div className="bg-brand text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-tight">Designer</div>
          <div className="bg-dark text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
             <div className="p-1.5 bg-brand rounded-full">
                <Plus className="w-3 h-3 text-white" />
             </div>
             <span className="text-[13px] font-bold">Mobile App Design</span>
          </div>
          <div className="bg-brand text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-tight">Creativity</div>
          <div className="bg-dark text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-tight">Website Design</div>
        </div>
      </div>

      {/* Social Icons Bottom Right */}
      <div className="mt-20 lg:absolute lg:bottom-10 lg:right-10 flex items-center gap-6">
         <span className="text-xs font-bold text-dark/40 uppercase tracking-widest hidden md:block">Follow Me On:</span>
         <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
            <Dribbble className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-brand transition-colors" />
         </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const items = ["Website Design", "Dashboard", "Wireframe", "User Research", "App Design"];
  
  return (
    <div className="bg-dark py-8 w-full overflow-hidden whitespace-nowrap -rotate-1 relative z-20">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white text-3xl font-display font-medium px-8">{item}</span>
                <Plus className="w-8 h-8 text-brand rotate-45" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  const services = [
    { id: "01", title: "UI/UX Design", image: "https://picsum.photos/seed/uiux/800/400" },
    { id: "02", title: "Application Design", active: true, image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=1000&auto=format&fit=crop" },
    { id: "03", title: "Website Design", image: "https://picsum.photos/seed/web/800/400" },
    { id: "04", title: "UI Design", image: "https://picsum.photos/seed/ui/800/400" },
    { id: "05", title: "Design System", image: "https://picsum.photos/seed/sys/800/400" },
  ];

  return (
    <section id="services" className="container-custom py-24 mb-20 bg-white rounded-[60px] md:rounded-[100px] mt-[-30px] relative z-30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-brand"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-dark/60">My Specialization</span>
           </div>
           <h2 className="text-5xl md:text-7xl">
              Services <span className="text-brand">I Provide</span>
           </h2>
        </div>
        <div className="max-w-md">
           <p className="text-dark/60 font-medium leading-[1.6]">
              I provide high-quality digital experience design services that help businesses grow and achieve their goals through creative and strategic solutions.
           </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => {
          const isActive = activeTab === index;
          return (
            <div 
              key={service.id} 
              className={`rounded-[30px] md:rounded-[40px] transition-all duration-500 overflow-hidden cursor-pointer ${isActive ? 'bg-dark text-white' : 'bg-[#F3F3F3] hover:bg-[#EAEAEA]'}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="p-8 md:p-10 flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-12">
                   <span className={`text-xl md:text-2xl font-bold ${isActive ? 'text-white' : 'text-dark/40'}`}>{service.id}.</span>
                   <h3 className="text-2xl md:text-4xl">{service.title}</h3>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-brand text-white rotate-45' : 'bg-white text-dark'}`}>
                   <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              <motion.div 
                initial={false}
                animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 flex flex-col md:flex-row gap-10">
                   <div className="flex-1 space-y-6">
                      <div className="flex flex-wrap gap-2">
                         {["User Experience", "User Interface", "Prototyping", "Design Strategy", "Visual Design"].map(tag => (
                           <span key={tag} className="text-[11px] md:text-[13px] font-bold border border-white/20 px-4 py-2 rounded-full uppercase">
                             {tag}
                           </span>
                         ))}
                      </div>
                      <p className="text-white/60 font-medium leading-relaxed max-w-lg">
                        Creating seamless digital products with user-centric design principles. We focus on usability, aesthetics, and overall performance.
                      </p>
                   </div>
                   <div className="md:w-1/2 rounded-[30px] overflow-hidden bg-brand/10">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[250px] object-cover"
                        referrerPolicy="no-referrer"
                      />
                   </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex justify-center">
         <button className="flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-full font-bold group hover:bg-dark transition-all">
            <span>View All Services</span>
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
               <ArrowRight className="w-4 h-4 text-brand" />
            </div>
         </button>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bb148324f0e6?q=80&w=1000&auto=format&fit=crop",
      color: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Health Guard App",
      category: "Mobile Application",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      color: "bg-green-500/10"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      category: "Website Design",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      color: "bg-orange-500/10"
    },
    {
      id: 4,
      title: "E-Commerce Experience",
      category: "Digital Branding",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
      color: "bg-purple-500/10"
    }
  ];

  return (
    <section id="portfolio" className="container-custom py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-brand"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-dark/60">Featured Works</span>
           </div>
           <h2 className="text-5xl md:text-7xl">
              Selected <span className="text-brand">Projects</span>
           </h2>
        </div>
        <button className="bg-white text-dark px-8 py-4 rounded-full font-bold border border-dark/10 hover:bg-dark hover:text-white transition-all">
           See All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className={`relative aspect-[4/3] rounded-[40px] overflow-hidden ${project.color} mb-6`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-110 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8 text-brand" />
                 </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
               <div>
                  <span className="text-sm font-bold text-brand uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-3xl">{project.title}</h3>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 rounded-t-[60px] md:rounded-t-[100px] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-24">
          <div className="max-w-xl">
             <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
               Let's Work <span className="text-brand italic font-display">Together</span>
             </h2>
             <p className="text-white/60 text-lg md:text-xl font-medium mb-10 leading-relaxed">
               I'm currently available for freelance projects and full-time opportunities. If you have a project in mind, let's talk and create something amazing.
             </p>
             <div className="flex flex-wrap gap-4">
               <button className="bg-brand text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-dark transition-all flex items-center gap-3">
                  <span>Start A Project</span>
                  <ArrowRight className="w-5 h-5" />
               </button>
               <button className="bg-white/10 text-white px-10 py-5 rounded-full font-bold border border-white/10 hover:bg-white/20 transition-all">
                  dekar2129@gmail.com
               </button>
             </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-medium">
             <div className="flex flex-col gap-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Navigation</span>
                <a href="#" className="hover:text-brand transition-colors">Home</a>
                <a href="#" className="hover:text-brand transition-colors">Services</a>
                <a href="#" className="hover:text-brand transition-colors">Portfolio</a>
                <a href="#" className="hover:text-brand transition-colors">Blog</a>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Socials</span>
                <a href="#" className="hover:text-brand transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand transition-colors">Dribbble</a>
                <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-brand transition-colors">Behance</a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold">O</div>
              <span className="text-xl font-display font-bold tracking-tight">Ollvor.</span>
           </div>
           
           <p className="text-white/40 text-sm font-medium">
             © 2026 Oliver Scott. All rights reserved. Built with passion.
           </p>

           <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Footer />
      
      {/* Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

