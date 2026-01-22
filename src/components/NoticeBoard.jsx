import { Bell, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NoticeBoard() {
  const { t } = useLanguage();

  return (
    <section id="notices" className="py-16 bg-gradient-to-b from-gray-50 to-white -mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Coming Soon Message */}
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
            <Bell className="w-8 h-8 text-blue-600" />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.noticeTitle || "Notice Board"}
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 max-w-xl mx-auto text-lg mb-8">
            {t.noticeSubtitle || "Stay updated with important announcements"}
          </p>
          
          {/* Coming Soon Message */}
          <div className="bg-white rounded-xl border shadow-sm hover:shadow-md border-gray-200 p-8 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Coming Soon
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                Important notices and announcements will be displayed here.
                Check back later for updates about school events, holidays, and important dates.
              </p>
              
              {/* Info Box */}
              <div className="bg-blue-50 rounded-lg p-4 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-sm text-blue-700 font-medium">
                    Next update scheduled for February 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}