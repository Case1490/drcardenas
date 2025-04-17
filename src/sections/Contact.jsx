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
            <h1 className="text-5xl uppercase font-bold mb-4">Contáctame</h1>
            <p className=" w-[70%] m-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sapiente assumenda vero dicta debitis velit nulla sunt, reiciendis
              quia iure.
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
