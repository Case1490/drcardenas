import Doctor from "../assets/fotos/CALADO 8 copia.png";
import SocialNetworks from "../components/SocialNetworks";

const WelcomePresentation = () => {
  return (
    <div className="bgCardenas pt-12">
      <div className="w-5/6 m-auto">
        <div className="flex items-center justify-between">
          {/* first column */}
          <div className=" w-1/2">
            <h1 className="text-5xl font-bold mb-3 text-PurpleMain">
              Tu salud en manos seguras, con compromiso y dedicación
            </h1>
            <p className="font-bold">
              Atención especializada en cirugía oncológica, con un enfoque
              humano y profesional para cuidar lo más importante: tu salud
            </p>
            <div className="flex items-center mt-8 mb-14 space-x-4">
              <a className="bg-CyanMain py-2 px-4 rounded-xl text-white font-bold text-lg uppercase">
                Contáctanos
              </a>
              <a className="border-CyanMain text-CyanMain font-bold border-2 py-2 px-4 rounded-xl text-lg uppercase">
                Ver Más
              </a>
            </div>

            <div className="flex space-x-10 text-CyanMain">
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
          <div className="w-[400px] mr-20">
            <img
              src={Doctor}
              alt="Dr Cardenas"
              className="shadow_image w-full scale-125"
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
