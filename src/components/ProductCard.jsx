import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ index, title, id }) => {
    const navigate = useNavigate();
  return (
    <>
       <li className="py-4 flex justify-between py-6 gap-4" key={index}>
              <div className="flex gap-8">
                <h1 className="text-gray-600">{index + 1}</h1>
                <h1>{title}</h1>
              </div>
              <button
                onClick={() => navigate(`/productDetail/${id}`)}
                className="bg-blue-400 py-1 -mt-0.5 text-sm px-2 rounded-md"
              >
                View Detail
              </button>
            </li>    
    </>
  )
}

ProductCard.propTypes = {
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.func.isRequired
  };

export default ProductCard