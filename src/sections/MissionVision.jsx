import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineInsights } from "react-icons/md";

import DoctorMision from "../assets/fotos/CALADO 3.png";

const MissionVision = () => {
  return (
    <div className="relative flex my-10 overflow-y-hidden">
      {/* Imagen centrada */}
      <img
        src={DoctorMision}
        alt="Doctor Misión"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] z-10"
      />

      {/* Misión */}
      <div className="mission-container">
        <div className="content">
          <div className="flex items-center gap-1 mb-4">
            <GiStairsGoal size={40} />
            <h1 className="text-4xl font-bold">Misión</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ut eligendi repellendus perferendis maiores accusantium ipsa ad
            distinctio, quod veniam recusandae possimus nemo hic aut, eum quia
            eius quaerat vero! repellendus perferendis maiores accusantium ipsa
            ad distinctio, quod veniam recusandae possimus nemo hic aut, eum
            quia eius quaerat vero! quod veniam recusandae possimus nemo hic
            aut, eum quia eius quaerat vero!
          </p>
        </div>
      </div>

      {/* Visión */}
      <div className="vision-container">
        <div className="content text-end">
          <div className="flex items-center justify-end gap-1 mb-4">
            <MdOutlineInsights size={40} />
            <h1 className="text-4xl font-bold">Visión</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ut eligendi repellendus perferendis maiores accusantium ipsa ad
            distinctio, quod veniam recusandae possimus nemo hic aut, eum quia
            eius quaerat vero! repellendus perferendis maiores accusantium ipsa
            ad distinctio, quod veniam recusandae possimus nemo hic aut, eum
            quia eius quaerat vero! quod veniam recusandae possimus nemo hic
            aut, eum quia eius quaerat vero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
