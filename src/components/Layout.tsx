import { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { ScrollToTopButton, WhatsAppButton } from "./FloatingButtons";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <main key={location.pathname}>{children}</main>
        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Layout;
