import Doctor from "../assets/fotos/CALADO 8 copia.png";
import SocialNetworks from "../components/SocialNetworks";

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

  // Determinar la clase dinámica basada en el tamaño de la pantalla
  const imageClass = isMobile ? "mask-image" : "shadow_image";

  return (
    <div className="bgCardenas pt-40 lg:pt-20">
      <div className="w-5/6 m-auto">
        <div className="flex flex-col space-y-14 lg:flex-row items-center justify-between">
          {/* first column */}
          <div className=" w-[90%] lg:w-1/2 text-center lg:text-start">
            <h1 className="text-5xl font-bold mb-3 text-PurpleMain">
              Tu salud en manos seguras, con compromiso y dedicación
            </h1>
            <p className="font-bold">
              Atención especializada en cirugía oncológica, con un enfoque
              humano y profesional para cuidar lo más importante: tu salud
            </p>
            <div className="flex justify-center lg:justify-start items-center mt-8 mb-14 space-x-4">
              <a className="bg-CyanMain cursor-pointer hover:bg-CyanMain2 py-2 px-4 rounded-xl text-white font-bold text-lg uppercase">
                Contáctanos
              </a>
              <a className="border-CyanMain cursor-pointer hover:bg-slate-100 text-CyanMain font-bold border-2 py-2 px-4 rounded-xl text-lg uppercase">
                Ver Más
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-10 text-CyanMain">
              <div className="font-bold text-center">
                <h1 className="text-4xl">50k+</h1>
                <p>Pacientes satisfechos</p>
              </div>
              <div className=" font-bold text-center">
                <h1 className="text-4xl">10+</h1>
                <p>Años de experiencia</p>
              </div>
              <div className="font-bold text-center">
                <h1 className="text-4xl">98%</h1>
                <p>Efectividad</p>
              </div>
            </div>
          </div>
          {/* Second column */}
          <div className="  w-[400px] mr-20">
            <img
              src={Doctor}
              alt="Dr Cardenas"
              className={`${imageClass} w-full lg:scale-125 scale-10 -mt-24`}
            />
          </div>

          {/* Third Column */}
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};

export default WelcomePresentation;
