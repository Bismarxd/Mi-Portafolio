//links
import Link from "next/link";

//iconos
import {
  RiNotionFill,
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {

  //Whatsap
  const numero = '69933860'
  const numeroEncriptado = encodeURIComponent(numero);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${numeroEncriptado}`;

  //Messenger
  const paginaId = "bismarck.maytatintaya.79";
  const mesengerLink = `https://m.me/${paginaId}`;

  return (
    <div className="flex items-center gap-x-5 text-4xl ">
      <Link
        href={mesengerLink}
        target="_blank"
        className="hover:bg-blue-600 text-white font-bold  rounded transition duration-300 transform hover:translate-y-1 hover:scale-105"
      >
        <RiFacebookBoxLine />
      </Link>

      <Link
        href={whatsappLink}
        target="_blank"
        className=" hover:bg-green-600 text-white font-bold rounded transition duration-300 transform hover:translate-y-1 hover:scale-105"
      >
        <RiWhatsappLine />
      </Link>

      <Link
        href={"https://github.com/Bismarxd?tab=repositories"}
        className=" hover:bg-gray-800 text-white font-bold rounded transition duration-300 transform hover:translate-y-1 hover:scale-105"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={
          "https://woolly-insect-655.notion.site/f09d0381126240858f4b1b9eb0b58548?v=d5253d87dfb54321b4797be622ce905d&pvs=4"
        }
        target="_blank"
        className=" hover:bg-slate-300 text-white font-bold rounded transition duration-300 transform hover:translate-y-1 hover:scale-105 z-50"
      >
        <RiNotionFill />
      </Link>
    </div>
  );
};

export default Socials;
