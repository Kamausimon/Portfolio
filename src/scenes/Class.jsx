import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Project({
  title,
  Imgg,
  description,
  githubLink,
  liveLink,
}) {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative m-2">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <div className="flex gap-6 mt-8">
          <button className="rounded-md bg-gradient-rainblue  text-2xl">
            <div className="rounded-md text-red transition duration-500 bg-deep-blue w-full h-full flex items-center justify-center font-playfair ">
              <a className="p-2 " href={liveLink}>
                View{" "}
              </a>
            </div>
          </button>
        </div>
      </div>
      <img src={Imgg} alt={projectTitle} className="h-[300px]" />
    </motion.div>
  );
}
