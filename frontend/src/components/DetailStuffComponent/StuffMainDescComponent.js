import { useState } from "react";
import React from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";
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
  const [selectedSize, setSelectedSize] = useState("M"); // State to hold the selected size

  const handleAddCart = async () => {
    try {
      const response = await fetch("http://localhost:8000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          acount: count,
          size: selectedSize,
          stuffStuffID: items.stuffID,
        }),
      });

      if (response.ok) {
      } else {
        const errorMessage = await response.text();
        alert(`Error : ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
      alert("An error occurred while adding course");
    }
  };

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mb-8">
      <div>
        <h1 className="font-bold text-[24px] mt-4 lg:mt-0">{items.name}</h1>
        <h1 className="font-bold text-[24px] mb-8 text-yellow-500">
          Rp. {items.price}
        </h1>
        {/* <Size items={items} /> */}
        
          <RadioGroup
            id="size"
            label="Select your Size city"
            orientation="vertical"
            color="default"
            value={selectedSize} // Set the value prop to the state variable
            onChange={(e) => setSelectedSize(e.target.value)} // Update the state on change
          >
            <Radio value="XS">XS</Radio>
            <Radio value="S">S</Radio>
            <Radio value="M">M</Radio>
            <Radio value="L">L</Radio>
            <Radio value="XL">XL</Radio>
          </RadioGroup>
        </div>

        <div className="lg:flex text-center lg:justify-between">
          <ButtonGroup className="mt-8">
            <Button
              className="bg-[#000000] text-white"
              onClick={decrementCount}
            >
              -
            </Button>
            <div className="py-2 text-white bg-[#000000]">
              <h1>{count}</h1>
            </div>
            <Button
              className="bg-[#000000] text-white"
              onClick={incrementCount}
            >
              +
            </Button>
          </ButtonGroup>
        </div>

        <div className="lg:flex text-center lg:justify-between mt-2">
          {/* <BuyButton /> */}
          <Link href="/cart">
            <Button
              onClick={handleAddCart}
              className="hover:bg-[#000000] mt-2 lg:mt-0 px-8 hover:text-yellow-500 transition-transform duration-300 transform-gpu hover:scale-95"
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </Button>
          </Link>
        </div>
    </div>
  );
}

// function BuyButton() {

//   return (

//   );
// }
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
