'use client'
import React, { useRef } from 'react';

import { motion, useCycle, Variants, Transition } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimensions';
import clsx from 'clsx';

import '../style/mobile-nav.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
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

const variants3 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className='absolute top-[100px] w-[230px]' variants={variants3}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Path = (props: { variants: Variants, d?: string, transition?: Transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }: { toggle: () => void, isOpen: boolean}) => (
  <button onClick={toggle} className={clsx(
    'cursor-pointer absolute top-[16px] left-[28px] h-[50px] w-[50px] rounded-full z-50',
    isOpen ? 'bg-indigo-400' : 'bg-transparent'
    )}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

export const MenuItem = ({ i }: { i: number }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className='mb-[20px] flex items-center cursor-pointer'
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="h-10 w-10 rounded-full flex-[40px_0] mr-5" style={style} />
      <div className="w-[200px] h-5 flex-[1] rounded-md" style={style} />
    </motion.li>
  );
};

const MobileNav: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className='block absolute top-0 left-0 bottom-0 w-[300px] z-50 md:hidden'
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-[300px] bg-indigo-400" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen}/>
    </motion.nav>
  );
};

export default MobileNav;