import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";

const Cart = () => {
  const {
    currency,
    books,
    navigate,
    cartItems,
    cartItemsChild,
    updateQuantity,
    updateQuantityChild,
  } = useContext(ShopContext);

  const findItemDetails = (itemId) => {
    // Check if it's an addon
    if (itemId.includes('_addon_')) {
      const [parentId, _, addonId] = itemId.split('_');
      const parentBook = books.find(book => book._id === parentId);
      if (parentBook?.addons) {
        const addon = parentBook.addons.find(addon => addon._id === addonId);
        if (addon) {
          return {
            ...addon,
            id: itemId,
            name: addon.addon_name,
            image: [addon.image]
          };
        }
      }
    }
    // Look for main item
    const mainItem = books.find(book => book._id === itemId);
    if (mainItem) {
      return {
        ...mainItem,
        id: mainItem._id
      };
    }
    return null;
  };

  const getCartItems = () => {
    const items = [];
    const allIds = new Set([...Object.keys(cartItems), ...Object.keys(cartItemsChild)]);
    
    allIds.forEach(id => {
      const adultCount = cartItems[id] || 0;
      const childCount = cartItemsChild[id] || 0;
      
      if (adultCount > 0 || childCount > 0) {
        const itemDetails = findItemDetails(id);
        if (itemDetails) {
          items.push({
            item: itemDetails,
            adultCount,
            childCount
          });
        }
      }
    });
    
    return items;
  };

  const totalItems = Object.values(cartItems).reduce((sum, count) => sum + count, 0) +
    Object.values(cartItemsChild).reduce((sum, count) => sum + count, 0);

    const handleRemoveItem = async (itemId) => {
      try {
        // Remove from adult cart
        await updateQuantity(itemId, 0);
        // Remove from child cart
        await updateQuantityChild(itemId, 0);
      } catch (error) {
        console.error("Error removing item:", error);
      }
    };

  const renderCartItem = (item, adultCount, childCount) => (
    <div key={item.id} className="bg-white p-2 mt-3 rounded-lg">
      <div className="flex gap-x-3">
        <div className="flex items-start gap-6">
          <img
            src={item.image?.[0]}
            alt="itemImg"
            className="h-24 w-24 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-bold text-black line-clamp-1">{item.name}</p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <div className="flex items-center ring-1 ring-slate-900/5 rounded-md overflow-hidden bg-primary mb-4">
                <button
                  onClick={() => updateQuantity(item.id, adultCount - 1)}
                  className="p-1.5 bg-white rounded-md shadow-md"
                >
                  <FaMinus className="text-xs" />
                </button>
                <p className="px-2">{adultCount}</p>
                <button
                  onClick={() => updateQuantity(item.id, adultCount + 1)}
                  className="p-1.5 bg-white rounded-md shadow-md"
                >
                  <FaPlus className="text-xs" />
                </button>
                <p className="px-2">Adult</p>
              </div>
              <div className="flex items-center ring-1 ring-slate-900/5 rounded-md overflow-hidden bg-primary">
                <button
                  onClick={() => updateQuantityChild(item.id, childCount - 1)}
                  className="p-1.5 bg-white rounded-md shadow-md"
                >
                  <FaMinus className="text-xs" />
                </button>
                <p className="px-2">{childCount}</p>
                <button
                  onClick={() => updateQuantityChild(item.id, childCount + 1)}
                  className="p-1.5 bg-white rounded-md shadow-md"
                >
                  <FaPlus className="text-xs" />
                </button>
                <p className="px-2">Child</p>
              </div>
            </div>
            <TbTrash
              onClick={() => handleRemoveItem(item.id)}
              className="cursor-pointer lg:text-3xl text-secondary xxs:text-2xl xxs:mb-8 xxs:mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="max-padd-container flex flex-col items-center" id="cart">
      <div className="pt-28 w-full sm:w-[80%] lg:w-[60%]">
        <Title title1={"Your "} title2={"Services"} title1Styles={"h3"} />
        <div className="mt-6">
          {totalItems > 0 ? (
            getCartItems().map(({ item, adultCount, childCount }) => 
              renderCartItem(item, adultCount, childCount)
            )
          ) : (
            <p className="text-center text-gray-600 mt-4">
              You don't have any saved Service.
            </p>
          )}
        </div>
        {totalItems > 0 && (
          <div className="flex justify-center mt-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <button
                onClick={() => navigate("/place-order")}
                className="btn-secondaryOne mt-7"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Cart;