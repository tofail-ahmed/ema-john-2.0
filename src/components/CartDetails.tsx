/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";

const CartDetails = ({ product }: any) => {
  return (
    <div className="flex justify-center items-center space-x-10 border border-gray-300 lg:w-fit w-full px-3 py-1  rounded-sm h-24 ">
      <div>
        <img src={product.img} alt="" className="size-20" />
      </div>
      <div>
        <h3 className="text-lg font-bold truncate  mb-2">{product.name}</h3>

        <p className="text-lg font-bold">${product.price}</p>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-red-200 text-white p-2 rounded-full w-full"
        >
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
