import mongoose, { Schema } from 'mongoose';
import { IProduct } from './product.interface';

export const ProductSchema: Schema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  seller: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  ratings: { type: Number, required: true },
  ratingsCount: { type: Number, required: true },
  img: { type: String, required: true },
  shipping: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
