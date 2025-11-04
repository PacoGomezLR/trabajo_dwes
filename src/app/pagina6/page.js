"use client";

export default function SergioGomezPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start p-6">

      {/* FOTO PRINCIPAL */}
      <section className="text-center mt-10">
        <img
          src="/Paco.png"
          alt="Paco Gomez"
          className="w-72 h-auto object-contain mx-auto rounded-xl shadow-2xl bg-black"
        />
        <h1 className="text-4xl font-bold text-yellow-500 mt-6">Paco Gómez</h1>
      </section>

      {/* APARTADO PARA TEXTO */}
      <section className="max-w-3xl text-center mt-10 leading-relaxed text-gray-300">
        <p>
          {/* ✍️ Aquí puedes escribir libremente sobre Kike Fuentes */}
          Paco Gómez es el guitarrista y una de las mentes creativas detrás de Cathaline. 
          Su forma de tocar combina técnica y emoción, construyendo paisajes sonoros que 
          envuelven cada canción. Además de la guitarra, aporta arreglos, teclados y una 
          visión artística que define la identidad musical y visual del grupo.
          Su búsqueda constante de nuevos sonidos y matices convierte cada composición en 
          una experiencia viva, cargada de intensidad y sensibilidad. En el escenario, 
          Paco se entrega por completo, haciendo que cada nota cuente y conecte con quien la escucha.
        </p>
      </section>

    </main>
  );
}
