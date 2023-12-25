import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import UserTable from "./adminTable/UserTable";
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

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selecteduser, setselecteduser] = useState("");

  const [posts, setPosts] = useState([]);
  const endPoint = "http://localhost:8000/admin/user/";

  const fetchPosts = async () => {
    const { data: res } = await axios.get(endPoint);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "Client",
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


  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (data.email === "") return false;
    return validateEmail(data.email) ? false : true;
  }, [data.email]);

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
        <UserTable
          data={posts}
          fetchPosts={fetchPosts}
          endPoint={endPoint}
        ></UserTable>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Add user
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter the name"
                  variant="bordered"
                  name="name"
                  isRequired
                  onChange={handleChange}
                />
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter the email"
                  variant="bordered"
                  name="email"
                  isRequired
                  type="email"
                  onChange={handleChange}
                  isInvalid={isInvalid}
                  errorMessage={isInvalid && "Input a valid email!"}
                />
                <Input
                  autoFocus
                  label="Address"
                  placeholder="Enter the address"
                  variant="bordered"
                  name="address"
                  isRequired
                  type="text"
                  onChange={handleChange}
                />
                <Input
                  autoFocus
                  isRequired
                  label="Password"
                  placeholder="Enter the Password"
                  variant="bordered"
                  name="password"
                  type="text"
                  onChange={handleChange}
                />
                <RadioGroup
                  label="Category"
                  orientation="horizontal"
                  color="default"
                  onChange={handleChange}
                  name="role"
                  value={data.role}
                >
                  <Radio value="Admin">Admin</Radio>
                  <Radio value="Client">Client</Radio>
                </RadioGroup>
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
