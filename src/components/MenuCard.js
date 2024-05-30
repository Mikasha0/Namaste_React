import React from 'react'
import { MENU_IMAGE } from '../utils/constant'

const MenuCard = ({menuImage, link}) => {

  const fetchLinkMenu = () => {
    console.log("Fetching data...");
    fetch("https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2")
      .then(response => {
        console.log('Response status:', response.status); // Log response status
        console.log('Response headers:', response.headers); // Log response headers
        
        // Check if response is JSON by looking at the content-type header
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json(); // Parse JSON if content-type is application/json
        } else {
          return response.text(); // Parse as text otherwise
        }
      })
      .then(data => {
        if (typeof data === 'string') {
          console.error('Received HTML response:', data); // Log HTML response for debugging
        } else {
          console.log('Received JSON response:', data); // Log JSON response
        }
      })
      .catch(error => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };
  
  // Call the function to fetch data
  
  
  // Call the function to fetch data
  

  return (
    <div className="flex justify-center items-center w-[100px] pr-2 pb-3 overflow-hidden">
    <div className="transform transition-transform duration-300 hover:scale-110" onClick={fetchLinkMenu}>
        <img
          src={MENU_IMAGE + menuImage }
          alt="no_poster"
          className="w-full h-auto"
        />
      
    </div>
  </div>  )
}

export default MenuCard;