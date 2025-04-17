const Map = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15612.729580859608!2d-77.03724823575332!3d-11.961870356015956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfe82220e677%3A0x3d0784ac1096bc92!2sCapilla%20San%20Juan%20Apostol%20y%20Misionero!5e0!3m2!1ses!2spe!4v1744922334319!5m2!1ses!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
