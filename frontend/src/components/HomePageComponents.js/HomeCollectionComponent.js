import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SeeAllButton from "../UtilComponent/SeeAllButton";
import { allCollectionItem, collectionItem, menStuff } from "@/data-const";

export default function HomeCollectionComponent() {
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

  const url2 = "http://localhost:8000/for-women/collection";
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
      <div className={`flex justify-between mt-24 mx-[6rem]`}>
        <h1 className="text-[24px] font-bold">New Collection</h1>
      </div>
      <div className="mx-[6rem]">
        {/* <AllStuffComponent /> */}
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" variant="underlined">
            <Tab key="For Men" title="For Men">
              <CollectionComponent items={men} imagesD={menStuff[3].path} />
            </Tab>
            <Tab key="Fow Women" title="For Women">
              <CollectionComponent items={women} imagesD={collectionItem[0].path}/>
            </Tab>
          </Tabs>
        </div>
          <SeeAllButton yMargin={4} variant={`bordered`} path={`/all-collection`}/>
      </div>
    </>
  );
}
