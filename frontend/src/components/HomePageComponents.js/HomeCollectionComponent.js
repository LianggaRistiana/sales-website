import React from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import CollectionComponent from "../UtilComponent/CollectionComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SeeAllButton from "../UtilComponent/SeeAllButton";
import { collectionItem } from "@/data-const";

export default function HomeCollectionComponent() {
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
              <CollectionComponent items={collectionItem}/>
            </Tab>
            <Tab key="Fow Women" title="For Women">
              <CollectionComponent items={collectionItem} />
            </Tab>
          </Tabs>
        </div>
          <SeeAllButton yMargin={4} variant={`bordered`} path={`/all-collection`}/>
      </div>
    </>
  );
}
