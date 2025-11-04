"use client";

export default function SobreCathalinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-6">

      {/* IMAGEN PRINCIPAL */}
      <section className="text-center mt-10">
        <img
          src="/Portada.png"
          alt="Cathaline"
          className="w-full max-w-3xl h-auto object-contain mx-auto rounded-xl shadow-2xl bg-black"
        />
        <h1 className="text-4xl font-bold text-yellow-500 mt-6">Sobre Cathaline</h1>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="max-w-3xl text-center mt-10 leading-relaxed text-gray-300">
        <p className="mb-4">
          {/* ✍️ Aquí puedes escribir libremente sobre la historia y esencia del grupo */}
          <span className="text-yellow-500 font-semibold">Cathaline</span> es una banda que fusiona el rock y el metal con una identidad profundamente emocional y humana.
          Sus canciones nacen del deseo de transformar la experiencia y el dolor en belleza, explorando temas como la esperanza, la pérdida y la fortaleza interior.
        </p>
        <p>
          Con un sonido potente y melódico, la banda combina guitarras atmosféricas, voces cargadas de sentimiento y letras que invitan a la reflexión.
          Cada composición es una historia, una confesión y un viaje sonoro hacia lo más profundo del alma.
        </p>
      </section>

    </main>
  );
}
