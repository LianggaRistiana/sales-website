import React from "react";
import Image from "next/image";
import { stuffItem } from "@/data-const";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BestSellersComponent() {
  return (
    <>
      <div className="bg-[#B5F1CC] py-8 mt-20 w-full">
        <div className="flex justify-between  mx-24 ">
          <h1 className="text-[24px] font-bold">Best Seller</h1>
        </div>
        <div className="flex justify-center max-w-[2000px] mt-8 mx-24">
          {stuffItem.map((data) => {
            return (
              <Stuff
                key={data.id}
                source={data.path}
                price={data.price}
                name={data.title}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            radius="full"
            className="bg-[#000000] text-[#D9F0F4] font-semibold px-32"
          >
            See All <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </>
  );
}

function Stuff(props) {
  const source = props.source;
  const name = props.name;
  const price = props.price;
  return (
    <div className="px-4">
      <Image
        src={source}
        width={280}
        height={400}
        alt="Picture of Stuff"
      ></Image>
      <h1 className="mt-2 text-[12px]">{name}</h1>
      <h1 className=" font-bold text-[12px]">{price}</h1>
    </div>
  );
}
