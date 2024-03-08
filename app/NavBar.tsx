"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <NavigationMenu className="flex justify-between w-screen border-b border-accent border-2 items-center mb-5 px-5 h-16 backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10">
      <NavigationMenuList className="space-x-3">
        <NavigationMenuItem>
          <Link href="/" className="flex space-x-3 items-center">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Bug Sculptor Logo"
            ></Image>
            <span className="text-3xl font-bold">Bug Sculptor</span>
          </Link>
        </NavigationMenuItem>
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link
              legacyBehavior
              passHref
              href={link.href}
              className={classnames({
                "font-bold": link.href === currentPath,
              })}
            >
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${classnames({
                  "border-b-4": link.href === currentPath,
                })}`}
              >
                <span
                  className={classnames({
                    "font-bold": link.href === currentPath,
                  })}
                >
                  {link.label}
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className="space-x-3">
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
