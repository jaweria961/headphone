import React, { useState } from "react";
import headphone from "../../assets/headphone.png";
import headphone2 from "../../assets/headphone2.png";
import headphone3 from "../../assets/headphone3.png";
import headphone4 from "../../assets/headphone4.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
};

const HeadphoneData = [
  {
    id: 1,
    image: headphone,
    title: "Alpha Pro Gaming Headset Series",
    description:
      "Immerse yourself in the world of gaming with the Alpha Pro Gaming Headset's cutting-edge stereo surround sound technology.",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "white",
    color: "black",
  },
  {
    id: 2,
    image: headphone2,
    title: "Alpha Pro Gaming Headset Series",
    description:
      "Immerse yourself in the world of gaming with the Alpha Pro Gaming Headset's cutting-edge stereo surround sound technology.",
    price: "$100",
    modal: "Modal Red",
    bgColor: "maroon",
  },
  {
    id: 3,
    image: headphone3,
    title: "Alpha Pro Gaming Headset Series",
    description:
      "Immerse yourself in the world of gaming with the Alpha Pro Gaming Headset's cutting-edge stereo surround sound technology.",
    price: "$100",
    modal: "Modal green",
    bgColor: "#5dB18c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 mxl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "#fff",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>

                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "#fff",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.p
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80"
                  >
                    {activeData.description}
                  </motion.p>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    style={{
                      backgroundColor: activeData.bgColor,
                      color: activeData.color,
                    }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy Headphones
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* headphones separator  */}

              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[2px] bg-white"></div>
                <p className="uppercase text-sm">Top headPhones</p>
                <div className="w-20 h-[2px] bg-white"></div>
              </div>
              {/* Headphones list switcher */}
              <AnimatePresence mode="wait">
                <div className="grid grid-cols-3 gap-10">
                  {HeadphoneData.map((item) => {
                    return (
                      <>
                        <UpdateFollower
                          mouseOptions={{
                            backgroundColor: "#fff",
                            zIndex: 9999,
                            followSpeed: 0.5,
                            rotate: -720,
                            mixBlendMode: "difference",
                            scale: 10,
                          }}
                        >
                          <div
                            key={item.id}
                            onClick={() => handleActiveData(item)}
                            className="grid grid-cols-2 place-items-center cursor-pointer"
                          >
                            <div>
                              <img
                                src={item.image}
                                alt=""
                                className="w-[200px]"
                              />
                            </div>
                            <div className="space-y-2">
                              <p className="text-base font-bold">
                                {item.price}
                              </p>
                              <p className="text-xs font-normal text-nowrap">
                                {item.modal}
                              </p>
                            </div>
                          </div>
                        </UpdateFollower>
                      </>
                    );
                  })}
                </div>
              </AnimatePresence>
            </div>
          </div>
          {/* hero Image */}
          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "#fff",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <motion.img
                  key={activeData.id}
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 100,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  src={activeData.image}
                  className="w-[300px md:w-[400px] xl:w-[500px]"
                  alt=""
                />
              </UpdateFollower>
            </AnimatePresence>
          </div>
          {/* WhatsApp Icon */}
        </div>
      </section>
    </>
  );
};

export default Hero;
