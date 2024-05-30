import React from "react";
import MenuCard from "./MenuCard";
const MenuList = ({ menus, title }) => {
  console.log(menus)
  return (
    <>
      <h1 className="text-xl py-3 text-black font-bold">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {menus?.map((menu) => (
            <MenuCard key={menu.id} menuImage={menu.imageId} link={menu.action.link} />
          ))
          }
        </div>
      </div>
    </>
  );
};

export default MenuList;
