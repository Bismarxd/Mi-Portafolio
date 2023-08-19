import '@/styles/globals.css'

//Componentes
import Layout from '@/components/Layout'
import Transition from '@/components/Transition'

//router
import { useRouter } from 'next/router'

//frmer motion
import { AnimatePresence, motion } from 'framer-motion'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <div>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </div>
      </AnimatePresence>
    </Layout>
  );
   
}
