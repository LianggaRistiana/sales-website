import React from "react";
import Link from "next/link";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { oneStuff } from "@/data-const";

export default function StuffPictureComponent() {
  return (
    <>
      <div className="grid gap-4 grid-rows-1 lg:grid-cols-2">
        <StuffCard
          id={oneStuff[0].id}
          title={oneStuff[0].title}
          src={oneStuff[0].path}
        />
        <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-raws-3 gap-4">
          <StuffCard2
            id={oneStuff[0].id}
            title={oneStuff[0].title}
            src={oneStuff[0].path}
          />
          <StuffCard2
            id={oneStuff[0].id}
            title={oneStuff[0].title}
            src={oneStuff[0].path}
          />
          <StuffCard2
            id={oneStuff[0].id}
            title={oneStuff[0].title}
            src={oneStuff[0].path}
          />
        </div>
      </div>
    </>
  );
}

function StuffCard(props) {
  return (
    <div className="">
      <Link href={"#"}>
        <Card
          shadow="sm"
          key={props.id}
          isPressable
          fullWidth
          className="w-[250px] h-[360px] col-span-12 sm:col-span-4  transition-transform duration-300 transform-gpu hover:scale-90"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible w-full p-0">
            <Image
              shadow="sm"
              radius="lg"
              width={280}
              height={400}
              alt={props.title}
              className="w-full h-full object-cover"
              src={props.src}
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

function StuffCard2(props) {
    return (
      <div className="">
        <Link href={"#"}>
          <Card
            shadow="sm"
            key={props.id}
            isPressable
            fullWidth
            className="h-[80px] w-[70px] lg:h-[100px] lg:w-[100px] col-span-12 lg:col-span-4 transition-transform duration-300 transform-gpu hover:scale-90"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible w-full p-0">
              <Image
                shadow="sm"
                radius="lg"
                width={280}
                height={400}
                alt={props.title}
                className="w-full h-full object-cover"
                src={props.src}
              />
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
