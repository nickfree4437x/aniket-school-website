import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Home,
  Info,
  Users,
  Images,
  Contact
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import schoolLogo from "../assets/logo.png";

export default function Footer() {
  const { t } = useLanguage();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { 
      name: t.footerHome, 
      id: "home", 
      icon: <Home size={16} /> 
    },
    { 
      name: t.footerAboutLink, 
      id: "about", 
      icon: <Info size={16} /> 
    },
    { 
      name: t.footerAdmissions, 
      id: "admissions", 
      icon: <Users size={16} /> 
    },
    { 
      name: t.footerGallery, 
      id: "gallery", 
      icon: <Images size={16} /> 
    },
    { 
      name: t.footerContactLink, 
      id: "contact", 
      icon: <Contact size={16} /> 
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* About + Logo */}
          <div>
            <div 
              onClick={() => handleScroll("home")}
              className="flex items-center gap-3 mb-4 cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img
                src={schoolLogo}
                alt="Sarva Hiteshi School Logo"
                className="w-14 h-14 object-contain rounded-lg drop-shadow-md"
              />
              <h3 className="text-white text-xl font-extrabold leading-tight">
                Sarva Hiteshi Sikha Niketan Junior High School
              </h3>
            </div>

            <p className="text-md leading-relaxed text-gray-300">
              {t.footerAbout || "Providing quality education since 1995, focused on holistic development of students."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {t.footerQuickLinks || "Quick Links"}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors 
                    w-full text-left py-1 group"
                  >
                    <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {t.footerContact || "Contact Us"}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start group">
                <span className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center
                group-hover:bg-blue-700 transition-colors">
                  <MapPin size={14} />
                </span>
                <span className="group-hover:text-white transition-colors">
                  Niwar Khas, Moradabad
                </span>
              </li>

              <li className="flex gap-3 items-center group">
                <span className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center
                group-hover:bg-blue-700 transition-colors">
                  <Phone size={14} />
                </span>
                <a 
                  href="tel:+919876543210"
                  className="group-hover:text-white transition-colors hover:underline"
                >
                  +91 7906221094
                </a>
              </li>

              <li className="flex gap-3 items-center group">
                <span className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center
                group-hover:bg-blue-700 transition-colors">
                  <Mail size={14} />
                </span>
                <a 
                  href="mailto:info@sunriseschool.edu"
                  className="group-hover:text-white transition-colors hover:underline"
                >
                  sarvahiteshi.edu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-800/50
                flex items-center justify-center text-gray-300
                hover:bg-blue-700 hover:text-white transition-all duration-300
                hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-800/50
                flex items-center justify-center text-gray-300
                hover:bg-blue-700 hover:text-white transition-all duration-300
                hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-800/50
                flex items-center justify-center text-gray-300
                hover:bg-blue-700 hover:text-white transition-all duration-300
                hover:scale-110"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800/50 mt-16 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <button 
            onClick={() => handleScroll("home")}
            className="text-white font-medium hover:underline cursor-pointer"
          >
            Sarva Hiteshi Sikha Niketan
          </button>
          . {t.footerRights || "All rights reserved."}
        </div>

      </div>
    </footer>
  );
}