import { GiPolarStar } from "react-icons/gi";

const NameAnimation = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-300/60 py-6">
      <div className=" animate-slide flex w-[340vw] gap-2 overflow-hidden">
        <p className="text-8xl bebas-neue-regular gap-3 flex items-center word capitalize text-gray-950">
          <GiPolarStar className="text-8xl animate-rotate" />
          <span>i am pabitra chetri</span>
        </p>
        <p
          className="text-8xl word bebas-neue-regular gap-3 flex items-center capitalize
         text-gray-950">
          <GiPolarStar className="text-8xl animate-rotate" />
          <span>i am pabitra chetri</span>
        </p>
      </div>
    </div>
  );
};

export default NameAnimation;
