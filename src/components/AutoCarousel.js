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
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* 🟡 Fondo difuminado que usa la imagen actual */}
      <img
        src={slides[currentSlide]}
        alt="blurred-background"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60 transition-all duration-1000"
      />

      {/* 🎞️ Imagen principal (se ve entera) */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } object-contain`}
        />
      ))}

      {/* 🔘 Indicadores inferiores */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentSlide ? "bg-yellow-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
