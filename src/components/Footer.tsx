import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="w-full py-6 flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="capitalize text-2xl poetsen-one-regular font-bold">
        get in touch
      </h1>
      <div>
        <p className="capitalize  w-full text-center allan-bold text-lg  mt-4 px-6">
          hello, i am miss pabitra chetri
          <br />
          as you have seen my works so, i make mahendi and bouquet for wedding
          and other events.
          <br />
          <br />
          <strong>mahendi designs</strong> &gt; all the designs are hand drawn
          and made with love by me.
          <br />
          <br />
          <strong>bouquet</strong> &gt; i make bouquet for your special moments
          to decorate your special day.
        </p>
      </div>
    </div>
  );
}

export default Footer