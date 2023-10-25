import Image from "next/image";
import { Inter } from "next/font/google";
import HeroComponent from "@/components/HomePageComponents.js/HeroComponent";
import NavbarTest from "@/components/UtilComponent/NavbarComponent";
import TrendStyle from "@/components/HomePageComponents.js/TrendStyle";
import NewCollectionComponent from "@/components/HomePageComponents.js/NewCollectionsComponent";
import SportCollectionComponent from "@/components/HomePageComponents.js/SportCollectionComponent";
import AllStuffComponent from "@/components/UtilComponent/AllStuffComponent";
import HomeStuffComponent from "@/components/HomePageComponents.js/HomeStuffComponent";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import BestSellersComponent from "@/components/HomePageComponents.js/BestSellersComponent";
import CollectionComponent from "@/components/UtilComponent/CollectionComponent";

const inter = Inter({ subsets: ["latin"] });  

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="px-24"></div>
      <HeroComponent />
      <TrendStyle topMargin={20} xMargin={24} />
      <BestSellersComponent />
      {/* <NewCollectionComponent /> */}
      <CollectionComponent margin={6}/>
      <HomeStuffComponent />
      <SportCollectionComponent />
    </>
  );
}
