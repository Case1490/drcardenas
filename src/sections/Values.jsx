import ValueCard from "../components/ValueCard";
import { MdGrade } from "react-icons/md";
import { FaStopwatch20 } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Values = () => {
  return (
    <div className="w-5/6 m-auto my-16">
      <h1 className="text-center text-5xl font-bold text-PurpleMain mb-2">
        Mis valores
      </h1>
      <div className="border-2 border-PurpleMain w-24 m-auto"></div>

      <div className="flex items-center justify-center gap-x-6 my-8">
        <ValueCard title="calidad" icon={MdGrade} />
        <ValueCard title="puntualidad" icon={FaStopwatch20} />
        <ValueCard title="innovación" icon={FaLightbulb} />
      </div>
    </div>
  );
};

export default Values;
