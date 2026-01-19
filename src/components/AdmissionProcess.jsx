import { Search, FileText, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AdmissionProcess() {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, title: t.step1Title, desc: t.step1Desc },
    { icon: FileText, title: t.step2Title, desc: t.step2Desc },
    { icon: Users, title: t.step3Title, desc: t.step3Desc },
    { icon: CheckCircle, title: t.step4Title, desc: t.step4Desc },
  ];

  return (
    <section
      id="admissions"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            {t.admissionTitle}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t.admissionSubtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop line */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-[1px] bg-blue-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center group">

                  {/* Mobile line */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute left-1/2 top-20 h-full w-px bg-blue-200 -translate-x-1/2" />
                  )}

                  {/* Step Number */}
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2
                  text-xs font-semibold tracking-widest text-blue-500">
                    STEP {index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto
                  rounded-full bg-white/70 backdrop-blur
                  border border-blue-200 text-blue-600
                  shadow-sm group-hover:bg-blue-600
                  group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-md text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
