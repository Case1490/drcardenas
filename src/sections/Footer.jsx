import Logo from "../assets/logo_blanco.png";

// ICONS RED SOCIAL
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import NewsletterSignup from "../components/NewsletterSignup";

const Footer = () => {
  return (
    <div className=" bg-PurpleMain text-white">
      <div className="w-5/6 m-auto py-5">
        <div className="flex justify-between items-center mb-2">
          <div className="w-[240px]">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>
          <div className="flex mt-4 space-x-4">
            <div className="bg-PinkMain rounded-full p-2">
              <FaFacebookF size={25} />
            </div>
            <div className="bg-PinkMain rounded-full p-2">
              <AiFillInstagram size={25} />
            </div>
            <div className="bg-PinkMain rounded-full p-2">
              <AiOutlineTikTok size={25} />
            </div>
            <div className="bg-PinkMain rounded-full p-2">
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-between py-5">
          <div className="flex-1 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            unde, debitis aperiam sequi maiores vitae sunt eum quasi aliquam,
            illo, at labore ab autem. Laudantium atque accusantium facere.
            Accusantium, quasi. Laudantium atque accusantium facere.
            Accusantium, quasi.
          </div>

          <div className="flex-1 text-center">
            <ul className=" space-y-4">
              <li>Inicio</li>
              <li>Sobre mí</li>
              <li>Servicios</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className="flex-1">
            <NewsletterSignup />
          </div>
        </div>

        <hr />

        <div className="flex items-center justify-between pt-4">
          <p>Copyright &copy; Dr Cardenas, Todos los derechos reservados</p>

          <div>
            <ul className="flex items-center space-x-6">
              <li>Nuestros términos</li>
              <li>Politica de privacidad</li>
              <li>Cookie Policity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
