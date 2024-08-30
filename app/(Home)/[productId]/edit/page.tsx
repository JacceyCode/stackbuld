import ProductForm from "@/components/ProductForm";

const EditProduct = ({
  params: { productId },
}: {
  params: { productId: string };
}) => {

  return (
    <section className="md:p-6 p-4 flex flex-col items-center justify-center gap-6">
      <h2 className="text-lg font-semibold">Edit Product</h2>

      <ProductForm type="edit" productId={+productId} />
    </section>
  );
};

export default EditProduct;
