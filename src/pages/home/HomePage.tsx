import React from "react";
import HeroBanner from "./components/HeroBanner";
import SearchSection from "./components/SearchSection";
import FeaturedProducts from "./components/FeaturedProducts";
import IntroSection from "./components/IntroSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <SearchSection />
      <FeaturedProducts />
      <IntroSection />
    </div>
  );
};

export default HomePage;
