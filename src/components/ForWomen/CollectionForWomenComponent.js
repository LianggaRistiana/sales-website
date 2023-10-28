import React from "react";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import { collectionItem } from "@/data-const";

export default function CollectionForWomenComponent() {
  return (
    <>
      <div className={`flex justify-between mt-16 mb-8`}>
        <h1 className="text-[24px] font-bold">New Collection</h1>
      </div>
      <CollectionComponent items={collectionItem} />  
    </>
  );
}
