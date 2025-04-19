import React from 'react'
import { IoClose } from 'react-icons/io5';

interface ContactMePopUpProps {
    handleClick: () => void;
}
const ContactMePopUp: React.FC<ContactMePopUpProps> = ({ handleClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/40">
      <div
        className="relative w-2/3 py-12 max-w-md bg-cyan-900 rounded-lg shadow-lg flex flex-col justify-center items-center p-6"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={handleClick}
          title="Close"
          className="absolute top-2 right-2 text-red-400 hover:text-gray-900">
          <IoClose className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Contact Me</h2>
              <p className="text-lg text-gray-300">+91 9394336795</p>
      </div>
    </div>
  );
};

export default ContactMePopUp