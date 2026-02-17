import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { Star, Clock, MapPin, Heart, ChefHat, Utensils, Flame } from "lucide-react";

import heroFood from "@/assets/hero-food.jpg";
import jollofRice from "@/assets/jollof-rice.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import poundedYam from "@/assets/pounded-yam.jpg";
import amala from "@/assets/amala.jpg";
import suya from "@/assets/suya.jpg";
import ofadaRice from "@/assets/ofada-rice.jpg";
import whiteRiceStew from "@/assets/white-rice-stew.jpg";
import pastries from "@/assets/pastries.jpg";
import pepperSoup from "@/assets/pepper-soup.jpg";

const featuredDishes = [
  { name: "Jollof Rice & Grilled Chicken", price: "₦2,500", image: jollofRice },
  { name: "Fried Rice & Turkey", price: "₦3,000", image: friedRice },
  { name: "Pounded Yam & Egusi Soup", price: "₦2,800", image: poundedYam },
  { name: "Amala & Ewedu", price: "₦2,000", image: amala },
  { name: "White Rice & Stew", price: "₦1,800", image: whiteRiceStew },
  { name: "Ofada Rice & Sauce", price: "₦2,500", image: ofadaRice },
  { name: "Suya", price: "₦1,500", image: suya },
];

const menuCategories = [
  {
    name: "Rice Dishes",
    items: [
      { name: "Jollof Rice", desc: "Smoky party-style jollof", price: "₦1,500", image: jollofRice },
      { name: "Fried Rice", desc: "Mixed vegetables & seasoning", price: "₦1,500", image: friedRice },
      { name: "Ofada Rice & Sauce", desc: "Local rice with spicy ofada sauce", price: "₦2,500", image: ofadaRice },
      { name: "White Rice & Stew", desc: "Fluffy rice with rich tomato stew", price: "₦1,800", image: whiteRiceStew },
    ],
  },
  {
    name: "Swallow & Soups",
    items: [
      { name: "Pounded Yam & Egusi", desc: "Smooth yam with melon seed soup", price: "₦2,800", image: poundedYam },
      { name: "Amala & Ewedu", desc: "Dark yam flour with jute leaf soup", price: "₦2,000", image: amala },
      { name: "Pepper Soup", desc: "Spicy catfish pepper soup", price: "₦2,500", image: pepperSoup },
    ],
  },
  {
    name: "Pastries & Snacks",
    items: [
      { name: "Meat Pie", desc: "Golden crust with seasoned filling", price: "₦500", image: pastries },
      { name: "Puff Puff", desc: "Sweet fried dough balls", price: "₦300", image: pastries },
      { name: "Suya", desc: "Spicy grilled beef skewers", price: "₦1,500", image: suya },
    ],
  },
];

const testimonials = [
  { name: "Blessing O.", text: "Best jollof rice in Benin City! I always order from Molinz Kitchen.", rating: 5, tag: "Benin Resident" },
  { name: "Chidera A.", text: "The Buka 9 branch is a lifesaver during lectures. Affordable and delicious!", rating: 5, tag: "UNIBEN Student" },
  { name: "Dr. Emeka N.", text: "Quality food, consistent taste. My go-to for hosting colleagues.", rating: 5, tag: "UNIBEN Lecturer" },
  { name: "Ada M.", text: "Their pastries are incredible. I'm addicted to the meat pies!", rating: 4, tag: "Food Lover" },
];

const whyReasons = [
  { icon: Heart, title: "Trusted Across Benin City", desc: "Loved by thousands of residents for authentic Nigerian flavors" },
  { icon: Utensils, title: "Student-Friendly Pricing", desc: "Quality meals that won't break your budget at Buka 9" },
  { icon: Clock, title: "Fast & Reliable Service", desc: "Your food, hot and ready — whether dine-in or WhatsApp order" },
  { icon: Flame, title: "Authentic Nigerian Taste", desc: "Traditional recipes made with the freshest local ingredients" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroFood} alt="Nigerian cuisine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <p className="font-body text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-4">
              Benin City's Finest
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              One of Benin City's Best{" "}
              <span className="text-gradient">Nigerian Kitchens</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Authentic meals, pastries & snacks. Visit us in Benin City or at our UNIBEN campus branch — Buka 9.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/2348000000000?text=Hi%20Molinz%20Kitchen!%20I'd%20like%20to%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-warm text-primary-foreground px-8 py-4 rounded-full font-semibold font-body shadow-warm text-lg"
              >
                Order on WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#menu"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold font-body hover:bg-primary-foreground/10 transition-colors text-lg"
              >
                View Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Specialties</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Featured Dishes</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group rounded-2xl overflow-hidden gradient-card shadow-elevated"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm md:text-base font-semibold text-foreground">{dish.name}</h3>
                    <p className="text-primary font-body font-bold mt-1">{dish.price}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BENIN LOVES US */}
      <section className="py-20 px-6 gradient-dark">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-2">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
                Why Benin Loves <span className="text-gradient">Molinz Kitchen</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyReasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-center"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                    className="w-14 h-14 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm"
                  >
                    <reason.icon size={24} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{reason.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/60">{reason.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">What We Serve</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Menu</h2>
              <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
                Order directly via WhatsApp — no cart needed, just tap and order!
              </p>
            </div>
          </ScrollReveal>
          {menuCategories.map((category, ci) => (
            <div key={category.name} className="mb-12">
              <ScrollReveal>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <ChefHat size={24} className="text-primary" />
                  {category.name}
                </h3>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item, i) => (
                  <ScrollReveal key={item.name} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="flex gap-4 p-4 rounded-2xl gradient-card shadow-elevated group"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h4 className="font-display font-semibold text-foreground">{item.name}</h4>
                          <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-primary font-body font-bold">{item.price}</span>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`https://wa.me/2348000000000?text=Hi!%20I'd%20like%20to%20order%20${encodeURIComponent(item.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-warm text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold font-body shadow-warm"
                          >
                            Order
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 gradient-dark">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
                What Our Customers Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-primary-foreground/70 mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-display font-semibold text-primary-foreground text-sm">{t.name}</p>
                    <p className="font-body text-xs text-primary-foreground/50">{t.tag}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-6 gradient-dark">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-2">Find Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">Our Location</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-elevated max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63417.51237952!2d5.5503099!3d6.3350396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a7c3b0b0a1%3A0x3b1b1b1b1b1b1b1b!2sUniversity%20of%20Benin!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Molinz Kitchen Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <ScrollReveal>
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Eat? 🍽️
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
              Order now via WhatsApp or visit us at Buka 9, UNIBEN Campus.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/2348000000000?text=Hi%20Molinz%20Kitchen!%20I'd%20like%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-warm text-primary-foreground px-10 py-4 rounded-full font-semibold font-body shadow-warm text-lg inline-block"
            >
              Order on WhatsApp
            </motion.a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
