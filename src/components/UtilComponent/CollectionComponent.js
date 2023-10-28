import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { collectionItem } from "@/data-const";
import Link from "next/link";

export default function CollectionComponent(props) {
  const items = props.items;
  return (
    <>
      <div className={`mx-[${props.margin}rem]`}>
        <div className="gap-8 grid flex justify-center grid-cols-3 grid-rows-1">
          {items.map((data) => {
            return (
              <>
                <Link href={"/all-stuff"}>
                  <CardCollections
                    key={data.id}
                    src={data.path}
                    title={data.title}
                    delay={(data.id % 3) * 150}
                  />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

function CardCollections(props) {
  return (
    // <>
    //   <h1>{props.key}</h1>
    //   <h1>{props.src}</h1>
    //   <h1>{props.title}</h1>
    // </>
    <div 
    data-aos="fade-up" data-aos-delay={`${props.delay}`}
    >
      <Card
        className="col-span-12 sm:col-span-4 h-[300px] w-full  transition-transform duration-300 transform-gpu hover:scale-95"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardHeader className="absolute z-10 top-1 justify-center !items-start">
          <h4 className="text-white font-bold text-center text-large">
            {props.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={props.tittle}
          className="z-0 w-full h-full object-cover"
          src={props.src}
        />
      </Card>
    </div>
  );
}
