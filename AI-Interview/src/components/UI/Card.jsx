import { motion } from "framer-motion";

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:border-blue-400 transition duration-300"
    >
      {children}
    </motion.div>
  );
}

export default Card;