import { listProductsService ,createProductService , listProductsServicePage, searchProductsService} from "../service/product.services.js";

export const listProductsController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { products, pagination } = await listProductsServicePage(page, limit);

    res.status(200).json({
      success: true,
      data: products,
      pagination,
    });
  } catch (error) {
    next(error);
  }
};



export const createProductController = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

export const searchProductsController = async (req, res, next) => {
  try {
    const { q } = req.query;
    const products = await searchProductsService(q);

    res.status(200).json({
      success: true,
      results: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};