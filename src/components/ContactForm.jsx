import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xblodywk");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  // Estados para cada campo
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Resetear los campos cuando se envía correctamente
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        nombre: "",
        apellido: "",
        celular: "",
        email: "",
        asunto: "",
        mensaje: "",
      });

      setShowSuccessMsg(true); // Mostramos el mensaje

      const timeout = setTimeout(() => {
        setShowSuccessMsg(false); // Ocultamos después de 3 segundos
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 -mt-[170px] sm:-mt-[190px] mb-10 sm:mb-0 relative z-40">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Envíame un mensaje
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Apellido"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
            <ValidationError
              prefix="Apellido"
              field="apellido"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Celular
            </label>
            <input
              id="celular"
              name="celular"
              type="text"
              value={formData.celular}
              onChange={handleChange}
              placeholder="Celular"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
            <ValidationError
              prefix="Celular"
              field="celular"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="Asunto"
            className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
          />
          <ValidationError
            prefix="Asunto"
            field="asunto"
            errors={state.errors}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            rows="4"
            className="mt-1 w-full rounded-2xl px-4 py-2 bg-gray-100 text-sm focus:outline-none resize-none"
          ></textarea>
          <ValidationError
            prefix="Mensaje"
            field="mensaje"
            errors={state.errors}
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-CyanMain hover:bg-CyanMain2 text-white rounded-full py-2 font-semibold transition"
          >
            Enviar
          </button>
        </div>

        {/* Mensaje de éxito o error */}
        {showSuccessMsg && (
          <p className="mt-4 text-green-600 text-center font-medium">
            ¡Mensaje enviado correctamente!
          </p>
        )}
        {state.errors?.length > 0 && !state.submitting && (
          <p className="mt-4 text-red-600 text-center font-medium">
            No se pudo enviar el mensaje. Inténtalo de nuevo.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
