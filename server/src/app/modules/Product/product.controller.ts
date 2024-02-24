// controllers/product.controller.ts
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductProduct } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductProduct.createProduct(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductProduct.updateProduct(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductProduct.deleteProduct(id);

  sendResponse(res, {
    statusCode: httpStatus.NO_CONTENT,
    success: true,
    message: 'Product is deleted successfully',
    data: null,
  });
});

const findProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductProduct.findProductById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductProduct.getAllProducts(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const ProductController = {
  findProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
