import ImageOfMe from "../assets/acercademi.png";
import FacebookIcon from "../icons/FacebookIcon";
import GmailIcon from "../icons/GmailIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import PhoneIcon from "../icons/PhoneIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import MediaSocials from "./MediaSocials";

const InfoOfMe = () => {
  return (
    <div className="w-[80%] m-auto my-20 flex justify-center gap-8">
      <div className="w-[30%]">
        <img src={ImageOfMe} alt="" className="w-full  opacityImage" />
      </div>

      <div className="text-center space-y-4 w-[70%] flex flex-col items-center justify-center gap-y-4">
        <div className=" space-y-2">
          <h1 className="text-5xl font-bold text-Purple">
            Dr. Fernando Cárdenas
          </h1>
          <p className="text-Cyan text-xl">Ginecólogo Oncólogo Cirujano</p>
        </div>
        <p className="text-xl">
          Médico especializado en cirugía oncológica con más de 10 años de
          experiencia en el diagnóstico y tratamiento de neoplasias malignas,
          incluyendo ginecología oncológica. Comprometido con mejorar la calidad
          de vida de los pacientes mediante técnicas quirúrgicas innovadoras y
          tratamientos personalizados. Con experiencia en docencia,
          investigación clínica y colaboración multidisciplinaria para avanzar
          en las opciones terapéuticas en oncología.
        </p>

        <div className=" space-y-2 my-4 w-[95%] ">
          <p className="flex items-center gap-x-2">
            <GmailIcon /> fcescalante@gmail.com
          </p>
          <p className="flex items-center gap-x-2">
            <PhoneIcon /> +51 944537341
          </p>
        </div>

        {/* <div className="flex items-center mt-4 gap-x-4">
          <FacebookIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
          <InstagramIcon />
        </div> */}
        <div>
          <MediaSocials />
        </div>
      </div>
    </div>
  );
};

export default InfoOfMe;
