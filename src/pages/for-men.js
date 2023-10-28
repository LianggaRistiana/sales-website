import React from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import SidebarForMenComponent from "@/components/ForMen/SidebarForMenComponent";
import TrendStyle from "@/components/UtilComponent/TrendStyle";
import CollectionForMenComponent from "@/components/ForMen/CollectionForMenComponent";
import MenStuffComponent from "@/components/ForMen/MenStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import { useState, useEffect } from "react";
import FooterComponent from "@/components/UtilComponent/FooterComponent";

export default function ForMen() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the handler right away so that it runs once when the component mounts
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="mx-2 lg:mx-12 mt-4 relative flex">
        {isSidebarVisible && <SidebarForMenComponent />}
        <div className={isSidebarVisible ? "ml-4 lg:ml-4" : "ml-6"}></div>
        <div className="sm:ml-4 lg:ml-24">
          <TrendStyle />
          <CollectionForMenComponent />
          <MenStuffComponent />
        </div>
        <ScrollToTopButton />
      </div>
      <FooterComponent />
    </>
  );
}
