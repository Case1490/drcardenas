import ImageReasons from "../assets/fotos/CALADO 15.png";

const Reasons = () => {
  const razones = [
    "Evaluación precisa del tipo y estadio del cáncer.",
    "Planificación quirúrgica basada en evidencia científica.",
    "Trabajo en equipo multidisciplinario.",
    "Toma de decisiones centradas en la seguridad del paciente.",
    "Enfoque en la preservación de funciones vitales.",
    "Amplia experiencia en cirugías complejas.",
    "Seguimiento postoperatorio especializado.",
    "Mejores tasas de recuperación y pronóstico.",
  ];

  return (
    <div className=" bg-PinkLow">
      <div className="w-[90%] m-auto flex justify-between items-center min-h-screen px-8">
        <div className="w-[400px]">
          <img
            src={ImageReasons}
            alt="Dr Cardenas"
            className="w-full mask-image"
          />
        </div>
        <div className="w-full md:w-1/2 py-12">
          <h1 className="text-5xl font-bold text-PurpleMain mb-6">
            ¿Por qué elegirme como tu cirujano oncólogo?
          </h1>
          <p className="mb-8 text-lg">
            Elegir a un cirujano oncólogo significa confiar en un especialista
            altamente capacitado para tratar tumores con precisión, experiencia
            y enfoque integral.
          </p>

          <div className="relative border-l-4 border-PurpleMain pl-6 space-y-8">
            {razones.map((razon, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 bg-PurpleMain rounded-full border-4 border-white"></div>
                <p className=" bg-CyanMain text-white py-1 px-2 rounded-2xl font-bold text-base">
                  {razon}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
