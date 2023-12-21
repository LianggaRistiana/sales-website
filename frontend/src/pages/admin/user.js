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
import TableUser from "./table/tableuser";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const url = "http://localhost:8000/admin/user";
  const [users, setStuffs] = useState([]);
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
  const [selectedUser, setselectedUser] = useState("");
  const handleAddUser = async (onClose) => {
    try {
      const response = await fetch("http://localhost:8000/admin/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          address: userData.address,
          password: userData.password,
          role: selectedUser,
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
      <Button onPress={onOpen} color="primary">
        Add User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add User
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="User Name"
                  placeholder="Enter the user name"
                  variant="bordered"
                  name="name"
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  placeholder="Enter the user email"
                  type="email"
                  variant="bordered"
                  name="email"
                  onChange={handleChange}
                />
                <Input
                  label="Password"
                  placeholder="Enter user password"
                  type="password"
                  variant="bordered"
                  name="password"
                  onChange={handleChange}
                />
                <Input
                  label="Address"
                  placeholder="Enter the user address"
                  type="address"
                  variant="bordered"
                  name="address"
                  onChange={handleChange}
                />
                <RadioGroup
                  id="size"
                  label="Role"
                  orientation="vertical"
                  color="default"
                  value={selectedUser} // Set the value prop to the state variable
                  onChange={(e) => setselectedUser(e.target.value)} // Update the state on change
                >
                  <Radio value="Admin">Admin</Radio>
                  <Radio value="Client">Client</Radio>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleAddUser(onClose)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <TableUser data={users} />
    </>
  );
}
