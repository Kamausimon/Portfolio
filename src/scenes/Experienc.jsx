import React from "react";
import { motion } from "framer-motion";

export default function Experienc({ text, company, title }) {
    // Split the text into an array of paragraphs
    const paragraphs = text.match( /[^\.!\?]+[\.!\?]+/g);
    return (
    <motion.div
      className={`p-3 rounded-md cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500 md:h-[350px]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h3 className="text-2xl bg-slate rounded-sm text-center  font-semibold">
        {company}
      </h3>
      <h4 className="text-center text-2xl text-deep-blue font-[500] mb-4">{title}</h4>
      {/* <p className="text-md mt-4">{text}</p> */}
      <ul className="list-disc pl-6">
        {paragraphs.map((paragraph, index) => (
          <li key={index} className="text-md mt-2">
            {paragraph}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
