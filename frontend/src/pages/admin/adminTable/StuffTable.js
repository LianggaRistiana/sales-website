import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Image,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const columns = [
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "category",
    label: "CATEGORY",
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
    label: "DESCRIPTION",
  },

  {
    key: "collection",
    label: "COLLECTION",
  },
  {
    key: "Action",
    label: "ACTION",
  },
];

export default function StuffTable(props) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();

  const [selectedColor, setSelectedColor] = React.useState("default");

  const posts = props.data;
  const collection = props.collection;

  const { fetchPosts } = props;
  const { endPoint } = props;

  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || "https://swapi.py4e.com/api/people/?search=",
        { signal }
      );
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  const [item, setItem] = useState([]);
  //  delete

  const deleteHandler = async (onClose) => {
    await axios.delete(endPoint + item.stuffID);
    fetchPosts();
    onClose();
  };

  const openModalDelete = (item) => {
    setItem(item);
    onOpenDelete();
  };
  // edit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  
  const handleCollection = (e) => {
    setItem((prevData) => ({ ...prevData, collectionCollectionID: e.target.value }));
  };
  const openModalEdit = (item) => {
    setItem(item);
    onOpenEdit();
  };
  const editHandler = async (onClose) => {
    await axios.put(endPoint + item.stuffID, item);
    fetchPosts();
    onClose();
  };

  return (
    <>
      <Table
        color={selectedColor}
        selectionMode="single"
        isHeaderSticky
        aria-label="Example table with infinite pagination"
        baseRef={scrollerRef}
        bottomContent={
          hasMore ? (
            <div className="flex w-full justify-center">
              <Spinner ref={loaderRef} color="white" />
            </div>
          ) : null
        }
        classNames={{
          base: "max-h-[450px] overflow-scroll",
          table: "min-h-[400px]",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={posts}
          emptyContent={"No data to display"}
          isLoading={isLoading}
          loadingContent={<Spinner color="default" />}
        >
          {(item) => (
            <TableRow key={item.stuffID}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                {columnKey === "Action" ? (
                  <>
                    {/* Tombol aksi */}
                    <Button
                      isIconOnly
                      onPress={() => openModalEdit(item)}
                      className="mr-4 transition-transform duration-300 transform-gpu bg-[#ffffff] text-amber-400 hover:bg-amber-400 hover:text-white hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                      isIconOnly
                      onPress={() => openModalDelete(item)}
                      className="transition-transform duration-300 transform-gpu bg-[#ffffff] text-red-500 hover:bg-[#ef4444] hover:text-white hover:scale-110"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </>
                ) : columnKey === "image" ? (
                  <>
                    <Image
                      isZoomed
                      width={100}
                      alt={item.name}
                      src={getKeyValue(item, columnKey)}
                    />
                  </>
                ) : columnKey === "collection" ? (
                  // Kondisi jika columnKey adalah "collection"
                  // Ganti dengan tindakan atau tampilan lain sesuai kebutuhan Anda
                  getKeyValue(item, columnKey).name
                ) : (
                  // Jika tidak ada kondisi khusus, tampilkan nilai menggunakan getKeyValue
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
              
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal isOpen={isOpenDelete} onOpenChange={onOpenChangeDelete}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete {item.name}?
              </ModalHeader>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" onPress={() => deleteHandler(onClose)}>
                  yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
              Edit {item.name === ""? "<UNKNOWN>" : item.name}
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Stuff Name"
                  placeholder="Enter the stuff name"
                  variant="bordered"
                  name="name"
                  isRequired
                  onChange={handleChange}
                  value={item.name}
                />
                <Input
                  autoFocus
                  label="Describe"
                  placeholder="Enter  describtion"
                  variant="bordered"
                  name="desc"
                  isRequired
                  type="text"
                  onChange={handleChange}
                  value={item.desc}
                />
                <Input
                  autoFocus
                  label="Price"
                  placeholder="Rp. 0"
                  variant="bordered"
                  name="price"
                  isRequired
                  type="number"
                  onChange={handleChange}
                  value={item.price}
                />
                <Input
                  autoFocus
                  label="Stock"
                  placeholder="Rp. 0"
                  variant="bordered"
                  name="stock"
                  isRequired
                  type="number"
                  onChange={handleChange}
                  value={item.stock}
                />
                <RadioGroup
                  label="Category"
                  orientation="horizontal"
                  color="default"
                  onChange={handleChange}
                  name="category"
                  value={item.category}
                >
                  <Radio value="All">All</Radio>
                  <Radio value="Men">Men</Radio>
                  <Radio value="Women">Women</Radio>
                </RadioGroup>
                <Select
                  items={collection}
                  variant="bordered"
                  label="Collection"
                  placeholder="Select Collection"
                  className="max-w-xs"
                  name="collection"
                  onChange={handleCollection}
                  selectedKeys={[item.collectionCollectionID]}
                >
                  {(item) => (
                    <SelectItem
                      name="collection"
                      key={item.collectionID}
                      value={item.collectionID}
                    >
                      {item.name}
                    </SelectItem>
                  )}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="default" onPress={() => editHandler(onClose)}>
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
