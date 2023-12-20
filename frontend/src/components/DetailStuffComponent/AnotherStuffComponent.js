import React, { useEffect, useState } from "react";
import AllStuffComponent from "../UtilComponent/AllStuffComponent";
import { newStuff } from "@/data-const";
import SeeAllButton from "../UtilComponent/SeeAllButton";

export default function AnotherStuffComponent() {
  const url = "http://localhost:8000/all-stuff";
  const [stuffs, setStuffs] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setStuffs(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="">
      <h1 className="font-bold text-[24px] mt-24 mb-8">
        Another Product
      </h1>
      <AllStuffComponent comp={2} gap={8} large={4} items={stuffs}/>
      <SeeAllButton classNamed={``} yMargin={4} variant={`bordered`} path={"all-stuff"}/>    </div>
  );
}
