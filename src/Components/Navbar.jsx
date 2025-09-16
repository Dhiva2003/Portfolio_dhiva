import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white shadow z-50 flex justify-between items-center px-6 py-4"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
