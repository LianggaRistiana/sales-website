import React from "react";
import { Divider, Button, ButtonGroup } from "@nextui-org/react";
import Image from "next/image";
import { oneStuff } from "@/data-const";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  return (
    <>
      <div data-aos="fade-up" data-delay="500">
        <div className="space-y-1 mt-4 flex justify-between">
          <div className="flex justify-between">
            <Image
              shadow="sm"
              radius="lg"
              width={100}
              height={200}
              alt={oneStuff[0].title}
              className="object-cover"
              src={oneStuff[0].path}
            />
            <div className="ml-4">
              <h1 className="font-bold text-[12px] max-w-[150px]">
                Long straight fit jeans in white
              </h1>

              <h1 className="font-bold text-[12px] mt-4 max-w-[150px]">
                Size : <span className="font-normal"> L</span>
              </h1>
              <h1 className="font-bold text-[12px] mt-2  max-w-[150px]">
                Category : <span className="font-normal"> Women</span>
              </h1>
              <h1 className="font-bold text-[12px] mt-2 max-w-[150px]">
                Quantity : <span className="font-normal"> 2 </span>
              </h1>
              <BuyButton />
            </div>
          </div>
          <div className="text-right">
            <h1 className="font-bold text-[18px] ml-4">{oneStuff[0].price}</h1>
            <Button
              isIconOnly
              className="mt-[100px] transition-transform duration-300 transform-gpu bg-[#ffffff] text-red-500 hover:bg-[#ef4444] hover:text-white hover:scale-110"
            >
              <FontAwesomeIcon icon={faTrash} size="l" />
            </Button>
          </div>
        </div>
        <Divider className="my-4" />
      </div>
    </>
  );
}

function BuyButton() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <ButtonGroup size="sm" className="mt-4">
        <Button
          className="bg-[#000000] text-white transition-transform duration-300 transform-gpu hover:text[64px] hover:font-bold"
          onClick={decrementCount}
        >
          -
        </Button>
        <div className="px-1 py-1 text-white bg-[#000000] ">
          <h1>{count}</h1>
        </div>
        <Button
          className="bg-[#000000] text-white transition-transform duration-300 transform-gpu hover:text[64px] hover:font-bold"
          onClick={incrementCount}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}
