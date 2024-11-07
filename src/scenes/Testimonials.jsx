import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { experiences } from "../components/Data";
import Experienc from "./Experienc";
export default function Testimonials() {
  // const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`

  return (
    <section id="experience" className="md:pt-32 pt-16 pb-16 md:pb-32">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EXPERIENCE
        </p>
        <LineGradient width="mx-auto md:ml-8 w-2/4" />
        <p className="mt-10 mb-7">
          Throughout my work I have been able to delve in to a variety of
          programming skills.My preferred field is Backend development using PHP
          and laravel, though I also have alot of experience working with Nodejs
          and Express. I have also worked with React to create fullstack
          applications. Overall, all these experiences have helped me to become
          a well rounded developer.
        </p>
      </motion.div>

      <div className="sm:grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.company}
            className={`${index % 2 === 0 ? "bg-red" : "bg-blue"}`}
          >
            <Experienc
              title={experience.company}
              company={experience.title}
              text={experience.text}
            />
          </div>
        ))}

        {/* <motion.div
          className={`bg-yellow p-3 rounded-md`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-lg">
            <p className="font-bold">Moringa School Project | Team lead:</p>
            <ul>
              <li>
              Worked as the team lead of a full stack group project 
              </li>
              <li>Worked to
            implement Agile methodology and kept the team on track for success.
            </li>
            <li>Monitored the team’s progress and ensured the team was on track to
            meet the Sprint goals.
            </li>
            <li>Helped the team to identify areas for
            improvement and encouraged them to continuously improve their
            process and practices.
            </li>
            </ul>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
