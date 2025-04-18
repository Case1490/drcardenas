import ServicesPhoto from "../assets/fotos/CALADO 6.png";
import CardService from "../components/CardService";
import ButtonService from "../components/ButtonService";

// IMPORT PHOTOS OF SERVICES
import Image1 from "../assets/servicios/1.jpg";
import Image2 from "../assets/servicios/2.jpg";
import Image3 from "../assets/servicios/3.jpg";
import Image4 from "../assets/servicios/4.jpg";
import Image5 from "../assets/servicios/5.jpg";
import Image6 from "../assets/servicios/6.jpg";
import Image7 from "../assets/servicios/7.jpg";
import Image8 from "../assets/servicios/8.jpg";

const Services = () => {
  return (
    <div className="w-5/6 m-auto">
      <div className="py-8 text-center">
        <h1 className="text-PurpleMain font-bold text-6xl mb-4">
          Mis Servicios
        </h1>
        <p className="w-5/6 m-auto text-lg">
          Aquí encontrarás un enfoque dedicado al tratamiento quirúrgico del
          cáncer, con compromiso, precisión y humanidad. Cada servicio está
          pensado para acompañarte en tu camino hacia la recuperación con la
          mejor atención médica posible.
        </p>

        <div className="flex flex-col md:flex-row mt-20 mb-10 justify-between items-center">
          {/* FIRST COLUMN */}
          <div className="space-y-10">
            <CardService
              image={Image1}
              service="Diagnóstico integral de neoplasias ginecológicas"
            />
            <CardService
              image={Image2}
              service="Cirugía oncológica ginecológica especializada"
            />
            <CardService
              image={Image3}
              service="Cirugías mínimamente invasivas"
            />
            <CardService
              image={Image4}
              service="Cirugía profiláctica en pacientes de alto riesgo"
            />
          </div>
          {/* PHOTO CENTRAL */}
          <div className="w-0 lg:w-[400px]">
            <img
              src={ServicesPhoto}
              alt="Dr Cardenas"
              className="w-full mask-image"
            />
          </div>
          {/* SECOND COLUMN */}
          <div className="space-y-10">
            <CardService
              image={Image5}
              service="Cirugía reconstructiva y preservación de fertilidad"
            />
            <CardService
              image={Image6}
              service="Planificación de tratamiento multidisciplinario"
            />
            <CardService
              image={Image7}
              service="Seguimiento postoperatorio y control de recaídas"
            />
            <CardService
              image={Image8}
              service="Acompañamiento emocional y educativo al paciente"
            />
          </div>
        </div>
        <ButtonService />
      </div>
    </div>
  );
};

export default Services;
