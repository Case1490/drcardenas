import ServicesPhoto from "../assets/fotos/CALADO 6.png";
import CardService from "../components/CardService";

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

        <div className="flex my-20 justify-between items-center">
          {/* FIRST COLUMN */}
          <div className="space-y-10">
            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </div>
          {/* PHOTO CENTRAL */}
          <div className="w-[400px]">
            <img
              src={ServicesPhoto}
              alt="Dr Cardenas"
              className="w-full mask-image"
            />
          </div>
          {/* SECOND COLUMN */}
          <div className="space-y-10">
            <CardService />
            <CardService />
            <CardService />
            <CardService />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
