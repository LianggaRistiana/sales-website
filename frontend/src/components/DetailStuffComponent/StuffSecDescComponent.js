import React from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function StuffSecDescComponent(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const items = props.items;

  return (
    <div className="mt-8" data-aos="fade-up" data-delay="500">
      <h1 className="font-bold text-[24px]">Description</h1>
      <p className="text-justify">
        {items.desc}
      </p>
      <div
        className="justify-center flex"
        data-aos="fade-up"
        data-delay="500"
      >
        <Button
          onClick={scrollToTop}
          className="hover:bg-[#000000] mt-4 px-24 lg:px-48 hover:text-yellow-500 transition-transform duration-300 transform-gpu hover:scale-95"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          Buy
        </Button>
      </div>
    </div>
  );
}
