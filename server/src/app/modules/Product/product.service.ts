import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';
import Product from './product.model';

const createProduct = async (product: Record<string, unknown>) => {
  return await Product.create(product);
};

const findProductById = async (productId: string) => {
  return await Product.findById(productId);
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    // .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const metaData = await productQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateProduct = async (
  productId: string,
  product: Record<string, unknown>,
) => {
  return await Product.findByIdAndUpdate(productId, product, {
    new: true,
    runValidators: true,
  });
};

const deleteProduct = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};

export const ProductProduct = {
  findProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
