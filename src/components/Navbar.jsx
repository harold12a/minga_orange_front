import React from "react";

const Navbar = () => {
  return (
    <div className="flex-none order-1 flex-grow-0 w-54 h-32 relative">
      <img
        src="../../src/assets/images/Nav mobile.png"
        alt=""
        className="absolute top-5 pr-2 block sm:hidden " // screen solo para pantallas pequeñas
      />
      <img
        src="../../src/assets/images/Component.png"
        alt=""
        className="absolute top-5 pr-2 hidden md:block xl:hidden " // screem para pantallas medias y no se visualiza en pequeñas sin grande
      />
      <img
        src="../../src/assets/images/Component2-1.png"
        alt=""
        className="absolute top-5  xl:pr-2 hidden xl:block " // screen solo para pantalla grande no se visualiza en las demas
      />
    </div>
  );
};

export default Navbar;
