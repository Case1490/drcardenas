const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 -mt-[170px] sm:-mt-[190px] mb-10 sm:mb-0 relative z-40">
      <form className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Envíame un mensaje
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              placeholder="Apellido"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Celular
            </label>
            <input
              type="text"
              placeholder="Celular"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Asunto
          </label>
          <input
            type="text"
            placeholder="Asunto"
            className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 text-sm focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="mt-1 w-full rounded-2xl px-4 py-2 bg-gray-100 text-sm focus:outline-none resize-none"
          ></textarea>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-CyanMain text-white rounded-full py-2 font-semibold transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
