import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
// import { useEffect } from "react";

export default function SeeAllButton(props) {
  // console.log(props.path);

  return (
    <div
      className={`flex justify-center my-${props.yMargin}`}
      data-aos="fade-up"
      data-delay="500"
    >
      <Link href={`${props.path}`}>
        <Button
          radius="full"
          className={`font-semibold px-32 ${props.classNamed} transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90 `}
          variant={`${props.variant}`}
          
        >
          See All
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Link>
    </div>
  );
}
