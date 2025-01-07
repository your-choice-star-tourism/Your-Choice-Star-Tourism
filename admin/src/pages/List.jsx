import axios from "axios";
import React, { useEffect, useState } from "react";
import { backend_url, currency } from "../App";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [addonSearchQuery, setAddonSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [filteredAddons, setFilteredAddons] = useState([]);
  const [editablePrice, setEditablePrice] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [editablekidprice, setEditablekidprice] = useState(null);
  const [newkidprice, setNewkidprice] = useState("");
  const [allAddons, setAllAddons] = useState([]);

  const fetchlist = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
        setFilteredList(response.data.products);
        
        // Extract and flatten all addons
        const addons = response.data.products.reduce((acc, product) => {
          return acc.concat(
            product.addons.map(addon => ({
              ...addon,
              productId: product._id,
              productName: product.name
            }))
          );
        }, []);
        setAllAddons(addons);
        setFilteredAddons(addons);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/delete",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeAddon = async (productId, addonId) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/delete-addon`,
        { productId, addonId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDoubleClick = (itemId, currentPrice) => {
    setEditablePrice(itemId);
    setNewPrice(currentPrice);
  };

  const handlekidpriceDoubleClick = (itemId, currentkidprice) => {
    setEditablekidprice(itemId);
    setNewkidprice(currentkidprice);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handlekidpriceChange = (e) => {
    setNewkidprice(e.target.value);
  };

  const updatePrice = async (id) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update`,
        { id, price: newPrice },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Adult price updated successfully");
        setEditablePrice(null);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updatekidprice = async (id) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update`,
        { id, kidprice: newkidprice },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Kid price updated successfully");
        setEditablekidprice(null);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateAddonPrice = async (productId, addonId, price, kidprice) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update-addon`,
        { productId, addonId, price, kidprice },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Addon price updated successfully");
        setEditablePrice(null);
        setEditablekidprice(null);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(e.target.value);
    
    if (query === "") {
      setFilteredList(list);
    } else {
      const filtered = list.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredList(filtered);
    }
  };

  const handleAddonSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setAddonSearchQuery(e.target.value);
    
    if (query === "") {
      setFilteredAddons(allAddons);
    } else {
      const filtered = allAddons.filter((addon) =>
        addon.addon_name.toLowerCase().includes(query)
      );
      setFilteredAddons(filtered);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14 w-full">
      {/* Main Items Section */}
      <h5 className="h5 ps-3 text-secondary">Main Items</h5>
      <div className="w-full max-w-2xl flexCenter">
        <div className="inline-flex items-center justify-center bg-primary overflow-hidden w-full rounded-full p-4 px-5">
          <div className="text-lg cursor-pointer">
            <RiSearch2Line />
          </div>
          <input
            type="text"
            placeholder="Search Main Items"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border-none outline-none w-full text-sm pl-4 bg-primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5 className="xxs:hidden sm:block">Image</h5>
          <h5>Name</h5>
          <h5>Adult</h5>
          <h5>Child</h5>
          <h5>Remove</h5>
        </div>
        {filteredList.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.53fr_1.59fr_1fr] xxs:grid-cols-[1fr_1fr_1fr_1fr] items-center p-1 bg-white rounded-xl"
          >
            <img
              src={item.image[0]}
              className="h-14 w-14 rounded-lg xxs:hidden sm:block"
              alt={item.name}
            />
            <h5 className="text-sm font-semibold line-clamp-1 mr-2">
              {item.name}
            </h5>
            <div>
              {editablePrice === item._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newPrice}
                    onChange={handlePriceChange}
                    className="text-sm font-semibold"
                    autoFocus
                  />
                  <button
                    className="bg-secondary text-white p-2 rounded"
                    onClick={() => updatePrice(item._id)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <span
                  className="text-sm font-semibold text-gray-20 cursor-pointer"
                  onDoubleClick={() => handleDoubleClick(item._id, item.price)}
                >
                  {item.price}&nbsp;&nbsp;{currency}
                </span>
              )}
            </div>
            <div>
              {editablekidprice === item._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newkidprice}
                    onChange={handlekidpriceChange}
                    className="text-sm font-semibold"
                    autoFocus
                  />
                  <button
                    className="bg-secondary text-white p-2 rounded"
                    onClick={() => updatekidprice(item._id)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <span
                  className="text-sm font-semibold text-gray-20 cursor-pointer"
                  onDoubleClick={() =>
                    handlekidpriceDoubleClick(item._id, item.kidprice)
                  }
                >
                  {item.kidprice}&nbsp;&nbsp;{currency}
                </span>
              )}
            </div>
            <div>
              <button
                className="bg-red-500 text-white p-1 ml-4 rounded-full"
                type="button"
                onClick={() => removeProduct(item._id)}
              >
                <TbTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Addons Section */}
      <h5 className="h5 ps-3 text-secondary mt-8">Addon Items</h5>
      <div className="w-full max-w-2xl flexCenter">
        <div className="inline-flex items-center justify-center bg-primary overflow-hidden w-full rounded-full p-4 px-5">
          <div className="text-lg cursor-pointer">
            <RiSearch2Line />
          </div>
          <input
            type="text"
            placeholder="Search Addons"
            value={addonSearchQuery}
            onChange={handleAddonSearchChange}
            className="border-none outline-none w-full text-sm pl-4 bg-primary"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5 className="xxs:hidden sm:block">Image</h5>
          <h5>Name</h5>
          <h5>Adult</h5>
          <h5>Child</h5>
          <h5>Remove</h5>
        </div>
        {filteredAddons.map((addon) => (
          <div
            key={addon._id}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.53fr_1.59fr_1fr] xxs:grid-cols-[1fr_1fr_1fr_1fr] items-center p-1 bg-white rounded-xl"
          >
            <img
              src={addon.image}
              className="h-14 w-14 rounded-lg xxs:hidden sm:block"
              alt={addon.addon_name}
            />
            <h5 className="text-sm font-semibold line-clamp-1 mr-2">
              {addon.addon_name}
            </h5>
            <div>
              {editablePrice === addon._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newPrice}
                    onChange={handlePriceChange}
                    className="text-sm font-semibold"
                    autoFocus
                  />
                  <button
                    className="bg-secondary text-white p-2 rounded"
                    onClick={() => updateAddonPrice(addon.productId, addon._id, newPrice, undefined)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <span
                  className="text-sm font-semibold text-gray-20 cursor-pointer"
                  onDoubleClick={() => handleDoubleClick(addon._id, addon.price)}
                >
                  {addon.price}&nbsp;&nbsp;{currency}
                </span>
              )}
            </div>
            <div>
              {editablekidprice === addon._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newkidprice}
                    onChange={handlekidpriceChange}
                    className="text-sm font-semibold"
                    autoFocus
                  />
                  <button
                    className="bg-secondary text-white p-2 rounded"
                    onClick={() => updateAddonPrice(addon.productId, addon._id, undefined, newkidprice)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <span
                  className="text-sm font-semibold text-gray-20 cursor-pointer"
                  onDoubleClick={() =>
                    handlekidpriceDoubleClick(addon._id, addon.kidprice)
                  }
                >
                  {addon.kidprice}&nbsp;&nbsp;{currency}
                </span>
              )}
            </div>
            <div>
              <button
                className="bg-red-500 text-white p-1 ml-4 rounded-full"
                type="button"
                onClick={() => removeAddon(addon.productId, addon._id)}
              >
                <TbTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;