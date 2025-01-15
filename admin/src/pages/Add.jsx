import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { backend_url, currency } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [price, setPrice] = useState("");
  const [kidprice, setKidPrice] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [popular, setPopular] = useState(false);
  const [mostBooked, setMostBooked] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [addquery, setAddquery] = useState(false);
  const [expectations, setExpectations] = useState("");
  const [addons, setAddons] = useState([
    { addon_name: "", price: "", kidprice: "", image: "" },
  ]);
  const [moredetails, setMoreDetails] = useState([
    { detailname: "", detailinfo: [""] },
  ]);
  const [error, setError] = useState("");
  const [errortwo, setErrorTwo] = useState("");
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeImage = (e) => {
    const files = e.target.files;
    if (files.length + image.length <= 4) {
      setImage((prevImage) => [...prevImage, ...Array.from(files)]);
      setImageError("");
    }
    if (files.length + image.length !== 4) {
      setImageError("You must upload exactly 4 images.");
    }
    if (files.length + image.length > 4) {
      setImageError("You can only upload up to 4 images.");
    }
  };

  const handleRemoveImage = (index) => {
    setImage(image.filter((_, i) => i !== index));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);

    if (value.length < 350) {
      setError("Description must be at least 350 characters.");
    } else if (value.length > 1800) {
      setError("Description cannot exceed 1800 characters.");
    } else {
      setError("");
    }
  };

  const handleDescriptionChangeTwo = (e) => {
    const value = e.target.value;
    setDescription2(value);

    if (value.length < 60) {
      setErrorTwo("Description must be at least 60 characters.");
    } else if (value.length > 100) {
      setErrorTwo("Description cannot exceed 100 characters.");
    } else {
      setErrorTwo("");
    }
  };

  const handleAddAddon = () => {
    // Check if Query Page is selected
    if (addquery) {
      toast.error("You cannot add addons with Query Page");
      return;
    }
    setAddons([
      ...addons,
      { addon_name: "", price: "", kidprice: "", image: "" },
    ]);
  };

  const handleQueryPageChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked && addons.length > 1) {
      toast.error("You cannot enable Query Page while having addons");
      return;
    }
    setAddquery(isChecked);
    // If Query Page is enabled, reset addons to initial state
    if (isChecked) {
      setAddons([{ addon_name: "", price: "", kidprice: "", image: "" }]);
    }
  };

  const handleRemoveAddon = (index) => {
    setAddons(addons.filter((_, i) => i !== index));
  };

  const handleAddonChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddons = [...addons];
    updatedAddons[index][name] = value;
    setAddons(updatedAddons);
  };

  const handleChangeAddonImage = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedAddons = [...addons];
      updatedAddons[index].image = file;
      updatedAddons[index].imagePreview = URL.createObjectURL(file);
      setAddons(updatedAddons);
    }
  };

  const handleRemoveAddonImage = (index) => {
    const updatedAddons = [...addons];
    URL.revokeObjectURL(updatedAddons[index].imagePreview); // Clean up URL object
    updatedAddons[index].image = "";
    updatedAddons[index].imagePreview = "";
    setAddons(updatedAddons);
  };

  const handleAddDetail = () => {
    setMoreDetails([...moredetails, { detailname: "", detailinfo: [""] }]);
  };

  const handleRemoveDetail = (index) => {
    setMoreDetails(moredetails.filter((_, i) => i !== index));
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...moredetails];
    if (field === "detailinfo") {
      // If the value is a string (from textarea), split it into array
      // If it's already an array, keep it as is
      updatedDetails[index][field] = Array.isArray(value) ? value : value.split("\n").filter(item => item.trim());
    } else {
      updatedDetails[index][field] = value;
    }
    setMoreDetails(updatedDetails);
  };

  // Modified onSubmitHandler function for Add.jsx
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Basic validation
      if (!token) {
        toast.error("Authentication token is missing");
        setLoading(false);
        return;
      }

      if (image.length !== 4) {
        setImageError("You must upload exactly 4 images.");
        setLoading(false);
        return;
      }

      if (!name || !category || category === "Select Category") {
        toast.error("Name and category are required");
        setLoading(false);
        return;
      }

      // Create FormData
      const formData = new FormData();

      // Append basic fields
      formData.append("name", name.trim());
      formData.append("description", description.trim());
      formData.append("description2", description2.trim());
      formData.append("category", category);
      formData.append("price", price || 0);
      formData.append("kidprice", kidprice || 0);
      formData.append("popular", popular);
      formData.append("mostbooked", mostBooked);
      formData.append("pickup", pickup);
      formData.append("addquery", addquery);
      formData.append("expectation", expectations.trim());
      formData.append("moredetails", JSON.stringify(moredetails));

      // Append images
      image.forEach((img, index) => {
        formData.append("image", img);
      });

      // Filter and process addons
      const validAddons = addons.filter(
        (addon) =>
          addon.addon_name.trim() !== "" &&
          (addon.price !== "" || addon.kidprice !== "")
      );

      // Append addons as JSON string
      formData.append("addons", JSON.stringify(validAddons));

      // Append addon images
      validAddons.forEach((addon, index) => {
        if (addon.image) {
          formData.append(`addon_image_${index}`, addon.image);
        }
      });

      // Log formData contents for debugging
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      // Make API request
      const response = await axios.post(
        `${backend_url}/api/product/create`,
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setName("");
        setDescription("");
        setDescription2("");
        setPrice("");
        setKidPrice("");
        setCategory("Select Category");
        setPopular(false);
        setMostBooked(false);
        setPickup(false);
        setAddquery(false);
        setExpectations("");
        setAddons([{ addon_name: "", price: "", kidprice: "", image: "" }]);
        setImage([]);
        setMoreDetails([{ detailname: "", detailinfo: [""] }]);
      } else {
        throw new Error(response.data.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to create product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2 sm:px-8 sm:mt-14 pb-16 xxs:px-9 xxs:mt-10 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-lg">Loading...</div>
        </div>
      )}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-y-3 medium-14 lg:w-[777px]"
      >
        <div className="w-full">
          <h5 className="h5">Product Name</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Write here..."
            required
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <h5 className="h5">Card description</h5>
          <textarea
            onChange={handleDescriptionChangeTwo}
            value={description2}
            rows={3}
            placeholder="Write here..."
            required
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
          <div className="text-sm text-red-500 mt-1">{errortwo}</div>
          <div className="text-sm text-gray-500 mt-1">
            Characters: {description2.length}/100
          </div>
        </div>
        <div className="w-full">
          <h5 className="h5">Brief description</h5>
          <textarea
            onChange={handleDescriptionChange}
            value={description}
            rows={5}
            placeholder="Write here..."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
          <div className="text-sm text-red-500 mt-1">{error}</div>
          <div className="text-sm text-gray-500 mt-1">
            Characters: {description.length}/1800
          </div>
        </div>
        
        {/* Expectations Section */}
        <div className="w-full">
          <h5 className="h5">Highlights</h5>
          <textarea
            onChange={(e) => setExpectations(e.target.value)}
            value={expectations}
            placeholder="Use full stop '.' only when to start next Highlight"
            rows={3}
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>

        <div className="flex items-end gap-x-6">
          <div>
            <h5 className="h5">Categories And Images</h5>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-2 sm:w-full text-gray-30"
            >
              <option value="Select Category" disabled>
                Select Category
              </option>
              <option value="Theme Park">Theme Park</option>
              <option value="Water Park">Water Park</option>
              <option value="Museums">Museums</option>
              <option value="Parks & Gardens">Parks & Gardens</option>
              <option value="Zoo & Aquariums">Zoo & Aquariums</option>
              <option value="Observation Deck">Observation Deck</option>
              <option value="Events & Shows">Events & Shows</option>
              <option value="Tours">Tours</option>
              <option value="Cruises">Cruises</option>
              <option value="Water Activities">Water Activities</option>
              <option value="Outdoor Activities">Outdoor Activities</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-x-2">
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={upload_icon}
                alt="Upload Image"
                className="w-14 h-14 aspect-square object-cover ring-1 ring-slate-900/5 bg-white rounded-lg"
              />
              <input
                type="file"
                onChange={handleChangeImage}
                name="image"
                id="image"
                hidden
                multiple
              />
            </label>
            {imageError && (
              <div className="text-sm text-red-500 mt-1">{imageError}</div>
            )}
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          {image.length}/4 Images uploaded
        </div>
        <div className="flex flex-wrap mt-2">
          {image.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="w-14 h-14 aspect-square object-cover ring-1 ring-slate-900/5 bg-white rounded-lg mr-2"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              >
                <TbTrash size={12} />
              </button>
            </div>
          ))}
        </div>
        <h5 className="h5">Show-Case Pricing</h5>
        <div className="flex items-end gap-x-6">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Price"
            min={0}
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white w-28"
          />
        </div>
        {/* query pager */}
        <div className="w-full mt-5">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={addquery}
              onChange={handleQueryPageChange}
              className="mr-2"
            />
            Redirect To Query Page {"( Can not add addons with this )"}
          </label>
        </div>

        {/* Addons Section */}
        <div className="w-full mt-5">
          <h5 className="h5 mb-4">Addons</h5>
          {!addquery &&
            addons.map((addon, index) => (
              <div key={index} className="-space-y-3">
                <div>
                  <input
                    type="text"
                    name="addon_name"
                    value={addon.addon_name}
                    onChange={(e) => handleAddonChange(e, index)}
                    placeholder="Name"
                    className="px-3 py-2 border rounded w-full"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    name="price"
                    value={addon.price}
                    onChange={(e) => handleAddonChange(e, index)}
                    placeholder="Price"
                    className="px-3 py-2 border rounded w-32"
                  />
                  <div className="relative">
                    <label
                      htmlFor={`addon_image_${index}`}
                      className="cursor-pointer mx-16"
                    >
                      {addon.imagePreview ? (
                        <div className="relative">
                          <img
                            src={addon.imagePreview}
                            alt="Addon preview"
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveAddonImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            <TbTrash size={12} />
                          </button>
                        </div>
                      ) : (
                        <img
                          src={upload_icon}
                          alt="Upload icon"
                          className="w-14 h-14"
                        />
                      )}
                      <input
                        type="file"
                        id={`addon_image_${index}`}
                        onChange={(e) => handleChangeAddonImage(e, index)}
                        hidden
                        accept="image/*"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAddon(index)}
                    className="text-white bg-red-500 p-1 rounded-full font-bold"
                  >
                    <TbTrash />
                  </button>
                </div>
              </div>
            ))}
          {!addquery && (
            <button
              type="button"
              onClick={handleAddAddon}
              className="flex items-center space-x-2 text-secondary"
            >
              <FaPlus />
              <span>Add another addon</span>
            </button>
          )}
        </div>

        {/* more details */}
        <div className="w-full mt-5">
          <h5 className="h5">More Details</h5>
          {moredetails.map((detail, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Detail Name"
                value={detail.detailname}
                onChange={(e) =>
                  handleDetailChange(index, "detailname", e.target.value)
                }
                className="px-3 py-2 border rounded w-full"
              />
              <textarea
                placeholder="Detail Info ( use new lines only for bullet points )"
                value={detail.detailinfo.join("\n")}
                onChange={(e) =>
                  handleDetailChange(index, "detailinfo", e.target.value)
                }
                className="px-3 py-2 border rounded w-full mt-2"
                rows={4}
              />
              <button
                type="button"
                onClick={() => handleRemoveDetail(index)}
                className="text-red-500 mt-2"
              >
                Remove Detail
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDetail}
            className="flex items-center space-x-2 text-secondary"
          >
            <FaPlus />
            <span>Add another detail</span>
          </button>
        </div>

        {/* Other Fields */}
        <div className="flex space-x-3 mt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={pickup}
              onChange={(e) => setPickup(e.target.checked)}
              className="mr-2"
            />
            Pickup
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={mostBooked}
              onChange={(e) => setMostBooked(e.target.checked)}
              className="mr-2"
            />
            Most Booked
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={popular}
              onChange={(e) => setPopular(e.target.checked)}
              className="mr-2"
            />
            Popular
          </label>
        </div>
        {/* Submit Button */}
        <button type="submit" className="mt-6 btn-dark py-2 px-4 rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
