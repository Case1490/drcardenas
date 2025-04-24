import ContactForm from "../components/ContactForm";
import DataOfDoctor from "../components/DataOfDoctor";

const Contact = () => {
  return (
    <>
      {/* BACKGROUND OF CONTACT */}
      <div className="bg-contact relative">
        <div className="overlay"></div>
        <div className="h-full flex items-center justify-center text-center text-white z-30 relative">
          <div>
            <h1 className=" text-4xl sm:text-5xl uppercase font-bold mb-4">
              Contáctame
            </h1>
            <p className=" w-[90%] sm:w-[70%] m-auto text-lg">
              ¿Tienes preguntas o necesitas una consulta? Estoy aquí para
              ayudarte. Completa el formulario y me pondré en contacto contigo
              lo antes posible. Cada caso es único y merece una atención
              personalizada.
            </p>
          </div>
        </div>
      </div>

      {/* FORM CONTACT */}
      <ContactForm />
      {/* DATA DOCTOR */}
      <DataOfDoctor />
    </>
  );
};

export default Contact;
