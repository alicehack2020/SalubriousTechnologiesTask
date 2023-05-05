import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getProductDetail = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {product?.thumbnail ? (
            <img
              loading="lazy"
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full h-64 object-cover"
            />
          ) : (
            <h3>Loading...</h3>
          )}

          <div className="flex mt-4">
            {product?.images?.map((image, index) => (
              <img
                loading="lazy"
                key={index}
                src={image}
                alt={product.title}
                className="w-20 h-20 object-cover mr-4"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center my-4">
            <span className="text-lg font-bold">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="text-sm ml-2 line-through text-gray-500">
                ${(product.price * (100 - product.discountPercentage)) / 100}
              </span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">{product.rating}</span>
            <span className="text-gray-500 ml-2">
              {product.rating === 1 ? "star" : "stars"}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Brand:</span>
            <span className="text-gray-800 font-bold">{product.brand}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Category:</span>
            <span className="text-gray-800 font-bold">{product.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Stock:</span>
            <span className="text-gray-800 font-bold">{product.stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
