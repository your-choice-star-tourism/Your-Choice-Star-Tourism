import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Controller function to create product
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
      moredetails,
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

    // Process moredetails
    let processedMoreDetails = [];
    if (moredetails) {
      const parsedMoreDetails = Array.isArray(moredetails)
        ? moredetails
        : JSON.parse(moredetails);

      processedMoreDetails = parsedMoreDetails.map((detail) => ({
        detailname: detail.detailname,
        detailinfo: Array.isArray(detail.detailinfo)
          ? detail.detailinfo
          : typeof detail.detailinfo === 'string'
            ? detail.detailinfo.split("\n").filter(item => item.trim())
            : []
      }));
    }

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
      moredetails: processedMoreDetails,
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

// Controller function to delete a product
const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function to list all products
const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function to fetch a single product's details
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

// Controller function for updating product name and price
const updateProduct = async (req, res) => {
  try {
    const { id, name, price } = req.body;
    const updateData = {};

    // Handle either name or price update
    if (name !== undefined) updateData.name = name;
    if (price !== undefined) updateData.price = Number(price);

    const product = await productModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      message: `Product updated successfully`,
      product
    });
  } catch (error) {
    console.error("Error in updateProduct:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error updating product"
    });
  }
};

// Controller function for updating addon name and price
const updateAddon = async (req, res) => {
  try {
    const { productId, addonId, addon_name, price } = req.body;
    
    const product = await productModel.findById(productId);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    const addonIndex = product.addons.findIndex(
      addon => addon._id.toString() === addonId
    );
    
    if (addonIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Addon not found"
      });
    }

    // Update either addon name or price
    if (addon_name !== undefined) {
      product.addons[addonIndex].addon_name = addon_name;
    }
    if (price !== undefined) {
      product.addons[addonIndex].price = Number(price);
    }

    await product.save();

    res.json({
      success: true,
      message: "Addon updated successfully",
      addon: product.addons[addonIndex]
    });
  } catch (error) {
    console.error("Error in updateAddon:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error updating addon"
    });
  }
};

// Controller function to delete an addon
const deleteAddon = async (req, res) => {
  try {
    const { productId, addonId } = req.body;
    
    const product = await productModel.findById(productId);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    product.addons = product.addons.filter(
      addon => addon._id.toString() !== addonId
    );

    await product.save();

    res.json({
      success: true,
      message: "Addon deleted successfully"
    });
  } catch (error) {
    console.error("Error in deleteAddon:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error deleting addon"
    });
  }
};

const updateProductDetails = async (req, res) => {
  try {
    const {
      id,
      description,
      description2,
      expectations,
      moredetails
    } = req.body;

    // Find and update the product
    const product = await productModel.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // Update fields if they are provided
    if (description !== undefined) product.description = description;
    if (description2 !== undefined) product.description2 = description2;
    if (expectations !== undefined) {
      // Split expectations by period and filter empty strings
      product.expectations = expectations.split('.').filter(exp => exp.trim());
    }
    if (moredetails !== undefined) {
      product.moredetails = moredetails.map(detail => ({
        detailname: detail.detailname,
        detailinfo: Array.isArray(detail.detailinfo) 
          ? detail.detailinfo 
          : detail.detailinfo.split('\n').filter(item => item.trim())
      }));
    }

    await product.save();

    res.json({
      success: true,
      message: "Product details updated successfully",
      product
    });
  } catch (error) {
    console.error("Error in updateProductDetails:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error updating product details"
    });
  }
};

export {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductbyId,
  updateProduct,
  updateAddon,
  deleteAddon,
  updateProductDetails
};