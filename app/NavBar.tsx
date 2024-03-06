"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-gray-200 items-center mb-5 px-5 h-16 backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 bg-white">
      <Link href="/" className="flex space-x-3 items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Bug Sculptor Logo"
        ></Image>
        <span className="text-3xl font-bold">Bug Sculptor</span>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classnames({
                "text-zinc-900 font-bold border-b-4": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
