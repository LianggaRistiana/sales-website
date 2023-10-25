import React from "react";
import Image from "next/image";
import { profilPerson } from "@/data-const";

export default function TrendStyle(props) {
  const topMargin = props.topMargin;
  const xMargin = props.xMargin;
  return (
    <>
      <div className={`flex justify-between mt-${topMargin} mx-${xMargin}`}>
        <h1 className="text-[24px] font-bold">Current Trend</h1>
        {/* <img src="/images/profil-person/profil1.svg"></img> */}
      </div>
      <div className={`flex justify-center max-w-[2000px] mt-8 mx-${xMargin}`}>
        {profilPerson.map((data) => {
            return (
                <Profil key={data.id} source={data.path} name={data.title}/>
            );
        })}
      </div>
    </>
  );
}
function Profil(props) {
  const source = props.source;
  const name = props.name;
  return (
    <div className="px-4">
      <Image
        src={source}
        width={250}
        height={250}
        alt="Picture of Person"
      ></Image>
      <h1 className="text-center mt-2 text-[12px]">{name}</h1>
    </div>
  );
}
