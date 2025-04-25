import PhotoDrCardenas from "../assets/fotos/CALADO 7.png";
import CirclePurple from "../assets/circulo.png";

// IMPORT OF ICONS
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { IoHappy } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutOfMe = () => {
  const dataItems = [
    {
      icon: <BsFileEarmarkMedicalFill size={25} />,
      text: "Más de 10 años de experiencia",
    },
    {
      icon: <FaBriefcaseMedical size={25} />,
      text: "Especialista en cirugía oncológica",
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

  // Hook para detectar cuando la sección entra en vista
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa cuando se ve por primera vez
    threshold: 0.2, // Detectar cuando el 20% de la sección esté visible
  });

  return (
    <div
      className="w-5/6 m-auto flex flex-col xl:flex-row items-center justify-around py-14"
      ref={ref}
      id="sobre_mi"
    >
      {/* Columna Izquierda - Imagen */}
      <motion.div
        className="relative rounded-full overflow-hidden w-[450px] h-[390px] sm:w-[590px] sm:h-[500px] order-2 xl:order-1"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      {/* Columna Derecha - Texto */}
      <motion.div
        className="w-[90%] xl:w-1/2 order-1 xl:order-2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Entre bisturís y esperanzas la trayectoria quirúrgica de un héroe
          contra el cáncer
        </h1>
        <p className="text-justify">
          Médico especialista en cirugía oncológica, con amplia experiencia en
          el diagnóstico y tratamiento de neoplasias malignas ginecológicas.
          Enfoque innovador y personalizado para mejorar la calidad de vida de
          los pacientes. Apasionado por mejorar la calidad de vida de los
          pacientes mediante enfoques quirúrgicos innovadores y tratamientos
          personalizados con la atención médica excepcional y tratamientos
          vanguardistas a pacientes. Formado en el reconocido Instituto Nacional
          de Enfermedades Neoplásicas en Perú, con capacitación en ginecología
          oncológica y en técnicas de cirugía mínimamente invasiva. Con una
          maestría en medicina y actualmente cursando un MBA, fusiono mis
          habilidades clínicas y de liderazgo para impulsar el progreso en mi
          campo laboral. Como médico asistente, enfoco mi trabajo en
          colaboración interdisciplinaria, investigacion y la busqueda constate
          de avances médicos que marquen la diferencia en la vida de mis
          pacientes y la comunidad.
        </p>

        <div className="mt-8 grid md:grid-cols-2 place-content-center place-items-center gap-4">
          {dataItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 border py-2 px-2 rounded-xl shadow-xl w-full md:w-[290px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="bg-CyanMain text-white p-4 rounded-full">
                {item.icon}
              </div>
              <div>
                <p className="text-lg">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutOfMe;
