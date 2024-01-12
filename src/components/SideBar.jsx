import { useState } from "react";
import { motion } from "framer-motion";

import LinkNav from "./LinkNav";
import ToggleBtn from "./ToggleBtn";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px )",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
  },
};

function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white z-50 relative text-black"
    >
      <motion.div
        variants={variants}
        className="top-0 left-0 bottom-0 w-96 fixed bg-white"
      >
        <LinkNav />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
}

export default SideBar;
