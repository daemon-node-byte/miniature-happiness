"use client";
import NextLink from "next/link";
import clsx from "clsx";
import { navLinks } from "@/global/link";
import { usePathname } from "next/navigation";

export default function TopNavbar() {
  const currentPath = usePathname();
  return (
    <nav className={clsx("py-4 px-2")}>
      <ul className={clsx("flex space-x-7")}>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={clsx(
              "hover:text-indigo-400 transition-all",
              currentPath === link.href
                ? "border-b-2 border-indigo-400 text-indigo-400"
                : ""
            )}
          >
            <NextLink href={link.href}>{link.label}</NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
