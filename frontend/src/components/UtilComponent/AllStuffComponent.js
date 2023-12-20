import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { womenStuff } from "@/data-const";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { womenStuff } from "@/data-const";
import { menStuff } from "@/data-const";

export default function AllStuffComponent(props) {
  const items = props.items;


  return (
    <>
      <div id="all-new" className=" w-full ">
        <div
          className={`gap-${props.gap} grid grid-cols-${props.comp} sm:grid-cols-4 mt-4`}
        >
          {items.map((data) => {
            return (
              <StuffCard
                key={data.stuffID}
                stuffKey={data.stuffID}
                src={womenStuff[1].path}
                price={data.price}
                title={data.name}
                delay={(data.id % 4) * 150}
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
    <div className="" data-aos="fade-up" data-aos-delay={`${props.delay}`}>
      <Link href={`/all-stuff/${props.stuffKey}`}>
        <Card
          shadow="sm"
          key={props.stuffKey}
          isPressable
          fullWidth
          className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95 text-white hover:text-yellow-500"
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
          <CardFooter className="text-small justify-center bg-[#000000] ">
            <div className="max-w-[200px] ">
              <b className="">{props.title}</b>
              <p className="text-default-300">Rp. {props.price}</p>
            </div>
          </CardFooter>
        </Card>
      </Link>
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
