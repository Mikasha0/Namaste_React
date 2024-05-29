import React from 'react'
import { MENU_IMAGE } from '../utils/constant'

const MenuCard = ({menuImage, link}) => {

    console.log(menuImage)
  return (
    <div className="flex justify-center items-center w-[100px] pr-2 pb-3 overflow-hidden">
    <div className="transform transition-transform duration-300 hover:scale-110" onClick={()=> console.log(link)}>
        <img
          src={MENU_IMAGE + menuImage }
          alt="no_poster"
          className="w-full h-auto"
        />
      
    </div>
  </div>  )
}

export default MenuCard