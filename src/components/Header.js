import Link from "next/link";
import ThemeSelect from "./ThemeSelect";

function Header() {
  return (
    <div className="navbar bg-base-500 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Inicio
        </Link>
        <ThemeSelect />
      </div>

      <div className="flex-none pr-20">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/pagina1">Streaming</Link>
          </li>
          <li>
            <Link href="/pagina2">Sobre Cathaline</Link>
          </li>

          <li>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                Componentes
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-10 mt-4 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link href="/pagina3">Kike Fuentes</Link>
                </li>
                <li>
                  <Link href="/pagina4">Rafa Pérez</Link>
                </li>
                <li>
                  <Link href="/pagina5">Sergio Gómez</Link>
                </li>
                <li>
                  <Link href="/pagina6">Paco Gómez</Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Drawer con Fechas de la Gira */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content fixed top-0 right-0 z-10">
          <div className="drawer-content fixed top-6 right-2 z-10">
          <label
            htmlFor="my-drawer"
            className="drawer-button size-16 rounded-full text-black font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: "#CA8A04", // dorado Cathaline
              border: "2px solid #b77a03",
              padding: "0.75rem 1.25rem",
            
            }}
          >
            Fechas
          </label>
</div>


            </div>

            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6">
                <h2 className="text-center text-xl font-bold mb-4">Gira 2025</h2>

                <li>
                  <strong>21 de Noviembre</strong>
                </li>
                <li>
                  <strong>Madrid</strong> – Santiago Bernabéu
                </li>
                <br />

                <li>
                  <strong>22 de Noviembre</strong>
                </li>
                <li>
                  <strong>Sevilla</strong> – Estadio Olímpico
                </li>
                <br />

                <li>
                  <strong>24 de Noviembre</strong>
                </li>
                <li>
                  <strong>Valencia</strong> – Ciudad de las Artes y las Ciencias
                </li>
                <br />

                <li>
                  <strong>25 de Noviembre</strong>
                </li>
                <li>
                  <strong>Barcelona</strong> – Palau Sant Jordi
                </li>
                <br />

                <li>
                  <strong>28 de Noviembre</strong>
                </li>
                <li>
                  <strong>Bilbao</strong> – BEC! Barakaldo
                </li>
                <br />

                <li>
                  <strong>30 de Noviembre</strong>
                </li>
                <li>
                  <strong>Granada</strong> – Palacio de Deportes
                </li>
                <br />

                <li>
                  <strong>2 de Diciembre</strong>
                </li>
                <li>
                  <strong>Zaragoza</strong> – Pabellón Príncipe Felipe
                </li>
                <br />

                <li>
                  <strong>5 de Diciembre</strong>
                </li>
                <li>
                  <strong>La Coruña</strong> – Coliseum
                </li>
                <br />

                <li>
                  <strong>7 de Diciembre</strong>
                </li>
                <li>
                  <strong>Málaga</strong> – Martín Carpena
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
