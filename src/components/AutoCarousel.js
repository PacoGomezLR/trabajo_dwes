"use client";


import { useEffect, useState } from "react";

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🖼️ Aquí defines las imágenes del carrusel
  const slides = ["/Logo.png", "/Single.png"];

  // 🔁 Efecto automático de cambio de imagen
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
   <div className="relative w-full h-[100px] sm:h-[500px] bg-black flex items-center justify-center m-0 p-0 overflow-hidden">


      {/*  Imágenes del carrusel */}
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/*  Indicadores inferiores */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentSlide ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
