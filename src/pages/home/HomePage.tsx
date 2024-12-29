import React from "react";
import HeroBanner from "./components/HeroBanner";
import SearchSection from "./components/SearchSection";
import FeaturedProducts from "./components/FeaturedProducts";
import IntroSection from "./components/IntroSection";
import SEO from "../../components/common/SEO";

const HomePage: React.FC = () => {
  return (
    <div>
      <SEO
        title="首頁"
        description="提供專業且透明的生前契約及塔位媒合服務，讓您安心規劃未來。"
        keywords={["殯葬服務", "生前契約", "塔位買賣"]}
      />
      <HeroBanner />
      <SearchSection />
      <FeaturedProducts />
      <IntroSection />
    </div>
  );
};

export default HomePage;
