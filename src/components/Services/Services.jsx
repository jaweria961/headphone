import React from "react";
import "./services.css";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
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

const Services = () => {
  return (
    <>
      <section
        className="min-h-screen bg-brandDark 
      text-white font-varela
      text-center py-20 px-8 xl:px-0 flex flex-col justify-center"
      >
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          what we&apos;re offering
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-indigo-600 ml-3 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <motion.h1
          variants={fadeUp(0.2)}
          className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug"
        >
          Services Built Specifically for your Business
        </motion.h1>
        <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-52">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Explore the <br />
                1000X series
              </h2>
              <p className="text-gray-400">
                The 1000X series rewrites the rules for distraction-free
                listening. Enjoy the best noise cancelling1 and unrivalled sound
                quality that lets you hear every detail of your favourite
                artist&apos;s music.
              </p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                Massive bass. <br /> Ultimate Vibe
              </h2>
              <p className="text-gray-400">
                Feel like you&apos;ve dived into the front row of the concert,
                and turn the moment on with the ULT POWER SOUND™ series2. Built
                for music lovers, it produces powerful deep sound designed to
                make your heart tremble. Prepare to feel the bass.
              </p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative">
            <div className="circle"></div>
            <div className="relative lg:pr-44">
              <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                INTO YOUR <br /> ZONE
              </h2>
              <p className="text-gray-400">
                Sharpen your senses and prepare for battle. Our INZONE gaming
                headsets help you hear more clearly and react faster for
                invincible gaming.
              </p>
            </div>
          </div>
          <div className="card bg-gray-800 p-10 relative hover:text-brandDark">
            <div className="circle"></div>
            <div className="relative lg:pl-48">
              <h2 className="capitalize text-white hover:text-brandDark mb-4 text-2xl xl:text-3xl">
                YOUR WORLD
                <br /> NOTHING ELSE.
              </h2>
              <p className="text-gray-400">
                With two processors controlling eight microphones, Auto NC
                Optimiser for automatically optimising noise cancelling based on
                your wearing conditions and environment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
