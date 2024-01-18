import { motion } from "framer-motion";

const textAnimations = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};
const sliderAnimations = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

function Herosection() {
  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden relative">
      <div className="max-w-screen-lg h-full m-auto">
        <motion.div
          variants={textAnimations}
          initial="initial"
          animate="animate"
          className="h-full flex flex-col justify-center gap-10 w-1/2"
        >
          <motion.h1
            variants={textAnimations}
            className="text-3xl text-purple-500 tracking-wide"
          >
            Anumah Paul Omeiza
          </motion.h1>
          <motion.h2
            variants={textAnimations}
            className="text-7xl text-slate-200"
          >
            3D Modeler and Product Designer
          </motion.h2>
          <motion.div variants={textAnimations} className="flex gap-5">
            <motion.button
              variants={textAnimations}
              className="font-light p-5 border border-white bg-transparent"
            >
              see the lastest works
            </motion.button>
            <motion.button
              variants={textAnimations}
              className="font-light p-5 border border-white bg-white text-black"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textAnimations}
            animate="scrollBtn"
            src="/public/assets/scroll.png"
            alt="scroll"
            className="w-12"
          />
        </motion.div>
      </div>
      <motion.div
        className="whitespace-nowrap -bottom-32 text-[50vh] absolute text-white/5 w-[50%] font-bold"
        variants={sliderAnimations}
        initial="initial"
        animate="animate"
      >
        3D graphic designer space
      </motion.div>
      <div>
        <img
          src="/public/assets/hero.png"
          alt="hero"
          className="h-full absolute top-0 right-0"
        />
      </div>
    </div>
  );
}

export default Herosection;
