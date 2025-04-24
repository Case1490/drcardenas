import Doctor from "../assets/fotos/CALADO 8 copia.png";
import SocialNetworks from "../components/SocialNetworks";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WelcomePresentation = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Función para verificar el tamaño de la pantalla y actualizar el estado
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  // Agregar un event listener para manejar cambios en el tamaño de la pantalla
  useEffect(() => {
    handleResize(); // Verificar el tamaño inicial al cargar el componente

    window.addEventListener("resize", handleResize); // Agregar listener para resize

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animación para los números
  const numberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  // Determinar la clase dinámica basada en el tamaño de la pantalla
  const imageClass = isMobile ? "mask-image" : "shadow_image";

  return (
    <div className="bgCardenas pt-40 lg:pt-36" id="inicio">
      <div className="w-5/6 m-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-14 lg:space-y-0">
          {/* Columna Izquierda */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-3 text-PurpleMain">
              Tu salud en manos seguras, con compromiso y dedicación
            </h1>
            <p className="font-bold">
              Atención especializada en cirugía oncológica, con un enfoque
              humano y profesional para cuidar lo más importante: tu salud
            </p>
            <div className="flex justify-center lg:justify-start items-center mt-8 mb-14 space-x-4">
              <motion.a
                href="https://wa.me/51944542129?text=Hola,%20quisiera%20hacer%20una%20consulta%20sobre%20una%20atención%20oncológica."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-CyanMain cursor-pointer hover:bg-CyanMain2 py-2 px-4 rounded-xl text-white font-bold text-lg uppercase"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contáctanos
              </motion.a>
              <motion.a
                className="border-CyanMain cursor-pointer hover:bg-slate-100 text-CyanMain font-bold border-2 py-2 px-4 rounded-xl text-lg uppercase"
                href="#sobre_mi"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Ver Más
              </motion.a>
            </div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-10 text-CyanMain"
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="font-bold text-center">
                <motion.h1 className="text-4xl" variants={numberVariants}>
                  50k+
                </motion.h1>
                <motion.p variants={numberVariants}>
                  Pacientes satisfechos
                </motion.p>
              </div>
              <div className="font-bold text-center">
                <motion.h1 className="text-4xl" variants={numberVariants}>
                  10+
                </motion.h1>
                <motion.p variants={numberVariants}>
                  Años de experiencia
                </motion.p>
              </div>
              <div className="font-bold text-center">
                <motion.h1 className="text-4xl" variants={numberVariants}>
                  98%
                </motion.h1>
                <motion.p variants={numberVariants}>Efectividad</motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            className=" w-[400px] mr-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Doctor}
              alt="Dr Cardenas"
              className={`${imageClass} w-full lg:scale-125 scale-10 -mt-24`}
            />
          </motion.div>

          {/* Tercera Columna */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SocialNetworks />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePresentation;
