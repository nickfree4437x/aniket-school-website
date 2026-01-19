import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            {t.contactTitle}
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT: Info + Map */}
          <div className="space-y-8">

            {/* Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary
                flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.contactAddressLabel}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t.contactAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary
                flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.contactPhoneLabel}
                  </h4>
                  <p className="text-gray-600">
                    {t.contactPhone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-primary
                flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t.contactEmailLabel}
                  </h4>
                  <p className="text-gray-600">
                    {t.contactEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                title="School Location"
                src="https://www.google.com/maps?q=Sunrise%20Public%20School&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <form
            className="bg-white rounded-2xl p-8 shadow-sm border space-y-6"
          >
            <input
              type="text"
              placeholder={t.formName}
              className="w-full rounded-lg border border-gray-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder={t.formEmail}
              className="w-full rounded-lg border border-gray-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="tel"
              placeholder={t.formPhone}
              className="w-full rounded-lg border border-gray-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows="5"
              placeholder={t.formMessage}
              className="w-full rounded-lg border border-gray-200 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl
              font-semibold hover:bg-blue-800 transition"
            >
              {t.formSubmit}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
