import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  Home,
  BookOpen,
  FileText,
  PhoneCall,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { name: t.home, id: "home", icon: Home },
    { name: t.about, id: "about", icon: BookOpen },
    { name: t.admissions, id: "admissions", icon: FileText },
    { name: t.contact, id: "contact", icon: PhoneCall },
  ];

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 🔹 TOP INFO BAR - ORIGINAL AS IT WAS */}
      <div
        className={`w-full bg-gradient-to-r from-primary to-blue-800 text-white
        transition-all duration-500 overflow-hidden
        ${scrolled ? "h-0 opacity-0" : "h-auto opacity-100 py-2"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1">
                <Phone size={12} /> +91 7906221094
              </span>
              <span className="flex items-center gap-1">
                <Mail size={12} /> sarvahiteshi.edu@gmail.com
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <MapPin size={12} /> Niwar Khas, Moradabad
              </span>
            </div>

            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full
              bg-white/15 hover:bg-white/25 transition"
            >
              <Globe size={12} />
              {lang === "en" ? "हिंदी" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR - WITH LANGUAGE BUTTON ON LEFT SIDE IN MOBILE */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500
        ${scrolled
          ? "top-0 bg-white/95 backdrop-blur shadow-md py-2"
          : "top-[44px] bg-white/90 backdrop-blur py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-3">
            {/* LEFT SIDE: Logo + Language Toggle (mobile) */}
            <div className="flex items-center gap-3 min-w-0">

              {/* LOGO + NAME */}
              <div
                onClick={() => handleScroll("home")}
                className="flex items-center gap-2 cursor-pointer min-w-0"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 rounded-lg sm:w-12 sm:h-12 object-contain"
                />

                <div className="min-w-0 leading-tight">
                  <p className="font-extrabold text-sm sm:text-base lg:text-lg truncate bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {lang === "hi"
                      ? t.schoolName
                      : "Sarva Hiteshi Sikha Niketan"}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                    Junior High School
                  </p>
                </div>
              </div>
              {/* Language Toggle Button - Mobile Only */}
              {/* <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="lg:hidden flex items-center gap-1 px-2 py-1.5 rounded-full
                bg-gradient-to-r from-primary/10 to-blue-600/10 text-primary
                hover:bg-primary/20 transition text-sm font-medium"
              >
                <Globe size={14} />
                {lang === "en" ? "हिंदी" : "English"}
              </button> */}
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ id, name, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => handleScroll(id)}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2
                    transition
                    ${active === id
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={16} />
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("admissions")}
                className="hidden sm:inline-flex px-4 py-2 rounded-full
                bg-gradient-to-r from-primary to-blue-600 text-white
                text-sm text-[1rem] hover:scale-105 transition"
              >
                {t.applyNow}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full bg-gray-100"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-xl rounded-xl mx-4 mt-3 p-3 space-y-2">
            {navLinks.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                ${active === id
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {name}
              </button>
            ))}
            
            {/* Apply Now Button in Mobile Menu */}
            <button
              onClick={() => handleScroll("admissions")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full
              bg-gradient-to-r from-primary to-blue-600 text-white
              text-sm font-semibold hover:scale-105 transition mt-2"
            >
              {t.applyNow}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}