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

export default function CollectionComponent(props) {
  return (
    <>
      <div className={`flex justify-between mt-24 mx-[${props.margin}rem]`}>
          <h1 className="text-[24px] font-bold">New Collection</h1>
        </div>
      <div className={`mx-[${props.margin}rem] mt-8`}>
        <div className="gap-8 grid flex justify-center grid-cols-12 grid-rows-1">
          {collectionItem.map((data) => {
            return (
              <>
                <CardCollections
                  key={data.id}
                  src={data.path}
                  title={data.title}
                />
              </>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          radius="full"
          className="font-semibold px-32"
          variant="bordered"
        >
          See All
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
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
    <Card
      className="col-span-12 sm:col-span-4 h-[300px] w-full "
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardHeader className="absolute z-10 top-1 justify-center !items-start">
        <h4 className="text-white font-bold text-center text-large">{props.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={props.tittle}
        className="z-0 w-full h-full object-cover"
        src={props.src}
      />
    </Card>
  );
}
