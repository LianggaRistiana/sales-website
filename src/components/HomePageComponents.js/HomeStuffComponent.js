import React from "react";
import AllStuffComponent from "../UtilComponent/AllStuffComponent";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HomeStuffComponent() {
  return (
    <div className="mt-20">
      <div id="all-new" className="bg-[#D9F0F4] py-4  w-full">
        <div className="flex justify-between  mx-24 ">
          <h1 className="text-[24px] font-bold">New Stuff</h1>
        </div>
        <div className="mx-24">
          <AllStuffComponent />
          <div className="flex justify-center mt-8"></div>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            radius="full"
            className="bg-[#000000] text-white font-semibold px-32"
          >
            See All <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeStuffComponent;
