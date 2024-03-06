import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b items-center mb-5 px-5 h-16">
      <Link href="/" className="flex space-x-3 items-center">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Bug Sculptor Logo"
        ></Image>
        <span className="text-2xl">Bug Sculptor</span>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
