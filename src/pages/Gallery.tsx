import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { X } from "lucide-react";

import jollofRice from "@/assets/jollof-rice.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import poundedYam from "@/assets/pounded-yam.jpg";
import amala from "@/assets/amala.jpg";
import suya from "@/assets/suya.jpg";
import ofadaRice from "@/assets/ofada-rice.jpg";
import whiteRiceStew from "@/assets/white-rice-stew.jpg";
import pastries from "@/assets/pastries.jpg";
import pepperSoup from "@/assets/pepper-soup.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import heroFood from "@/assets/hero-food.jpg";

const galleryImages = [
  { src: heroFood, caption: "Signature Jollof Rice" },
  { src: jollofRice, caption: "Jollof Rice & Chicken" },
  { src: friedRice, caption: "Fried Rice & Turkey" },
  { src: poundedYam, caption: "Pounded Yam & Egusi" },
  { src: amala, caption: "Amala & Ewedu" },
  { src: suya, caption: "Fresh Suya Skewers" },
  { src: ofadaRice, caption: "Ofada Rice & Sauce" },
  { src: whiteRiceStew, caption: "White Rice & Stew" },
  { src: pastries, caption: "Nigerian Meat Pies" },
  { src: pepperSoup, caption: "Spicy Pepper Soup" },
  { src: restaurantInterior, caption: "Our Warm Ambience" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="overflow-hidden pt-20">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Gallery</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                A Taste Through <span className="text-gradient">Our Lens</span>
              </h1>
              <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
                Explore our dishes, ambience, and the vibrant food culture of Benin City.
              </p>
            </div>
          </ScrollReveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelected(i)}
                  className="rounded-2xl overflow-hidden cursor-pointer shadow-elevated break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={galleryImages[selected].src}
              alt={galleryImages[selected].caption}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 text-primary-foreground font-display text-xl font-semibold"
            >
              {galleryImages[selected].caption}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
