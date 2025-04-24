import ServicesPhoto from "../assets/fotos/CALADO 6.png";
import CardService from "../components/CardService";
import ButtonService from "../components/ButtonService";

// IMPORT PHOTOS OF SERVICES
import Image1 from "../assets/servicios/1.jpg";
import Image2 from "../assets/servicios/2.jpg";
import Image3 from "../assets/servicios/3.jpg";
import Image4 from "../assets/servicios/4.jpg";
import Image5 from "../assets/servicios/5.jpg";
import Image6 from "../assets/servicios/6.jpg";
import Image7 from "../assets/servicios/7.jpg";
import Image8 from "../assets/servicios/8.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  // Configuración para la detección de vista
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: centralRef, inView: centralInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-5/6 m-auto" id="servicios">
      <div className="py-8 text-center">
        {/* TÍTULO ANIMADO */}
        <motion.h1
          ref={titleRef}
          className="text-PurpleMain font-bold text-6xl mb-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          Mis Servicios
        </motion.h1>

        {/* PÁRRAFO ANIMADO */}
        <motion.p
          ref={paragraphRef}
          className="w-5/6 m-auto text-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: paragraphInView ? 1 : 0,
            y: paragraphInView ? 0 : 100,
          }}
          transition={{ duration: 1 }}
        >
          Aquí encontrarás un enfoque dedicado al tratamiento quirúrgico del
          cáncer, con compromiso, precisión y humanidad. Cada servicio está
          pensado para acompañarte en tu camino hacia la recuperación con la
          mejor atención médica.
        </motion.p>

        <div className="flex flex-col md:flex-row mt-20 mb-10 justify-between items-center">
          {/* FIRST COLUMN */}
          <motion.div
            className="space-y-10"
            ref={leftRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <CardService
              image={Image1}
              service="Diagnóstico integral de neoplasias ginecológicas"
            />
            <CardService
              image={Image2}
              service="Cirugía oncológica ginecológica especializada"
            />
            <CardService
              image={Image3}
              service="Cirugías mínimamente invasivas"
            />
            <CardService
              image={Image4}
              service="Cirugía profiláctica en pacientes de alto riesgo"
            />
          </motion.div>

          {/* PHOTO CENTRAL */}
          <motion.div
            className="w-0 lg:w-[400px]"
            ref={centralRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: centralInView ? 1 : 0,
              y: centralInView ? 0 : 100,
            }}
            transition={{ duration: 1 }}
          >
            <img
              src={ServicesPhoto}
              alt="Dr Cardenas"
              className="w-full mask-image"
            />
          </motion.div>

          {/* SECOND COLUMN */}
          <motion.div
            className="space-y-10"
            ref={rightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            <CardService
              image={Image5}
              service="Cirugía reconstructiva y preservación de fertilidad"
            />
            <CardService
              image={Image6}
              service="Planificación de tratamiento multidisciplinario"
            />
            <CardService
              image={Image7}
              service="Seguimiento postoperatorio y control de recaídas"
            />
            <CardService
              image={Image8}
              service="Acompañamiento emocional y educativo al paciente"
            />
          </motion.div>
        </div>

        <ButtonService />
      </div>
    </div>
  );
};

export default Services;
