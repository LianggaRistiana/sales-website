import React from "react";
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

import { navbarItems } from "@/data-const";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavbarComponents() {
  // const navbarItems = [
  //   "HOME",
  //   "All New",
  //   "Categories",
  //   "Featured",
  //   // "Testimonals",
  //   "About Us",
  // ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "All New", "Categories", "About Us"];

  return (
    <Navbar
      // classNames={{
      //   item: [
      //     "flex",
      //     "relative",
      //     "h-full",
      //     "items-center",
      //     "data-[active=true]:after:content-['']",
      //     "data-[active=true]:after:absolute",
      //     "data-[active=true]:after:bottom-0",
      //     "data-[active=true]:after:left-0",
      //     "data-[active=true]:after:right-0",
      //     "data-[active=true]:after:h-[2px]",
      //     "data-[active=true]:after:rounded-[2px]",
      //     "data-[active=true]:after:bg-primary",
      //   ],
      // }}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="font-montserrat pt-6 z-[999]"
      position="static"
    >
      <NavbarContent>
        {/* Navbar Menu */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open Menu"}
          className="sm:hidden"
        />
        {/* Logo */}
        <NavbarBrand>
          <p className="font-bold text-inherit">LiPra</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="font-semibold hidden sm:flex gap-4"
        justify="end"
      >
        {navbarItems.map((data) => {
          return (
            <NavbarItem key={data.id} className="px-5">
              <Link
                href={data.path}
                // className={`${
                //   data.title === "Home"
                //     ? "text-[#FF922F] border-b-2 border-[#FF922F]"
                //     : "text-black"
                // }`}
              >
                {data.title}
              </Link>
            </NavbarItem>
          );
        })}
        <Button className="bg-[#F6B750] text-white font-semibold mx-10 px-8">
          Login
        </Button>
        <Button className="bg-[#FB9C46] text-white font-semibold px-6">
          Sign Up
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {navbarItems.map((data) => (
          <NavbarMenuItem key={`${data.title}-${data.id}`}>
            <Link
              color={
                data.id === 2
                  ? "primary"
                  : data.id === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
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
