import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full gradient-warm shadow-warm flex items-center justify-center text-primary-foreground"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/2348000000000?text=Hi%20Molinz%20Kitchen!%20I'd%20like%20to%20order"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] shadow-lg flex items-center justify-center animate-pulse-glow"
    >
      <MessageCircle size={26} className="text-primary-foreground" />
    </motion.a>
  );
};
