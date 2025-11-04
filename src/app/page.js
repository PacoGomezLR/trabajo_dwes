"use client";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import AutoCarousel from "@/components/AutoCarousel";
import CountdownSingle from "@/components/CountdownSingle";


export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen font-[Inter]">
      {/* HERO / CARRUSEL */}
      <AutoCarousel />

      {/* SOBRE CATHALINE */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-6 tracking-tight"
          style={{
            textShadow:
              "1px 1px 5px rgba(0, 0, 0, 0.6), 0 0 10px rgba(255, 200, 0, 0.7)",
          }}
        >
          Bienvenido al universo de{" "}
          <span
            className="text-gray-900"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Cathaline
          </span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          <span className="font-semibold text-gray-900">Cathaline</span> es una banda de rock melódico que combina{" "}
          <span
            className="text-yellow-500 font-bold"
            style={{ textShadow: "0 0 10px rgba(200,200,0,0.9)" }}
          >
            potencia
          </span>
          ,{" "}
          <span
            className="text-yellow-500 font-bold"
            style={{ textShadow: "0 0 10px rgba(200,200,0,0.9)" }}
          >
            emoción
          </span>{" "}
          y{" "}
          <span
            className="text-yellow-500 font-bold"
            style={{ textShadow: "0 0 10px rgba(255,200,0,0.9)" }}
          >
            mensaje
          </span>
          . <br className="hidden md:block" />
          Su primer single,{" "}
          <strong
            className="text-yellow-600 italic"
            style={{ textShadow: "0 0 14px rgba(255,200,0,1)" }}
          >
            “Viento”
          </strong>
          , celebra la{" "}
          <span className="text-gray-900 font-semibold">fuerza interior</span>,
          el{" "}
          <span className="text-gray-900 font-semibold">renacer</span> y la{" "}
          <span className="text-gray-900 font-semibold">
            serenidad frente al destino
          </span>
          . <br className="hidden md:block" />
          Inspirada en la historia real de{" "}
          <span
            className="italic text-gray-900"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
          >
            Carlos Barroso
          </span>
          , la canción invita a{" "}
          <span
            className="text-yellow-600 font-bold"
            style={{ textShadow: "0 0 15px rgba(255,200,0,1)" }}
          >
            mirar la vida con valor y esperanza
          </span>
          .
        </p>
      </section>

      {/* CUENTA ATRÁS */}
      <CountdownSingle />

      {/* REDES SOCIALES */}
      <section className="py-12 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
          Síguenos
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://open.spotify.com/intl-es/artist/1L83AYYbmiaQT9yPcVaVOZ?si=dWFS4ZonQqqk4a8iCGyo1g"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-success"
          >
            <FaSpotify size={22} color="white" />
          </a>

          <a
            href="https://www.youtube.com/@CathalineOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-white"
          >
            <FaYoutube size={25} color="red" />
          </a>

          <a
            href="https://www.instagram.com/cathaline_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-secondary"
          >
            <FaSquareInstagram size={22} color="white" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61578850313747"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-primary"
          >
            <FaFacebookSquare size={22} color="white" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black border-t border-gray-800">
        <p className="text-gray-500">
          © 2025{" "}
          <span className="text-yellow-600 font-semibold">Cathaline</span>. Todos
          los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
