import React from "react";
import { navbarItems } from "@/data-const";
// import React, { useState } from "react";
// import { useScroll } from "react-scroll";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tab,
  Tabs,
  Input,
  Card,
  CardBody,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent() {
  // const scrollToMyElement = () => {
  //   scroll.scrollTo({
  //     element: document.querySelector("#add-new"),
  //   });
  // };

  const [selected, setSelected] = React.useState("login");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "All New", "Categories", "About Us"];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Navbar>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open Menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">LIPRA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navbarItems.map((data) => {
          return (
            <NavbarItem key={data.id} className="px-5">
              <Link
                href={data.path}
                className="text-black transition-transform duration-300 transform-gpu hover:text-yellow-500 hover:scale-90 hover:font-bold"
                // onClick={`${
                //   data.title === "All New"
                //     ? scrollToMyElement()
                //     :""
                // }`}
              >
                {data.title}
              </Link>
            </NavbarItem>
          );
        })}
        {/* <Button className="bg-[#F6B750] text-white font-semibold mx-10 px-8">
          Login
        </Button>
        <Button className="bg-[#FB9C46] text-white font-semibold px-6">
          Sign Up
        </Button> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" font-semibold ">
          <Button
            onPress={onOpen}
            className="text-black transition-transform duration-300 transform-gpu hover:bg-[#000000] hover:text-yellow-500 hover:scale-90"
            variant="bordered"
          >
            <FontAwesomeIcon icon={faUser} />
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <div className="flex flex-col w-full px-12 py-8">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="Login">
                      <form
                        className="flex flex-col gap-4"
                        data-aos="fade-up"
                        data-delay="500"
                      >
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                        />
                        <p className="text-center text-small">
                          Need to create an account?{" "}
                          <Link
                            size="sm"
                            onPress={() => setSelected("sign-up")}
                          >
                            Sign up
                          </Link>
                        </p>
                        <div
                          className="flex gap-2 justify-end"
                          data-aos="fade-up"
                          data-delay="100"
                        >
                          <Button
                            fullWidth
                            className="text-white bg-[#000000] transition-transform duration-300 transform-gpu hover:bg-[#eab308] hover:text-black hover:scale-90"
                          >
                            Login
                          </Button>
                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Sign up">
                      <form
                        className="flex flex-col gap-4 h-[300px]"
                        data-aos="fade-up"
                        data-delay="500"
                      >
                        <Input
                          isRequired
                          label="Name"
                          placeholder="Enter your name"
                          type="password"
                        />
                        <Input
                          isRequired
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                        />
                        <Input
                          isRequired
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                        />
                        <p className="text-center text-small">
                          Already have an account?{" "}
                          <Link size="sm" onPress={() => setSelected("login")}>
                            Login
                          </Link>
                        </p>
                        <div
                          
                          className="flex gap-2 justify-end"
                          // data-aos="fade-up"
                          // data-delay="100"
                        >
                          <Button
                            fullWidth
                            className="text-white bg-[#000000] transition-transform duration-300 transform-gpu hover:bg-[#eab308] hover:text-black hover:scale-90"
                          >
                            Sign up
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                  {/* <Card className="max-w-full w-[340px] h-[400px]">
                  <CardBody className="overflow-hidden">
                    
                  </CardBody>
                </Card> */}
                </div>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cart">
            <Button
              isIconOnly
              className="bg-[#000000] text-white transition-transform duration-300 transform-gpu hover:bg-[#eab308] hover:text-white hover:scale-90"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </Link>
          {/* <Button as={Link} className="bg-[#FB9C46] text-white font-semibold px-6" href="#" variant="flat">
            Sign Up
          </Button> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navbarItems.map((data) => (
          <NavbarMenuItem key={`${data.title}-${data.id}`}>
            <Link
              //   color={
              //     data.id === 2
              //       ? "primary"
              //       : data.id === menuItems.length - 1
              //       ? "danger"
              //       : "foreground"
              //   }
              className="w-full text-black"
              href={data.path}
              size="lg"
            >
              {data.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
