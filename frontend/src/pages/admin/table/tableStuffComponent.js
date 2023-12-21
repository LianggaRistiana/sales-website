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
import { data } from "autoprefixer";


const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "price",
    label: "PRICE",
  },
  {
    key: "stock",
    label: "STOCK",
  },
  {
    key: "desc",
    label: "DESC",
  },

  {
    key: "collectionId",
    label: "COLLECTIONID",
  },
  {
    key: "Action",
    label: "ACTION",
  }
];

export default function TableStuff(props) {
  const data = props.data;

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/stuff/${itemId}`,
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
    const category = selectedStuff;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const desc = document.getElementById("desc").value;
    const collectionid = document.getElementById("desc").value;

    try {
      const response = await fetch(`http://localhost:8000/admin/stuff/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          category: category,
          price: price,
          stock: stock,
          desc: desc,
          collectionid: collectionid,
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
  const [selectedStuff, setselectedStuff] = useState("");

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
            <TableRow key={item.stuffID}>
                {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "Action" ? (
                    <>
                      <Button
                        isIconOnly
                        className="mr-4"
                        onPress={() => openModal(item.stuffID)}
                        color="warning"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>

                      <Button
                        isIconOnly
                        onClick={() => handleDelete(item.stuffID)}
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
                Edit Stuff
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Stuff name"
                  id="name"
                  placeholder="Enter the stuff name"
                  variant="bordered"
                  name="name"
                />
                <Input
                  label="Stock"
                  id="stock"
                  placeholder="Enter the amount of stock"
                  variant="bordered"
                  name ="stock"
                />
                <Input
                  label="Price"
                  id="price"
                  placeholder="Enter the price of the stuff"
                  variant="bordered"
                  name ="stuff"
                />
                <Input
                  label="Description"
                  id="desc"
                  placeholder="Enter a description"
                  variant="bordered"
                  name ="desc"
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