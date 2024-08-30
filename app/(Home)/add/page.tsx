import ProductForm from "@/components/ProductForm";

const AddProduct = () => {
  return (
    <section className="md:p-6 p-4 flex flex-col items-center justify-center gap-6">
      <h2 className="text-lg font-semibold">Add New Product</h2>

      <ProductForm type="add" />
    </section>
  );
};

export default AddProduct;
