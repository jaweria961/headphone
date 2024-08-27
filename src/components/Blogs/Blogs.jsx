import React from "react";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const BlogsData = [
  {
    id: 1,
    title: "Loreum ipsum dolor sit amet consectetur adipsicing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada",
    link: "#",
    img: Blog1,
  },
  {
    id: 2,
    title: "Loreum ipsum dolor sit amet consectetur adipsicing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada",
    link: "#",
    img: Blog2,
  },
  {
    id: 3,
    title: "Loreum ipsum dolor sit amet consectetur adipsicing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada",
    link: "#",
    img: Blog3,
  },
  {
    id: 4,
    title: "Loreum ipsum dolor sit amet consectetur adipsicing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada",
    link: "#",
    img: Blog4,
  },
];
const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "#fff",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -420,
                      mixBlendMode: "difference",
                      scale: 4,
                    }}
                  >
                    <div
                      className="flex flex-col items-center justify-center gap-5 p-5 max-w-[300px]
                  mx-auto shadow-lg rounded-md bg-white
                  hover:translate-y-2 duration-300
                  "
                    >
                      <img src={data.img} alt="" />
                      <div>
                        <h1 className="text-xl font-bold line-clamp-2">
                          {data.title}
                        </h1>
                        <h1 className="line-clamp-2">{data.desc}</h1>
                      </div>
                    </div>
                  </UpdateFollower>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
