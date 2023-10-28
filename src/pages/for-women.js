import { Inter } from "next/font/google";
import { useState, useEffect } from 'react';
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import ForWomenComponent from "@/components/ForWomenComponent";
import SidebarComponent from "@/components/ForWomen/SidebarComponent";
import CollectionForWomenComponent from "@/components/ForWomen/CollectionForWomenComponent";
import TrendStyle from "@/components/UtilComponent/TrendStyle";
import WomenStuffComponent from "@/components/ForWomen/WomenStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import FooterComponent from "@/components/UtilComponent/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the handler right away so that it runs once when the component mounts
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="mx-2 lg:mx-12 mt-4 relative flex">
        {isSidebarVisible && <SidebarComponent />}
        <div className={isSidebarVisible ? 'ml-4 lg:ml-4' : 'ml-6'}></div>
        {/* <SidebarComponent /> */}
        <div className="sm:ml-4 lg:ml-24">
          <TrendStyle/>
          <CollectionForWomenComponent />
          <WomenStuffComponent/>
        </div>
        <ScrollToTopButton/>
        {/* <ForWomenComponent /> */}
      </div>
      <FooterComponent/>
    </>
  );
}
