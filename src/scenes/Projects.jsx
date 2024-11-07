import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import Img from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img4 from "../assets/img3.png";

import Project from "./Class";

const projdetails = [
  {
    title: "Task management App",
    description:
      "Task and project management app built using Laravel blade and php",
    image: Img,
    githubLink: "https://github.com/Kamausimon/Tasker",
    liveLink: "https://tasker.co.ke/",
  },
  {
    title: "Blog App",
    description: "A blog application built using Laravel Blade and PHP",
    image: Img2,
    githubLink: "https://github.com/Kamausimon/blog",
    liveLink: "https://thecryingwall.co.ke/",
  },
  {
    title: "Ecommerce App",
    description: "An Ecommerce application built using Laravel Blade and PHP",
    image: Img4,
    githubLink: "https://github.com/Kamausimon/Ecommerce",
    liveLink: "https://shope.africa/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className=" pb-48 box-border pt-12 md:pt-0">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Grab a sense of my skills and experience, as well as the kinds of
          projects I have worked on in the past.These projects provide a glimpse
          into my experience in developing diverse web and mobile applications.
          Each project showcases my skills in frontend and backend technologies,
          user interface design, and collaborating effectively within a team.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projdetails.map((proj) => (
            <div key={proj.title} className="">
              <Project
                title={proj.title}
                Imgg={proj.image}
                description={proj.description}
                githubLink={proj.githubLink}
                liveLink={proj.liveLink}
              />
            </div>
          ))}
          <div
            className="flex flex-col justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
            <button className="rounded-r-sm bg-gradient-rainblue py-0.5 px-0.5 text-2xl">
              <div className="rounded-md text-red transition duration-500 bg-deep-blue w-full h-full flex items-center justify-center font-playfair ">
                <a className="p-2" href="https://github.com/Kamausimon">
                  More Projects{" "}
                </a>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
