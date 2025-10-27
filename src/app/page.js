
"use client";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import AutoCarousel from "@/components/AutoCarousel";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">

      {/* HERO / CARRUSEL */}
      <AutoCarousel />

      {/* SOBRE CATHALINE */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Bienvenido al universo de Cathaline
        </h1>
        <p className="text-lg leading-relaxed text-black -300">
          Cathaline es una banda de rock melódico que combina potencia, emoción y mensaje.
          Su primer single, <strong>"Viento"</strong>, celebra la fuerza interior, el renacer
          y la serenidad frente al destino. Inspirada en la historia real de Carlos Barroso,
          la canción invita a mirar la vida con valor y esperanza.
        </p>
      </section>

 


      {/* INTEGRANTES */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-8">Integrantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {[
            { name: "Kike Fuentes", role: "Voz", img: "/Kike.png" },
            { name: "Paco Gómez", role: "Guitarra y teclados", img: "/Paco.png" },
            { name: "Sergio Gómez", role: "Batería y percusión", img: "/Sergio.png" },
            { name: "Rafa Pérez", role: "Bajo", img: "/Vilchez.png" },
          ].map((member, i) => (
            <div key={i} className="card bg-gray-800 shadow-xl">
              <figure>
                <img src={member.img} alt={member.name} className="object-cover h-72 w-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-yellow-400">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="py-12 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Síguenos</h2>
        <div className="flex justify-center gap-6">
          <a href="https://open.spotify.com/intl-es/artist/1L83AYYbmiaQT9yPcVaVOZ?si=dWFS4ZonQqqk4a8iCGyo1g" target="_blank" className="btn btn-circle btn-success"><FaSpotify size={22} color="white"/></a>
          <a href="https://www.youtube.com/@CathalineOfficial" target="_blank" className="btn btn-circle bg-white"><FaYoutube size={25} color="red" /></a>
          <a href="https://www.instagram.com/cathaline_oficial/" target="_blank" className="btn btn-circle btn-secondary"><FaSquareInstagram size={22} /></a>
          <a href="https://www.facebook.com/profile.php?id=61578850313747" target="_blank" className="btn btn-circle btn-primary"><FaFacebookSquare size={22} /></a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-black border-t border-gray-800">
        <p className="text-gray-500">
          © 2025 Cathaline. Todos los derechos reservados.  
        </p>
      </footer>
    </main>
  );
}
