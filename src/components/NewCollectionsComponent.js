import React from "react";
import Image from "next/image";
import { collectionItem } from "@/data-const";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NewCollectionComponent() {
  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between  mx-24 ">
          <h1 className="text-[24px] font-bold">New Collection</h1>
        </div>
        <div className="flex justify-center max-w-[2000px] mt-8 mx-24">
          {collectionItem.map((data) => {
            return <Stuff key={data.id} source={data.path} name={data.title} />;
          })}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button radius="full" className="font-semibold px-32" variant="bordered">
          See All<FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </>
  );
}

function Stuff(props) {
  const source = props.source;
  const name = props.name;
  //   const price = props.price;
  return (
    <div className="px-4">
      <Image
        src={source}
        width={500}
        height={500}
        alt="Picture of Stuff"
      ></Image>
      <h1 className="mt-[-32px] font-bold text-white text-center text-[18px]">
        {name}
      </h1>
      {/* <h1 className=" font-bold text-[12px]">{price}</h1> */}
    </div>
  );
}
