import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { font } from "@/global/font";
import clsx from "clsx";

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



export const MenuItem = ({ link }: { link: { id: string, label: string, href: string } }) => {
  const currentPath = usePathname();
  const marker = (currentPath === link.href) ? <div className="h-5 w-5 rounded-full flex-[20px] ml-3 mr-5 bg-indigo-900" /> : null
  return (
    <motion.li
      className='mb-[35px] flex items-center justify-center cursor-pointer text-center'
      variants={variants2}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.85 }}
    >
      {marker}
      <div className="w-[200px] h-14 rounded-md flex-1 items-center">
        <NextLink className={clsx(font.className, 'text-2xl', 'w-[200px] h-14 rounded-md leading-[60px]' ,currentPath === link.href ? 'text-zinc-900' : 'text-white', 'align-center')} href={link.href}>
          {link.label}
        </NextLink>
      </div>
      {marker}
    </motion.li>
  );
};