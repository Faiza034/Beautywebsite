import Hero from "./components/Hero.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import SpecialOffer from "./components/SpecialOffer.jsx";
import AntiAging from "./components/AntiAging.jsx";
import PremiumQuality from "./components/PremiumQuality.jsx";
import Newsletter from "./components/Newsletter.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-x-clip bg-white">
      <Hero />
      <FeaturedProducts />
      <SpecialOffer />
      <AntiAging />
      <PremiumQuality />
      <Newsletter />
      <AboutUs />
      <Footer />
    </div>
  );
}