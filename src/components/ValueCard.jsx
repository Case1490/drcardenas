import { MdGrade } from "react-icons/md";

const ValueCard = ({ title }) => {
  return (
    <div className=" p-4 rounded-xl shadow-xl border-b-2 border-l-2 border-CyanMain">
      <div className="flex items-center gap-x-2 mb-4 text-CyanMain">
        <MdGrade size={40} />
        <h1 className="text-2xl uppercase font-bold">{title}</h1>
      </div>

      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit
        iure quod esse non at. Deserunt labore laboriosam adipisci omnis
        sapiente iure, rerum fuga culpa, et aspernatur ipsum similique
        laudantium.
      </p>
    </div>
  );
};

export default ValueCard;
