import Logo from "../assets/logo_blanco.png";

import { useState } from "react";

// ICONS RED SOCIAL
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import NewsletterSignup from "../components/NewsletterSignup";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    if (type === "terms") {
      setModalContent("terms");
    } else if (type === "privacy") {
      setModalContent("privacy");
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className=" bg-PurpleMain text-white">
      <div className="w-5/6 m-auto py-5">
        <div className="flex flex-col space-y-8 md:space-y-0 sm:flex-row justify-between items-center mb-4 md:mb-0">
          <div className="w-[160px]">
            <a href="#inicio">
              <img src={Logo} alt="Logo" className="w-full" />
            </a>
          </div>
          <div className="flex mt-4 space-x-4">
            <div className="bg-PinkMain hover:bg-PurpleMain cursor-pointer rounded-full p-2">
              <a
                href="https://www.facebook.com/profile.php?id=61570671051936&rdid=Lw4wwqM4yCfOMZD2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14c7XR8yjS%2F"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={25} />
              </a>
            </div>
            <div className="bg-PinkMain hover:bg-PurpleMain cursor-pointer rounded-full p-2">
              <a
                href="https://www.instagram.com/cirujano_fernandocardenas"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={25} />
              </a>
            </div>
            <div className="bg-PinkMain hover:bg-PurpleMain cursor-pointer rounded-full p-2">
              <a
                href="https://www.tiktok.com/@dr..fernando.c?_t=ZM-8vWq4BiXyRp&_r=1"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTikTok size={25} />
              </a>
            </div>
            <div className="bg-PinkMain hover:bg-PurpleMain cursor-pointer rounded-full p-2">
              <a
                href="https://www.linkedin.com/in/fernando-c%C3%A1rdenas-escalante-755227274/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-between py-5">
          <div className="flex-1">
            Comprometido con el bienestar de mis pacientes, ofrezco atención
            oncológica con calidad, calidez y responsabilidad. Juntos,
            enfrentamos el cáncer con esperanza, ciencia, innovación y humanidad
            en cada paso del tratamiento. Estoy aquí para ayudarte siempre.
          </div>

          <div className="flex-1 text-center">
            <ul className="space-y-4 flex flex-col items-center">
              <a
                className="inline-block hover:text-PinkMain cursor-pointer"
                href="#inicio"
              >
                Inicio
              </a>
              <a
                className="inline-block hover:text-PinkMain cursor-pointer"
                href="#sobre_mi"
              >
                Sobre mí
              </a>
              <a
                className="inline-block hover:text-PinkMain cursor-pointer"
                href="#servicios"
              >
                Servicios
              </a>
              <a
                href="https://wa.me/51944542129?text=Hola,%20quisiera%20hacer%20una%20consulta%20sobre%20una%20atención%20oncológica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-PinkMain cursor-pointer"
              >
                Contacto
              </a>
            </ul>
          </div>

          <div className="sm:flex-1">
            <NewsletterSignup />
          </div>
        </div>

        <hr />

        <div className="flex flex-col text-center sm:text-start space-y-6 sm:space-y-0 sm:flex-row items-center justify-between pt-4">
          <p>Copyright &copy; Dr Cardenas, Todos los derechos reservados</p>

          <div>
            <ul className="flex items-center space-x-6">
              <li
                onClick={() => openModal("terms")}
                className="hover:text-PinkMain cursor-pointer"
              >
                Términos y Condiciones
              </li>
              <li
                onClick={() => openModal("privacy")}
                className="hover:text-PinkMain cursor-pointer"
              >
                Política de privacidad
              </li>
            </ul>
          </div>
        </div>
      </div>
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              {modalContent === "terms"
                ? "Términos y Condiciones"
                : "Política de Privacidad"}
            </h2>
            <p className="text-sm leading-6">
              {modalContent === "terms" ? (
                <>
                  Este sitio web es informativo. Al utilizarlo, aceptas no
                  realizar mal uso del contenido ni compartir información sin
                  autorización. Todos los derechos reservados.
                </>
              ) : (
                <>
                  Este sitio respeta tu privacidad. La información que ingresas
                  en el formulario solo será utilizada para responder tu
                  consulta médica y no será compartida con terceros.
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
