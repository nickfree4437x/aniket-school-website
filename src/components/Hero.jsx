import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Calendar, Trophy, Users, ChevronLeft, ChevronRight, Facebook, Instagram, Youtube, MessageCircle, CheckCircle } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

// 👉 apni 2–3 images yahan rakho
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpg";

export default function Hero() {
  const { t, lang } = useLanguage();

  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // 🔄 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // 🔄 Auto slide for testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Parent testimonials data
  const testimonials = lang === "hi" ? [
    {
      text: "शिक्षकों का समर्पण और आधुनिक सुविधाएं उल्लेखनीय हैं। नैतिक मूल्यों पर बल देने के लिए विशेष धन्यवाद।",
      name: "श्रीमती गुप्ता",
      relation: "कक्षा 8 के अभिभावक"
    },
    {
      text: "बच्चों का समग्र विकास के लिए मोरादाबाद का सर्वश्रेष्ठ स्कूल। मेरे बच्चे का आत्मविश्वास कई गुना बढ़ गया है।",
      name: "श्री शर्मा",
      relation: "कक्षा 7 के अभिभावक"
    },
    {
      text: "को-करिकुलर एक्टिविटीज और शैक्षणिक संतुलन बेहतरीन है। बच्चा स्कूल जाने के लिए हमेशा उत्साहित रहता है।",
      name: "श्री सिंह",
      relation: "कक्षा 6 के अभिभावक"
    }
  ] : [
    {
      text: "Teachers' dedication and modern facilities are remarkable. Special thanks for emphasizing moral values.",
      name: "Mrs. Gupta",
      relation: "Parent of Class 8"
    },
    {
      text: "Best school in Moradabad for holistic development. My child's confidence has grown tremendously.",
      name: "Mr. Sharma",
      relation: "Parent of Class 7"
    },
    {
      text: "Co-curricular activities and academic balance are excellent. My child is always excited to go to school.",
      name: "Mr. Singh",
      relation: "Parent of Class 6"
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] mt-4 flex items-center overflow-hidden"
    >
      {/* 🖼 IMAGE CAROUSEL */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="School Campus"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
          ${current === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* 🌈 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/50" />

      {/* 📌 SOCIAL MEDIA LINKS - LEFT SIDE */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col gap-3 animate-float-up-down">
          {/* Facebook - with pulse animation */}
          <a 
            href="#" 
            className="group relative bg-gradient-to-br from-blue-600 to-blue-800 p-3.5 rounded-full 
            hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-500/30
            hover:-translate-x-1 active:scale-95 animate-pulse-slow"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
          
          {/* Instagram - with delay animation */}
          <a 
            href="#" 
            className="group relative bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3.5 rounded-full 
            hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-pink-500/30
            hover:-translate-x-1 active:scale-95 animate-pulse-slow animation-delay-100"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
          
          {/* YouTube - with delay animation */}
          <a 
            href="#" 
            className="group relative bg-gradient-to-br from-red-600 to-red-700 p-3.5 rounded-full 
            hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-red-500/30
            hover:-translate-x-1 active:scale-95 animate-pulse-slow animation-delay-200"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
          
          {/* WhatsApp - with delay animation */}
          <a 
            href="#" 
            className="group relative bg-gradient-to-br from-green-500 to-green-600 p-3.5 rounded-full 
            hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-green-500/30
            hover:-translate-x-1 active:scale-95 animate-pulse-slow animation-delay-300"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* 📄 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT TEXT - MAIN CONTENT */}
        <div className="text-white">
          {/* School Info */}
          <div className="mb-2">
            <div className="text-2xl md:text-5xl font-extrabold mb-1">
              {lang === "hi" ? "सर्व हितेषि शिक्षा निकेतन" : "Sarva Hiteshi Siksha Niketan"}
            </div>
            <div className="text-lg md:text-xl font-semibold text-yellow-300 mb-1">
              {lang === "hi" ? "जूनियर हाई स्कूल" : "Junior High School"}
            </div>
            <div className="text-sm text-white/80">
              {lang === "hi" ? "2001 से शिक्षा में उत्कृष्टता" : "Excellence in Education Since 2001"}
            </div>
          </div>

          {/* ANIMATED TYPING TEXT */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-20 mb-4">
            <TypeAnimation
              sequence={lang === "hi" ? [
                'युवा दिमागों का निर्माण',
                2000,
                'शिक्षा में उत्कृष्टता',
                2000,
                'मूल्यों के साथ शिक्षा',
                2000,
              ] : [
                'Shaping Young Minds',
                2000,
                'Excellence in Education',
                2000,
                'Education with Values',
                2000,
              ]}
              speed={30}
              repeat={Infinity}
              wrapper="span"
            />
          </h1>

          <p className="mt-4 text-md md:text-xl max-w-xl leading-relaxed">
            {t.heroDescription}
          </p>

          {/* SCHOOL BADGES/AFFILIATIONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition">
              <span className="text-[1rem]">UP Board</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition">
              <span className="text-[1rem]">Safe Campus</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition">
              <span className="text-[1rem]">Goverment Approved</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/30 transition">
              <span className="text-[1rem]">25+ Years</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("admissions")}
              className="bg-yellow-400 text-blue-900 px-7 py-3 rounded-full
              hover:bg-yellow-300 transition-all shadow-sm hover:shadow-md hover:scale-105"
            >
              {t.applyNow}
            </button>

            <button
              onClick={() => scrollTo("facilities")}
              className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-full
              hover:bg-white hover:text-blue-900 transition-all hover:scale-105"
            >
              {t.exploreAcademics}
            </button>
          </div>
        </div>

        {/* RIGHT INFO BOX - STRUCTURED LAYOUT */}
        <div className="space-y-4 md:space-y-5 mt-10">
          {/* Why Choose Us Card */}
          <div className="bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-xl p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Trophy className="text-white" size={20} />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl">
                {t.whyChooseUs}
              </h3>
            </div>
            <ul className="space-y-3">
              {[t.point1, t.point2, t.point3, t.point4].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="text-yellow-300 flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two Column Grid for Map and Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* INTERACTIVE MAP PREVIEW */}
            <div className="bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-xl p-4 md:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <MapPin className="text-white" size={16} />
                </div>
                <h4 className="font-semibold text-white text-sm md:text-base">
                  {lang === "hi" ? "हमारा परिसर" : "Our Campus"}
                </h4>
              </div>
              <div className="mb-3">
                <p className="text-white/80 text-sm md:text-base">
                  {lang === "hi" ? "निवार खास, मोरादाबाद, उत्तर प्रदेश" : "Niwar Khas, Moradabad, Uttar Pradesh"}
                </p>
              </div>
              <button
                onClick={() => window.open("https://maps.google.com/?q=Sarva+Hiteshi+Sikha+Niketan+Junior+High+School+Moradabad", "_blank")}
                className="w-full bg-transparent border border-white/50 text-white px-3 py-2 rounded-lg text-sm hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                <MapPin size={14} />
                {lang === "hi" ? "मैप देखें" : "View on Map"}
              </button>
            </div>

            {/* PARENT TESTIMONIALS */}
            <div className="bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-xl p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <Users className="text-white" size={16} />
                  </div>
                  <h4 className="font-semibold text-white text-sm md:text-base">
                    {lang === "hi" ? "अभिभावक" : "Parents"}
                  </h4>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={prevTestimonial}
                    className="p-1 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
                    aria-label={lang === "hi" ? "पिछला" : "Previous"}
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-1 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
                    aria-label={lang === "hi" ? "अगला" : "Next"}
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              
              <div className="relative h-24 mb-3">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === testimonialIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-white/90 italic text-xs md:text-sm leading-relaxed line-clamp-3">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/20 pt-3">
                <div className="font-medium text-white text-sm">
                  {testimonials[testimonialIndex].name}
                </div>
                <div className="text-white/60 text-xs">
                  {testimonials[testimonialIndex].relation}
                </div>
                <div className="flex gap-1 mt-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonialIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === testimonialIndex ? "bg-yellow-400 w-3" : "bg-white/40"
                      }`}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔘 CAROUSEL DOTS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300
            ${current === i ? "w-6 bg-yellow-400" : "bg-white/60"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* 📱 QUICK ACTION BAR - MOBILE ONLY */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 flex justify-around md:hidden z-30">
        <button 
          onClick={() => scrollTo("admissions")}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-blue-100 p-2 rounded-full">
            <Calendar size={18} className="text-blue-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">{t.applyNow}</span>
        </button>
        
        <button 
          onClick={() => window.open("tel:+91 7906221094")}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <MessageCircle size={18} className="text-green-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">{lang === "hi" ? "कॉल करें" : "Call Now"}</span>
        </button>
        
        <button 
          onClick={() => window.open("https://maps.google.com", "_blank")}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-orange-100 p-2 rounded-full">
            <MapPin size={18} className="text-orange-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">{lang === "hi" ? "मैप" : "Map"}</span>
        </button>
        
        <button 
          onClick={() => scrollTo("contact")}
          className="flex flex-col items-center gap-1"
        >
          <div className="bg-purple-100 p-2 rounded-full">
            <Users size={18} className="text-purple-600" />
          </div>
          <span className="text-xs font-medium text-gray-700">{t.contact}</span>
        </button>
      </div>
    </section>
  );
}