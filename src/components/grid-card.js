import React from "react";
import ctl from "@netlify/classnames-template-literals";

const GridCard = () => {
  const wrapper = ctl(`
    
     
    `);

  return (
    <div className={wrapper}>
      <div className="grid grid-flow-col gap-4 p-4 bg-green-500 rounded-lg shadow-lg">
        <div>
          <p className="mb-2 text-2xl font-black text-white">Title of card</p>
          <p className="text-lg font-light leading-5 text-white">
            Where the earth is stepped on, there the sky is upheld
          </p>
          <p className="text-lg font-light leading-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero
            illum dolore, facere maxime modi totam aliquam a ex cum ea nemo
            eaque autem eveniet provident, rem cumque possimus consectetur.
          </p>

          <div className="text-white hover:text-white">
            <button className="flex items-center p-2 space-x-2 text-sm font-semibold">
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
        <div>
          <img
            className="w-full rounded-lg hover:animate-bounce aspect-w-1"
            src="https://picsum.photos/230/170"
            style={{ maHeight: "170px", width: "230px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GridCard;
