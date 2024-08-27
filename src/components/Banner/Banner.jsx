import React from "react";
import headphone4 from "../../assets/headphone4.png";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { fadeUp } from "../Services/Services";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 gap-12">
          <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={headphone4}
              alt="Headphone"
              className="w-[300px] md:w-[700px]" // Fixed missing space in class names
            />
          </div>
          {/* Banner Text Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones with the Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
              >
                With two processors controlling eight microphones, Auto NC
                Optimiser for automatically optimising noise cancelling based on
                your wearing conditions and environment.
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999, // Corrected 'zIndexx' to 'zIndex'
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(1.3)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#5dB18c] bg-[#fff] text-dark px-6 py-2 rounded-md hover:bg-[#5dB18c] hover:text-white"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
