import React from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import AllStuffComponent from "@/components/UtilComponent/AllStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import CollectionComponent from "@/components/UtilComponent/CollectionComponent";
import { allStuff } from "@/data-const";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Pagination,
} from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/react";
import { allCollectionItem } from "@/data-const";
import FooterComponent from "@/components/UtilComponent/FooterComponent";

export default function AllStuff() {
  return (
    <>
      <NavbarComponent />
      <div className="md:mx-48 mx-4">
        <div className="flex justify-center py-12 bg-[#000000]">
          <h1 className="font-bold text-[36px] text-white">ALL COLLECTION</h1>
        </div>
        <div className="md:flex mt-2 md:justify-center">
          <div className="flex w-full flex-col mt-4">
            <CollectionComponent items={allCollectionItem} />
          </div>
          {/* <AllStuffComponent comp={2} gap={8} large={4} items={allStuff} /> */}
        </div>
      </div>
      <PageButton />
      <div className="hidden md:flex">
        <FooterComponent />
      </div>
      <ScrollToTopButton />
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
