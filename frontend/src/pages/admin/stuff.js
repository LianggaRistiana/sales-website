import React, { useEffect, useState } from "react";

import { RadioGroup, Radio, cn } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import NavbarComponent from "./NavbarComponent";
import TableStuff from "./table/tableStuffComponent";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const url = "http://localhost:8000/admin/stuff";
  const [stuffs, setStuffs] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setStuffs(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const [stuffData, setStuffData] = useState({
    name: "",
    price: "",
    stock: "",
    desc: "",
    collectionid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStuffData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [selectedStuff, setselectedStuff] = useState("");
  const handleAddStuff = async (onClose) => {
    try {
      const response = await fetch("http://localhost:8000/admin/stuff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: stuffData.name,
          category: selectedStuff,
          price: stuffData.price,
          stock: stuffData.stock,
          desc: stuffData.desc,
          collectionid : stuffData.collectionid
        }),
      });

      if (response.ok) {
        alert("Course added successfully");
        onClose();
        window.location.reload();
      } else {
        const errorMessage = await response.text();
        alert(`Error : ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
      alert("An error occurred while adding course");
    }
  };


  return (
    <>
      <NavbarComponent />

      <Button onPress={onOpen} color="primary">Add Stuff</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Stuff</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus

                  label="Stuff Name"
                  placeholder="Enter the stuff name"
                  variant="bordered"
                  name ="name"
                  onChange={handleChange}
                />
                <Input
                  label="Stock"
                  placeholder="Enter the amount of stock"
                  type="stock"
                  variant="bordered"
                  name ="stock"
                  onChange={handleChange}
                />
                <Input
                  label="Price"
                  placeholder="Enter the price of the stuff"
                  type="price"
                  variant="bordered"
                  name ="price"
                  onChange={handleChange}
                />
                <Input
                  label="Description"
                  placeholder="Enter a description"
                  type="desc"
                  variant="bordered"
                  name ="desc"
                  onChange={handleChange}
                />
                <RadioGroup
                  id="size"
                  label="Category"
                  orientation="vertical"
                  color="default"
                  value={selectedStuff} // Set the value prop to the state variable
                  onChange={(e) => setselectedStuff(e.target.value)} // Update the state on change
                >
                  <Radio value="All">All</Radio>
                  <Radio value="Men">Men</Radio>
                  <Radio value="Women">Women</Radio>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleAddStuff(onClose)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <TableStuff data={stuffs}/>

            
    </>
  );
}


