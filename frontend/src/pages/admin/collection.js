import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import CollectionTable from "./adminTable/CollectionTable";
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
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { env } from "../../../env-local";

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCollection, setselectedCollection] = useState("");

  const [posts, setPosts] = useState([]);
  const endPoint = "http://localhost:8000/admin/collection/";

  const fetchPosts = async () => {
    const { data: res } = await axios.get(endPoint);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [data, setData] = useState({
    name: "",
    desc: "",
    category: "All",
    image: "test",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
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
        <CollectionTable
          data={posts}
          fetchPosts={fetchPosts}
          endPoint={endPoint}
        ></CollectionTable>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Add Collection
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Collection Name"
                  placeholder="Enter the collection name"
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
                <RadioGroup
                  id="size"
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
{/*                 
                <form onSubmit={submitHandler} className="mt-4">
                  <input type="file" name="image"></input>
                  <button className="btn btn-primary" type="submit">
                    Send to server
                  </button>
                </form> */}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="default"
                  type="submit"
                  onPress={() => postHandler(onClose)}
                >
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
