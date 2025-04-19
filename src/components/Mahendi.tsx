import mahendiData, { MahendiItem } from "../utils/mahendiData";
import React, { useEffect, useRef } from "react";

const Mahendi: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Ensure first item is centered on load
    }
  }, []);

  // Calculate total width: 60vw per card + 1.5rem gap + 1rem padding
  const totalWidth = mahendiData.length * 60 + (mahendiData.length - 1) * 1.5 + 2;

  return (
    <div className="py-6 px-5">
      <h2 className="text-2xl font-bold text-center winky-rough-wink mb-4">
        Mahendi Designs
      </h2>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className={`flex w-[${totalWidth}vw] px-10 gap-10`}>
          {mahendiData.map((item: MahendiItem) => (
            <div
              key={item.id}
              className="flex-none w-[78vw] rounded-lg shadow-md snap-center">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-[40vh] p-2 object-cover rounded-md"
                onError={(e) => {
                  console.error(`Failed to load image: ${item.image}`);
                  e.currentTarget.src = "https://via.placeholder.com/150";
                }}
              />
              <h3 className="text-lg font-semibold mt-2 text-center">
                {item.heading}
              </h3>
              <p className="text-gray-600 text-center">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mahendi