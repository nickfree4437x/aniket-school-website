import { Target, Eye, BookOpen, Award, Users, Globe, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSchool() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      
      {/* Subtle Wave Pattern - Hide on mobile for performance */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      
      {/* Floating Elements - Adjust for mobile */}
      <div className="absolute -top-10 -right-10 w-40 h-40 md:-top-20 md:-right-20 md:w-80 md:h-80 bg-blue-100/30 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 md:-bottom-20 md:-left-20 md:w-80 md:h-80 bg-purple-100/30 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          {/* Tag/Badge */}
          <div className="inline-flex items-center px-4 py-2 md:px-8 md:py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-2" />
            <span className="text-gray-700 font-medium text-xs md:text-sm tracking-wider">
              ABOUT OUR SCHOOL
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 px-2">
            {t.aboutTitle}
          </h2>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.aboutSubtitle}
            </p>
          </div>
        </div>

        {/* Stats Section - Mobile Only */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">500+</span>
            </div>
            <p className="text-xs text-gray-600">Happy Students</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">20+</span>
            </div>
            <p className="text-xs text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">15+</span>
            </div>
            <p className="text-xs text-gray-600">Expert Teachers</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-lg text-gray-900">100%</span>
            </div>
            <p className="text-xs text-gray-600">Parent Satisfaction</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          
          {/* Left Column - Legacy & Excellence */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Our Legacy Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg md:rounded-xl">
                  <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-3">
                    Our Legacy
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {t.aboutDesc1}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Educational Excellence Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg md:rounded-xl">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-3">
                    Educational Excellence
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {t.aboutDesc2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-6 md:space-y-8">
            {/* Mission Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900">
                  {t.missionTitle}
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {t.missionDesc}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                  <Eye className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900">
                  {t.visionTitle}
                </h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {t.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}