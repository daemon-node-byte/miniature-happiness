import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalPopup: React.FC<ModalPopupProps> = ({ isOpen, onClose, children }) => {

  return (
    <AnimatePresence>
      {isOpen &&     
      (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, ease: 'easeInOut' }} exit={{ scale: 0 }} className="fixed inset-0 flex flex-col items-center justify-center z-10">
      <div className="relative flex flex-col items-center justify-center bg-zinc-500 rounded-lg shadow-lg p-6 z-50">
        <div id="modal-header" className="w-full">header
          <div className="absolute left-0 top-0 bg-black opacity-50 text-white text-4xl cursor-pointer" onClick={onClose}>&times;</div>
        </div>
        <div id="modal-body" className='flex flex-col space-y-2'>

        {children}
        </div>
        <div id="modal-footer" className="w-full">
        <button className="text-4xl" onClick={onClose}>
          &times;
        </button>
        </div>
      </div>
    </motion.div>)
    }
    </AnimatePresence>
  );
};

export default ModalPopup;