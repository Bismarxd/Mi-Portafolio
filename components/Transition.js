//framermotion
import { motion } from "framer-motion";


const transicionVariantes = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x:'0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    x: ['0%', '100%'],
  }
}

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-950"
        variants={transicionVariantes}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-900"
        variants={transicionVariantes}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-800"
        variants={transicionVariantes}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
