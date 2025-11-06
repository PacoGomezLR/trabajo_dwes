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
          <span className="font-semibold text-gray-900">Cathaline</span> es una
          banda de rock melódico que combina{" "}
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

      {/* SOBRE LA CANCIÓN */}
      <section className="py-12 bg-gray-100 text-black text-center">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-8">
          Sobre "Viento"
        </h2>

        <div className="collapse collapse-arrow bg-white shadow-lg w-3/4 mx-auto">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Historia detrás de la canción
          </div>
          <div className="collapse-content text-left">
            <p>
              “Viento” es una canción que habla sobre la aceptación, la
              trascendencia y la libertad. Está inspirada en la historia real de
              Carlos Barroso, un músico gallego que afrontó su enfermedad
              terminal con una serenidad y una fuerza extraordinarias.
              <br />
              <br />
              La letra no es un lamento, sino una conversación entre la vida y
              la muerte, entre lo que se va y lo que permanece. El viento, como
              símbolo central, representa el alma que sigue su curso, que
              viaja, que se transforma sin desaparecer.
              <br />
              <br />
              Cada verso refleja el paso de un ser humano que entiende que la
              muerte no es el final, sino el inicio de un movimiento distinto,
              invisible pero eterno. Por eso el viento susurra, acaricia,
              recuerda… Es la voz de quien ya no está físicamente, pero sigue
              presente en todo lo que toca.
              <br />
              <br />
              A lo largo de la canción, el protagonista se despide sin miedo,
              reconociendo la belleza del instante y el valor de haber vivido.
              El mensaje final no es de pérdida, sino de luz y continuidad: que
              incluso en la despedida, el amor y la música siguen flotando en el
              aire.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white shadow-lg w-3/4 mx-auto mt-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Letra completa</div>
          <div className="collapse-content text-left">
            <p>
              <em>
                <br />
                <strong>(Verso 1)</strong>
                <br />
                Solo una palabra y la imperturbabilidad
                <br />
                Temblando en un rincón
                <br />
                Mordida por la ley de vuelta
                <br />
                <br />
                <em>
                  (Describe el momento cuando le dan la noticia. Toda esa "paz"
                  cotidiana se echa a temblar)
                </em>
                <br />
                <br />

                <strong>(Verso 2)</strong>
                <br />
                Místico, esotérico
                <br />
                Trágico, poético
                <br />
                Punto de tangencia
                <br />
                Tejiendo cielo y tierra
                <br />
                <br />
                <em>
                  (Describe a la propia muerte como esa puerta entre el "cielo" y
                  la tierra)
                </em>
                <br />
                <br />

                <strong>(Pre-estribillo)</strong>
                <br />
                Y hoy, que aún guardo mi sangre dentro, amor...
                <br />
                Le canto al cielo...
                <br />
                <br />
                <em>
                  (Se dice a sí mismo —a su amor propio— que va a disfrutar
                  mientras le quede aliento)
                </em>
                <br />
                <br />

                <strong>(Estribillo)</strong>
                <br />
                Soy viento, soy tiempo
                <br />
                De este caminar, de mi error...
                <br />
                No me arrepiento
                <br />
                No hay tiempo, no hay viento
                <br />
                Que pueda enfrentar
                <br />
                A este huracán
                <br />
                Que llevo dentro
                <br />
                <br />
                <em>
                  (Afirma que somos el resultado de nuestro camino, nuestros
                  errores y nuestras vivencias; todo eso forja lo que somos hoy)
                </em>
                <br />
                <br />

                <strong>(Verso 3)</strong>
                <br />
                Y ahora, que la sombra se hace larga y se transforma,
                <br />
                Pienso dibujar el mapa de salida
                <br />
                Con las líneas de tus manos
                <br />
                Con las líneas de las mías
                <br />
                Que este fuego interno se ría del infierno
                <br />
                <br />
                <em>
                  (Hace referencia a la frase “Habrá que organizarse”, expresando
                  su deseo de estar con sus seres queridos)
                </em>
                <br />
                <br />

                <strong>(Pre-estribillo)</strong>
                <br />
                Y hoy, que aún guardo mi sangre dentro, amor...
                <br />
                Le canto al cielo...
                <br />
                <br />

                <strong>(Estribillo)</strong>
                <br />
                Soy viento, soy tiempo
                <br />
                De este caminar, de mi error...
                <br />
                No me arrepiento
                <br />
                No hay tiempo, no hay viento
                <br />
                Que pueda enfrentar
                <br />
                A este huracán
                <br />
                Que llevo dentro
                <br />
                <br />

                <strong>(Puente)</strong>
                <br />
                La venganza va y se va
                <br />
                La rabia se marcha
                <br />
                Desahuciadas de este hogar
                <br />
                No les queda nada
                <br />
                <br />
                <em>
                  (Esta situación purifica; las emociones negativas desaparecen
                  porque ya no tienen cabida en él)
                </em>
                <br />
                <br />

                <strong>(Estribillo final)</strong>
                <br />
                Soy viento, soy tiempo
                <br />
                De este caminar, de mi error...
                <br />
                No me arrepiento
                <br />
                No hay tiempo, no hay viento
                <br />
                Que pueda enfrentar
                <br />
                A este huracán
                <br />
                Que llevo dentro
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRANTES DEL GRUPO */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-yellow-600 mb-8">
          Integrantes de Cathaline
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Kike Fuentes", img: "/Kike.png", role: "Voz principal" },
            { name: "Paco Gómez", img: "/Paco.png", role: "Guitarra y teclados" },
            { name: "Sergio Gómez", img: "/Sergio.png", role: "Batería" },
            { name: "Rafa Pérez", img: "/Vilchez.png", role: "Bajo" },
          ].map((m, i) => (
            <div
              key={i}
              className="card w-64 bg-gray-50 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <figure>
                <img src={m.img} alt={m.name} className="rounded-t-xl" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-gray-800">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="py-12 text-center bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Síguenos</h2>
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
