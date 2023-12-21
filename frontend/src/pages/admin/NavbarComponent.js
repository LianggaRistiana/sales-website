import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarComponent() {
  return (
    <Navbar className="bg-slate-200">
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="./user">
            User
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="./collection">
            Collection
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="./stuff">
            Stuff
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="./transaction">
            Transaction
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
