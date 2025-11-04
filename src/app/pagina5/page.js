"use client";

export default function SergioGomezPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-6">

      {/* FOTO PRINCIPAL */}
      <section className="text-center mt-10">
        <img
          src="/Sergio.png"
          alt="Sergio Gomez"
          className="w-72 h-auto object-contain mx-auto rounded-xl shadow-2xl bg-black"
        />
        <h1 className="text-4xl font-bold text-yellow-500 mt-6">Sergio Gómez</h1>
      </section>

      {/* APARTADO PARA TEXTO */}
      <section className="max-w-3xl text-center mt-10 leading-relaxed text-gray-300">
        <p>
          {/* ✍️ Aquí puedes escribir libremente sobre Kike Fuentes */}
          Sergio Gómez es el motor rítmico de Cathaline. Desde la batería, marca el pulso 
          y la energía que sostiene cada canción, combinando precisión técnica con una fuerza 
          expresiva única. Su estilo mezcla potencia y elegancia, creando atmósferas que refuerzan 
          el mensaje emocional de la banda.
          Además de ser cofundador del proyecto, Sergio aporta una visión creativa que influye en la 
          composición y la producción, consolidando el sonido característico de Cathaline: intenso, 
          melódico y profundamente humano.
        </p>
      </section>

    </main>
  );
}
