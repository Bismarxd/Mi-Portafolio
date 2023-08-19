import { useState } from "react";

//importar los iconos
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVite, TbBrandTailwind } from "react-icons/tb";
import { FaNode, FaPhp, FaVuejs } from "react-icons/fa";
import { DiSass, DiGulp } from "react-icons/di";
import {
  SiRemix,
  SiAstro,
  SiRedux,
  SiStrapi,
  SiFirebase,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import { FiArrowRightCircle } from "react-icons/fi";

//Componentes
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import AnimacionLetras from "@/components/AnimacionLetras";

// framermotion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

//contador
import CountUp from "react-countup";

//  datos sobre Mi
const datos = [
  {
    title: "HABILIDADES",
    info: [
      {
        title: "FRONTEND",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css3" />,
          <TbBrandTailwind key="tailwind" />,
          <DiSass key="sass" />,
          <DiGulp key="gulp" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <TbBrandNextjs key="nextjs" />,
          <TbBrandVite key="vite" />,
          <SiRemix key="remix" />,
          <SiAstro key="astro" />,
          <SiRedux key="redux" />,
          <FaVuejs key="vue" />,
        ],
      },
      {
        title: "BACKEND",
        icons: [
          <FaNode key="node" />,
          <SiExpress key="express" />,
          <FaPhp key="php" />,
          <SiStrapi key="strapi" />,
          <SiFirebase key="firebase" />,
          <SiMysql key="mysql" />,
          <SiMongodb key="mongo" />,
          <SiSequelize key="sequelize" />,
          <SiPrisma key="prisma" />,
          <SiPostman key="postman" />,
        ],
      },
    ],
  },
  {
    title: "EXPERIENCIA",
    info: [
      {
        title:
          "Desarrollé una plataforma de comercio electrónico que permite a los usuarios explorar y comprar productos y poder contactar con la tienda",
        stage: "nextjs,node",
      },
      {
        title:
          "Desarolle una innovadora aplicación de toma de pedidos basada en tabletas diseñada para optimizar el proceso de pedidos en restaurantes.",
        stage: "nextjs, prisma",
      },
      {
        title:
          "Desarolle una plataforma social dedicada a los entusiastas de los videojuegos, utilizando Next.js para el frontend y Firebase como plataforma de backend. Esta red social ofrece a los usuarios un espacio para conectarse, compartir experiencias, formar grupos y discutir sobre videojuegos y temas relacionados. ",
        stage: "nextjs, firebase",
      },
      {
        title:
          "Desarolle una plataforma en línea dedicada a la venta de propiedades inmobiliarias, brindando a los usuarios la posibilidad de explorar, comparar y comprar viviendas y propiedades comerciales.",
        stage: "node, express",
      },
      {
        title:
          "Desarrollé una aplicación web personalizada para una peluquería, ofreciendo a los clientes la posibilidad de programar citas y reservar servicios de manera conveniente en línea.",
        stage: "php",
      },
      {
        title:
          "Desarrollé una página web completa para un evento especial, que pueda brindar a los organizadores y participantes una plataforma integral para gestionar la inscripción, acceder a información del evento y realizar pagos en línea de manera segura. ",
        stage: "php",
      },
    ],
  },
  {
    title: "EDUCACION",
    info: [
      {
        title: "COLEGIO MARIEN GARTEN",
        stage: "BACHILLER",
      },
      {
        title: "LICENCIATURA EN INFORMATICA (UNIVERSIDAD MAYOR DE SAN ANDRES)",
        stage: "EGRESADO",
      },
      {
        title: "CURSO DE DESAROLLO WEB COMPLETO",
        stage: "UDEMY",
      },
      {
        title: "CURSO DE JAVASCRIPT LA GUIA COMPLETA",
        stage: "UDEMY",
      },
      {
        title: "CURSO DE REACT",
        stage: "UDEMY",
      },
      {
        title: "CURSO DE NODEJS Y EXPRESS",
        stage: "UDEMY",
      },
    ],
  },
];

const SobreMi = () => {
  const [index, setIndex] = useState(0);
  const [palabras, setPalabras] = useState([
    "HABILIDADES",
    "EXPERIENCIA",
    "EDUCACIÓN",
  ]);

  return (
    <div className="h-full py-32 text-center xl:text-left z-50">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hiden"
        className="hidden xl:flex absolute bottom-0 top-12 -left-[350px] transition-opacity duration-100 opacity-2 z-30"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-5">
        {/* texto */}
        <div className="flex-1 flex flex-col justify-center p-5">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hiden"
            className="h2 text-sm md:text-4xl font-extrabold z-50"
          >
            <AnimacionLetras palabras={palabras} />
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="leading-[1.8] text-[10px] md:text-xs text-white font-light max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:ml-20 z-50"
          >
            Soy un apasionado del desarrollo web autodidacta comprensión de tecnologías fullstack, destacando en la creación de proyectos utilizando herramientas como React, Node.js y PHP, etc. Mi enfoque autodirigido y compromiso con la mejora continua me han permitido adquirir conocimientos prácticos y habilidades valiosas.
          </motion.p>

          {/* contador */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hiden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 z-50"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experiencia */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 md:ml-12">
                <div className="text-2xl xl:text-4xl font-extrabold text-cyan-600 mb-2">
                  <CountUp start={0} end={1} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Año de Experiencia
                </div>
              </div>

              {/* Proyectos */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cyan-600 mb-2">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Proyectos Finalizados
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* informacion */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hiden"
          className="flex flex-col w-full xl:max-w-[50%] h-[430px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-xs md:text-base -mt-10 z-50">
            {datos.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-teal-600 after:w-full after:bg-teal-600 after:transition-all after:duration-all"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0   z-50`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="bg-slate-600 p-1 md:p-4 xl:py-2 flex flex-col gap-y-0 md:gap-y-2 xl:gap-y-4 items-center xl:items-start rounded-xl overflow-y-scroll mb-32 md:mb-5 md:mr-10 ">
            {datos[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="md:flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white z-50"
                >
                  <div className="font-light md:mb-0 text-xs">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="grid grid-cols-7 md:grid-cols-5 md:gap-3 gap-4 m-5 ">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-3xl md:text-5xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SobreMi;
