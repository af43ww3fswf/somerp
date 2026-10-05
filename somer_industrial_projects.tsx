import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Settings, Briefcase, ShoppingCart, 
  Search, ShieldCheck, Mail, Phone, MapPin, ArrowRight,
  ExternalLink, Globe
} from 'lucide-react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Training' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold tracking-tight text-white hover:text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded p-1"
              aria-label="SIP Home"
            >
              <span className="text-blue-500">Somer</span> Industrial Projects
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                  currentPage === link.id 
                    ? 'text-blue-400 bg-slate-800' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
                aria-current={currentPage === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-md p-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                  currentPage === link.id
                    ? 'text-white bg-slate-900'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                aria-current={currentPage === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Somer Industrial Projects</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              An independent engineering consultancy determined to help Middle Eastern Business through Strategy Consulting, Sourcing, and knowledge-based training.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-500 flex-shrink-0" aria-hidden="true"/>
                <a 
                  href="mailto:info@somerprojects.com" 
                  className="no-underline text-slate-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  info@somerprojects.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-500 flex-shrink-0" aria-hidden="true"/>
                <a 
                  href="tel:+442087589843" 
                  className="no-underline text-slate-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  +44 (0) 208 758 9843
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Accessibility & Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Somer Industrial Projects (SIP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ setCurrentPage }) => {
  const highlights = [
    { 
      title: "Engineering Services", 
      desc: "Expertise executing complex international engineering projects.", 
      icon: <Settings className="w-6 h-6 text-blue-700" />,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      alt: "Advanced engineering machinery and process automation systems"
    },
    { 
      title: "Sourcing Services", 
      desc: "Procurement of specialized equipment and automation systems.", 
      icon: <ShoppingCart className="w-6 h-6 text-blue-700" />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      alt: "Global industrial procurement, logistics, and equipment delivery"
    },
    { 
      title: "Feasibility Studies", 
      desc: "Strategic evaluation from exploration to full production.", 
      icon: <Search className="w-6 h-6 text-blue-700" />,
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial plant engineering analysis, pipeline and valve design"
    },
    { 
      title: "Business Development", 
      desc: "Commercial assessments and financial context modeling.", 
      icon: <Briefcase className="w-6 h-6 text-blue-700" />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      alt: "Executive business strategy meeting and commercial project evaluation"
    },
  ];

  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none">
      {/* Hero Section */}
      <section className="relative bg-slate-900 h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Engineers reviewing plans in an industrial facility"
          />
          <div className="absolute inset-0 bg-slate-900/75" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:items-start items-center">
          <div className="inline-flex items-center space-x-2 text-blue-300 bg-blue-900/60 border border-blue-700/50 px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span>Engineering & Strategy Consultancy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Empowering Industrial Excellence in the Middle East
          </h1>
          <p className="mt-6 text-xl text-slate-200 max-w-2xl leading-relaxed">
            Somer Industrial Projects (SIP) is an independent engineering consultancy determined to help Middle Eastern Business through Strategy Consulting, Sourcing, and knowledge-based training.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-colors"
            >
              Explore Our Services
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
            <button 
              onClick={() => setCurrentPage('partners')}
              className="inline-flex items-center px-8 py-4 border border-slate-600 text-lg font-medium rounded-md text-white bg-slate-800/80 hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-colors backdrop-blur-sm"
            >
              Our Partners
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">Core Capabilities</h2>
            <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
              Delivering comprehensive solutions across the entire industrial project lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all flex flex-col group"
              >
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-sm" aria-hidden="true">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <button 
                      onClick={() => setCurrentPage('services')} 
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Showcase Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-200">
                <span>International Delivery & Regional Insight</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bridging Global Engineering Expertise with Local Industry
              </h2>
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                Operating across the United Kingdom, Iraq, and the broader Middle East, Somer Industrial Projects helps companies execute complex engineering projects through hands-on technical training, certified procurement, and strategic feasibility consulting.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-extrabold text-slate-900">25+</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">Years Combined Experience</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-extrabold text-slate-900">10+</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">Strategic Global Partners</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">Lifecycle Project Support</div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('services')}
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
                >
                  View Training & Services
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial petrochemical refinery and processing facilities illuminated at dusk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-800/80 px-2.5 py-1 rounded">Proven Track Record</span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-2">End-to-End Industrial Execution</h3>
                    <p className="text-slate-300 text-sm mt-1">Supporting refinery operations, control automation, and vital utility installations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ServicesPage = () => {
  const categories = [
    {
      title: "Engineering Services & Training",
      icon: <Settings className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial control system engineering and automation operations",
      desc: "Assisting international companies to execute engineering projects by providing local expertise and targeted technical training.",
      items: [
        "Distributed Control Systems (DCS)",
        "Flow Metering",
        "Control Valves & Actuator workshops",
        "Refinery Operations (Economics, Feedstocks, Planning)",
        "Control Systems & Building Management Systems (BMS)",
        "HVAC Systems"
      ]
    },
    {
      title: "Business & Management",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      alt: "Executive business management training and financial consultation",
      desc: "Assessing projects in commercial and financial contexts, ensuring viable execution and professional development.",
      items: [
        "English for Oil & Gas, Business, and Lawyers",
        "Management Training (Change Management, HR, Operations, PR)",
        "Banking & Finance (Financial analysis, Balance Sheets, Corporate Finance)",
        "Letters of Credit Processing",
        "Teacher Methodology"
      ]
    },
    {
      title: "Procurement & Sourcing",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      alt: "High-spec industrial pipeline valves, gauges and drilling machinery",
      desc: "Sourcing vital equipment and automation systems for industrial applications.",
      items: [
        "Instrumentation & Gauging Systems",
        "Transmitters & Control Valves",
        "Safety Relief Valves",
        "Drilling Machineries",
        "Pipeline Equipment"
      ]
    },
    {
      title: "Feasibility & Safety (HSE & IT)",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      alt: "Health, Safety & Environment safety engineer conducting field inspection",
      desc: "Supporting companies in transition from exploration to production, ensuring safety and modern infrastructure.",
      items: [
        "Exploration to Production Feasibility Studies",
        "Health, Safety, and Environment (HSE) Training",
        "Modern IT Integration for Industrial Projects",
        "Risk Assessment & Mitigation Strategies"
      ]
    }
  ];

  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none bg-slate-50 min-h-screen pb-20">
      {/* Hero Banner with Background Image */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            Consultancy & Capacity Building
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Services & Training</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consultancy, sourcing, and educational programs tailored for the Middle Eastern industrial sector.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <article 
              key={idx} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-lg hover:border-blue-300 transition-all"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center">
                  <div className="bg-blue-600 text-white p-2.5 rounded-lg shadow-md mr-3.5 flex-shrink-0" aria-hidden="true">
                    {cat.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white drop-shadow-sm">{cat.title}</h2>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-slate-700 mb-6 text-base leading-relaxed">{cat.desc}</p>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-4 text-base">Key Focus Areas & Curriculum:</h3>
                    <ul className="space-y-3" aria-label={`Focus areas for ${cat.title}`}>
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

const PartnersPage = () => {
  const sectors = [
    {
      title: "Energy Utilities & Chemicals",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
      alt: "Energy utilities, power generation and chemical operations"
    },
    {
      title: "Water & Effluent Treatment",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial water treatment and environmental effluent processing"
    },
    {
      title: "Healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      alt: "Modern hospital infrastructure and healthcare facilities"
    },
    {
      title: "IT Services",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      alt: "Industrial IT telecommunications and server data systems"
    },
    {
      title: "Security Services (CCTV, Fiber Optics)",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      alt: "CCTV surveillance monitoring and high-speed fiber optic infrastructure"
    }
  ];

  const partners = [
    {
      name: "Quantum Technologies",
      spec: "Control & Instrumentation",
      url: "http://quantumtech-lb.com/",
      description: "Quantum Technologies was established in 1995 to cater for local and regional demand of quality service in the field of control and instrumentation for the process industries. We have since expanded our activities to include Engineering Services, Installation supervision, and commissioning of all products or systems that we develop. Our Offices are well equipped and staffed to effectively serve our clients and principals."
    },
    {
      name: "Ascendant Technologies Ltd.",
      spec: "Valve Automation Centre",
      url: "http://www.ascendant-technologies.com",
      description: "Established in 2003, Ascendant Technologies Ltd. is a privately owned specialist Valve Automation Centre serving the global Oil & Gas sector."
    },
    {
      name: "National Safety Council",
      spec: "Safety, Health & Environmental (HSE) Training",
      url: "http://www.nsc.org/",
      description: "NSC is the leading source for Safety Health and Environmental (HSE) training. The National Safety Council (NSC) mission is to save lives by preventing injuries and deaths at work, in homes and communities and on the road through leadership, research, education and consultancy."
    },
    {
      name: "IES",
      spec: "Automation PLC, DCS & SCADA Systems",
      url: null,
      description: "IES is an integrated solution provider, with full capacity of executing projects in different fields of industry including all project phases starting from assessment, solution development, planning, budgeting study, procurement, supervision, erection (civil, mechanical, and electrical), testing, commissioning and maintenance. IES main field of expertise is automation PLC Systems, DCS Systems, SCADA Systems, and telecommunication systems across electrical generation and distribution networks, cement factories, refineries, fertilizers, and modern automated industrial plants."
    },
    {
      name: "ATenergy",
      spec: "E&P Business Development & Upstream Oil & Gas",
      url: "http://www.atenergy.com/",
      description: "ATenergy was founded in 1998 as an exploration and production management consulting company working with the management and technical skills of highly experienced professionals in the upstream oil and gas industry. ATenergy specializes in E&P business development, exploration, resource management and technical studies with a focus towards the Middle East, North Africa, West Africa and Europe/North Sea."
    },
    {
      name: "Skills2Learn",
      spec: "Interactive E-Learning Solutions",
      url: "http://www.skills2learn.com/",
      description: "Skills2Learn is the UK's premier developer of award winning fully interactive, e-learning programmes. Skills2Learn bring many years of relevant experience to the task of designing, developing and implementing Technology Based Training and assessment programmes which really do deliver business advantage. We have the latest technology to create all new media elements, including real working environments, combined with a wide expertise in courseware design, making it unique in terms of providing training and development solutions."
    },
    {
      name: "Square Acre",
      spec: "Procurement & Sourcing for Mining, Oil & Gas",
      url: "http://www.squareacre.com/",
      description: "Square Acre is an established procurement practice based in the heart of London that specializes in the sourcing and supply of spares and machinery to the Mining, Oil & Gas sectors. We provide procurement solutions that encompass dedicated sourcing, purchasing, expediting, inspection & logistics divisions."
    },
    {
      name: "Beehive Consulting Group",
      spec: "Mechanical & Electrical Consulting Engineering",
      url: "http://www.beehivecg.com/",
      description: "Beehive Consulting Group is an Australian based consulting engineering company that covers all aspects of building mechanical, electrical, fire protection, domestic hot and cold water supply and sanitary sewer systems design and construction management. The company is strongly backed by about three decades of intensive involvement in landmark projects across Iraq, Jordan, Qatar, New Zealand, the United States, and Australia. Senior management also participates in professional training courses in HVAC system design, hydraulic services, lighting, and power systems."
    },
    {
      name: "EWA Inc.",
      spec: "Building Management Systems (BMS)",
      url: "http://www.ewacontrols.com/",
      description: "EWA CP is one of the leading British companies in the field of building management systems, founded in 2009 with headquarters in London. The company was formed to investigate potential business in Iraq and utilize experience gained to carry out engineering projects with a focus on Energy (green sustainable solutions), Wealth (industry knowledge), and Alliance (resourceful partnership)."
    },
    {
      name: "Seridium GmbH",
      spec: "Piping, Power Products & Metal Raw Materials",
      url: "http://www.seridium.com",
      description: "Seridium GmbH is a Swiss Limited Liability Engineering and Contracting Company, headquartered in Hergiswil. The company is active in three main business areas: Piping Products, Power Products, and Metal Raw Materials."
    }
  ];

  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none bg-slate-50 min-h-screen pb-20">
      {/* Hero Header with Background Image */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            Global Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Our Partners</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to deliver exceptional engineering, training, and procurement solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Core Partnership Sectors */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Completing the Project Life Cycle</h2>
            <p className="text-slate-700 leading-relaxed text-base mb-6">
              Somer Industrial Projects has many business partnerships that can complete the project life cycle. 
              These partnerships complement our core service offerings across key strategic sectors:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 h-44 hover:shadow-md transition-all"
              >
                <img
                  src={sector.image}
                  alt={sector.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Core Sector</span>
                  <h3 className="font-bold text-white text-base sm:text-lg drop-shadow">{sector.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Grid */}
        <section aria-labelledby="partners-heading">
          <div className="mb-8">
            <h2 id="partners-heading" className="text-3xl font-bold text-slate-900">Partner Directory</h2>
            <p className="mt-2 text-slate-600">Discover our trusted network of international engineering, automation, and consulting partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, idx) => (
              <article 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900">{partner.name}</h3>
                  </div>
                  <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200 mb-4">
                    {partner.spec}
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                    {partner.description}
                  </p>
                </div>

                {partner.url && (
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <a 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-colors"
                      aria-label={`Visit ${partner.name} website (opens in a new tab)`}
                    >
                      <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-400" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <main id="main-content" tabIndex="-1" className="focus:outline-none bg-slate-50 min-h-screen pb-20">
      {/* Hero Banner with Background Image */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch to discuss how SIP can support your industrial projects, sourcing, and training needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information Panel */}
            <div className="bg-slate-800 p-10 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8">Reach Out to SIP</h2>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                Whether you need strategic consulting, specific equipment sourcing, or comprehensive training programs, our team is ready to assist.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Inquiries</h3>
                    <p className="text-slate-300 mt-1">
                      <a href="mailto:info@somerprojects.com" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -mx-1 transition-colors">
                        info@somerprojects.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg">United Kingdom Headquarters</h3>
                    <p className="text-slate-300 mt-1">Tel/Fax: <a href="tel:+442087589843" className="no-underline text-inherit hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">+44 (0) 208 758 9843</a></p>
                    <p className="text-slate-300 mt-1">Mob: <a href="tel:+447837540523" className="no-underline text-inherit hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">+44 (0) 783 754 0523</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-lg">Iraq Regional Office</h3>
                    <p className="text-slate-300 mt-1">Tel: <a href="tel:+9647818947447" className="no-underline text-inherit hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">+964 (0) 7818947447</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessible Contact Form */}
            <div className="p-10 lg:p-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                    Full Name <span className="text-red-600" aria-hidden="true">*</span>
                    <span className="sr-only">Required</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-slate-50 transition-colors"
                    placeholder="Jane Doe"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                    Email Address <span className="text-red-600" aria-hidden="true">*</span>
                    <span className="sr-only">Required</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-slate-50 transition-colors"
                    placeholder="jane@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                    Your Message <span className="text-red-600" aria-hidden="true">*</span>
                    <span className="sr-only">Required</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-slate-50 transition-colors resize-y"
                    placeholder="How can we help you?"
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Regional Presence Cards */}
        <section aria-labelledby="locations-heading" className="pt-6">
          <div className="mb-8">
            <h2 id="locations-heading" className="text-3xl font-bold text-slate-900">Our International Hubs</h2>
            <p className="mt-2 text-slate-600">Connecting European engineering excellence with Middle Eastern industrial operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="London United Kingdom corporate and international liaison headquarters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Headquarters</span>
                  <h3 className="text-xl font-bold text-white">United Kingdom</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Primary hub for international partner coordination, European sourcing, contracts, and specialized curriculum development.
                </p>
                <div className="text-sm font-medium text-slate-700 space-y-1 border-t border-slate-100 pt-3">
                  <p>Tel/Fax: <a href="tel:+442087589843" className="no-underline text-inherit hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded">+44 (0) 208 758 9843</a></p>
                  <p>Mob: <a href="tel:+447837540523" className="no-underline text-inherit hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded">+44 (0) 783 754 0523</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Middle East regional office and in-country industrial operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Regional Operations</span>
                  <h3 className="text-xl font-bold text-white">Iraq & Middle East</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dedicated in-country presence managing field engineering, local liaison, on-site technical training, and project delivery.
                </p>
                <div className="text-sm font-medium text-slate-700 space-y-1 border-t border-slate-100 pt-3">
                  <p>Tel: <a href="tel:+9647818947447" className="no-underline text-inherit hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded">+964 (0) 7818947447</a></p>
                  <p>Email: <a href="mailto:info@somerprojects.com" className="no-underline text-inherit hover:text-blue-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 rounded">info@somerprojects.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle focus management for accessibility when route changes
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage />;
      case 'partners':
        return <PartnersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded-md z-[100] focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        Skip to main content
      </a>

      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="flex-grow">
        {renderPage()}
      </div>

      <Footer />
    </div>
  );
}