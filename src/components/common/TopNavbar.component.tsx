"use client";
import NextLink from "next/link";
import clsx from "clsx";
import { navLinks } from "@/global/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion'

export default function TopNavbar() {
  const currentPath = usePathname();
  const list = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <nav className={clsx("py-4 px-2 hidden md:block")}>
      <div className={clsx('max-w-[1000px] mx-auto')}>
      <motion.ul className={clsx("flex space-x-7 justify-end")} initial='hidden' animate='visible' variants={list}>
        {navLinks.map((link) => (
          <motion.li
          variants={item}
          key={link.label}
          className={clsx(
            "hover:text-indigo-400 transition-all",
            currentPath === link.href
            ? "border-b-2 border-indigo-400 text-indigo-400"
            : ""
          )}
          >
            <NextLink href={link.href}>{link.label}</NextLink>
          </motion.li>
        ))}
      </motion.ul>
        </div>
    </nav>
  );
}
