import React, { useEffect, useState } from "react";
// import { menStuff } from "@/data-const";
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
import { collectionItem, menStuff, } from "@/data-const";

export default function MenStuffComponent() {
  const url = "http://localhost:8000/for-men/stuff";
  const [menStuffs, setMenStuff] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setMenStuff(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <div className="mt-12">
        <h1 className="font-bold my-4 text-[24px]">Fashion For Men</h1>
        <div className="flex justify-between">
          <div className="flex justify-between">
            <div className="flex justify-center">
              {/* <h2 className="mx-2 mt-2 text-[16px]">Type</h2> */}
              {/* <DropdownButtonType /> */}
            </div>
            <div className="flex ml-8 justify-center">
              {/* <h2 className="mr-2 ml-8 mt-2  text-[16px]">Size</h2> */}
              {/* <DropdownButtonSize /> */}
            </div>
          </div>

          <div className="flex justify-center">
            {/* <h2 className="mx-2 mt-2  text-[16px]">Sort By</h2> */}
            {/* <DropdownButtonSort /> */}
          </div>
        </div>
        <AllStuffComponent gap={4} large={4} comp={2} items={menStuffs} imagesD={menStuff[0].path}/>
      </div>
      {/* <PageButton /> */}
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
          <Button variant="bordered" className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90">
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
          <Button variant="bordered" className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90">
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
          <Button variant="bordered" className="capitalize transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90">
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
  