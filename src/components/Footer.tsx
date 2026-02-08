import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="gradient-dark py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">Molinz Kitchen</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              One of Benin City's finest Nigerian kitchens. Authentic flavors, premium quality, affordable prices.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }, { name: "Gallery", path: "/gallery" }].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/60 hover:text-primary transition-colors font-body text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Locations</h4>
            <div className="text-primary-foreground/60 font-body text-sm space-y-2">
              <p>📍 Benin City, Edo State</p>
              <p>📍 UNIBEN Campus — Buka 9</p>
              <p>📞 +234 800 000 0000</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 font-body text-xs">
            © 2025 Molinz Kitchen. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { icon: "📘", color: "hover:bg-[hsl(220,46%,48%)]", label: "Facebook" },
              { icon: "📸", color: "hover:bg-[hsl(330,70%,50%)]", label: "Instagram" },
              { icon: "🐦", color: "hover:bg-[hsl(203,89%,53%)]", label: "Twitter" },
              { icon: "📺", color: "hover:bg-[hsl(0,100%,50%)]", label: "YouTube" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-lg transition-colors ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
