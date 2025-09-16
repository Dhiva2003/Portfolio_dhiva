import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // 👈 your profile image

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 px-6 md:px-20 gap-12 text-center md:text-left"
    >
      {/* Left Side (Text + Buttons) */}
      <div className="flex-1 text-white">
        <motion.h2
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I’m <span className="text-amber-200">Dhivakar</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer | React | Node.js
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          {/* View Projects */}
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          {/* Download Resume */}
          <motion.a
            href={`${import.meta.env.BASE_URL}Dhivakar.pdf}`}
            download="Dhivakar.pdf"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* Right Side (Profile Image) */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={profilePic}
          alt="Dhivakar"
          className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-blue-600"
        />
      </motion.div>
    </section>
  );
}
