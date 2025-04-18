// GiftCard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, PartyPopper, Copy, Check, ExternalLink } from "lucide-react";

const GIFT_CODE = "TXPL-T6WLZM-HBAK";
const AMAZON_LINK =
  "https://www.amazon.com.mx/gc/redeem/?_encoding=UTF8&ref_=cct_cg_0_2a1";

const GiftCard = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(GIFT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openAmazon = () => {
    window.open(AMAZON_LINK, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white shadow-2xl rounded-3xl p-8 w-96 flex flex-col items-center text-center"
    >
      <PartyPopper className="text-pink-500 mb-4 animate-bounce" size={48} />
      <h1 className="text-4xl font-bold text-purple-700">
        ¡Feli Cumpleaños, Mónica!
      </h1>
      <p className="mt-4 text-gray-700 text-lg">
        Holaa, sería muuuy gracioso que no fuera hoy tu cumpleaños 🙃. Si sí lo
        es, ¡feliz cumpleaños! Espero que lo pases genial y que este año sea aún
        mejor que el anterior. Te deseo lo mejor, espero que disfrutes de este
        regalo. Ya luego me dices qué te compraste 👀 jajaja ¡Felicidades!
      </p>
      <p className="mt-2 text-gray-700 text-lg font-semibold">
        - Osielito Mix 💖
      </p>

      <div className="mt-6 flex flex-col space-y-3 w-full">
        <button
          onClick={copyCode}
          className="flex items-center justify-center gap-2 bg-purple-400 text-white py-2 rounded-full shadow-lg hover:bg-purple-500 transition"
        >
          {copied ? (
            <>
              <Check size={20} /> Código copiado!
            </>
          ) : (
            <>
              <Copy size={20} /> Copiar código de regalo
            </>
          )}
        </button>

        <button
          onClick={openAmazon}
          className="flex items-center justify-center gap-2 bg-pink-400 text-white py-2 rounded-full shadow-lg hover:bg-pink-500 transition"
        >
          <ExternalLink size={20} /> Canjear en Amazon
        </button>
      </div>

      <Heart className="text-red-500 mt-6 animate-pulse" size={32} />
    </motion.div>
  );
};

export default GiftCard;
