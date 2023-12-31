import {Sora} from '@next/font/google'

//configuracion de las fuentes
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

//Componentes
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import SobreMi from '@/pages/sobremi';
import Home from '@/pages';

const Layout = ({children}) => {
  return (
    <div
      className={`w-full h-screen overflow-hidden text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
 
};

export default Layout;
