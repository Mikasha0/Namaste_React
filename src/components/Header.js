import React from "react";
import { NavItems } from "./NavItems";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  return (
    <div className="header-wrapper fixed top-0">
      <div className="navbar p-4  flex">
        <div className="logo flex items-center">
          <img
            className="w-8"
            src={LOGO_URL}
            alt="Logo"
          />
          <span className="text-white ml-3 font-semibold text-sm">
            Food Delivery
          </span>
        </div>
        <NavItems />
      </div>
    </div>
  );
};

