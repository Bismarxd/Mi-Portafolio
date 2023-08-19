//Importar imagenes
import Image from "next/image";

//importar Links
import Link from "next/link";

//componentes
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] z-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          {/* logo */}
          {/* <Link href={'/'}>
          <Image 
            src={'/logo.svg'} 
            width={220} 
            height={48} 
            alt="imagen logo" 
            priority={true}

            />            
        </Link> */}
          <Link href={'/'}>
            <div className="text-white ">
              <p className="font-black text-3xl md:text-6xl mt-10 md:mt-0 z-10">
                PORTAFOLIO
              </p>
            </div>
          </Link>

          {/* Enlaces */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
