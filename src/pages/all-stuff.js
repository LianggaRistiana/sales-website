import React from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import AllStuffComponent from "@/components/UtilComponent/AllStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
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
import FooterComponent from "@/components/UtilComponent/FooterComponent";

export default function AllStuff() {
  return (
    <>
      <NavbarComponent />
      <div className="md:mx-48 mx-4">
        <div className="flex justify-center py-12 bg-[#000000]">
          <h1 className="font-bold text-[36px] text-white">ALL STUFF</h1>
        </div>
        <div className="flex justify-between mt-4">
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
        <div className="md:flex mt-2 md:justify-center">
          <div className="flex w-full flex-col mt-4">
            <Tabs aria-label="Options" variant="underlined">
              <Tab key="For Men" title="For Men">
                <AllStuffComponent
                  comp={1}
                  gap={8}
                  large={4}
                  items={allStuff}
                />
              </Tab>
              <Tab key="For Women" title="For Women">
                <AllStuffComponent
                  comp={1}
                  gap={8}
                  large={4}
                  items={allStuff}
                />
              </Tab>
            </Tabs>
          </div>
          {/* <AllStuffComponent comp={2} gap={8} large={4} items={allStuff} /> */}
        </div>
      </div>
      <PageButton/>
      <FooterComponent/>
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
