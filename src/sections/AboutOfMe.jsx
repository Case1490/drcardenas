import PhotoDrCardenas from "../assets/fotos/CALADO 7.png";
import CirclePurple from "../assets/circulo.png";

// IMPORT OF ICONS
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoHappy } from "react-icons/io5";

const AboutOfMe = () => {
  const dataItems = [
    {
      icon: <BsFileEarmarkMedicalFill size={25} />,
      text: "Más 20 años de experiencia quirúrgica",
    },
    {
      icon: <FaBriefcaseMedical size={25} />,
      text: "Especialista en oncología quirúrgica",
    },
    {
      icon: <RiTeamFill size={25} />,
      text: "Trabajo en equipo multidisciplinario",
    },
    {
      icon: <IoHappy size={25} />,
      text: "Cientos de pacientes recuperados",
    },
  ];

  return (
    <div className="w-5/6 m-auto flex flex-col xl:flex-row items-center justify-around py-14">
      <div className="relative rounded-full overflow-hidden w-[450px] h-[390px] sm:w-[590px] sm:h-[500px] order-2 xl:order-1">
        <img
          src={CirclePurple}
          alt=""
          className="w-full h-[450px] sm:h-[590px] absolute inset-0"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[220px] sm:w-[300px]">
          <img
            src={PhotoDrCardenas}
            alt="Dr Cardenas"
            className="w-full shadow_image"
          />
        </div>
      </div>
      <div className=" w-[90%] xl:w-1/2 order-1 xl:order-2">
        <h1 className="text-3xl font-bold mb-2">
          Entre Tijeras y Esperanzas: La Trayectoria Quirúrgica de un Héroe
          Contra el Cáncer
        </h1>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolorum vero iure. Voluptas in iusto, dolorem magni harum commodi
          libero dicta accusantium nihil labore voluptates. Earum quaerat rem
          voluptates reprehenderit. Voluptas in iusto, dolorem magni harum
          commodi libero dicta accusantium nihil labore voluptates. Earum
          quaerat rem voluptates reprehenderit.
        </p>

        <div className="mt-8 grid md:grid-cols-2 place-content-center place-items-center gap-4">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 border py-2 px-2 rounded-xl shadow-xl w-full md:w-[290px]"
            >
              <div className="bg-CyanMain text-white p-4 rounded-full">
                {item.icon}
              </div>
              <div>
                <p className=" text-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOfMe;
