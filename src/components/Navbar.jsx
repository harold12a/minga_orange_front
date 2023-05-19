import React from "react";

const Navbar = () => {
  return (
    <div className="flex-none order-1 flex-grow-0 w-54 h-32 relative">
      <img
        src="../../src/assets/images/Component.png"
        alt=""
        className="absolute top-5 pr-2 block xl:hidden "
      />

      <img
        src="../../src/assets/images/Component2-1.png"
        alt=""
        className="absolute top-5  xl:pr-2 hidden xl:block "
      />
    </div>
  );
};

export default Navbar;
