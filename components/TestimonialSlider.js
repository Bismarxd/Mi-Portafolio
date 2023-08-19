// testimonial datos
const testimonialDatos = [
  {
    image: "/testimonio1.png",
    name: "Erick Cartman",
    position: "Cliente",
    message:
      "¡Mira, maldita sea, déjame contarte sobre este jodido servicio de desarrollo web que encontré, hombre! ¡Es tan genial que me hace sentir como si estuviera nadando en un mar de Cheesy Poofs!",
  },
  {
    image: "/testimonio3.png",
    name: "Craig Tucker",
    position: "Cliente",
    message:
      "Mira, no voy a darle muchas vueltas. Encontré este servicio de desarrollo web que resultó estar bien. No fue una gran sorpresa ni nada, simplemente cumplieron con lo que dijeron.",
  },
  {
    image: "/testimonio2.png",
    name: "Kenny McCormick",
    position: "Cliente",
    message:
      "Murmurando mientras lucha por hacerse entender Mmmmmmm... mmmm mmmmm mmmmmm. (Oye, mira... encontré este servicio de desarollo web... mmm... y está genial, ¿sabes? Mmmmmmm...) Continúa murmurando ininteligiblemente",
  },
];

//importar slider
import { Swiper, SwiperSlide } from "swiper/react";
//Imagen
import Image from "next/image";

//importar stylos del swyper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//importar required modules
import { Navigation, Pagination } from "swiper/modules";

//iconos
import {FaQuoteLeft} from 'react-icons/fa'



const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={{
        clickable: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] w-[95%]"
    >
      {testimonialDatos.map((persona, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-2 md:px-16 md:-mt-20">
              {/* avatar, nombre , posicion */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={persona.image} width={100} height={100} alt="" />
                </div>
                {/* nombre */}
                <div className="text-lg">{persona.name}</div>
                {/* posicion */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {persona.position}
                </div>
              </div>
              {/* mensaje */}
              <div className="bg-teal-900/50 flex-1 flex flex-col justify-center before:w-[3px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[250px] relative xl:pl-20 xl:pb-10 xl:mr-10 overflow-scroll xl:overflow-hidden">
                {/* icono */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* mensaje */}
                <div className="xl:text-lg text-center md:text-left">
                  {persona.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
