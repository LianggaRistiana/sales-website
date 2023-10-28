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

import AllStuffComponent from "../UtilComponent/AllStuffComponent";
import { collectionItem, womenStuff,newStuff } from "@/data-const";

export default function WomenStuffComponent() {
  return (
    <>
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
        <AllStuffComponent gap={4} large={4} comp={2} items={newStuff} />
      </div>
      <PageButton />
    </>
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
  