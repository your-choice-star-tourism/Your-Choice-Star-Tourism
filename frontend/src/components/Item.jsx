import React, { useContext, useEffect } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";
import { NavLink, useNavigate } from "react-router-dom";
import { CurrencyContext } from "../context/CurrencyContext";

const Item = ({ book }) => {
  const { addToCart } = useContext(ShopContext);
  const { selectedCurrency, convertPrice, getDebugInfo } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/tours/${book._id}`);
  };

  const originalPrice = book.price;
  const displayPrice = convertPrice(originalPrice);

  return (
    <div
      onClick={handleNavigation}
      className="cursor-pointer xxs:mx-3 item-card overflow-hidden"
    >
      <div className="flexCenter bg-primary overflow-hidden relative group h-[16rem]">
        <img
          src={book.image?.[0]}
          alt={book.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <div className="h-[3.2rem]"> {/* Fixed height container for exactly 2 lines */}
          <h4 className="h4 my-2 line-clamp-2">{book.name}</h4>
        </div>
        <div className="flexBetween pt-1">
        <p className="font-bold capitalize line-clamp-1 w-24">
          {book.category}
        </p>
        <h5 className="text-secondaryOne z-10 font-semibold">
          {displayPrice} {selectedCurrency}
        </h5>
      </div>
        <p className="line-clamp-2 text-[12.2px] pt-3 pb-4">
          {book.description2}
        </p>
      </div>
    </div>
  );
};

export default Item;