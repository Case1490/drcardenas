export default function NewsletterSignup() {
  return (
    <div className=" text-white p-6 rounded-lg w-[80%] sm:w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Suscríbete</h2>
      <p className="text-sm mb-4">
        Obtenga novedades exclusivas suscribiéndose a nuestro boletín.
      </p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className="flex-1 px-4 py-2 rounded-full text-black placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-PinkMain hover:bg-CyanMain text-white px-5 py-2 rounded-full flex items-center justify-center gap-2"
        >
          Suscribirse
        </button>
      </form>
    </div>
  );
}
