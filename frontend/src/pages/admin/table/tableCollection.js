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
    key: "category",
    label: "CATEGORY",
  },
  {
    key: "Action",
    label: "ACTION",
  }
];

export default function TableCollection(props) {
  const data = props.data;

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/collection/${itemId}`,
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
    const category = selectedCollection;
  

    try {
      const response = await fetch(`http://localhost:8000/admin/collection/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          category: category ,
        }),
      });

      if (response.ok) {
        alert("Course edited successfully");
        // onclose();
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
  const [selectedCollection, setselectedCollection] = useState("");

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
            <TableRow key={item.collectionID}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "Action" ? (
                    <>
                      <Button
                        isIconOnly
                        className="mr-4"
                        onPress={() => openModal(item.collectionID)}
                        color="warning"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>

                      <Button
                        isIconOnly
                        onClick={() => handleDelete(item.collectionID)}
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
                  label="Collection name"
                  id="name"
                  placeholder="Enter the collection name"
                  variant="bordered"
                  name="name"
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