"use client";

export default function KikeFuentesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-6">

      {/* FOTO PRINCIPAL */}
      <section className="text-center mt-10">
        <img
          src="/Kike.png"
          alt="Kike Fuentes"
          className="w-162 h-auto object-contain mx-auto rounded-xl shadow-2xl bg-black"
        />
        <h1 className="text-4xl font-bold text-yellow-500 mt-6">Kike Fuentes</h1>
      </section>

      {/* APARTADO PARA TEXTO */}
      <section className="max-w-3xl text-center mt-10 leading-relaxed text-gray-300">
        <p>
          {/* ✍️ Aquí puedes escribir libremente sobre Kike Fuentes */}
          Kike Fuentes es la voz y el alma melódica de Cathaline. Con una interpretación intensa y honesta, 
          transforma cada letra en una experiencia emocional. Su registro versátil le permite moverse entre 
          la fuerza del rock y la sensibilidad más íntima, dando vida a las historias que la banda cuenta en 
          cada canción.
          En el escenario, Kike conecta de forma natural con el público: no solo canta, sino que transmite. Su carisma 
          y entrega hacen que cada concierto sea un viaje compartido entre la banda y quienes la escuchan.
        </p>
      </section>

    </main>
  );
}
