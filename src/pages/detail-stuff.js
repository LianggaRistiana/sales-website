import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import StuffPictureComponent from "@/components/DetailStuffComponent/StuffPictureComponent";
import StuffMainDescComponent from "@/components/DetailStuffComponent/StuffMainDescComponent";
import StuffSecDescComponent from "@/components/DetailStuffComponent/StuffSecDescComponent";
import AnotherStuffComponent from "@/components/DetailStuffComponent/AnotherStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import FooterComponent from "@/components/UtilComponent/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="md:mx-48 mx-4">
        <div className="md:flex mt-12 md:justify-center">
          <StuffPictureComponent />
          <StuffMainDescComponent />
        </div>
        <StuffSecDescComponent />
        <AnotherStuffComponent/>
      </div>
      <FooterComponent/>
      <ScrollToTopButton/>
    </>
  );
}
