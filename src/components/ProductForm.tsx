/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../redux/features/api/productApi";


const ProductForm = ({ onClose, product }: any) => {
  const [createProduct,{data,isLoading}] = useCreateProductMutation(); //returns array
//   const [updateProduct] = useUpdateProductMutation(); //returns array
  const { register, handleSubmit, reset } = useForm<any>();
  if (isLoading) {
    return <div>Loading...</div>;
  }
 
  const onSubmit = (data) => {
    const modifiedData = {
      ...data,
      stock: parseInt(data.stock),
      price: parseInt(data.price),
      ratings: parseInt(data.ratings),
      ratingsCount: parseInt(data.ratingsCount),
      shipping: parseInt(data.shipping),
      quantity: parseInt(data.quantity),
    };
    // console.log(modifiedData)
    createProduct(modifiedData)
//     if (isUpdating) {
//       updateProduct({
//         id: product._id,
//         body: modifiedData,
//       });
//     } else {
//       createProduct(modifiedData);
//     }
    reset();
    onClose();
  };

  return (
    <>
      <div className=" flex items-center py-8 px-6">
        <div className="w-full">
          <h2 className="text-center text-primary font-bold text-2xl uppercase mb-10">
            Add Product
          </h2>
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-x-6">
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Name
                  </label>
                  <input
                    defaultValue={product?.name}
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Put in your fullname."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Category
                  </label>
                  <input
                    defaultValue={product?.category}
                    {...register("category", { required: true })}
                    type="text"
                    placeholder="Put in your Category"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Seller
                  </label>
                  <input
                    defaultValue={product?.seller}
                    {...register("seller", { required: true })}
                    type="text"
                    placeholder="Put in your Seller."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    defaultValue={product?.price}
                    {...register("price", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Stock
                  </label>
                  <input
                    defaultValue={product?.stock}
                    {...register("stock", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Ratings
                  </label>
                  <input
                    defaultValue={product?.ratings}
                    {...register("ratings", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Ratings Count
                  </label>
                  <input
                    defaultValue={product?.ratingsCount}
                    {...register("ratingsCount", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Image
                  </label>
                  <input
                    defaultValue={product?.img}
                    {...register("img", { required: true })}
                    type="text"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Shipping Charge
                  </label>
                  <input
                    defaultValue={product?.shipping}
                    {...register("shipping", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Quantity
                  </label>
                  <input
                    defaultValue={product?.quantity}
                    {...register("quantity", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
              </div>

              <button className="block w-full bg-primary text-white font-bold p-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;