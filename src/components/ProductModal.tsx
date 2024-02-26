import { X } from "lucide-react";
import ProductForm from "./ProductForm";
import { useGetSingleProductQuery } from "../redux/features/api/productApi";


/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductModal = ({onClose,productId,isUpdating}) => {
  const { data, isLoading } = useGetSingleProductQuery(productId);
  console.log(productId);
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl  overflow-hidden">
          <X
            onClick={onClose}
            width={24}
            height={24}
            className="text-red-600 absolute top-10 right-10 cursor-pointer"
          />
          <ProductForm
            onClose={onClose}
            product={data?.data}
            isUpdating={isUpdating}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;