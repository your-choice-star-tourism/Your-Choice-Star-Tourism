import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
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
  const [editableName, setEditableName] = useState(null);
  const [newName, setNewName] = useState("");
  const [editableAddonName, setEditableAddonName] = useState(null);
  const [newAddonName, setNewAddonName] = useState("");
  const [allAddons, setAllAddons] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const selectedItemRef = useRef(null); // Ref for the selected item

  // Fetch products and addons
  const fetchlist = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
        setFilteredList(response.data.products);

        // Extract and flatten all addons
        const addons = response.data.products.reduce((acc, product) => {
          return acc.concat(
            product.addons.map((addon) => ({
              ...addon,
              productId: product._id,
              productName: product.name,
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

  // Product operations
  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/delete`,
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

  const handleNameDoubleClick = (itemId, currentName) => {
    setEditableName(itemId);
    setNewName(currentName);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const updateName = async (id) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update`,
        { id, name: newName },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Name updated successfully");
        setEditableName(null);
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

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
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

  // Addon operations
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

  const handleAddonNameDoubleClick = (addonId, currentName) => {
    setEditableAddonName(addonId);
    setNewAddonName(currentName);
  };

  const handleAddonNameChange = (e) => {
    setNewAddonName(e.target.value);
  };

  const updateAddonName = async (productId, addonId) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update-addon`,
        {
          productId,
          addonId,
          addon_name: newAddonName,
        },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Addon name updated successfully");
        setEditableAddonName(null);
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
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Search operations
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

  const handleUpdateDetails = async () => {
    try {
      const response = await axios.post(
        `${backend_url}/api/product/update-details`,
        {
          id: editedItem._id,
          description: editedItem.description,
          description2: editedItem.description2,
          expectations: editedItem.expectations.join("."),
          moredetails: editedItem.moredetails,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product details updated successfully");
        setIsEditing(false);
        setSelectedItem(response.data.product);
        await fetchlist();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Update the handleItemClick function
  const handleItemClick = (item) => {
    if (selectedItem && selectedItem._id === item._id) {
      setSelectedItem(null);
      setEditedItem(null);
      setIsEditing(false);
    } else {
      setSelectedItem(item);
      setEditedItem({ ...item }); // Create a copy for editing
      setIsEditing(false);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  // Deselect item on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectedItemRef.current &&
        !selectedItemRef.current.contains(event.target)
      ) {
        setSelectedItem(null); // Deselect item
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedItem]);

  return (
    <div className="px-2 sm:px-8 mt-4 mb-4 sm:mt-14 w-full">
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
        <div className="grid grid-cols-[2.4fr_1.2fr_1fr] sm:grid-cols-[1fr_3.5fr_1.5fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5 className="xxs:hidden sm:block">Image</h5>
          <h5>Name</h5>
          <h5>Price</h5>
          <h5>Remove</h5>
        </div>
        {filteredList.map((item) => (
          <React.Fragment key={item._id}>
            <div
              className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.58fr_1fr] xxs:grid-cols-[2.4fr_1.2fr_1fr] items-center p-1 bg-white rounded-xl"
              onClick={() => handleItemClick(item)} // Handle item click
            >
              <img
                src={item.image[0]}
                className="h-14 w-14 rounded-lg xxs:hidden sm:block"
                alt={item.name}
              />
              <div>
                {editableName === item._id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={newName}
                      onChange={handleNameChange}
                      className="text-sm font-semibold w-full"
                      autoFocus
                    />
                    <button
                      className="bg-secondary text-white p-2 rounded"
                      onClick={() => updateName(item._id)}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <h5
                    className="text-sm font-semibold line-clamp-1 mr-2 cursor-pointer"
                    onDoubleClick={() =>
                      handleNameDoubleClick(item._id, item.name)
                    }
                  >
                    {item.name}
                  </h5>
                )}
              </div>
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
                    onDoubleClick={() =>
                      handleDoubleClick(item._id, item.price)
                    }
                  >
                    {item.price}&nbsp;{currency}
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

            {/* Data Details Section */}
            {selectedItem && selectedItem._id === item._id && (
              <div
                className="mt-2 p-4 bg-white rounded-lg shadow"
                ref={selectedItemRef}
              >
                <h5 className="text-lg font-semibold text-secondary">
                  Data Of - {selectedItem.name}
                </h5>

                {/* Brief Description */}
                <div className="mt-2">
                  <strong className="text-black">Brief Description:</strong>
                  {isEditing ? (
                    <textarea
                      value={editedItem.description}
                      onChange={(e) =>
                        setEditedItem({
                          ...editedItem,
                          description: e.target.value,
                        })
                      }
                      className="w-full mt-1 p-2 border rounded"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-20">{selectedItem.description}</p>
                  )}
                </div>

                {/* Card Description */}
                <div className="mt-2">
                  <strong className="text-black">Card Description:</strong>
                  {isEditing ? (
                    <textarea
                      value={editedItem.description2}
                      onChange={(e) =>
                        setEditedItem({
                          ...editedItem,
                          description2: e.target.value,
                        })
                      }
                      className="w-full mt-1 p-2 border rounded"
                      rows={2}
                    />
                  ) : (
                    <p className="text-gray-20">{selectedItem.description2}</p>
                  )}
                </div>

                {/* Highlights */}
                <div className="mt-6">
                  <div className="mb-2">
                    <span className="text-secondary">
                      Use Full Stop only for bullet points {"(Highlights)"}:
                    </span>
                  </div>
                  <strong className="text-black">Highlights:</strong>
                  {isEditing ? (
                    <textarea
                      value={editedItem.expectations.join(".")}
                      onChange={(e) => {
                        const newExpectations = e.target.value
                          .split(".")
                          .filter((exp) => exp.trim());
                        setEditedItem({
                          ...editedItem,
                          expectations: newExpectations,
                        });
                      }}
                      className="w-full mt-1 p-2 border rounded"
                      rows={6}
                    />
                  ) : (
                    <ul className="text-gray-20">
                      {selectedItem.expectations.map((expectation, index) => (
                        <li key={index}>{expectation.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* More Details */}
                <div className="mt-6">
                  <div className="mb-2">
                    <span className="text-secondary">
                      Use new lines only for bullet points {"(More Details)"}:
                    </span>
                  </div>
                  {isEditing
                    ? editedItem.moredetails.map((detail, index) => (
                        <div key={index} className="mt-4">
                          <input
                            value={detail.detailname}
                            onChange={(e) => {
                              const newDetails = [...editedItem.moredetails];
                              newDetails[index].detailname = e.target.value;
                              setEditedItem({
                                ...editedItem,
                                moredetails: newDetails,
                              });
                            }}
                            className="w-full p-2 border rounded mb-2"
                            placeholder="Detail Name"
                          />
                          <textarea
                            value={
                              Array.isArray(detail.detailinfo)
                                ? detail.detailinfo.join("\n")
                                : detail.detailinfo
                            }
                            onChange={(e) => {
                              const newDetails = [...editedItem.moredetails];
                              newDetails[index].detailinfo = e.target.value
                                .split("\n")
                                .filter((item) => item.trim());
                              setEditedItem({
                                ...editedItem,
                                moredetails: newDetails,
                              });
                            }}
                            className="w-full p-2 border rounded"
                            rows={4}
                            placeholder="Detail Info (use new lines for bullet points)"
                          />
                        </div>
                      ))
                    : selectedItem.moredetails.map((detail, index) => (
                        <div key={index} className="mt-1">
                          <h6 className="font-semibold text-black">
                            {detail.detailname}
                          </h6>
                          <ul className="text-gray-20">
                            {detail.detailinfo.map((info, infoIndex) => (
                              <li key={infoIndex}>{info}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                </div>

                {/* Edit/Update Buttons */}
                <div className="mt-6 flex justify-end gap-4">
                  {isEditing ? (
                    <>
                      <button
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        onClick={() => {
                          setIsEditing(false);
                          setEditedItem({ ...selectedItem });
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
                        onClick={handleUpdateDetails}
                      >
                        Update
                      </button>
                    </>
                  ) : (
                    <button
                      className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Details
                    </button>
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
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
        <div className="grid grid-cols-[2.4fr_1.2fr_1fr] sm:grid-cols-[1fr_3.5fr_1.5fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5 className="xxs:hidden sm:block">Image</h5>
          <h5>Name</h5>
          <h5>Price</h5>
          <h5>Remove</h5>
        </div>
        {filteredAddons.map((addon) => (
          <div
            key={addon._id}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3.5fr_1.56fr_1fr] xxs:grid-cols-[2.4fr_1.2fr_1fr] items-center p-1 bg-white rounded-xl"
          >
            <img
              src={addon.image}
              className="h-14 w-14 rounded-lg xxs:hidden sm:block"
              alt={addon.addon_name}
            />
            <div>
              {editableAddonName === addon._id ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newAddonName}
                    onChange={handleAddonNameChange}
                    className="text-sm font-semibold w-full"
                    autoFocus
                  />
                  <button
                    className="bg-secondary text-white p-2 rounded"
                    onClick={() => updateAddonName(addon.productId, addon._id)}
                  >
                    Update
                  </button>
                </div>
              ) : (
                <h5
                  className="text-sm font-semibold line-clamp-1 mr-2 cursor-pointer"
                  onDoubleClick={() =>
                    handleAddonNameDoubleClick(addon._id, addon.addon_name)
                  }
                >
                  {addon.addon_name}
                </h5>
              )}
            </div>
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
                    onClick={() =>
                      updateAddonPrice(addon.productId, addon._id, newPrice)
                    }
                  >
                    Update
                  </button>
                </div>
              ) : (
                <span
                  className="text-sm font-semibold text-gray-20 cursor-pointer"
                  onDoubleClick={() =>
                    handleDoubleClick(addon._id, addon.price)
                  }
                >
                  {addon.price}&nbsp;&nbsp;{currency}
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
