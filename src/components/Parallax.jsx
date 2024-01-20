import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

function Parallax({ mode }) {
  const nightmode = "bg-gradient-to-r from-slate-700 to-blue-900";
  const lightmode = "bg-gradient-to-r from-yellow-700 to-yellow-950";
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className={` w-full h-full relative flex items-center justify-center overflow-hidden ${
        mode === "service" ? nightmode : lightmode
      }`}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-3xl md:text-7xl text-white font-semibold capitalize"
      >
        {mode}
      </motion.h1>
      <motion.div className="bg-[url('/assets/mountains.png')] bg-cover bg-bottom w-full h-full absolute z-30"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            mode === "service" ? "/assets/planets.png" : "/assets/sun.png"
          })`,
        }}
        className="bg-[url('/assets/planets.png')] bg-cover bg-bottom w-full h-full absolute z-20"
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/assets/stars.png')] bg-cover bg-bottom w-full h-full absolute z-10"
      ></motion.div>
    </motion.div>
  );
}

Parallax.propTypes = {
  mode: PropTypes.string,
};

export default Parallax;
