import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// controller function to create product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      description2,
      category,
      price,
      kidprice,
      popular,
      mostbooked,
      pickup,
      addquery,
      expectation,
      addons,
    } = req.body;

    // Upload main product images
    const mainImages = req.files.filter((file) => file.fieldname === "image");
    const imageUrls = await Promise.all(
      mainImages.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Parse and process addons
    let processedAddons = [];
    if (addons) {
      const parsedAddons = Array.isArray(addons) ? addons : JSON.parse(addons);
      for (let i = 0; i < parsedAddons.length; i++) {
        const addon = parsedAddons[i];
        const addonImage = req.files.find(
          (file) => file.fieldname === `addon_image_${i}`
        );
        let addonImageUrl = "";
        if (addonImage) {
          const result = await cloudinary.uploader.upload(addonImage.path, {
            resource_type: "image",
          });
          addonImageUrl = result.secure_url;
        }
        processedAddons.push({
          addon_name: addon.addon_name,
          price: Number(addon.price),
          kidprice: Number(addon.kidprice),
          image: addonImageUrl,
        });
      }
    }

    // Process expectations
    const expectationsArray = expectation
      ? expectation.split(".").filter((e) => e.trim())
      : [];

    // Create new product
    const product = new productModel({
      name,
      description,
      description2,
      category,
      price: Number(price),
      kidprice: Number(kidprice),
      popular: popular === "true",
      mostbooked: mostbooked === "true",
      pickup: pickup === "true",
      addquery: addquery === "true",
      expectations: expectationsArray,
      addons: processedAddons,
      image: imageUrls,
      date: Date.now(),
    });

    await product.save();
    res.status(200).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error("Error in createProduct:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error creating product",
    });
  }
};

// controller function to delete a product
const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// controller function to list all products
const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// controller function to fetch a single product's details
const getProductbyId = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// controller function to update product price
const updateProductPrice = async (req, res) => {
  try {
    const { id, price, kidprice } = req.body; // Include kidprice
    const updateData = {};

    if (price) updateData.price = Number(price); // Update adult price
    if (kidprice) updateData.kidprice = Number(kidprice); // Update kid price

    const product = await productModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Price updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update addon price
const updateAddonPrice = async (req, res) => {
  try {
    const { productId, addonId, price, kidprice } = req.body;
    
    const product = await productModel.findById(productId);
    
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const addonIndex = product.addons.findIndex(addon => addon._id.toString() === addonId);
    
    if (addonIndex === -1) {
      return res.status(404).json({ success: false, message: "Addon not found" });
    }

    // Update price or kidprice based on input
    if (price !== undefined) {
      product.addons[addonIndex].price = Number(price);
    }
    if (kidprice !== undefined) {
      product.addons[addonIndex].kidprice = Number(kidprice);
    }

    await product.save();

    res.json({ success: true, message: "Addon price updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to delete an addon
const deleteAddon = async (req, res) => {
  try {
    const { productId, addonId } = req.body;
    
    const product = await productModel.findById(productId);
    
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    product.addons = product.addons.filter(addon => addon._id.toString() !== addonId);

    await product.save();

    res.json({ success: true, message: "Addon deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductbyId,
  updateProductPrice,
  updateAddonPrice,
  deleteAddon
};
