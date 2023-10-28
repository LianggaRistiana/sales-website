import React from "react";
// import {Pagination} from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Pagination,
} from "@nextui-org/react";

import CollectionComponent from "./UtilComponent/CollectionComponent";
import TrendStyle from "./UtilComponent/TrendStyle";
import AllStuffComponent from "./UtilComponent/AllStuffComponent";
import SeeAllButton from "./UtilComponent/SeeAllButton";
import { collectionItem, womenStuff } from "@/data-const";

// import SportCollectionComponent from "./SportCollectionComponent";

export default function ForWomenComponent() {
  return (
    <div className="">
      {/* <div className="sticky max-h-48 rounded-lg top-24 bg-[#000000] ml-2 px-8 lg:ml-12">
        <h1 className="font-bold text-[32px] text-white">For Women</h1>
        <h2 className="ml-2 font-bold text-[16px] text-default-300">
          Current Trend
        </h2>
        <h2 className="ml-2 font-bold text-[16px] text-default-300">
          Collection
        </h2>
        <h2 className="ml-2 font-bold text-[16px] text-default-300">
          All Stuff
        </h2>
      </div> */}
      <div className=" ml-24">
        <div className="bg-">
          <TrendStyle />
        </div>
        {/* <NewCollectionComponent /> */}
        <div className={`flex justify-between mt-24 mb-8`}>
          <h1 className="text-[24px] font-bold">New Collection</h1>
        </div>
        <CollectionComponent/>
        <SeeAllButton variant={`bordered`} yMargin={8}/>
        <div className="mt-12">
          <h1 className="font-bold my-4 text-[24px]">Fashion For Women</h1>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <div className="flex justify-center">
                <h2 className="mx-2 mt-2 text-[16px]">Type</h2>
                <DropdownButton />
              </div>
              <div className="flex justify-center">
                <h2 className="mr-2 ml-8 mt-2  text-[16px]">Size</h2>
                <DropdownButton />
              </div>
            </div>

            <div className="flex justify-center">
              <h2 className="mx-2 mt-2  text-[16px]">Sort By</h2>
              <DropdownButton />
            </div>
          </div>
          <AllStuffComponent comp={2} large={3} items={collectionItem}/>
        </div>
        <PageButton />
        <div className="bg-[#D9F0F4] mt-4">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

function PageButton() {
  return (
    <div className="flex justify-center mt-8">
      <Pagination
        color="warning"
        isCompact
        showControls
        total={10}
        initialPage={1}
      />
    </div>
  );
}

function DropdownButton() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
