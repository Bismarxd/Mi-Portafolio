import { Swiper, SwiperSlide } from "swiper/react";

//importar stylos del swyper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//Importar iconos
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//importar required modules
import { FreeMode, Pagination } from "swiper/modules";

// data
const datosServicios = [
  {
    icon: <RxCrop />,
    title: "Desarollo de Sitios Web",
    description:
      "Creación de sitios web profesionales y personalizados",
  },
  {
    icon: <RxPencil2 />,
    title: "Desarollo de Aplicaciones Web",
    description:
      "Creación de aplicaciones web funcionales y eficientes",
  },
  {
    icon: <RxDesktop />,
    title: "Integración de Sistemas",
    description: "Conexión y sincronización de sistemas.",
  },
  {
    icon: <RxReader />,
    title: "Desarollo de APIS",
    description:
      "Creación de interfaces programáticas para permitir la comunicación entre aplicaciones y sistemas",
  },
  {
    icon: <RxRocket />,
    title: "Mantenimiento y Soporte",
    description:
      "Servicio continuo para asegurar el funcionamiento óptimo de sistemas, aplicaciones o sitios web",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {datosServicios.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-slate-500 h-max rounded-lg px-6 py-2 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
              {/* icono */}
              <div className="text-4xl text-cyan-700 mb-4">{item.icon}</div>
              {/* titulo */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* flecha */}
              <div className="text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-teal-800 transition-all duration-300 z-50" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
