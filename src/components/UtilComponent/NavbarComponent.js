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
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarComponent() {
  // const scrollToMyElement = () => {
  //   scroll.scrollTo({
  //     element: document.querySelector("#add-new"),
  //   });
  // };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "All New", "Categories", "About Us"];

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

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="end"
      >
        {navbarItems.map((data) => {
          return (
            <NavbarItem key={data.id} className="px-5" >
              <Link
                href={data.path}
                className="text-black"
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
        <NavbarItem className="hidden lg:flex  font-semibold px-6">
          <Link className="text-black" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-[#FB9C46] text-white font-semibold px-6" href="#" variant="flat">
            Sign Up
          </Button>
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
              href="#"
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
