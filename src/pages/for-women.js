import Image from "next/image";
import { Inter } from "next/font/google";
import HeroComponent from "@/components/HeroComponent";
import NavbarComponents from "@/components/NavbarComponents";
import NavbarTest from "@/components/NavbarTest";
import TrendStyle from "@/components/TrendStyle";
import BestSellersComponent from "@/components/BestSellersComponent";
import NewCollectionComponent from "@/components/NewCollectionsComponent";
import NewStuffComponents from "@/components/NewStuff.Component";
import SportCollectionComponent from "@/components/SportCollectionComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        {/* <NavbarComponents /> */}
        <NavbarTest/>
    </>
  );
}
