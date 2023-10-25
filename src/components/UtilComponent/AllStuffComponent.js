import React from "react";
import Image from "next/image";
import { womenStuff } from "@/data-const";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

export default function AllStuffComponent() {
  return (
    <>
      <div id="all-new" className=" w-full">
        <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 mt-4">
          {womenStuff.map((data) => {
            return (
              <StuffCard
                key={data.id}
                src={data.path}
                price={data.price}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function StuffCard(props) {
  return (
    <div className="">
      <Card
        shadow="sm"
        key={props.id}
        isPressable
        fullWidth
        className="w-full h-full "
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible w-full p-0">
          <Image
            shadow="sm"
            radius="lg"
            width={280}
            height={400}
            alt={props.title}
            className="w-full h-full object-cover h-[300px]"
            src={props.src}
          />
        </CardBody>
        <CardFooter className="text-small justify-center bg-[#000000]">
          <div className="max-w-[200px]">
            <b className="text-white">{props.title}</b>
            <p className="text-default-300">{props.price}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

function Stuff(props) {
  const source = props.source;
  const name = props.name;
  const price = props.price;
  return (
    <div className="">
      <Image
        src={source}
        width={280}
        height={400}
        className="rounded-md "
        alt="Picture of Stuff"
      ></Image>
      <h1 className="mt-2 text-[12px]">{name}</h1>
      <h1 className=" font-bold text-[12px]">{price}</h1>
    </div>
  );
}
