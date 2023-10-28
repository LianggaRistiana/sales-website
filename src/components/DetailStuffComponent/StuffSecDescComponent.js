import React from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function StuffSecDescComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-8">
      <h1 className="font-bold text-[24px]">Description</h1>
      <p className="text-justify">
        White jeans made of quality cotton denim (Straight fit). The elongated
        model is ideal for tall girls. The waist is high. The legs are finished
        with stylish slits. An excellent jeans model that will help you create
        trendy looks in a casual style. We recommend!
        <br></br>
        <br></br>
        The height of the model in the photo is 179 cm.<br></br>
        Most often, the model chooses clothes in size S.
        <br></br>
        <br></br>
      </p>
      <h1 className="font-bold text-[18px]">Material</h1>
      <p className="text-justify">
        100% Cotton
        <br></br>
        <br></br>
      </p>
      <h1 className="font-bold text-[18px]">Characteristics</h1>
      <p className="text-justify">
        Easy iron <br></br>
        Made on France
        <br></br>
        <br></br>
      </p>
      <div className="justify-center flex">
        <Button 
        onClick={scrollToTop}
        className="hover:bg-[#000000] mt-4 px-24 lg:px-48 hover:text-yellow-500 transition-transform duration-300 transform-gpu hover:scale-95">
          <FontAwesomeIcon icon={faCartShopping} />
          Buy
        </Button>
      </div>
    </div>
  );
}
