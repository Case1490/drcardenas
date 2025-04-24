import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineInsights } from "react-icons/md";

import DoctorMision from "../assets/fotos/CALADO 3.png";

const MissionVision = () => {
  return (
    <div className="relative flex flex-col lg:flex-row my-10 overflow-y-hidden">
      {/* Imagen centrada */}
      <img
        src={DoctorMision}
        alt="Doctor Misión"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 lg:w-[200px] z-10"
      />

      {/* Misión */}
      <div className="mission-container">
        <div className="content text-center lg:text-start">
          <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
            <GiStairsGoal size={40} />
            <h1 className="text-4xl font-bold">Misión</h1>
          </div>
          <p className="text-lg">
            Mi misión como cirujano oncólogo es acompañar al paciente en todo
            momento, no solo durante el diagnóstico, sino también antes, durante
            y después del tratamiento. Mi compromiso es brindar un
            acompañamiento integral, tanto médico como humano, que le permita
            sentirse apoyado, comprendido y cuidado en cada etapa de su lucha
            contra el cáncer.
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="vision-container">
        <div className="content text-center lg:text-end">
          <div className="flex items-center justify-center lg:justify-end gap-1 mb-4">
            <MdOutlineInsights size={40} />
            <h1 className="text-4xl font-bold">Visión</h1>
          </div>
          <p className="text-lg">
            Mi visión es vivir en un mundo donde el cáncer no sea sinónimo de
            muerte, sino una enfermedad que se puede enfrentar con esperanza,
            tratamiento oportuno y acompañamiento humano. Aspiro a contribuir a
            una sociedad donde cada paciente tenga acceso a una atención
            oncológica integral que le permita vivir con dignidad y calidad de
            vida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
