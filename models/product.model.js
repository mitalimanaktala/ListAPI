import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"]
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"]
    },

    inStock: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// text search index
productSchema.index({
  name: "text",
  category: "text"
});

export const Product = mongoose.model("Product", productSchema);