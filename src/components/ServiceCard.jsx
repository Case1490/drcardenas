import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white p-4 rounded-xl mt-8 flex flex-col items-center justify-around h-[400px] w-[400px] shadow-xl">
      <div className="w-[160px]">
        <img src={image} alt={title} className="w-full" />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl text-Cyan font-bold">{title}</h1>
        <p>{description}</p>
      </div>

      <Link to={link} className="bg-Beige text-white p-3 rounded-lg">
        Más Información
      </Link>
    </div>
  );
};

export default ServiceCard;
