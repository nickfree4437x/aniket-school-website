import { GraduationCap, Users, CalendarCheck, Trophy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users size={36} />,
      value: "500+",
      label: t.statsStudents,
    },
    {
      icon: <GraduationCap size={36} />,
      value: "10+",
      label: t.statsTeachers,
    },
    {
      icon: <CalendarCheck size={36} />,
      value: "25+",
      label: t.statsYears,
    },
    {
      icon: <Trophy size={36} />,
      value: "90%",
      label: t.statsResults,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-white flex flex-col items-center gap-3
              hover:scale-105 transition duration-300"
            >
              <div className="bg-white/20 p-4 rounded-full">
                {item.icon}
              </div>

              <h3 className="text-3xl font-extrabold">
                {item.value}
              </h3>

              <p className="text-sm md:text-base tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
