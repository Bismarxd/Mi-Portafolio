import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//componentes
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import AnimacionLetras from "@/components/AnimacionLetras";

//framermotion
import { easeInOut, motion } from "framer-motion";

//variantes
import { fadeIn } from "@/variants";
import Link from "next/link";
import SobreMi from "./sobremi";
import Servicios from "./servicios";

export default function Home() {
  const [palabras, setPalabras] = useState(["WEB", "FRONTEND", "BACKEND"]);

  const scrollaOtraPagina = () => {
    const otherPageElement = document.getElementById("other-page"); // ID de la sección en la otra página
    if (otherPageElement) {
      otherPageElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-scroll relative h-screen">
      <div className="bg-slate-950 h-full w-full ">
        <div className="w-full h-full">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto mb-56">
            {/* titulo */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[2.5rem] leading-tight md:text-[3.5rem] md:leading-[1.3] mb-8 font-semibold"
            >
              BISMARCK MAYTA{" "}
            </motion.h1>
            <h3 className="text-3xl md:text-5xl">
              DESAROLLADOR{" "}
              <span className="relative text-cyan-500 text-4xl md:text-3xl">
                <AnimacionLetras palabras={palabras} />
              </span>
            </h3>

            {/* boton */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* Imagen */}
        <div className="w-full h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge "></div>
          {/* Particulas */}
          <ParticlesContainer />
          {/* Avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[400px] max-h-[400px] absolute bottom-20 lg:right-[10%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>

    </div>
  );
}
