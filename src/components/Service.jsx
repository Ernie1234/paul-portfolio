import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1,
    },
  },
};

function Service() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport
      className="bg-gradient-to-r from-slate-900 to-slate-800 h-full flex flex-col justify-between "
    >
      <motion.div className="flex-1 flex self-end gap-5 items-center">
        <p className="font-extralight text-xl text-slate-500 text-right">
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className="w-96 border-0 border-t-2 border-slate-600" />
      </motion.div>
      <motion.div className="flex-2 flex flex-col items-center">
        <div className="flex gap-5 items-center">
          <img
            src="/assets/people.webp"
            alt="people image"
            className="w-64 h-20 rounded-sm md:rounded-md lg:rounded-lg object-cover"
          />
          <h1 className="text-6xl font-thin">
            <b className="hover:text-yellow-400 font-bold">Unique</b> Ideas and
            designs
          </h1>
        </div>
        <div className="title">
          <h1 className="text-6xl font-thin">
            <b className="hover:text-yellow-400 font-bold">For your</b>{" "}
            Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="flex-2 flex max-w-7xl m-auto py-5">
        <motion.div
          className="p-8 border border-1 border-gray-500 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="capitalize text-slate-300">branding</h2>
          <p className="py-2 font-extralight text-base leading-relaxed text-justify text-slate-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quidem laboriosam, corporis aliquam voluptatem rem facere quo!
            Eveniet aliquid labore non optio id fugiat neque placeat eius. Non,
            ratione.
          </p>
          <button className="p-2 mt-4 font-semibold text-slate-900 bg-orange-300 border-0 cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="p-8 border border-1 border-gray-500 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="capitalize text-slate-300">branding</h2>
          <p className="py-2 font-extralight text-base leading-relaxed text-justify text-slate-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quidem laboriosam, corporis aliquam voluptatem rem facere quo!
            Eveniet aliquid labore non optio id fugiat neque placeat eius. Non,
            ratione.
          </p>
          <button className="p-2 mt-4 font-semibold text-slate-900 bg-orange-300 border-0 cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="p-8 border border-1 border-gray-500 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="capitalize text-slate-300">branding</h2>
          <p className="py-2 font-extralight text-base leading-relaxed text-justify text-slate-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quidem laboriosam, corporis aliquam voluptatem rem facere quo!
            Eveniet aliquid labore non optio id fugiat neque placeat eius. Non,
            ratione.
          </p>
          <button className="p-2 mt-4 font-semibold text-slate-900 bg-orange-300 border-0 cursor-pointer">
            Go
          </button>
        </motion.div>
        <motion.div
          className="p-8 border border-1 border-gray-500 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="capitalize text-slate-300">branding</h2>
          <p className="py-2 font-extralight text-base leading-relaxed text-justify text-slate-500 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quidem laboriosam, corporis aliquam voluptatem rem facere quo!
            Eveniet aliquid labore non optio id fugiat neque placeat eius. Non,
            ratione.
          </p>
          <button className="p-2 mt-4 font-semibold text-slate-900 bg-orange-300 border-0 cursor-pointer">
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Service;
