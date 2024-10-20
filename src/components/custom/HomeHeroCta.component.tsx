"use client";
import NextLink from "next/link";
import clsx from "clsx";
import { CtaLinks } from "@/global/link";
import { font } from "@/global/font";
import { motion } from "framer-motion";

export default function HomeHeroCta() {

  return (
    <main
      className={clsx(
        "flex flex-col justify-center items-center",
        "h-full relative",
        "px-4", "z-0"
      )}
    >
      {/* <AnimatePresence> */}
        <motion.div 
          key='hero'
          className="relative overflow-hidden border border-l-0 border-r-0"
          initial={{ height: 0, width: 0, }}
          animate={{ height: [null, 0, 200], width: [null, 440, 440] }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}

        >
          <header
            key='header'
            className={clsx("text-center", "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full")}

          >
            <h1 className={clsx(font.className, "text-6xl tracking-tight")}>
              Josh<span className={clsx("text-indigo-400")}>McLain</span>
            </h1>
            <p className={clsx("mt-4 tracking-tight")}>
              I&apos;m a software engineer specializing in web development.
            </p>
          </header>
        </motion.div>
        <section className="mt-14 space-x-6 md:space-x-4 z-0">
          {CtaLinks.map((link, index) => (
            <motion.button 
            className={clsx(
              'text-sm',
              "px-3 py-4 md:px-4 md:py-6",
              index !== 1
              ? "border border-indigo-400 hover:bg-indigo-400 hover:border-foreground"
              : "border text-indigo-400 hover:bg-foreground hover:text-indigo-800 hover:border-indigo-800",
              "rounded-lg",
              "transition-all",
              "active:translate-x-2"
            )}
              key={link.href + index} 
              custom={index}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + (index * 0.2), duration: 1 }}
              whileTap={{ scale: 0.8 }} 
            >
            <NextLink href={link.href}>
              {link.label}
            </NextLink>
                </motion.button>
          ))}
        </section>
        {/* </AnimatePresence> */}
    </main>
  );
}
