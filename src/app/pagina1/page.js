export default function Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center">
      {/* HERO */}
      <section className="text-center px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
          Cathaline
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-400">
          Primer single: "Viento"
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Una canción que celebra la fuerza interior y la serenidad
          frente al destino. Inspirada en la historia real de Carlos Barruso.
        </p>
      </section>

 

      {/* SPOTIFY PLAYER */}
      <section className="mt-10 text-center w-full max-w-md px-4">
        <h3 className="text-2xl font-semibold mb-4 text-green-400">
          Escúchala en Spotify
        </h3>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/3jlJSzEtTEK2PmpBzqliSw?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>

      {/* YOUTUBE VIDEO */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-red-500">
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
            className="rounded-xl shadow-2xl"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-sm py-6 mt-10">
        © 2025 Cathaline. Todos los derechos reservados.
      </footer>
    </main>
  );
}
