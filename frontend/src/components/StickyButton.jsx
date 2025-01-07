import React, { useContext } from 'react';
import { RiShoppingBag4Line } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext';
import { NavLink, useLocation } from 'react-router-dom';

const StickyButton = () => {
  const { getCartCount } = useContext(ShopContext); // Access getCartCount from context
  const location = useLocation(); // Get current location

  // Pages where the button should not be displayed
  const excludedPaths = ['/cart', '/place-order', '/login', '/orders'];

  // Check if the current path is in the excluded paths
  if (excludedPaths.includes(location.pathname)) {
    return null; // Don't render the button on excluded paths
  }

  // Determine margin-bottom dynamically
  const marginBottomValue = getCartCount() === 0 ? '-5rem' : '2.5rem';

  return (
    <div className="sticky-container">
      <NavLink to={"/cart#cart"}>
        <button
          className={`sticky-btn flex gap-2 items-center text-white px-6 py-2 rounded-md font-semibold`}
          style={{ marginBottom: marginBottomValue }} // Dynamically set margin-bottom
        >
          Go To Cart <RiShoppingBag4Line />
        </button>
      </NavLink>
    </div>
  );
};

export default StickyButton;
