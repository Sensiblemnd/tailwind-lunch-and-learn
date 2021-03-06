import React from "react";
import ctl from "@netlify/classnames-template-literals";

const FlexCard = () => {
  const wrapper = ctl(`
      mx-auto 
      sm:w-full
     
    `);

  const card = ctl(`
    flex
    p-4
    bg-blue-500
    rounded-lg
    shadow-lg
    `);

  return (
    <div className={wrapper}>
      <div className={card}>
        <div className="flex flex-col w-2/3 pr-4 bg">
          <p className="mb-2 text-2xl font-black text-gray-50">Title of card</p>
          <p className="text-lg font-light leading-5 text-gray-300">
            Where the earth is stepped on, there the sky is upheld
          </p>
          <p className="text-lg font-light leading-5 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero
            illum dolore, facere maxime modi totam aliquam a ex cum ea nemo
            eaque autem eveniet provident, rem cumque possimus consectetur.
          </p>

          <div className="flex items-end h-full text-gray-300 hover:text-gray-50">
            <button className="flex items-center space-x-2 text-sm font-semibold">
              <span>BOOK NOW</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-1/3 md:flex md:justify-end">
          <img
            className="rounded-lg hover:animate-bounce aspect-w-1"
            src="https://picsum.photos/230/170"
            style={{ maHeight: "170px", width: "230px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FlexCard;
