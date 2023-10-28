import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  Link,
} from "@nextui-org/react";

export default function StuffMainDescComponent() {
  return (
    <div className="mb-8">
      <div>
        <h1 className="font-bold text-[24px] mt-4 lg:mt-0">
          Long straight fit jeans in white
        </h1>
        <h1 className="font-bold text-[24px] mb-8 text-yellow-500">
          Rp. 899.000
        </h1>
        <Size />
      </div>
      <div className="lg:flex text-center lg:justify-between mt-8">
        <BuyButton />
        <Link href="/cart">
          <Button className="hover:bg-[#000000] mt-2 lg:mt-0 px-8 hover:text-yellow-500 transition-transform duration-300 transform-gpu hover:scale-95">
            <FontAwesomeIcon icon={faCartShopping} />
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  );
}

function BuyButton() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <ButtonGroup>
        <Button className="bg-[#000000] text-white" onClick={decrementCount}>
          -
        </Button>
        <div className="px-2 py-2 text-white bg-[#000000]">
          <h1>{count}</h1>
        </div>
        <Button className="bg-[#000000] text-white" onClick={incrementCount}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}
function Size() {
  return (
    <div className="flex flex-col w-[230px]">
      <Tabs variant="solid" aria-label="Options">
        <Tab key="XS" title="XS">
          <Card>
            <CardBody>100 left</CardBody>
          </Card>
        </Tab>
        <Tab key="S" title="S">
          <Card>
            <CardBody>168 left</CardBody>
          </Card>
        </Tab>
        <Tab key="M" title="M">
          <Card>
            <CardBody>100 left</CardBody>
          </Card>
        </Tab>
        <Tab key="L" title="L">
          <Card>
            <CardBody>121 left</CardBody>
          </Card>
        </Tab>
        <Tab key="XL" title="XL">
          <Card>
            <CardBody>10 left</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
