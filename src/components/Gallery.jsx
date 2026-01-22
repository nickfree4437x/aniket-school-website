import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: g2, title: "School Main Entrance Gate" },
    { src: g4, title: "Republic Day Program" },
    { src: g7, title: "Republic Day Program" },
    { src: g1, title: "Republic Day Rally" },
    { src: g3, title: "Republic Day Rally" },
    { src: g6, title: "Republic Day Rally" },
    { src: g8, title: "Republic Day Rally" },
    { src: g5, title: "Rangoli Program" },
    { src: g9, title: "School Trip" },
    { src: g10, title: "School Trip" },
  ];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-50 to-white -mt-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 -mt-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {t.galleryTitle}
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Horizontal Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="cursor-pointer group relative min-w-[280px] sm:min-w-[320px]
              h-[420px] rounded-2xl overflow-hidden shadow-lg bg-black"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover
                group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-lg font-semibold">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-200">
                  Sunrise Public School
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ← Click on image to view full gallery →
        </p>
      </div>

      {/* 🔥 MODAL / LIGHTBOX */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-6 text-center">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="max-h-[80vh] mx-auto rounded-xl object-contain"
            />
            <p className="mt-4 text-white text-lg font-medium">
              {images[currentIndex].title}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
