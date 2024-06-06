import React from "react";
import { NavItems } from "./NavItems";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-wrapper fixed top-0 bg-white pr-6 pl-6 ">
      <div className="navbar p-4  flex">
        <div className="logo flex items-center">
          <Link to="/">
          <img
            className="w-8"
            src={LOGO_URL}
            alt="Logo"
          />
          </Link>
      
          <span className="text-black ml-3 font-extrabold text-sm">
            Food Delivery
          </span>
        </div>
        <NavItems />
      </div>
    </div>
  );
};

