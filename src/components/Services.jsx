import { Link } from "react-router-dom";
import Medicina from "../assets/servicios/cirugia.png";
import Diagnostico from "../assets/servicios/historial-medico.png";
import Tratamiento from "../assets/servicios/equipo-medico.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // Datos de los servicios
  const services = [
    {
      image: Medicina,
      title: "Cirugía Oncológica",
      description:
        "Procedimientos para extirpar tumores y tejidos afectados, con fines curativos o paliativos según el caso.",
      link: "/servicios",
    },
    {
      image: Diagnostico,
      title: "Diagnóstico y Evaluación",
      description:
        "Evaluación clínica, imágenes y biopsias para identificar el tipo, etapa y extensión del cáncer.",
      link: "/servicios",
    },
    {
      image: Tratamiento,
      title: "Tratamiento Quirúrgico",
      description:
        "Realización de cirugías para extirpar tumores, ya sea con fines curativos o paliativos.",
      link: "/servicios",
    },
  ];

  return (
    <div className="background-image my-10 py-14 ">
      <div className="w-[80%] m-auto container-image_services">
        <h1 className="text-center text-5xl font-bold text-white">
          Mis Servicios
        </h1>
        <div className="flex items-center gap-4 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        <Link
          to="/servicios"
          className="bg-Cyan text-white rounded-lg p-3 mt-8 block w-[220px] text-center font-bold m-auto shadow-xl"
        >
          Ver todos los servicios
        </Link>
      </div>
    </div>
  );
};

export default Services;
