const Map = () => {
  return (
    <div className="w-full h-[300px] sm:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.001135443843!2d-77.00451712535016!3d-12.112074443119344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7e681cd940d%3A0xc6385720502d385a!2soficina%20402%2C%20Av.%20Angamos%20Este%202506%2C%20Surquillo%2015036!5e0!3m2!1ses!2spe!4v1745644500973!5m2!1ses!2spe"
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
