import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
//Imagen
import Image from "next/image";

//importar stylos del swyper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

//importar required modules
import { Navigation, Pagination } from "swiper/modules";

//iconos
import { BsArrowRight } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

// data
const proyectos = {
  slides: [
    {
      images: [
        {
          title: "Venta de Propiedades",
          path: "/proyecto_1.png",
          tech: "Node, MySQl, PUG, HTML",
          url: "https://github.com/Bismarxd/Venta-de-Propiedades",
        },
      ],
    },
    {
      images: [
        {
          title: "RestaurantApp",
          path: "/proyecto_2.png",
          tech: "React, Nextjs, Tailwind, Prisma, MySql",
          url: "https://github.com/Bismarxd/Reastauran-App-FullStack",
        },
      ],
    },
    {
      images: [
        {
          title: "Plataforma de Trabajo",
          path: "/proyecto_3.png",
          tech: "Node, mongo, handlebars",
          url: "https://github.com/Bismarxd/Plataforma-de-Empleo-para-Desarolladores",
        },
      ],
    },
    {
      images: [
        {
          title: "Administracion de Peluqueria",
          path: "/proyecto_4.png",
          tech: "Php, sass, js ",
          url: "https://github.com/Bismarxd/AppSalon",
        },
      ],
    },
    {
      images: [
        {
          title: "Tienda Online de VideoJuegos",
          path: "/proyecto_5.png",
          tech: "Css, React, NextJs, Strapi",
          url: "https://github.com/Bismarxd/Tienda-de-Videojuegos-FrontEnd-Nextjs",
        },
      ],
    },
    {
      images: [
        {
          title: "Blog Gamer",
          path: "/proyecto_6.png",
          tech: "NextJs, Firebase",
          url: "https://github.com/Bismarxd/Blog-Gamer/tree/main",
        },
      ],
    },
    {
      images: [
        {
          title: "CAMPAMENTO WEB",
          path: "/proyecto_7.png",
          tech: "php, sass, js",
          url: "https://github.com/Bismarxd/Campamento-Web",
        },
        
      ],
    },
    {
      images: [
       
        {
          title: "TIENDA DE MASCOTAS",
          path: "/proyecto_8.png",
          tech: "NextJs",
          url: "https://github.com/Bismarxd/Tienda-de-Mascotas/tree/main",
        },
      ],
    },
  ],
};

const ProyectSlides = () => {
  return (
    <Swiper
      navigation={{
        clickable: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[180px] sm:h-[400px] swiper-container"
      slidesPerView={1} // Mostrar solo un elemento en dispositivos móviles
      breakpoints={{
        // Ajustar la cantidad de elementos a medida que aumenta el tamaño de la pantalla
        768: {
          slidesPerView: 2, // Por ejemplo, mostrar 2 elementos en pantallas a partir de 768px de ancho
          spaceBetween: 15,
        },

        // Agregar más breakpoints según sea necesario
      }}
    >
      {proyectos.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 gap-4 cursor-pointer z-50">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* imagen */}
                      <Image
                        src={image.path}
                        width={1000}
                        height={1000}
                        alt=""
                        className="-mt-10 md:mt-0 md:h-[20rem]"
                      />
                      {/* fondo gradient */}
                      <Link target="_blank" href={image.url}>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#015590] to-[#039E92] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      </Link>
                      {/* titulo */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-16 group-hover:xl:-translate-y-16 transition-all duration-300 ml-5 z-50">
                        <div className="font-black uppercase text-lg md:text-2xl">
                          {image.title}
                        </div>
                        <div className="flex items-center gap-x-0 md:gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* titulo parte1 */}
                          <div className="delay-100">VER</div>
                          {/* titulo parte2 */}
                          <div className="md:translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROYECTO
                          </div>
                          {/* icono */}
                          <div className="text-4xl md:text-8xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <Link target="_blank" href={image.url}>
                              <span className="inline-block transition-transform transform-gpu hover:animate-bounce">
                                <RiGithubLine className=" hover:text-blue-500" />
                              </span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="font-bold font-serif">
                            Tecnologias Usadas:
                          </div>
                          <div>{image.tech}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProyectSlides;
