import Doctor from "../assets/doctor.png";

const WelcomePage = () => {
  return (
    <div className="fondoWelcomePage flex items-center justify-center">
      <div className="w-[80%] m-auto flex justify-between items-center">
        <div className="w-1/2 space-y-8">
          <h1 className="text-6xl text-white font-bold text-shadow">
            Tu salud en manos expertas
          </h1>
          <p className="text-xl text-white leading-8">
            Bienvenida al consultorio del Dr. Fernando Cárdenas, especializado
            en ginecología oncológica. Nuestro compromiso es ofrecerte
          </p>
          <button class="animated-button">
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Reservar Cita</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>

        <div className="w-[400px]">
          <img src={Doctor} alt="Doctor" className="w-full opacityImage" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
