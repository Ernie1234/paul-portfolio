import { motion } from "framer-motion";
import SideBar from "./SideBar";

function Navbar() {
  return (
    <div className="h-24 ">
      {/* Sidebar */}
      <SideBar />
      <div className=" m-auto flex items-center max-w-screen-xl justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-3xl"
        >
          Paul Hive
        </motion.span>
        <div className="flex gap-5">
          <a href="#">
            <img
              src="/assets/facebook.png"
              alt="facebook"
              className="w-16 h-16"
            />
          </a>
          <a href="#">
            <img
              src="/assets/dribbble.png"
              alt="dribbble"
              className="w-16 h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
