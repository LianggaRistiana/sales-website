import React from "react";
import { navbarAdminItems } from "@/data-const";
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
  useDisclosure,
} from "@nextui-org/react";

export default function NavbarComponent() {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className="bg-black text-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open Menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">LIPRA ADMIN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navbarAdminItems.map((data) => {
          return (
            <NavbarItem key={data.id} className="px-5">
              <Link
                href={data.path}
                className="text-white transition-transform duration-300 transform-gpu hover:text-yellow-500 hover:scale-90 hover:font-bold"
              >
                {data.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {navbarAdminItems.map((data) => (
          <NavbarMenuItem key={`${data.title}-${data.id}`}>
            <Link
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
