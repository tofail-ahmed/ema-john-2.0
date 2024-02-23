import CartDetails from "../components/CartDetails";
import OrderSummary from "../components/OrderSummary";
import getAllProducts from "../data/products";

const Cart = () => {
  const products = getAllProducts();
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          <CartDetails product={products[0]} />
          <CartDetails product={products[0]} />
          <CartDetails product={products[0]} />
          <CartDetails product={products[0]} />
          <CartDetails product={products[0]} />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
