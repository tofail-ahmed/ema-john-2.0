/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useGetProductsQuery } from "../redux/features/api/productApi";

const Products = () => {
  const [showModal,setShowModal]=useState(false)
  const {data}=useGetProductsQuery("")
  // console.log(data?.data);
  return (
    <div className="container">
     <div className="flex justify-between items-center">
     <h1 className="text-4xl font-bold my-10">All Products</h1>
     <button onClick={()=>setShowModal(true)} className="p-2 text-xl font-bold rounded-md bg-yellow-700">Add Product</button>
     </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((product:any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {showModal&& <ProductModal></ProductModal>}
    </div>
  );
};

export default Products;
