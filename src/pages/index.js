import Image from "next/image";
import { Inter } from "next/font/google";
import HeroComponent from "@/components/HomePageComponents.js/HeroComponent";
import NavbarTest from "@/components/UtilComponent/NavbarComponent";
import TrendStyle from "@/components/UtilComponent/TrendStyle";
import NewCollectionComponent from "@/components/HomePageComponents.js/NewCollectionsComponent";
import SportCollectionComponent from "@/components/HomePageComponents.js/SportCollectionComponent";
import AllStuffComponent from "@/components/UtilComponent/AllStuffComponent";
import HomeStuffComponent from "@/components/HomePageComponents.js/HomeStuffComponent";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import BestSellersComponent from "@/components/HomePageComponents.js/BestSellersComponent";
import CollectionComponent from "@/components/UtilComponent/CollectionComponent";
import HomeCollectionComponent from "@/components/HomePageComponents.js/HomeCollectionComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import FooterComponent from "@/components/UtilComponent/FooterComponent";
import { profilPerson } from "@/data-const";

const inter = Inter({ subsets: ["latin"] });

// import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="px-24"></div>
      <HeroComponent />
      <TrendStyle topMargin={20} xMargin={24} items={profilPerson} />
      <BestSellersComponent />
      {/* <NewCollectionComponent /> */}
      {/* <CollectionComponent margin={6}/> */}
      <HomeCollectionComponent />
      <HomeStuffComponent />
      {/* <SportCollectionComponent /> */}
      <div className="hidden md:flex">
        <FooterComponent />
      </div>
      <ScrollToTopButton />
    </>
  );
}
