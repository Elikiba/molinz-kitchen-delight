import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { X } from "lucide-react";

const heroFood = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80";
const jollofRice = "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80";
const friedRice = "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80";
const poundedYam = "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80";
const amala = "https://images.unsplash.com/photo-1604908556850-8d1f4d4d45ca?auto=format&fit=crop&w=900&q=80";
const suya = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80";
const ofadaRice = "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80";
const whiteRiceStew = "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80";
const pastries = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80";
const pepperSoup = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80";
const restaurantInterior = "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80";

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
