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

export default function StuffMainDescComponent(props) {
  const items = props.items;
  return (
    <div className="mb-8">
      <div>
        <h1 className="font-bold text-[24px] mt-4 lg:mt-0">
          {items.name}
        </h1>
        <h1 className="font-bold text-[24px] mb-8 text-yellow-500">
          Rp. {items.price}
        </h1>
        <Size items ={items}/>
      </div>
      <div
        className="lg:flex text-center lg:justify-between mt-8"
        data-aos="zoom-out-up"
        data-delay="500"
      >
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
function Size(props) {
  const items = props.items;
  return (
    <div
      className="flex flex-col w-[230px]"
      data-aos="zoom-out-up"
      data-delay="10"
    >
      <Tabs variant="solid" aria-label="Options">
        <Tab key="XS" title="XS">
          <Card>
            <CardBody>{items.stock}</CardBody>
          </Card>
        </Tab>
        <Tab key="S" title="S">
          <Card>
            <CardBody>{items.stock}</CardBody>
          </Card>
        </Tab>
        <Tab key="M" title="M">
          <Card>
            <CardBody>{items.stock}</CardBody>
          </Card>
        </Tab>
        <Tab key="L" title="L">
          <Card>
            <CardBody>{items.stock}</CardBody>
          </Card>
        </Tab>
        <Tab key="XL" title="XL">
          <Card>
            <CardBody>{items.stock}</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
