import React, { useEffect, useState } from "react";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import { allCollectionItem, collectionItem, womenStuff } from "@/data-const";

export default function CollectionForWomenComponent() {
  const url2 = "http://localhost:8000/for-women/stuff";
  const [women, setWomen] = useState([]);
  const fetchInfo2= () => {
    return fetch(url2)
      .then((res) => res.json())
      .then((data) => setWomen(data.data));
  };

  useEffect(() => {
    fetchInfo2();
  }, []);
  return (
    <>
      <div className={`flex justify-between mt-16 mb-8`}>
        <h1 className="text-[24px] font-bold">New Collection</h1>
      </div>
      <CollectionComponent items={women} imagesD={allCollectionItem[7].path}/>  
    </>
  );
}
