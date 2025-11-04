export default function Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-300 text-white flex flex-col items-center justify-center font-[Inter]">
      {/* HERO */}
      <section className="text-center px-6 py-12">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-gray-900 drop-shadow-sm mb-4">
          CATHALINE
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-600 tracking-wide">
          Primer single: <span className="italic">“Viento”</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          Una canción que celebra la <span className="font-medium text-gray-900">fuerza interior </span>  
          y la serenidad frente al destino.  
          Inspirada en la historia real de <span className="italic text-gray-900">Carlos Barruso</span>.
        </p>
      </section>

      {/* SPOTIFY PLAYER */}
      <section className="mt-10 text-center w-full max-w-md px-10">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Escúchala en Spotify
        </h3>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/3jlJSzEtTEK2PmpBzqliSw?utm_source=generator"
          width="100%"
          height="156"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>

      {/* YOUTUBE VIDEO */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
          Mira el videoclip oficial
        </h3>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZoIocSz074g?si=92csjX_0af1_xVQm"
            title="Cathaline - Viento (Videoclip oficial)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl shadow-2xl border border-gray-300"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-3 mt-12 border-t border-gray-300 w-full bg-gray-100">
        <p className="tracking-wide">
          © 2025 <span className="text-yellow-600 font-semibold">Cathaline</span>. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
