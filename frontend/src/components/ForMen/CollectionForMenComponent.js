import React, { useEffect, useState } from "react";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import { allCollectionItem, collectionItem, menStuff, profilPerson, womenStuff } from "@/data-const";

export default function CollectionForMenComponent() {
  const url = "http://localhost:8000/for-men/collection";
  const [men, setMen] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setMen(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <div className={`flex justify-between mt-16 mb-8`}>
        <h1 className="text-[24px] font-bold">New Collection</h1>
      </div>
      <CollectionComponent items={men} imagesD={allCollectionItem[0].path}/>  
    </>
  );
}
