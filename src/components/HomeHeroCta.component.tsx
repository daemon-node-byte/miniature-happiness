"use client";
import NextLink from "next/link";
import clsx from "clsx";
import { CtaLinks } from "@/global/link";
import { font } from "@/global/font";


export default function HomeHeroCta() {
  return (
    <main
      className={clsx("flex flex-col justify-center items-center", "h-full")}
    >
      <header className={clsx("text-center")}>
        <h1 className={clsx(font.className, "text-7xl tracking-tight")}>
          Josh<span className={clsx("text-indigo-400")}>McLain</span>
        </h1>
        <p className={clsx("mt-4 tracking-wide")}>
          I&apos;m a software engineer specializing in web development.
        </p>
      </header>
      <section className={clsx("mt-14 space-x-4")}>
        {CtaLinks.map((link, index) => (
          <NextLink
            className={clsx(
              "px-4 py-6",
              index !== 1
                ? "border border-indigo-400 hover:bg-indigo-400 hover:border-foreground"
                : "border text-indigo-400 hover:bg-foreground hover:text-indigo-800 hover:border-indigo-800",
              "rounded-lg",
              "transition-all",
              "active:translate-x-2"
            )}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </NextLink>
        ))}
      </section>
    </main>
  );
}
