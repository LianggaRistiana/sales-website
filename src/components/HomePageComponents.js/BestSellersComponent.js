import React from "react";
import { stuffItem } from "@/data-const";
import SeeAllButton from "../UtilComponent/SeeAllButton";
import AllStuffComponent from "../UtilComponent/AllStuffComponent";

export default function BestSellersComponent() {
  return (
    <>
      <div className="bg-[#B5F1CC] py-4 mt-20 w-full">
        <div className="flex justify-between mx-16 ">
          <h1 className="text-[24px] font-bold">Best Seller</h1>
        </div>
        <div className="flex justify-center max-w-[2000px] mx-24">
          <AllStuffComponent gap={4} large={4} comp={1} items={stuffItem} />
          {/* {stuffItem.map((data) => {
            return (
              <Stuff
                key={data.id}
                source={data.path}
                price={data.price}
                name={data.title}
              />
            );
          })} */}
        </div>
        <div className="mt-8">
          <SeeAllButton
            classNamed={`bg-[#000000] text-[#D9F0F4]`}
            yMargin={4}
            path={`/all-stuff`}
          />
        </div>
      </div>
    </>
  );
}

// function Stuff(props) {
//   const source = props.source;
//   const name = props.name;
//   const price = props.price;
//   return (
//     <div className="px-4">
//       <Image
//         src={source}
//         width={280}
//         height={400}
//         alt="Picture of Stuff"
//       ></Image>
//       <h1 className="mt-2 text-[12px]">{name}</h1>
//       <h1 className=" font-bold text-[12px]">{price}</h1>
//     </div>
//   );
// }
