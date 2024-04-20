'use client';
import React, { useState, useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/react";
import Link from "next/link";
import {AcmeLogo} from "./Logo";
import { FaGoogle, FaCalendar } from 'react-icons/fa';



export default function Menu() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);



  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Residenze", path: "/appartamenti" },
    { name: "Esperienze", path: "/" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="wimbledon">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white sm:hidden"
        />
        <NavbarBrand>
          <Link href="/"><AcmeLogo/></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <NavbarItem>
          <Link href="/" >
          <Button variant="light" className="text-white">
            Home
          </Button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/appartamenti" >
          <Button variant="light" className="text-white">
            Residenze
          </Button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                className="text-white"
              >
                Servizi
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="piscina">Piscina</DropdownItem>
              <DropdownItem key="spa">SPA</DropdownItem>
              <DropdownItem key="bbq">bbq</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link href="/esperienze" >
          <Button variant="light" className="text-white">
            Esperienze
          </Button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/contatti" >
          <Button variant="light" className="text-white">
            Contatti
          </Button>
          </Link>
        </NavbarItem>

      </NavbarContent>
      
      <NavbarContent justify="end">
      
        <NavbarItem>
          <Button>
            <FaCalendar className="text-white mr-1" />
            <Link href={'/appartamenti'}>Prenota</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      

      
      <NavbarMenu className="bg-bg-gray-300 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-black p-4"
              href={item.path}
            >
              {item.name}
            </Link>
            
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
        <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                className="text-black text-xl"
              >
                Servizi
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">Piscina</DropdownItem>
              <DropdownItem key="copy">SPA</DropdownItem>
              <DropdownItem key="edit">bbq</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
