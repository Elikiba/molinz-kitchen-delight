import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { Heart, Leaf, Users, Smile, MapPin } from "lucide-react";

const restaurantInterior = "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80";

const values = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, always fresh" },
  { icon: Heart, title: "Authentic Recipes", desc: "Traditional Nigerian flavors passed down" },
  { icon: Users, title: "Affordable Pricing", desc: "Premium quality without the premium price" },
  { icon: Smile, title: "Friendly Service", desc: "Every customer is family" },
];

const About = () => {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Our Story, Rooted in <span className="text-gradient">Nigerian Food Culture</span>
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Molinz Kitchen was born from a deep love for authentic Nigerian cuisine. What started as a small kitchen in Benin City has grown into one of the most trusted food spots in Edo State, known for consistent quality, generous portions, and flavors that keep customers coming back.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Our UNIBEN campus branch at Buka 9 brings the same excellence right to students and staff, offering affordable, delicious meals throughout the day. From jollof rice to pounded yam, every dish is crafted with love and the finest ingredients.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-elevated">
              <img src={restaurantInterior} alt="Molinz Kitchen interior" className="w-full h-80 lg:h-[28rem] object-cover" />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 gradient-dark">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Values</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                    className="w-14 h-14 gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-warm"
                  >
                    <v.icon size={24} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/60">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Find Us</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Locations</h2>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="space-y-6">
                {[
                  { name: "Benin City Main", address: "Benin City, Edo State, Nigeria", desc: "Our flagship location, serving all of Benin City" },
                  { name: "UNIBEN Campus — Buka 9", address: "University of Benin, Ugbowo Campus", desc: "Convenient campus dining for students & staff" },
                ].map((loc) => (
                  <motion.div
                    key={loc.name}
                    whileHover={{ x: 5 }}
                    className="p-6 rounded-2xl gradient-card shadow-elevated flex gap-4"
                  >
                    <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center flex-shrink-0 shadow-warm">
                      <MapPin size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{loc.name}</h3>
                      <p className="font-body text-sm text-muted-foreground">{loc.address}</p>
                      <p className="font-body text-xs text-muted-foreground mt-1">{loc.desc}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="p-6 rounded-2xl gradient-card shadow-elevated">
                  <h3 className="font-display font-semibold text-foreground mb-3">Contact Us</h3>
                  <p className="font-body text-sm text-muted-foreground">📞 +234 800 000 0000</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">📧 hello@molinzkitchen.com</p>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-warm text-primary-foreground px-6 py-3 rounded-full font-semibold font-body shadow-warm mt-4 inline-block text-sm"
                  >
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-elevated h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63417.51237952!2d5.5503099!3d6.3350396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3a7c3b0b0a1%3A0x3b1b1b1b1b1b1b1b!2sUniversity%20of%20Benin!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Molinz Kitchen Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
