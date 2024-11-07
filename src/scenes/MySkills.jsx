import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export default function MySkills() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-2 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-16 md:mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            In my roles as a Backend Software Developer, I bring expertise in
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-12 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 h-[300px] w-full"
                src="/skills.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/skills.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="sm:grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-0 gap-16">
        <motion.div
          className=" mt-10 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-30">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                JavaScript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiJavascript className="h-20 w-32" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" mt-10  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">PHP</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <FaPhp className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" mt-10  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">HTML5</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <AiFillHtml5 alt="" className="h-16 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">CSS3</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <IoLogoCss3 alt="" className="h-20 w-32" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">05</p>
              <p className="font-playfair font-semibold text-3xl mt-3">React</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] flex justify-center items-center">
              <FaReact className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">06</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Laravel
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <FaLaravel alt="" className="h-20 w-20" />
            </div>
          </div>
          {/* <p className="mt-5">
            I am skilled in a range of technologies that enable me to develop
            dynamic and responsive user interfaces. While my primary expertise
            lies in Java, Integrations and Android development, I have also
            worked with Angular to build websites.
          </p> */}
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2  rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">07</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Node js
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <FaNodeJs alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2  rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">08</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Mysql</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMysql alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">09</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Postgresql
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiPostgresql className="h-20 w-20" />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">10</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Mongodb
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMongodb className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">11</p>
              <p className="font-playfair font-semibold text-3xl mt-3">Redux</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiRedux className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">13</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Git & Github
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <img src="/merge.png" alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">14</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tailwind Css & Bootstrap
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiTailwindcss className="h-20 w-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
