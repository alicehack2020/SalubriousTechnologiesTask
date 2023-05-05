import {useState } from "react";
import MyInput from "../components/MyInput";
import { errorsMessage, successMessage } from "../helpers/helper";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [],
    });

   const [click,setClick]=useState(false)

    const handleSubmit = (e) => {
       
        e.preventDefault();
        for (const field in formData) {
            if (typeof formData[field] === "string" && formData[field].trim() === "") {
                errorsMessage(`Please enter a ${field}`)
              return;
            }
          }
        const stringForm = JSON.stringify(formData);
        setClick(true)
        fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: stringForm,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                successMessage("Product Added Sucessfully")
                setClick(false)
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    discountPercentage: "",
                    rating: "",
                    stock: "",
                    brand: "",
                    category: "",
                    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                    images: [],   
                })
            }   
        );
    }

    
  

  const handleFormData = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
}

  return (
    <>
      <form className="space-y-1" onSubmit={(e)=>handleSubmit(e)}>
        <MyInput
          label={"Title"}
          value={formData.name}
          type={"text"}
          id={"title"}
          name={"name"}
          onChange={handleFormData}
          placeholder={"Enter Name"}
        />
        <MyInput
          label={"Description"}
          value={formData.description}
          type={"text"}
          id={"description"}
          name={"description"}
          onChange={handleFormData}
          placeholder={"Enter Description"}
        />
        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Price"}
          value={formData.price}
          type={"number"}
          id={"price"}
          name={"price"}
          onChange={handleFormData}
          placeholder={"Enter Price"}
        />
        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Discount Percentage"}
          value={formData.discountPercentage}
          type={"number"}
          id={"discountPercentage"}
          name={"discountPercentage"}
          onChange={handleFormData}
          placeholder={"Enter Discount Percentage"}
        />

        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Rating"}
          value={formData.rating}
          type={"number"}
          id={"rating"}
          name={"rating"}
          onChange={handleFormData}
          placeholder={"Enter Rating"}
        />

        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Stock"}
          value={formData.stock}
          type={"number"}
          id={"stock"}
          name={"stock"}
          onChange={handleFormData}
          placeholder={"Enter Stock"}
        />

        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Brand"}
          value={formData.brand}
          type={"text"}
          id={"brand"}
          name={"brand"}
          onChange={handleFormData}
          placeholder={"Enter Brand"}
        />

        <MyInput
          classNames="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
          label={"Category"}
          value={formData.category}
          type={"text"}
          id={"category"}
          name={"category"}
          onChange={handleFormData}
          placeholder={"Enter Category"}
        />
        <ToastContainer />
        <div className="w-full flex justify-center">
           <button  
            disabled={click}              
            type="submit"
            className={`bg-blue-300
                  px-[90px] mt-4 py-1.5 rounded-md`}>
             {
               click==true?"Loading":"Submit"             
             }       
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
