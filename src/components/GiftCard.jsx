import { motion } from "framer-motion";
import { Heart, Gift } from "lucide-react";

const GiftCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center flex flex-col items-center"
    >
      <Gift className="text-pink-500 mb-4" size={48} />
      <h1 className="text-3xl font-bold text-purple-700">Happy Birthday!</h1>
      <p className="mt-4 text-gray-700">Your special message goes here!</p>
      <Heart className="text-red-400 mt-4 animate-pulse" size={24} />
    </motion.div>
  );
};

export default GiftCard;
