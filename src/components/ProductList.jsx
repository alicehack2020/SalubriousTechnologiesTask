import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  async function getAllProducts() {
    let data = await fetch("https://dummyjson.com/products");
    let { products } = await data.json();
    setProductList(products);
  }

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-6">
          <h1 className="text-center text-lg mt-8">
            <span className="">Count : </span>
            {count}
          </h1>
          <button
            onClick={() => incrementCount()}
            className="bg-green-400 py-1 mt-8 text-sm px-2 rounded-md"
          >
            Increment Count
          </button>
        </div>
        <button
          onClick={() => navigate(`/addProduct`)}
          className="bg-green-400 py-1 mt-8 text-sm px-2 rounded-md"
        >
          Add New Product
        </button>
      </div>
      <div className="mt-8">
        {productList.length === 0 && <h1>Loading...</h1>}
        <ul className="py-4 divide-y divide-gray-300">
          {
            productList.map((product, index) => {
              return <ProductCard key={index} index={index} title={product.title} id={product.id}/> 
            }) 
          }
        </ul>
      </div>
    </>
  );
};

export default ProductList;