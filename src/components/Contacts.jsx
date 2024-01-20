import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contacts() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqfjsca",
        "template_r4ygdcm",
        formRef.current,
        "PRR1bGz23IfTLrl9Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      className="h-full max-w-7xl m-auto flex items-center gap-12"
      //   variants={variants}
      //   initial="initial"
      //   whileInView="animate"
    >
      <motion.div className="flex-1 flex gap-6 flex-col text-slate-200">
        <motion.h1 className="text-6xl ">Contact Us</motion.h1>
        <motion.div className="item">
          <p>
            We are always here to help you. Feel free to contact us with any
            questions or comments about our products, services, or anything
            else.
          </p>
          <h2 className="text-yellow-400 text-2xl uppercase pt-3">
            our details
          </h2>
        </motion.div>
        <motion.div className="item">
          <h2>Mail</h2>
          <p className="font-light text-slate-400">anumahpaul@gmail.com</p>
        </motion.div>
        <motion.div className="item">
          <h2>Phone</h2>
          <p className="font-light text-slate-400">+234 706 4639 757</p>
        </motion.div>
        <motion.div className="item">
          <h2>Mail</h2>
          <p className="font-light text-slate-400">
            No. 11, Ohueta Obeiba, Kogi State
          </p>
        </motion.div>
      </motion.div>
      <div className="flex-1">
        <form
          className="flex flex-col gap-4"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            className="p-4 bg-transparent border-white border text-slate-300 rounded-md"
            type="text"
            placeholder="Name"
            required
            name="user_name"
          />
          <input
            className="p-4 bg-transparent border-white border text-slate-300 rounded-md"
            type="email"
            placeholder="E-mail"
            required
            name="user_email"
          />
          <textarea
            className="p-4 bg-transparent border-white border text-slate-300 rounded-md"
            rows={6}
            placeholder="Message"
            name="message"
          />
          <button
            type="submit"
            className="p-4 border-none bg-yellow-400 cursor-pointer text-2xl font-medium rounded-md text-slate-900 capitalize"
          >
            submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contacts;
