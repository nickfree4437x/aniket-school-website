import { useLanguage } from "../context/LanguageContext";

// 👉 Gallery Images
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.jpg";
import g10 from "../assets/gallery/g10.jpg";
import g11 from "../assets/gallery/g11.jpg";
import g12 from "../assets/gallery/g12.jpg";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: g1},
    { src: g2},
    { src: g3},
    { src: g4},
    { src: g5},
    { src: g6},
    { src: g7},
    { src: g8},
    { src: g9},
    { src: g10},
    { src: g11},
    { src: g12},
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {t.galleryTitle}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Horizontal Story Gallery */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4
            scrollbar-hide snap-x snap-mandatory"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative min-w-[280px] sm:min-w-[320px]
                h-[420px] rounded-2xl overflow-hidden
                snap-center shadow-lg bg-black"
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover
                  group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/35
                group-hover:bg-black/50 transition" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold">
                    {img.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    Sunrise Public School
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-gray-500 mt-6">
            ← Scroll to explore more moments →
          </p>
        </div>
      </div>
    </section>
  );
}
