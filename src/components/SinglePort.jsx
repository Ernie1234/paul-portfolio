import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";

function SinglePort({ title, desc, img }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const Y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-[100vh] snap-center">
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-7xl m-auto h-full flex justify-center items-center gap-12 ">
          <div className="flex-1 h-1/2" ref={ref}>
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
          <motion.div className="flex-1 flex  flex-col gap-7" style={{ Y }}>
            <h2 className="text-7xl text-slate-200">{title}</h2>
            <p className="text-slate-500 text-xl">{desc}</p>
            <button className="bg-yellow-400 w-48 p-2 rounded-md border-0 text-slate-900 font-semibold">
              View
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

SinglePort.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.string,
};

export default SinglePort;
