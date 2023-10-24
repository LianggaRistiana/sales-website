import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SportCollectionComponent() {
  return (
    <div className="mt-24">
      <Image
        className="absolute z-[999] ml-48"
        src={"../images/sportModel.svg"}
        width={300}
        height={557}
        alt="Sport Model"
      ></Image>
      <div className="w-full absolute z-[998] flex justify-end bg-[#FB9C46] mt-24">
        <div className="my-24 mr-48  max-w-[500px] leading-tight">
          <h1 className="font-bold text-[64px]">SPORT COLLECTION</h1>
          <h2 className="font-bold text-[12px] ml-2">
            Free shipping on all orders
          </h2>
          <Button
            radius="full"
            className="font-semibold mt-4 px-[56px] bg-[#ffffff]"
          >
            See All
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}
