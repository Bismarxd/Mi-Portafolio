//componentes
import Circles from "@/components/Circles";

//iconos
import {BsArrowRight} from 'react-icons/bs'

//framer
import {motion} from 'framer-motion'

//variantes
import { fadeIn } from "@/variants"; 

const Contacto = () => {
  return (
    <div className="h-screen mt-0 ">
      <div className="container mx-auto py-16 text-center xl:text-left flex items-center justify-center h-full">
        {/* texto y formulario */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* texto */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-5 md:mb-12"
          >
            Contactarme
          </motion.h2>
          {/* formulario */}
          <motion.form
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-2 md:gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 z-50 text-sm md:text-lg">
              <input type="text" placeholder="nombre" className="input" />
              <input type="email" placeholder="e-mail" className="input" />
            </div>
            <input type="text" placeholder="Asunto" className="input" />
            <textarea placeholder="Mensaje" className="textarea"></textarea>
            <button className="boton rounded-full border border-white/50 max-w-[120px] md:max-w-[170px] px-4 md:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-x-green-950 group text-xs md:text-lg">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;