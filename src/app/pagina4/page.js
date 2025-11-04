"use client";

export default function RafaPerezPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-6">

      {/* FOTO PRINCIPAL */}
      <section className="text-center mt-10">
        <img
          src="/Vilchez.png"
          alt="Rafa Perez"
          className="w-72 h-auto object-contain mx-auto rounded-xl shadow-2xl bg-black"
        />
        <h1 className="text-4xl font-bold text-yellow-500 mt-6">Rafa Pérez</h1>
      </section>

      {/* APARTADO PARA TEXTO */}
      <section className="max-w-3xl text-center mt-10 leading-relaxed text-gray-300">
        <p>
          {/* ✍️ Aquí puedes escribir libremente sobre Kike Fuentes */}
          Rafa Pérez es el bajista de Cathaline y una pieza esencial en el equilibrio sonoro de la banda. 
          Su toque firme y melódico aporta profundidad y cohesión al conjunto, sosteniendo el ritmo con precisión y carácter.
          Con una gran sensibilidad musical, Rafa convierte cada línea de bajo en una base sólida que impulsa la fuerza y 
          la emoción de las canciones. Su presencia escénica serena pero poderosa refleja la esencia de Cathaline: intensidad, 
          sentimiento y unidad sobre el escenario.
        </p>
      </section>

    </main>
  );
}
