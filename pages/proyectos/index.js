//componetes
import ProyectSlides from "@/components/ProjectSlides";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import VerProyectos from "@/components/VerProyectos";

//framermotion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Proyectos = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* texto */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-xl md:text-5xl xl:mt-12 mt-4"
            >
              Mis Mejores <br /> Proyectos{" "}
              <span className="text-cyan-600">.</span>
            </motion.h2>

            {/* boton */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <VerProyectos />
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%] -mt-5"
          >
            {/* slider */}
            <ProyectSlides />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Proyectos;
