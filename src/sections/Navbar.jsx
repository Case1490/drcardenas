import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // <-- nuevo estado para controlar animación

  useEffect(() => {
    const handleScroll = () => {
      setShouldShowShadow(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Cerrar
      setMenuVisible(false);
      setIsMenuOpen(false);
    } else {
      // Abrir
      setShouldRenderMenu(true);
      setTimeout(() => {
        setMenuVisible(true);
        setIsMenuOpen(true);
      }, 10); // este pequeño delay permite que se vea la transición al abrir
    }
  };

  const handleTransitionEnd = () => {
    if (!menuVisible) {
      setShouldRenderMenu(false); // desmontar después de animar
    }
  };

  const navbarClass = shouldShowShadow
    ? "fixed w-full bg-white z-[1000] shadow-xl"
    : "fixed w-full bg-white z-[1000]";

  return (
    <div className={navbarClass}>
      <div className="w-full sm:w-5/6 m-auto flex items-center justify-between py-2">
        <div className="w-[200px]">
          <a href="#inicio">
            <img src={Logo} alt="Logo" className="w-full" />
          </a>
        </div>

        <nav className="hidden lg:block lg:w-1/2">
          <ul className="flex justify-between items-center text-lg">
            <a
              className="font-bold text-PurpleMain cursor-pointer"
              href="#inicio"
            >
              Inicio
            </a>
            <a
              className="hover:text-PurpleMain cursor-pointer"
              href="#sobre_mi"
            >
              Sobre mí
            </a>
            <a
              className="hover:text-PurpleMain cursor-pointer"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              href="https://wa.me/51944542129?text=Hola,%20quisiera%20hacer%20una%20consulta%20sobre%20una%20atención%20oncológica."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-CyanMain hover:bg-CyanMain2 text-white py-2 px-3 rounded-full cursor-pointer"
            >
              Contacto
            </a>
          </ul>
        </nav>

        <div className="text-CyanMain lg:hidden">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>

      {shouldRenderMenu && (
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md py-4 transform transition-all duration-300 ease-in-out ${
            menuVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center text-lg space-y-6">
            <li className="font-bold text-PurpleMain py-2 border-PurpleMain border-2 px-4 rounded-full">
              Inicio
            </li>
            <li className="font-bold text-PurpleMain py-2 border-PurpleMain border-2 px-4 rounded-full">
              Sobre mí
            </li>
            <li className="font-bold text-PurpleMain py-2 border-PurpleMain border-2 px-4 rounded-full">
              Servicios
            </li>
            <li className="bg-CyanMain text-white py-2 px-4 rounded-full cursor-pointer">
              Contacto
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
