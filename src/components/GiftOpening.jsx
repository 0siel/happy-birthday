// GiftOpening.jsx
import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

const GiftOpening = ({ next }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-xl relative"
  >
    <motion.div
      animate={{ rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative"
    >
      <Gift className="text-purple-600" size={80} />
      <Sparkles
        className="text-yellow-400 absolute -top-3 -right-3 animate-pulse"
        size={24}
      />
    </motion.div>

    <h2 className="mt-6 text-3xl font-semibold text-purple-700 text-center">
      🎉 ¡Feliz Cumpleaños! 🎉
    </h2>
    <p className="mt-3 text-gray-600 text-center max-w-sm">
      Aquí tienes un regalo con mucho cariño de parte de{" "}
      <span className="font-bold text-pink-500">Osielito Mix 💖</span>
    </p>

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={next}
      className="mt-8 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-xl transition-transform"
    >
      🎁 Abrir mi regalo
    </motion.button>
  </motion.div>
);

export default GiftOpening;
