import { Product } from "../models/product.model.js";

export const listProductsService = async () => {
  const products = await Product.find();
  return products;
};

export const listProductsServicePage = async (page, limit) => {
  page = page < 1 ? 1 : parseInt(page);
  limit = limit > 50 ? 50 : parseInt(limit);

  const skip = (page - 1) * limit;

  const [products, totalProducts] = await Promise.all([
    Product.find().sort({ _id: 1 }).skip(skip).limit(limit).lean(),
    Product.countDocuments(),
  ]);

  const totalPages = Math.ceil(totalProducts / limit);

  return {
    products,
    pagination: {
      currentPage: page,
      totalPages,
      totalProducts,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
};


// Create a new product
export const createProductService = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

export const searchProductsService = async (query) => {
  const products = await Product.find({
    $text: { $search: query }
  });
  return products;
};