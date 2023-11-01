import React from "react";
import AllStuffComponent from "../UtilComponent/AllStuffComponent";
import { newStuff } from "@/data-const";
import SeeAllButton from "../UtilComponent/SeeAllButton";

export default function AnotherStuffComponent() {
  return (
    <div className="">
      <h1 className="font-bold text-[24px] mt-24 mb-8">
        Another Product
      </h1>
      <AllStuffComponent comp={2} gap={8} large={4} items={newStuff}/>
      <SeeAllButton classNamed={``} yMargin={4} variant={`bordered`} path={"all-stuff"}/>    </div>
  );
}
