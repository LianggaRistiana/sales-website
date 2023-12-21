import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPenToSquare   } from "@fortawesome/free-solid-svg-icons";

const rows = [
  {
    key: "1",
    totalprice: "1.000.000",
    ispaid: "YES",
    userid: "1"
  },
];

const columns = [
  {
    key: "totalprice",
    label: "TOTAL PRICE",
  },
  {
    key: "ispaid",
    label: "VALID",
  },
  {
    key: "userid",
    label: "USERID",
  },
  {
    key: "Action",
    label: "ACTION",
  }
];

export default function TableTransaction() {
    const handleDelete = (itemId) => {
      // Logika penghapusan item, bisa menggunakan state atau melakukan panggilan API
      console.log(`Delete item with id: ${itemId}`);
    };
  
    const handleEdit = (itemId) => {
      // Logika pengeditan item, bisa membuka modal atau halaman edit
      console.log(`Edit item with id: ${itemId}`);
    };
  
    return (
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "Action" ? (
                    <>
                      <Button isIconOnly className="mr-4"onClick={() => handleEdit(item.key)} color="warning">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      </Button>
                      <Button isIconOnly onClick={() => handleDelete(item.key)} color="danger">
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
    );
  }