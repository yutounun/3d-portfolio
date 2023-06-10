import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`$(styles.paddingX) w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex justify-between w-full items-center max-w-7xl mx-auto">
        <Link
          to=""
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className="w-9 object-contain" alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
