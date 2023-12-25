import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import StuffTable from "./adminTable/StuffTable";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [posts, setPosts] = useState([]);
  const [collection, setCollection] = useState([]);
  const endPoint = "http://localhost:8000/admin/stuff/";
  const endPointCollection = "http://localhost:8000/admin/collection/";

  const fetchPosts = async () => {
    const { data: res } = await axios.get(endPoint);
    setPosts(res.data);
  };
  const fetchCollection = async () => {
    const { data: res } = await axios.get(endPointCollection);
    setCollection(res.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCollection();
  }, []);

  const [data, setData] = useState({
    name: "",
    stock: 0,
    price: 0,
    desc: "",
    collectionCollectionID:null,
    category: "All",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCollection = (e) => {
    setData((prevData) => ({ ...prevData, collectionCollectionID: e.target.value }));
  };
  const postHandler = async (onClose) => {
    await axios.post(endPoint, data);
    onClose();

    fetchPosts();
  };

  return (
    <div className="bg-slate-100">
      <NavbarAdmin></NavbarAdmin>

      <div className="mx-4 lg:mx-24 mt-8">
        <Button
          onPress={onOpen}
          className="mb-4 bg-neutral-950 text-white transition-transform duration-300 transform-gpu hover:scale-110"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Data
        </Button>
        <StuffTable
          data={posts}
          fetchPosts={fetchPosts}
          endPoint={endPoint}
          collection={collection}
        ></StuffTable>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Add Stuff
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
                />
                <RadioGroup
                  label="Category"
                  orientation="horizontal"
                  color="default"
                  onChange={handleChange}
                  name="category"
                  value={data.category}
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
                <Button color="default" onPress={() => postHandler(onClose)}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Home;
