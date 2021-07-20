import React from "react";

function Grids() {
  return (
    <div className="grid grid-cols-1 gap-3 border border-solid sm:grid-cols-2 sm:px-2 sm:py-2 sm:gap-5 md:py-16 md:grid-cols-3">
      <div className="p-5 text-white bg-gray-400">Col 1</div>
      <div className="p-5 border">Col2</div>
      <div className="p-5 text-white bg-gray-400">Col 3</div>
      <div className="p-5 border">Col 1</div>
      <div className="p-5 text-white bg-gray-400">Col2</div>
      <div className="p-5 border">Col 3</div>
      <div className="p-5 text-white bg-gray-400">Col 1</div>
      <div className="p-5 border">Col2</div>
      <div className="p-5 text-white bg-gray-400">Col 3</div>
    </div>
  );
}

export default Grids;
