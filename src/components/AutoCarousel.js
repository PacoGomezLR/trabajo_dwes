"use client";

import { useEffect, useState } from "react";

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🖼️ Imágenes del carrusel
  const slides = ["/LogoRojo.png", "/VientoRojo.png"];

  // 🔁 Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[600px] bg-white m-0 p-0 overflow-hidden">
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full block m-0 p-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } object-cover object-center sm:object-[center_60%]`}
        />
      ))}

      {/* 🔘 Indicadores inferiores */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentSlide ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

