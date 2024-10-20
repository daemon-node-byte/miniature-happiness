import clsx from 'clsx';
import { motion, Variants, Transition } from 'framer-motion';

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
  <button
    onClick={toggle} 
    className={clsx(
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
