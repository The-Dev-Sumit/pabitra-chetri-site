import { motion } from "framer-motion";
import { useState } from "react";
import ContactMePopUp from "./ContactMePopUp"; 


const LandingPage = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="h-[20rem] relative w-full">
      <div className="py-10 gap-3 w-48 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-48 eagle-lake-regular text-3xl font-bold px-4  text-center">
          Adding Beauty to Your Special Moments
        </motion.h1>
        <button onClick={handleClick} className="button capitalize px-3">book now</button>
      </div>
      <div className="bouquet" />
      {show && <ContactMePopUp handleClick={handleClick} />}
    </div>
  );
};

export default LandingPage;
