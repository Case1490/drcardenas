const CardService = ({ image, service }) => {
  return (
    <div className="relative">
      <div className="w-[300px]">
        <img src={image} alt="Prueba" className="w-full" />
      </div>
      <p className="absolute bottom-4 right-[-20px] bg-CyanMain font-bold text-xl py-1 px-2 rounded-lg text-white">
        {service}
      </p>
    </div>
  );
};

export default CardService;
