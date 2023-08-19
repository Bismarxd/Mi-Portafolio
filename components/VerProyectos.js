import Image from "next/image";

//nextlink
import Link from "next/link";

//iconos
import { HiArrowRight } from "react-icons/hi2";

const VerProyectos = () => {
  return (
    <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:gap-x-32 mx-auto xl:mx-0 z-50 mt-5">
      {/* <Link
        href={"/proyectos"}
        className="relative w-[120px] h-[120px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={100}
          height={100}
          alt="imagen proyectos"
          className="animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]"
        />

        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link> */}

      {/* Boton par ver proyectos en notion */}
      <div className="flex flex-col gap-y-4">
        <Link
          href={
            "https://woolly-insect-655.notion.site/f09d0381126240858f4b1b9eb0b58548?v=d5253d87dfb54321b4797be622ce905d&pvs=4"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="btn" type="button">
            <strong>VER TODOS MIS PROYECTOS EN NOTION</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>

        <Link
          href={
            "/sobremi"
          }
        >
          <button class="btn" type="button">
            <strong>HABILIDADES</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerProyectos;
