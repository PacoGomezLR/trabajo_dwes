"use client";

import { useEffect, useState } from "react";

export default function CountdownSingle() {
  // 📅 Fecha del lanzamiento
  const targetDate = new Date("2025-12-15T20:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const isReleased =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="py-16 px-6 bg-white text-black font-[Inter]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* ⏳ CUENTA ATRÁS */}
        <div className="text-center md:text-left flex-1">
          <h2
            className="text-3xl font-extrabold text-yellow-600 mb-6 tracking-tight"
            style={{
              textShadow:
                "1px 1px 5px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 200, 0, 0.5)",
            }}
          >
            {isReleased
              ? "¡Ya disponible el nuevo single!"
              : "Cuenta atrás para el nuevo single"}
          </h2>

          {!isReleased && (
            <div className="flex justify-center md:justify-start gap-6 text-2xl font-semibold mb-8">
              {[
                ["Días", timeLeft.days],
                ["Horas", timeLeft.hours],
                ["Minutos", timeLeft.minutes],
                ["Segundos", timeLeft.seconds],
              ].map(([label, value], index) => (
                <div key={index} className="text-center">
                  <span className="countdown font-mono text-5xl text-yellow-600">
                    <span style={{ "--value": value }}></span>
                  </span>
                  <p className="text-sm mt-1 text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          )}

          <p className="mt-4 italic text-lg text-gray-800 max-w-md leading-relaxed">
            {isReleased ? (
              <>
                ¡Escúchalo ahora en{" "}
                <span
                  className="text-yellow-600 font-semibold"
                  style={{
                    textShadow: "0 0 10px rgba(255,200,0,0.7)",
                  }}
                >
                  Spotify
                </span>{" "}
                y YouTube!
              </>
            ) : (
              <>
                ¡Prepárate para{" "}
                <span
                  className="text-yellow-600 font-bold"
                  style={{
                    textShadow: "0 0 10px rgba(255,200,0,0.7)",
                  }}
                >
                  escuchar lo nuevo de Cathaline
                </span>
                !
              </>
            )}
          </p>

          {/* 🎧 Botón Spotify (solo tras lanzamiento) */}
          {isReleased && (
            <div className="mt-8">
              <a
                href="https://open.spotify.com/intl-es/artist/1L83AYYbmiaQT9yPcVaVOZ?si=dWFS4ZonQqqk4a8iCGyo1g"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-yellow-600 hover:bg-yellow-500 text-white text-lg font-semibold px-8 border-none shadow-lg"
              >
                Escúchalo en Spotify
              </a>
            </div>
          )}
        </div>

        {/* 🎵 PORTADA */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/Over_The_Rainbow.jpg"
            alt="Portada del single Over The Rainbow"
            className="w-72 h-auto rounded-xl shadow-2xl border-2 border-yellow-600 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
