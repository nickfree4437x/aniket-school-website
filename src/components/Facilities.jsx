import {
  Monitor,
  ShieldCheck,
  Trophy,
  Palette,
  ParkingCircle,
  GraduationCap,
  Gamepad2,
  Armchair
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Facilities() {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: <Monitor className="w-7 h-7" />,
      title: t.facility1, // Well Equipped Classrooms
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: t.facility2, // Safe Campus
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: t.facility3, // Sports Playground
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: t.facility4, // Activity & Arts Room
    },
    {
      icon: <ParkingCircle className="w-7 h-7" />,
      title: t.facility5, // Parking Area
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: t.facility6, // Educated Teachers
    },
    {
      icon: <Gamepad2 className="w-7 h-7" />,
      title: t.facility7, // Indoor Games
    },
    {
      icon: <Armchair className="w-7 h-7" />,
      title: t.facility8, // Comfortable Sitting Areas
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-blue-50 to-white -mt-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
         <div className="inline-block px-8 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 mb-6">
           <div className="text-blue-700 font-medium text-sm tracking-wider">
            OUR FACILITIES
          </div>
         </div>
          
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            {t.facilitiesTitle}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg">
              {t.facilitiesSubtitle}
            </p>
          </div>
          
          <div className="mt-6 w-16 h-0.5 bg-blue-500/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl px-12 py-8
              border border-gray-200 shadow-sm hover:shadow-md
              transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 
                flex items-center justify-center mb-5 
                group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                
                <div className="mt-4 w-6 h-0.5 bg-blue-600/50 rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200/50 text-center">
          <p className="text-gray-600 text-lg">
            All facilities are regularly maintained and upgraded to provide the best learning environment
          </p>
        </div>
      </div>
    </section>
  );
}