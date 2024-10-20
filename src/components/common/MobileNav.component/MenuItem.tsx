import { motion } from "framer-motion";

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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

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