import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

//  links
const links = [
  { name: "Inicio", path: "/", icon: <HiHome /> },
  { name: "Habilidades", path: "/sobremi", icon: <HiUser /> },
  { name: "Servicios", path: "/servicios", icon: <HiRectangleGroup /> },
  { name: "Proyectos", path: "/proyectos", icon: <HiViewColumns /> },
  // {
  //   name: "Testimoniales",
  //   path: "/testimoniales",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contacto",
    path: "/contacto",
    icon: <HiEnvelope />,
  },
];

//Links
import Link from "next/link";

//Router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col  items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] top-0 w-full xl:w-16 xl:max-w-md xl:h-screen z-50">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[8rem] xl:h-max py-8 bg-stone-950 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-lg">
        {links.map((link, index) => {
          const paginaActual = link.path === pathname;

          return (
            <Link
              className={`${
                link.path === pathname && "text-cyan-900"
              } relative flex items-center group hover:text-cyan-600 transition-all duration-500`}
              href={link.path}
              key={index}
            >
              <div
                className={`absolute pr-14 right-0 hidden xl:group-hover:flex`}
              >
                <div className="bg-cyan-600 text-white relative flex text-sm items-center p-[1rem] rounded-2xl">
                  <div className="text-1.2rem leading-none font-semibold capitalize">
                    {link.name}
                  </div>

                  <div className="border-solid border-l-cyan-600 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* //icono */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
