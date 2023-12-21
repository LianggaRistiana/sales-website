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
import TableCollection from "./table/tableCollection";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const url = "http://localhost:8000/admin/collection";
  const [collections, setStuffs] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setStuffs(data.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const [userData, setUSerData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUSerData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [selectedCollection, setselectedCollection] = useState("");
  const handleAddCollection = async (onClose) => {
    try {
      const response = await fetch("http://localhost:8000/admin/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          category: selectedCollection,
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
      alert(`Error : ${error}`);
    }
  };

  return (
    <>
      <NavbarComponent />
      <Button onPress={onOpen} color="primary">
        Add Collection
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Collection
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Collection Name"
                  placeholder="Enter the collection name"
                  variant="bordered"
                  name="name"
                  onChange={handleChange}
                />
                <RadioGroup
                  id="size"
                  label="Category"
                  orientation="vertical"
                  color="default"
                  value={selectedCollection} // Set the value prop to the state variable
                  onChange={(e) => setselectedCollection(e.target.value)} // Update the state on change
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
                <Button color="primary" onPress={() => handleAddCollection(onClose)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <TableCollection data={collections}/>
    </>
  );
}