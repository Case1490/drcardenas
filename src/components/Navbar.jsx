import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowShadow(true);
      } else {
        setShouldShowShadow(false);
      }
    };

    // Agregar evento de scroll al cargar el componente
    document.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clase condicional para el div fijo que muestra la sombra
  const navbarClass = shouldShowShadow
    ? "fixed w-full bg-white z-[1000] shadow-xl"
    : "fixed w-full bg-white z-[1000]";

  return (
    <div className={navbarClass}>
      <div className="w-5/6 m-auto flex items-center justify-between py-2">
        <div className="w-[180px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>

        <nav className="w-1/2">
          <ul className="flex justify-between items-center text-lg">
            <li className="font-bold">Inicio</li>
            <li>Sobre mí</li>
            <li>Servicios</li>
            <li>Testimonios</li>
            <li className="bg-CyanMain text-white py-2 px-3 rounded-full">
              Contacto
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
