import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-[1000]">
      <div className=" w-5/6 m-auto flex items-center justify-between py-2">
        <div className="w-[180px]">
          <img src={Logo} alt="Logo" className="w-full" />
        </div>

        <nav className="w-1/2">
          <ul className="flex justify-between items-center text-lg">
            <li className="font-bold">Inicio</li>
            <li>Sobre mí</li>
            <li>Servicios</li>
            <li>Testimonios</li>
            <li className=" bg-CyanMain text-white py-2 px-3 rounded-full">
              Contacto
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
