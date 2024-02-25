/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../components/ProductCard";
import { useGetProductsQuery } from "../redux/features/api/productApi";

const Products = () => {
  const {data}=useGetProductsQuery("")
  // console.log(data?.data);
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product:any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
