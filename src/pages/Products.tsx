import ProductCard from "../components/ProductCard";
import getAllProducts from "../data/products";

const Products = () => {
  const products = getAllProducts();
  console.log(products);
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
