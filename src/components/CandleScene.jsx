// CandleScene.jsx
import { motion } from "framer-motion";

const CandleScene = ({ next }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center justify-center bg-black bg-opacity-70 w-full h-screen text-white"
  >
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-center"
    >
      <span className="text-6xl">🕯️🎂🕯️</span>
      <h2 className="mt-6 text-3xl">
        Cierra los ojos, pide un deseo y sopla las velitas!
      </h2>
      <button
        onClick={next}
        className="mt-8 bg-pink-400 text-white px-5 py-2 rounded-full shadow-lg hover:bg-pink-500 transition"
      >
        Soplar velitas
      </button>
    </motion.div>
  </motion.div>
);

export default CandleScene;
