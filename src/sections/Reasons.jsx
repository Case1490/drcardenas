import ImageReasons from "../assets/fotos/CALADO 152.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Reasons = () => {
  const razones = [
    "Trato tumores ginecológicos.",
    "Planificación quirúrgica basada en evidencia científica.",
    "Trabajo en equipo multidisciplinario.",
    "Toma de decisiones centradas en la seguridad del paciente.",
    "Enfoque en la preservación de funciones vitales.",
    "Amplia experiencia en cirugías complejas.",
    "Seguimiento postoperatorio especializado.",
    "Mejores tasas de recuperación y pronóstico.",
  ];

  return (
    <div className="bg-reasons">
      <div className="w-[90%] m-auto flex flex-col lg:flex-row justify-center space-x-10 items-center min-h-screen px-8">
        {/* Contenedor del texto - desde la izquierda */}
        <motion.div
          className="w-full lg:w-1/2 py-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-PurpleMain mb-6">
            ¿Por qué elegirme como tu cirujano oncólogo?
          </h1>
          <p className="mb-8 text-lg text-slate-600 font-bold">
            Elegir a un cirujano oncólogo significa confiar en un especialista
            altamente capacitado para tratar tumores con precisión, experiencia
            y enfoque integral.
          </p>

          <div className="relative border-l-4 border-PurpleMain pl-6 space-y-10">
            {razones.map((razon, index) => (
              <div key={index} className="relative space-x-2">
                <FaCheckCircle className="absolute -left-5 top-1 text-PurpleMain text-xl" />
                <p className="bg-CyanMain inline-block text-white py-1 px-2 rounded-2xl font-bold text-base">
                  {razon}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contenedor de la imagen - desde la derecha */}
        <motion.div
          className="w-[400px] -m-24 lg:m-0 lg:w-[500px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ImageReasons}
            alt="Dr Cardenas"
            className="w-full mask-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;
