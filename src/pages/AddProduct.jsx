import Form from "../components/Form";
export function AddProduct() {
  return (
    <>
      <h1>Product Detail Page</h1>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="max-w-3xl py-6 border mx-auto">
          <div className="py-5 space-y-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Add Product Detail</h1>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
