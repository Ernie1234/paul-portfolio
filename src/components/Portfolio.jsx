import { useRef } from "react";
import { portfolio } from "../utils/data";
import SinglePort from "./SinglePort";
import { motion, useScroll, useSpring } from "framer-motion";

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-8 text-center text-yellow-400 text-xl">
        <h1 className="text-5xl font-bold capitalize">features works</h1>
        <motion.div
          className="bg-slate-200 h-1 mt-3"
          style={{ scaleX }}
        ></motion.div>
      </div>
      {portfolio.map((item) => (
        <SinglePort
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default Portfolio;
