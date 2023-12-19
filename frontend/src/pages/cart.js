import React from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import Item from "@/components/CartComponent/Item";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Total from "@/components/CartComponent/Total";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import FooterComponent from "@/components/UtilComponent/FooterComponent";

export default function cart() {
  return (
    <>
      <NavbarComponent />
      <div className="md:mx-48 mx-4">
        <div className="flex justify-center py-12 bg-[#000000] text-white">
          {/* <FontAwesomeIcon icon={faCartShopping} size="xl" className="mr-4 mt-3"/> */}
          <h1 className="font-bold text-[36px] text-white">CART</h1>
        </div>
        <Item />
        <Item />
        <Total />
      </div>
      <div className="hidden md:flex">
        <FooterComponent />
      </div>
      <ScrollToTopButton />
    </>
  );
}
