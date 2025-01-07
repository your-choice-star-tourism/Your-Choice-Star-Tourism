import React, { useContext } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";
import { NavLink, useNavigate } from "react-router-dom";

const Item = ({ book }) => {
  const { currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (book.addquery) {
      // Navigate to HelpCenter with the book name as state
      navigate('/HelpCenter', { state: { productName: book.name } });
    } else {
      addToCart(book._id);
    }
  };

  const handleNavigation = () => {
    navigate(`/tours/${book._id}`);
  };

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
        <div className="flexBetween">
          <h4 className="h4 line-clamp-1 my-0">{book.name}</h4>
          <span
            onClick={handleAddToCart}
            className="flexCenter h-10 w-10 rounded cursor-pointer hover:bg-primary z-10 relative"
          >
            <TbShoppingBagPlus className="text-lg pointer-events-none" />
          </span>
        </div>
        <div className="flexBetween pt-1">
          <p className="font-bold capitalize line-clamp-1 w-24">
            {book.category}
          </p>
          <h5 className="text-secondaryOne z-10 font-semibold">
            {book.price} {currency}
          </h5>
        </div>
        <p className="line-clamp-2 text-[12.2px] pt-3 pb-8 sm:pb-8">
          {book.description2}
        </p>
      </div>
    </div>
  );
};

export default Item;