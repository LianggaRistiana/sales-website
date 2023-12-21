import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { RadioGroup, Radio, cn } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "address",
    label: "ADDRESS",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "Action",
    label: "ACTION",
  },
];

export default function TableUser(props) {
  const data = props.data;

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/user/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("User deleted successfully");

        window.location.reload();
      } else {
        const errorMessage = await response.text();
        alert(`Error : ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
      alert("An error occured while deleting the chapter");
    }
  };

  const handleEdit = async (itemId) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
    const role = selectedUser;

    try {
      const response = await fetch(`http://localhost:8000/admin/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          address: address,
          password: password,
          role: role,
        }),
      });

      if (response.ok) {
        alert("Course edited successfully");
        onclose();
      } else {
        const errorMessage = await response.text();
        alert(`Error : ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error : ${error}`);
      alert(`Error :${error}`);
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedUser, setselectedUser] = useState("");

  const [id, setId] = useState(null);

  const openModal = (item) => {
    setId(item);
    onOpen();
  };

  return (
    <>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.userID}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "Action" ? (
                    <>
                      <Button
                        isIconOnly
                        className="mr-4"
                        onPress={() => openModal(item.userID)}
                        color="warning"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>

                      <Button
                        isIconOnly
                        onClick={() => handleDelete(item.userID)}
                        color="danger"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

     <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
         <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit User
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="User Name"
                  id="name"
                  placeholder="Enter the user name"
                  variant="bordered"
                  name="name"
                  defaultValue={item[id].name}
                />
                <Input
                  label="Email"
                  placeholder="Enter the user email"
                  id="email"
                  type="email"
                  variant="bordered"
                  name="email"
                />
                <Input
                  label="Password"
                  placeholder="Enter user password"
                  email="password"
                  type="password"
                  id="password"
                  variant="bordered"
                  name="password"
                />
                <Input
                  label="Address"
                  placeholder="Enter the user address"
                  type="address"
                  id="address"
                  variant="bordered"
                  name="address"
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
                <Button color="primary" onPress={() => handleEdit(id)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
