import ValueCard from "../components/ValueCard";
import { MdGrade } from "react-icons/md";
import { FaStopwatch20 } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Values = () => {
  return (
    <div className="w-5/6 m-auto my-16">
      {/* Título animado desde abajo */}
      <motion.h1
        className="text-center text-4xl sm:text-5xl font-bold text-PurpleMain mb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Mis valores
      </motion.h1>

      {/* Línea decorativa */}
      <motion.div
        className="border-2 border-PurpleMain w-24 m-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      {/* Tarjetas animadas */}
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-y-6 lg:gap-y-0 justify-center gap-x-6 my-8">
        {/* Desde la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ValueCard
            title="calidad"
            paragraph="Me esfuerzo por ofrecer una atención médica de excelencia, basada en evidencia científica y con un enfoque humano. Cada decisión que tomo está guiada por el compromiso de brindar el mejor resultado posible, cuidando cada detalle del tratamiento para garantizar seguridad, precisión y bienestar al paciente.

"
            icon={MdGrade}
          />
        </motion.div>

        {/* Desde abajo */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ValueCard
            title="puntualidad"
            paragraph="Valoro profundamente el tiempo de mis pacientes. La puntualidad no solo demuestra respeto, sino que también permite diagnósticos y tratamientos oportunos. Cumplir con cada cita garantiza una atención continua, organizada y eficiente, factores clave para lograr los mejores resultados en el tratamiento oncológico."
            icon={FaStopwatch20}
          />
        </motion.div>

        {/* Desde la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ValueCard
            title="innovación"
            paragraph="Estoy en constante actualización y aprendizaje, incorporando técnicas quirúrgicas avanzadas y nuevos enfoques terapéuticos. La innovación no solo mejora los resultados, también abre nuevas oportunidades para enfrentar el cáncer con más eficacia, menos riesgos y una recuperación más rápida para mis pacientes."
            icon={FaLightbulb}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Values;
