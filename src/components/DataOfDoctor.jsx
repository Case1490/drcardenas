import ContactImage from "../assets/fotos/CALADO 11.png";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

// ICONS RED SOCIAL
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

const DataOfDoctor = () => {
  return (
    <div className=" w-5/6 m-auto flex items-center justify-center">
      <div className="w-0 lg:w-[400px]">
        <img src={ContactImage} alt="Dr Cardenas" className="w-full" />
      </div>

      {/* CARD DATA */}
      <div className=" shadow-2xl p-6 rounded-xl mb-5 lg:mb-0 w-full lg:w-1/2 bg-CyanMain text-white">
        <h1 className="text-3xl font-bold mb-3 uppercase text-center lg:text-start">
          Contáctame
        </h1>
        <p className="text-center lg:text-start">
          ¡Hola! ¿Tienes preguntas o comentarios? Estoy aquí para ayudarte.
          ¡Estoy aquí para ayudarte!
        </p>
        {/* FIRST TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <FaLocationDot size={35} />
          </div>
          <div>
            <h1 className="text-xl  font-bold mb-1">Head office</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        {/* SECOND TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <MdEmail size={35} />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">
              Envíame un correo electrónico
            </h1>
            <p>fcescalante@gmail.com</p>
          </div>
        </div>

        {/* THIRD TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <FaPhoneAlt size={35} />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Llámame</h1>
            <p>+51 944 542 129</p>
          </div>
        </div>
        <div className=" mt-8 text-center lg:text-start">
          <h1 className="text-2xl font-bold">
            Síguenos en nuestras redes sociales:
          </h1>

          <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
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
        {/* END CARD DATA */}
      </div>
    </div>
  );
};

export default DataOfDoctor;
