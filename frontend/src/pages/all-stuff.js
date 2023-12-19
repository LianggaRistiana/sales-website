import React from "react";
import NavbarComponent from "@/components/UtilComponent/NavbarComponent";
import AllStuffComponent from "@/components/UtilComponent/AllStuffComponent";
import ScrollToTopButton from "@/components/UtilComponent/ScrollTop";
import { allStuff, menStuff } from "@/data-const";
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
              {/* <h2 className="mx-2 mt-2 text-[16px]">Type</h2> */}
              <DropdownButtonType />
            </div>
            <div className="flex ml-8 justify-center">
              {/* <h2 className="mr-2 ml-8 mt-2  text-[16px]">Size</h2> */}
              <DropdownButtonSize />
            </div>
          </div>

          <div className="flex justify-center">
            {/* <h2 className="mx-2 mt-2  text-[16px]">Sort By</h2> */}
            <DropdownButtonSort />
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
                  items={menStuff}
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

function DropdownButtonType() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Type"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90"
        >
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
        <DropdownItem key="Shirt">Shirt</DropdownItem>
        <DropdownItem key="Pants">Pants</DropdownItem>
        <DropdownItem key="Skirt">Skirt</DropdownItem>
        <DropdownItem key="Hoodie">Hoodie</DropdownItem>
        <DropdownItem key="Jackets">Jackets</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
function DropdownButtonSize() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Size"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90"
        >
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
        <DropdownItem key="XS">XS</DropdownItem>
        <DropdownItem key="S">S</DropdownItem>
        <DropdownItem key="M">M</DropdownItem>
        <DropdownItem key="L">L</DropdownItem>
        <DropdownItem key="XL">XL</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function DropdownButtonSort() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Sord By"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90"
        >
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
        <DropdownItem key="Newer">Newer</DropdownItem>
        <DropdownItem key="Oldest">Oldes</DropdownItem>
        <DropdownItem key="Popular">Popular</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
