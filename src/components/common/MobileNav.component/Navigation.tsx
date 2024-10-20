import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { navLinks } from '@/global/link';



const variants3 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className='absolute top-[100px] w-[300px]' variants={variants3}>
    {navLinks.map((item) => (
      <MenuItem key={item.id} link={item} />
    ))}
  </motion.ul>
);
