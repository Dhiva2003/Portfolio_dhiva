import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-center">
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="max-w-2xl mx-auto text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I am Enthusiastic and detail-oriented Computer Science graduate with a strong foundation in web development technologies including HTML, CSS, JavaScript, and basic frameworks like React . Passionate about creating responsive and user-friendly websites. Eager to contribute to a dynamic development team and continuously learn in a professional environment.
      </motion.p>
    </section>
  );
}
