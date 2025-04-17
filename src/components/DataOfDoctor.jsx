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
      <div className="w-[400px]">
        <img src={ContactImage} alt="Dr Cardenas" className="w-full" />
      </div>

      {/* CARD DATA */}
      <div className=" shadow-2xl p-6 rounded-xl w-1/2 bg-CyanMain text-white">
        <h1 className="text-3xl font-bold mb-3 uppercase">Ponte en contacto</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut!
          elit. Eaque, ut!
        </p>
        {/* FIRST TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <FaLocationDot size={35} />
          </div>
          <div>
            <h1 className="text-xl  font-bold mb-1">Head office</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        {/* SECOND TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <MdEmail size={35} />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Email Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>

        {/* THIRD TARGET */}
        <div className="flex items-center gap-x-5 mt-8">
          <div className=" bg-PinkMain flex items-center justify-center text-white rounded-full p-3">
            <FaPhoneAlt size={35} />
          </div>
          <div>
            <h1 className="text-xl font-bold mb-1">Phone Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className=" mt-8">
          <h1 className="text-2xl font-bold">
            Síguenos en nuestras redes sociales:
          </h1>

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
        {/* END CARD DATA */}
      </div>
    </div>
  );
};

export default DataOfDoctor;
