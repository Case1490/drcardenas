import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" fixed w-full z-[999] bg-white shadow-lg">
      <div className="w-[80%] m-auto flex items-center justify-between py-4">
        <div className="w-[170px]">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className="text-Cyan flex items-center text-xl gap-x-8 transition-all delay-100 ease-in">
          <Link
            to=""
            className=" hover:text-Beige hover:scale-110  transition-all delay-75 ease-in"
          >
            Inicio
          </Link>
          <Link
            className=" hover:text-Beige hover:scale-110  transition-all delay-75 ease-in"
            to=""
          >
            Sobre mi
          </Link>
          <Link
            className=" hover:text-Beige hover:scale-110  transition-all delay-75 ease-in"
            to=""
          >
            Servicios
          </Link>
          <Link
            className=" hover:text-Beige hover:scale-110  transition-all delay-75 ease-in"
            to=""
          >
            Testimonios
          </Link>
          <Link
            className=" hover:text-Beige hover:scale-110  transition-all delay-75 ease-in"
            to=""
          >
            Contacto
          </Link>
          <Link
            className=" bg-Cyan rounded-full text-white py-2 px-3 hover:scale-110  transition-all delay-75 ease-in"
            to=""
          >
            Reservar cita
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
